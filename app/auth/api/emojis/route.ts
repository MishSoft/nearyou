import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://emoji-api.com/emojis?access_key=${process.env.NEXT_EMOJI_API_KEY}`
    );
    const data = await res.json();
    return NextResponse.json(data); // JSON client-side-ში
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch emojis" },
      { status: 500 }
    );
  }
}
