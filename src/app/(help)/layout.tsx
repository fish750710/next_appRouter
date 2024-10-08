// help 群組管理，路由不會有 /help/xxx

import type { Metadata } from "next";
import Menu from "@/components/Help/Menu";

export const metadata: Metadata = {
  title: "幫助中心",
};

export default function helpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex mt-10">
      <Menu />
      <h1 className="text-yellow-500">幫助中心</h1>
      <section>{children}</section>
    </div>
  );
}
