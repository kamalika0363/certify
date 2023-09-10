// "use server"
import { NextResponse, NextRequest } from "next/server";
export function middleware(request: NextRequest, response: NextResponse) {
  console.log("middleware", request.url);
  
  return ;
}

// export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/profile"],
  // matcher: "/",
};
