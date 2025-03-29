import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Google Apps Script URL (Replace this with your own)
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ message: "Registration Successful!" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
