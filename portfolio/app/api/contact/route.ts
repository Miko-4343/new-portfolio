import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;
  const valid =
    typeof name === "string" &&
    name.trim().length > 0 &&
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof message === "string" &&
    message.trim().length > 0 &&
    message.length <= 5000;

  if (!valid) return NextResponse.json({ ok: false }, { status: 400 });

  // TODO: deliver the message (Resend, Postmark, SMTP, a webhook…).
  // Until that's wired up, submissions only show in the server log.
  console.log("[contact]", { name, email, message });

  return NextResponse.json({ ok: true });
}
