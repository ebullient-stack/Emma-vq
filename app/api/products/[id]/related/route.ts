import { type NextRequest, NextResponse } from "next/server"
import { getRelatedProducts } from "@/lib/products-db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 })
    }

    const searchParams = request.nextUrl.searchParams
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : 4

    const relatedProducts = getRelatedProducts(id, limit)

    return NextResponse.json({ products: relatedProducts })
  } catch (error) {
    console.error("Error fetching related products:", error)
    return NextResponse.json({ error: "Failed to fetch related products" }, { status: 500 })
  }
}
