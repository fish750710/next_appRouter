"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Activity() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 更新 params
  // const updateParams = (id: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set("id", id);
  //   window.history.pushState(null, "", "?" + params.toString());
  // };

  const toEventPage = () => {
    const eventId = Math.random().toString(36).substr(2, 9);
    // window.location.href = `/activity/${id}`; 會刷新頁面
    router.push(`/activity/${eventId}`);
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h6>Activity Page</h6>
      <button
        onClick={toEventPage}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5"
      >
        Go to Dynamic Route
      </button>
    </main>
  );
}
