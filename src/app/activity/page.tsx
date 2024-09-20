"use client";

// import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Activity() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const [activityList, setActivityList] = useState([]);

  // 更新 params
  // const updateParams = (id: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set("id", id);
  //   window.history.pushState(null, "", "?" + params.toString());
  // };

  const toEventPage = () => {
    const eventId = Math.random().toString(36).substr(2, 9);
    const key = Math.floor(Math.random() * 10);
    // window.location.href = `/activity/${id}`; 會刷新頁面
    router.push(`/activity/${eventId}?query=${key}`);
  };

  const fetchActivityList = async () => {
    const res = await fetch("/api/activity").then((res) => res.json());
    if (res.status === 200) {
      setActivityList(res.data);
    }
  };

  useEffect(() => {
    fetchActivityList();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h6>Activity Page</h6>
      <ul>
        {activityList.map((item: any) => (
          <li
            key={item.activityId}
            className="flex flex-col items-center cursor-pointer  border-2 border-gray-300 p-3 mt-1"
            onClick={toEventPage}
          >
            <h3>{item.activityTitle}</h3>
            {item?.phoneImage && (
              <Image
                src={item.phoneImage}
                alt="image"
                width={300}
                height={150}
              />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
