import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "marketing-api",
    timestamp: new Date().toISOString()
  });
}

