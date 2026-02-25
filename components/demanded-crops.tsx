import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp, BarChart3, Minus } from "lucide-react"
import type { DemandedCrop } from "@/lib/validations"
import ErrorBoundary from "@/components/error-boundary"
import ErrorDisplay from "@/components/error-display"

// Fallback data in case the API fails
const fallbackDemandedCrops = [
  {
    id: 1,
    name: "Avocados",
    category: "Fruits",
    demandScore: 92,
    demandChange: 5,
    trend: "up",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Quinoa",
    category: "Grains",
    demandScore: 88,
    demandChange: 3,
    trend: "up",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Blueberries",
    category: "Fruits",
    demandScore: 85,
    demandChange: 7,
    trend: "up",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Almonds",
    category: "Nuts",
    demandScore: 82,
    demandChange: -1,
    trend: "down",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Kale",
    category: "Vegetables",
    demandScore: 79,
    demandChange: 2,
    trend: "up",
    image: "/placeholder.svg?height=80&width=80",
  },
]

async function fetchDemandedCrops() {
  try {
    // Use relative URL to avoid issues with NEXT_PUBLIC_APP_URL
    const res = await fetch("/api/demanded-crops", {
      next: { revalidate: 86400 }, // Revalidate daily
    })

    if (!res.ok) {
      console.error("Failed to fetch demanded crops:", await res.text())
      return fallbackDemandedCrops
    }

    return await res.json()
  } catch (error) {
    console.error("Error fetching demanded crops:", error)
    return fallbackDemandedCrops
  }
}

function DemandedCropItem({ crop }: { crop: DemandedCrop }) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div className="flex items-center">
        <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-100 mr-3">
          <Image
            src={crop.image || "/placeholder.svg?height=80&width=80"}
            alt={crop.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-medium">{crop.name}</div>
          <div className="text-sm text-muted-foreground">{crop.category}</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="font-semibold">Demand: {crop.demandScore}/100</div>
        <div className="flex items-center text-sm">
          {crop.trend === "up" ? (
            <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200 flex items-center gap-1">
              <ArrowUp className="h-3 w-3" />
              {crop.demandChange}%
            </Badge>
          ) : crop.trend === "down" ? (
            <Badge variant="outline" className="text-red-600 bg-red-50 border-red-200 flex items-center gap-1">
              <ArrowDown className="h-3 w-3" />
              {Math.abs(crop.demandChange)}%
            </Badge>
          ) : (
            <Badge variant="outline" className="text-gray-600 bg-gray-50 border-gray-200 flex items-center gap-1">
              <Minus className="h-3 w-3" />
              {crop.demandChange}%
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}

async function DemandedCropsContent() {
  const crops = await fetchDemandedCrops()

  return (
    <div className="space-y-4">
      {crops.map((crop: DemandedCrop) => (
        <DemandedCropItem key={crop.id} crop={crop} />
      ))}
      <div className="text-center pt-2">
        <Link href="/market-intelligence" className="text-primary text-sm hover:underline">
          View East African market intelligence
        </Link>
      </div>
    </div>
  )
}

export default function DemandedCrops() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Top 5 Most Demanded East African Crops</CardTitle>
            <CardDescription>Based on regional market trends</CardDescription>
          </div>
          <BarChart3 className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ErrorBoundary
          fallback={
            <ErrorDisplay error={new Error("Failed to load demanded crops")} reset={() => window.location.reload()} />
          }
        >
          <Suspense fallback={<DemandedCropsSkeleton />}>
            <DemandedCropsContent />
          </Suspense>
        </ErrorBoundary>
      </CardContent>
    </Card>
  )
}

function DemandedCropsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse mr-3"></div>
            <div>
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mt-1"></div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mt-1"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
