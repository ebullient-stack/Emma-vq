import { NextResponse } from "next/server"

// Mock data for demanded crops
const demandedCropsData = [
  {
    id: 1,
    name: "Arabica Coffee",
    category: "Coffee",
    demandScore: 94,
    demandChange: 6,
    trend: "up",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Black Tea",
    category: "Tea",
    demandScore: 89,
    demandChange: 4,
    trend: "up",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Fresh Roses",
    category: "Flowers",
    demandScore: 87,
    demandChange: 5,
    trend: "up",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Avocados",
    category: "Fruits",
    demandScore: 85,
    demandChange: 3,
    trend: "up",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Vanilla",
    category: "Spices",
    demandScore: 82,
    demandChange: -2,
    trend: "down",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export async function GET() {
  try {
    // Return the data directly without validation for now
    // This ensures we don't have any validation errors that could cause issues
    return NextResponse.json(demandedCropsData)
  } catch (error) {
    console.error("Error fetching demanded crops:", error)
    return NextResponse.json({ error: "Failed to fetch demanded crops" }, { status: 500 })
  }
}
