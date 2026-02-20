import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        status: "rejected",
        message: "Contact request failed validation. Please check your input."
      },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Transora Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "sales@transora.example",
      subject: `New Contact Inquiry from ${result.data.full_name}`,
      text: `
Name: ${result.data.full_name}
Email: ${result.data.email}
Company: ${result.data.company}
Intent: ${result.data.intent}

Message:
${result.data.message}
      `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    // We still return accepted to the user so they don't get stuck,
    // but we log the error for monitoring.
  }

  return NextResponse.json(
    {
      status: "accepted",
      inquiry_id: `contact_${crypto.randomUUID()}`,
      message: "Inquiry received. Our team will follow up via email."
    },
    { status: 202 }
  );
}

