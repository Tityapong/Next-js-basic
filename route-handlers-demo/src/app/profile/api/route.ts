import { type NextRequest } from "next/server";
import { headers ,cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeader = new Headers(request.headers);
  const headerList = headers();

  cookies().set("ResultPerpage","20")
  console.log(cookies().get("ResultPerpage")) 

  const theme=request.cookies.get("theme");
  console.log(theme);

  // Remove leading space from header name
  console.log(requestHeader.get("Authorization"));
  console.log(headerList.get("Authorization"));

  return new Response("<h1>Profile API DATA</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie":"theme=dark",
    },
  });
}
