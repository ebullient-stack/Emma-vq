import { type NextRequest, NextResponse } from "next/server"
import { getVendorByStoreUrl } from "@/lib/products-db"

export async function GET(request: NextRequest, { params }: { params: { storeUrl: string } }) {
  try {
    const { storeUrl } = params

    const vendor = getVendorByStoreUrl(storeUrl)

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 })
    }

    return NextResponse.json(vendor)
  } catch (error) {
    console.error("Error fetching vendor by store URL:", error)
    return NextResponse.json({ error: "Failed to fetch vendor" }, { status: 500 })
  }
}
