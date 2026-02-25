"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from "lucide-react"
import { useCurrencyConverter } from "@/contexts/user-preferences-context"
import { Skeleton } from "@/components/ui/skeleton"

// Types for market price data
export type MarketPrice = {
  id: number
  productName: string
  category: string
  currentPrice: number
  currency: string
  unit: string
  priceChange: number
  priceChangePercentage: number
  trend: "up" | "down" | "stable"
  lastUpdated: string
}

// Mock data for market prices
const marketPricesData = [
  {
    id: 1,
    productName: "Arabica Coffee",
    category: "Coffee",
    currentPrice: 4.75,
    currency: "USD",
    unit: "kg",
    priceChange: 0.15,
    priceChangePercentage: 3.26,
    trend: "up",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 2,
    productName: "Black Tea",
    category: "Tea",
    currentPrice: 2.35,
    currency: "USD",
    unit: "kg",
    priceChange: -0.08,
    priceChangePercentage: -3.29,
    trend: "down",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 3,
    productName: "Maize",
    category: "Grains",
    currentPrice: 0.42,
    currency: "USD",
    unit: "kg",
    priceChange: 0.02,
    priceChangePercentage: 5.0,
    trend: "up",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 4,
    productName: "Avocados",
    category: "Fruits",
    currentPrice: 1.85,
    currency: "USD",
    unit: "kg",
    priceChange: 0.1,
    priceChangePercentage: 5.71,
    trend: "up",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 5,
    productName: "Vanilla",
    category: "Spices",
    currentPrice: 250.0,
    currency: "USD",
    unit: "kg",
    priceChange: -12.5,
    priceChangePercentage: -4.76,
    trend: "down",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 6,
    productName: "Fresh Roses",
    category: "Flowers",
    currentPrice: 0.35,
    currency: "USD",
    unit: "stem",
    priceChange: 0.01,
    priceChangePercentage: 2.94,
    trend: "up",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 7,
    productName: "Cashew Nuts",
    category: "Nuts",
    currentPrice: 7.25,
    currency: "USD",
    unit: "kg",
    priceChange: 0.15,
    priceChangePercentage: 2.11,
    trend: "up",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: 8,
    productName: "Beef",
    category: "Livestock",
    currentPrice: 4.5,
    currency: "USD",
    unit: "kg",
    priceChange: -0.1,
    priceChangePercentage: -2.17,
    trend: "down",
    lastUpdated: new Date().toISOString(),
  },
]

export function MarketPrices() {
  const [activeTab, setActiveTab] = useState("all")
  const { convertPrice } = useCurrencyConverter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Filter prices based on active tab
  const filteredPrices = marketPricesData.filter((price) => {
    if (activeTab === "all") return true
    return price.category.toLowerCase() === activeTab.toLowerCase()
  })

  // Get unique categories for tabs
  const categories = [...new Set(marketPricesData.map((price) => price.category))]

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Market Prices</CardTitle>
          <CardDescription>Error loading market prices</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>East African Market Prices</CardTitle>
        <CardDescription>Current prices for East African agricultural commodities</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4 flex flex-wrap">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category.toLowerCase()}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-2 p-3 font-medium">
                <div className="col-span-4">Product</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-3 text-right">Change</div>
                <div className="col-span-3 text-right">Updated</div>
              </div>

              {isLoading
                ? // Loading skeletons
                  Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 border-t p-3">
                      <div className="col-span-4">
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                      <div className="col-span-2 text-right">
                        <Skeleton className="h-4 w-full" />
                      </div>
                      <div className="col-span-3 text-right">
                        <Skeleton className="h-4 w-full" />
                      </div>
                      <div className="col-span-3 text-right">
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                  ))
                : filteredPrices.map((price) => (
                    <div key={price.id} className="grid grid-cols-12 gap-2 border-t p-3">
                      <div className="col-span-4">{price.productName}</div>
                      <div className="col-span-2 text-right">
                        {convertPrice(price.currentPrice)}/{price.unit}
                      </div>
                      <div className="col-span-3 text-right">
                        <span
                          className={`inline-flex items-center ${
                            price.trend === "up"
                              ? "text-green-600"
                              : price.trend === "down"
                                ? "text-red-600"
                                : "text-gray-500"
                          }`}
                        >
                          {price.trend === "up" ? (
                            <ArrowUpIcon className="mr-1 h-3 w-3" />
                          ) : price.trend === "down" ? (
                            <ArrowDownIcon className="mr-1 h-3 w-3" />
                          ) : (
                            <MinusIcon className="mr-1 h-3 w-3" />
                          )}
                          {price.priceChangePercentage > 0 ? "+" : ""}
                          {price.priceChangePercentage.toFixed(2)}%
                        </span>
                      </div>
                      <div className="col-span-3 text-right text-sm text-muted-foreground">
                        {new Date(price.lastUpdated).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default MarketPrices
