import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define protected routes that require authentication
const protectedRoutes = ["/vendor-dashboard", "/profile", "/messages", "/post-ad"]

export async function middleware(req: NextRequest) {
  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))

  if (isProtectedRoute) {
    // Get the session cookie
    const sessionCookie = req.cookies.get("sb-session")

    // If no session, redirect to login
    if (!sessionCookie) {
      const redirectUrl = new URL("/login", req.url)
      redirectUrl.searchParams.set("redirect", req.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all routes except static files, api routes, and _next
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
}
