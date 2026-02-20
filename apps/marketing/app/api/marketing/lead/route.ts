import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";
import type { MarketingLeadResponse } from "@/lib/types";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

type LeadPayload = z.infer<typeof leadSchema>;

const parseVolumeHint = (monthlyVolume: string): number => {
  const value = Number(monthlyVolume.replace(/[^\d]/g, ""));
  if (Number.isFinite(value)) {
    return value;
  }
  return 0;
};

const classifyLead = (payload: LeadPayload) => {
  const volume = parseVolumeHint(payload.monthly_volume);
  if (
    volume >= 5000 ||
    payload.use_case === "cad_workflow" ||
    payload.intent === "security_review"
  ) {
    return "enterprise" as const;
  }
  if (volume >= 1000 || payload.use_case === "mixed" || payload.intent === "pricing_discussion") {
    return "mid_market" as const;
  }
  return "nurture" as const;
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = leadSchema.safeParse(body);

  if (!result.success) {
    const payload: MarketingLeadResponse = {
      status: "rejected",
      message: "Lead request failed validation. Please review required fields."
    };
    return NextResponse.json(payload, { status: 400 });
  }

  const route = classifyLead(result.data);

  try {
    await resend.emails.send({
      from: "Transora Lead <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "sales@transora.example",
      subject: `New Lead: ${result.data.company} (${route})`,
      text: `
Name: ${result.data.full_name}
Email: ${result.data.email}
Company: ${result.data.company}
Role: ${result.data.role}
Use Case: ${result.data.use_case}
Monthly Volume: ${result.data.monthly_volume}
Intent: ${result.data.intent}
File Types: ${result.data.file_types.join(", ")}
Target Languages: ${result.data.target_languages.join(", ")}

Notes:
${result.data.notes}
      `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  const response: MarketingLeadResponse = {
    status: "accepted",
    lead_id: `lead_${crypto.randomUUID()}`,
    route,
    message:
      route === "enterprise"
        ? "Request accepted. Your team will receive enterprise evaluation follow-up shortly."
        : "Request accepted. We will follow up with next-step evaluation guidance."
  };

  return NextResponse.json(response, { status: 202 });
}
