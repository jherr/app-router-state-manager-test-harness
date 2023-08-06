import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-api", `http://${request.headers.get("host")}/api`);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
