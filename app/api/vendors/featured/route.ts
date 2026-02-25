import { NextResponse } from "next/server"
import { getFeaturedVendors } from "@/lib/products-db"

export async function GET() {
  try {
    const featuredVendors = getFeaturedVendors()
    return NextResponse.json({ vendors: featuredVendors })
  } catch (error) {
    console.error("Error fetching featured vendors:", error)
    return NextResponse.json({ error: "Failed to fetch featured vendors" }, { status: 500 })
  }
}
