"use client";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();

  return (
    <div className="bg-violet-500 w-full h-48 p-10">
      <h5 className="text-lg font-semibold">設置</h5>
    </div>
  );
}
