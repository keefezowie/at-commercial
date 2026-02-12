import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

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

  return NextResponse.json(
    {
      status: "accepted",
      inquiry_id: `contact_${crypto.randomUUID()}`,
      message: "Inquiry received. Our team will follow up via email."
    },
    { status: 202 }
  );
}

