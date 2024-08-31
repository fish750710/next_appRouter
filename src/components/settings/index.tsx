"use client";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();

  const settingsList = [
    { name: "個人資料", path: "/profile" },
    { name: "安全設置", path: "/security" },
    { name: "通知設置", path: "/notifications" },
    { name: "隱私設置", path: "/privacy" },
  ];

  return (
    <div className="bg-violet-500 w-full min-h-48 p-10">
      <h5 className="text-lg font-semibold text-white mb-6">設置</h5>
      <ul className="space-y-4">
        {settingsList.map((item, index) => (
          <li key={index}>
            <button
              className="text-white hover:underline"
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
