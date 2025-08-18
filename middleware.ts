import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isSupportedLocale } from "./src/i18n/config";

function hasLocale(pathname: string): boolean {
  const pathLocale = pathname.split("/").filter(Boolean)[0];
  return !!pathLocale && isSupportedLocale(pathLocale);
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Ignore next internals and public files
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (!hasLocale(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    url.search = search;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|_next/data|favicon.ico).*)"],
};
