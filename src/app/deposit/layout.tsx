import type { Metadata } from "next";

// TODO: 使用 slot 會有緩存問題，要刪除 .next
export const metadata: Metadata = {
  title: "充值",
};

export default function depositLayout({
  children,
  banner,
  card,
}: {
  children: React.ReactNode;
  banner: React.ReactNode;
  card: React.ReactNode;
}) {
  return (
    <section>
      {banner}
      {children}
      {card}
    </section>
  );
}
