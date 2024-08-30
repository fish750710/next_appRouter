"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Messages from "@/components/messages";
import Settings from "@/components/settings";

export default function Mine() {
  const router = useRouter();
  const [type, setType] = useState(0);

  return (
    <div>
      <div className="flex justify-between items-center p-12 rounded-lg shadow-md">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {"<"}
        </button>
        <div className="flex justify-center">
          <button
            onClick={() => setType(0)}
            className={`px-4 py-2 rounded ${
              type === 0 ? "bg-blue-500 text-white" : "text-blue-500"
            }`}
          >
            類型1
          </button>
          <button
            onClick={() => setType(1)}
            className={`ml-4 px-4 py-2 rounded ${
              type === 1 ? "bg-blue-500 text-white" : "text-blue-500"
            }`}
          >
            類型2
          </button>
        </div>
        <h5 className="text-lg font-semibold">我的 Page</h5>
      </div>
      <section>{type === 0 ? <Messages /> : <Settings />}</section>
    </div>
  );
}
