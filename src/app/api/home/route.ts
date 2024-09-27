import { NextRequest, NextResponse } from "next/server";

const url = "https://jsonplaceholder.typicode.com/posts";

export const GET = async () => {
  try {
    const res = await fetch(url);
    const posts = await res.json();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message });
  }
};

export const POST = async (req: NextRequest) => {
  const { userId, title, body } = await req.json();
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, title, body }),
    });
    const posts = await res.json();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message });
  }
};
