"use client";
import Link from "next/link";
import { useEffect } from "react";
import useStore from "@/store";

// TODO: nextjs app router server fetch
// export default async function serverHome() {
//   const infoData = await fetch("https://api.vercel.app/blog").then((res) =>
//     res.json()
//   );

//   return (
//     <main className="flex flex-col items-center justify-between p-24">
//       <p>{JSON.stringify(infoData)}</p>
//     </main>
//   );
// }

type userInfo = {
  author: string;
  category: string;
  content: string;
  date: string;
  id: number;
  title: string;
};

export default function Home() {
  const { loading, setLoading, infoData, setInfoData } = useStore();

  const fetchUserInfo = async () => {
    setLoading(true);
    const res: userInfo[] = await fetch("/api/home").then((res) => res.json());
    setInfoData(res);
    setLoading(false);
  };

  const postData = async () => {
    const paramData = {
      userId: 788,
      title: "test",
      body: "test body",
    };
    setLoading(true);
    const res: userInfo[] = await fetch("/api/home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paramData),
    }).then((res) => res.json());
    console.log(res, "post data");
    fetchUserInfo();
    setLoading(false);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="/deposit/" className="text-blue-500">
        Go to Deposit Page
      </Link>
      <button onClick={postData}>新增</button>
      {!loading && infoData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {infoData.map((item: userInfo) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 text-blue-500"
            >
              <h3 className="text-xl font-bold mb-2">ID: {item.id}</h3>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.date}</p>
              <p className="text-gray-800">{item.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
