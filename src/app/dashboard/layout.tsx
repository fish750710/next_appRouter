export default function dashboardLayout({
  children,
  header,
  menu,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  menu: React.ReactNode;
}) {
  return (
    <section>
      <div className="h-8 bg-slate-500">{header}</div>
      <div>
        <div>{children}</div>
        <div className="h-8 bg-yellow-500">{menu}</div>
      </div>
    </section>
  );
}
