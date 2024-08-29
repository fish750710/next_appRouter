"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuList = [
  { title: "關於我們", path: "/about" },
  { title: "常見問題", path: "/faq" },
];
const Menu = () => {
  const pathname = usePathname();

  return (
    <aside className="p-4">
      {menuList.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ${
            item.path === pathname ? "bg-yellow-300" : ""
          }`}
        >
          {item.title}
        </Link>
      ))}
    </aside>
  );
};

export default Menu;
