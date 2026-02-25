import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient(
      { cookies: () => cookieStore },
      {
        supabaseUrl: "https://zjucuqhbuymkzavljohy.supabase.co",
        supabaseKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqdWN1cWhidXlta3phdmxqb2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MTIxNDAsImV4cCI6MjA2NTA4ODE0MH0.KRkIDl5k4yRzMFgDVI6bBtkNRwDIAIsSld7HkCTVPGM",
      },
    )

    // Exchange the code for a session
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Redirect to the home page or a success page
  return NextResponse.redirect(new URL("/", request.url))
}
