"use client"

import { useUserPreferences } from "@/contexts/user-preferences-context"
import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"

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

// Function to simulate market price fluctuations
function simulatePriceChange(currentPrice: number): {
  newPrice: number
  priceChange: number
  priceChangePercentage: number
  trend: "up" | "down" | "stable"
} {
  // Random fluctuation between -5% and +5%
  const fluctuationPercentage = (Math.random() * 10 - 5) / 100
  const priceChange = currentPrice * fluctuationPercentage
  const newPrice = currentPrice + priceChange
  const priceChangePercentage = fluctuationPercentage * 100

  let trend: "up" | "down" | "stable" = "stable"
  if (priceChangePercentage > 0.5) trend = "up"
  else if (priceChangePercentage < -0.5) trend = "down"

  return {
    newPrice: Number.parseFloat(newPrice.toFixed(2)),
    priceChange: Number.parseFloat(priceChange.toFixed(2)),
    priceChangePercentage: Number.parseFloat(priceChangePercentage.toFixed(2)),
    trend,
  }
}

// Hook for using market prices with auto-updates
export function useMarketPrices() {
  const [marketPrices, setMarketPrices] = useState<MarketPrice[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { marketPriceUpdateFrequency } = useUserPreferences()
  const { toast } = useToast()

  // Fetch initial market prices
  useEffect(() => {
    const fetchMarketPrices = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/market-prices")
        if (!response.ok) {
          throw new Error("Failed to fetch market prices")
        }
        const data = await response.json()
        setMarketPrices(data)
        setError(null)
      } catch (err) {
        setError("Error fetching market prices")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMarketPrices()
  }, [])

  // Set up auto-updates based on frequency
  useEffect(() => {
    if (marketPriceUpdateFrequency === "never" || isLoading || error) return;

    let intervalTime: number;
    switch (marketPriceUpdateFrequency) {
      case "realtime":
        intervalTime = 30 * 1000 // 30 seconds
        break
      case "daily":
        intervalTime = 24 * 60 * 60 * 1000 // 24 hours
        break
      case "weekly":
        intervalTime = 7 * 24 * 60 * 60 * 1000 // 7 days
        break
      default:
        return // No updates
    }

    // For demo purposes, shorten intervals in dev
    if (process.env.NODE_ENV === "development") {
      if (marketPriceUpdateFrequency === "daily") intervalTime = 60 * 1000 // 1 minute
      if (marketPriceUpdateFrequency === "weekly") intervalTime = 5 * 60 * 1000 // 5 minutes
    }

    const updateInterval = setInterval(() => {
      setMarketPrices((prevPrices) =>
      prevPrices.map((price) => {
        const { newPrice, priceChange, priceChangePercentage, trend } = simulatePriceChange(price.currentPrice)

        // Only notify on significant changes (>2%)
        if (Math.abs(priceChangePercentage) > 2) {
          toast({
            title: `${price.productName} price ${trend === "up" ? "increased" : "decreased"}`,
            description: `${trend === "up" ? "📈" : "📉"} ${Math.abs(priceChangePercentage).toFixed(1)}% ${trend === "up" ? "up" : "down"} to $${newPrice.toFixed(2)}/${price.unit}`,
          })
        }

        return {
          ...price,
          currentPrice: newPrice,
          priceChange,
          priceChangePercentage,
          trend,
          lastUpdated: new Date().toISOString(),
        }
      })

      setMarketPrices(updatedPrices)
    }, intervalTime)

    return () => clearInterval(updateInterval)
  }, [marketPrices, marketPriceUpdateFrequency, isLoading, error, toast])

  return { marketPrices, isLoading, error }
}
