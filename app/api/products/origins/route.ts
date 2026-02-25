import { NextResponse } from "next/server"
import { getOrigins } from "@/lib/products-db"

export async function GET() {
  try {
    const origins = getOrigins()
    return NextResponse.json({ origins })
  } catch (error) {
    console.error("Error fetching origins:", error)
    return NextResponse.json({ error: "Failed to fetch origins" }, { status: 500 })
  }
}
