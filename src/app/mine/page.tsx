"use client";
import { useRouter } from "next/navigation";

export default function Mine() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-12 rounded-lg shadow-md">
      <button
        onClick={() => router.back()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {"<"}
      </button>
      <h5 className="text-lg font-semibold">我的 Page</h5>
    </div>
  );
}
