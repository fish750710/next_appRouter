"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
  { title: "首頁", path: "/" },
  { title: "活動", path: "/activity" },
  { title: "充值", path: "/deposit" },
  { title: "客服", path: "/service" },
  { title: "我的", path: "/mine" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center">
      {navList.map((item, index) => (
        <Link
          className={`p-2 ${pathname === item.path ? "text-yellow-600" : ""}`}
          href={item.path}
          key={index}
          scroll={true}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
