"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// server fetch
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
export default function Home() {
  const [infoData, setInfoData] = useState<any>(null);
  const fetchUserInfo = async () => {
    const res = await fetch("/api/userInfo").then((res) => res.json());
    setInfoData(res);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="/deposit/" className="text-blue-500">
        Go to Deposit Page
      </Link>
      {infoData ? <p>{JSON.stringify(infoData)}</p> : <p>Loading...</p>}
    </main>
  );
}
