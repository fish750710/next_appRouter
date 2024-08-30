import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

// export async function GET(request: Request) {
//   const res = {
//     name: "Hans Wu",
//     age: 18,
//     vipLevel: 99,
//   };
//   return new Response(JSON.stringify(res));
// }

export async function GET(request: NextRequest) {
  // const cookiesStore = cookies();
  const headerList = headers();
  const referer = headerList.get("referer");
  const cookie = headerList.get("cookie");
  const baboConfig = request.cookies.get("baboConfig");

  const data = await fetch("https://api.vercel.app/blog"); // 默認快取
  const posts = await data.json();

  return Response.json(posts);
}
