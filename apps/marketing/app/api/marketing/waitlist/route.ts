import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = waitlistSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        status: "rejected",
        message: "Waitlist payload is invalid."
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      status: "accepted",
      waitlist_id: `wait_${crypto.randomUUID()}`,
      message: "Request recorded. We will follow up with evaluation availability details."
    },
    { status: 202 }
  );
}

