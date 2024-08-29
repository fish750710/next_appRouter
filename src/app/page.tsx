"use client";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="/deposit/">Go to Deposit Page</Link>
    </main>
  );
}
