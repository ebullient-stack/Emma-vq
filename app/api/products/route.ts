import { type NextRequest, NextResponse } from "next/server"
import { filterProducts } from "@/lib/products-db"
import type { ProductFilters } from "@/types/product"

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams

    const filters: ProductFilters = {
      search: searchParams.get("search") || undefined,
      category: searchParams.get("category") || undefined,
      origin: searchParams.get("origin") || undefined,
      minPrice: searchParams.get("minPrice") ? Number.parseFloat(searchParams.get("minPrice")!) : undefined,
      maxPrice: searchParams.get("maxPrice") ? Number.parseFloat(searchParams.get("maxPrice")!) : undefined,
      inStock: searchParams.get("inStock") ? searchParams.get("inStock") === "true" : undefined,
      featured: searchParams.get("featured") ? searchParams.get("featured") === "true" : undefined,
      sortBy: (searchParams.get("sortBy") as ProductFilters["sortBy"]) || undefined,
      page: searchParams.get("page") ? Number.parseInt(searchParams.get("page")!) : 1,
      limit: searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : 10,
    }

    // Get filtered products
    const result = filterProducts(filters)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
