import { NextResponse } from "next/server"
import { getPriceRange } from "@/lib/products-db"

export async function GET() {
  try {
    const priceRange = getPriceRange()
    return NextResponse.json(priceRange)
  } catch (error) {
    console.error("Error fetching price range:", error)
    return NextResponse.json({ error: "Failed to fetch price range" }, { status: 500 })
  }
}
