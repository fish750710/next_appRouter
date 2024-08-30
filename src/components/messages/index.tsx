"use client";
import { useRouter } from "next/navigation";

export default function Messages() {
  const router = useRouter();

  return (
    <div className="bg-violet-500 w-full h-48 p-10">
      <h5 className="text-lg font-semibold">我的消息</h5>
    </div>
  );
}
