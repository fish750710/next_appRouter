import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "活動",
};

export default function mineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
