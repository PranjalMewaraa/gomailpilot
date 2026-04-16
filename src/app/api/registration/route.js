import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, mobile, plan, domain, description } = body;

    if (!name || !email || !mobile || !plan || !domain) {
      return NextResponse.json(
        { error: "Name, email, mobile, plan, and domain are required." },
        { status: 400 }
      );
    }

    const apiUrl = process.env.BASEROW_API_URL;
    const apiToken = process.env.BASEROW_API_TOKEN;

    if (!apiUrl || !apiToken) {
      return NextResponse.json(
        { error: "Baserow configuration is missing." },
        { status: 500 }
      );
    }

    const baserowResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Token ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "Full Name": name,
        Email: email,
        Phone: mobile,
        Website: domain,
        "Selected Plan": plan,
        Description: description || "",
      }),
      cache: "no-store",
    });

    if (!baserowResponse.ok) {
      const errorText = await baserowResponse.text();

      return NextResponse.json(
        {
          error: "Baserow request failed.",
          details: errorText,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unexpected server error.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
