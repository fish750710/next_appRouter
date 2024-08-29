import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "充值卡",
};

export default function cardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="flex justify-center items-center space-x-4">
        <Link href="/deposit" className="text-blue-500 hover:text-blue-700">
          返回
        </Link>
        <Link
          href="/deposit/bigCard"
          className="text-blue-500 hover:text-blue-700"
        >
          bigCard
        </Link>
        <Link
          href="/deposit/smallCard"
          className="text-blue-500 hover:text-blue-700"
        >
          smallCard
        </Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
