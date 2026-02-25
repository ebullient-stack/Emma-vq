import { type NextRequest, NextResponse } from "next/server"
import { getVendorById } from "@/lib/products-db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid vendor ID" }, { status: 400 })
    }

    const vendor = getVendorById(id)

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 })
    }

    return NextResponse.json(vendor)
  } catch (error) {
    console.error("Error fetching vendor:", error)
    return NextResponse.json({ error: "Failed to fetch vendor" }, { status: 500 })
  }
}
