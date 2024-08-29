import Link from "next/link";

const helpList = [
  { title: "關於我們", path: "/about" },
  { title: "常見問題", path: "/faq" },
];
const Footer = () => {
  return (
    <footer className="flex justify-center flex-col items-center">
      <div>
        {helpList.map((item, index) => (
          <Link className={`p-2 `} href={item.path} key={index} scroll={true}>
            {item.title}
          </Link>
        ))}
      </div>
      <p>版權所有©2024保留所有權</p>
    </footer>
  );
};

export default Footer;
