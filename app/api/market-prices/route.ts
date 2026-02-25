import { NextResponse } from "next/server"

// Mock data for market prices
const marketPricesData = [
  {
    id: 1,
    productName: "Apples",
    category: "Fruits",
    currentPrice: 1.25,
    currency: "USD",
    unit: "kg",
    priceChange: 0.05,
    priceChangePercentage: 4.17,
    trend: "up",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 2,
    productName: "Bananas",
    category: "Fruits",
    currentPrice: 0.89,
    currency: "USD",
    unit: "kg",
    priceChange: -0.03,
    priceChangePercentage: -3.26,
    trend: "down",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 3,
    productName: "Wheat",
    category: "Grains",
    currentPrice: 0.35,
    currency: "USD",
    unit: "kg",
    priceChange: 0.01,
    priceChangePercentage: 2.94,
    trend: "up",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 4,
    productName: "Rice",
    category: "Grains",
    currentPrice: 1.05,
    currency: "USD",
    unit: "kg",
    priceChange: 0,
    priceChangePercentage: 0,
    trend: "stable",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 5,
    productName: "Potatoes",
    category: "Vegetables",
    currentPrice: 0.75,
    currency: "USD",
    unit: "kg",
    priceChange: -0.08,
    priceChangePercentage: -9.64,
    trend: "down",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 6,
    productName: "Tomatoes",
    category: "Vegetables",
    currentPrice: 2.15,
    currency: "USD",
    unit: "kg",
    priceChange: 0.25,
    priceChangePercentage: 13.16,
    trend: "up",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 7,
    productName: "Coffee Beans",
    category: "Commodities",
    currentPrice: 4.5,
    currency: "USD",
    unit: "kg",
    priceChange: 0.15,
    priceChangePercentage: 3.45,
    trend: "up",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 8,
    productName: "Soybeans",
    category: "Grains",
    currentPrice: 0.65,
    currency: "USD",
    unit: "kg",
    priceChange: -0.02,
    priceChangePercentage: -2.99,
    trend: "down",
    lastUpdated: new Date().toISOString(),
  },
]

export async function GET() {
  try {
    // Return the data directly without validation for now
    // This ensures we don't have any validation errors that could cause issues
    return NextResponse.json(marketPricesData)
  } catch (error) {
    console.error("Error fetching market prices:", error)
    return NextResponse.json({ error: "Failed to fetch market prices" }, { status: 500 })
  }
}
