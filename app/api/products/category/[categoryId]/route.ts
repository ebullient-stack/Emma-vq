import { type NextRequest, NextResponse } from "next/server"
import { filterProducts } from "@/lib/products-db"

export async function GET(request: NextRequest, { params }: { params: { categoryId: string } }) {
  try {
    const { categoryId } = params
    const searchParams = request.nextUrl.searchParams
    const limit = Number.parseInt(searchParams.get("limit") || "4", 10)

    // Map category IDs to actual category names
    const categoryMap: Record<string, string> = {
      fruits: "Fruits & Vegetables",
      grains: "Grains & Cereals",
      coffee: "Coffee & Tea",
      nuts: "Nuts & Seeds",
      machinery: "Agro Machinery",
      land: "Fields & Land",
      input: "Agro Input",
      tools: "Tools & Spare Parts",
      livestock: "Live Stock & Animals",
    }

    const categoryName = categoryMap[categoryId]

    if (!categoryName) {
      return NextResponse.json({ error: "Invalid category ID" }, { status: 400 })
    }

    const result = filterProducts({
      category: categoryName,
      limit,
      page: 1,
      sortBy: "newest",
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error fetching category products:", error)
    return NextResponse.json({ error: "Failed to fetch category products" }, { status: 500 })
  }
}
