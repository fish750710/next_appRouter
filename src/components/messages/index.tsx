"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Messages() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("messages");

  return (
    <div className="bg-violet-500 w-full min-h-48 p-10">
      <div className="flex mb-4">
        <button
          className={`mr-4 text-white ${activeTab === "messages" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("messages")}
        >
          消息
        </button>
        <button
          className={`text-white ${activeTab === "announcements" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("announcements")}
        >
          公告
        </button>
      </div>
      <h5 className="text-lg font-semibold text-white">
        {activeTab === "messages" ? "我的消息" : "公告"}
      </h5>
      {/* 這裡可以根據 activeTab 顯示不同的內容 */}
    </div>
  );
}
