import type { Metadata } from "next"
import { LocationAnalytics } from "@/components/location-analytics"

export const metadata: Metadata = {
  title: "Location Analytics - East African Agricultural Marketplace",
  description: "View detailed location analytics and user distribution across East Africa",
}

export default function LocationAnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Location Analytics</h1>
        <p className="text-muted-foreground mt-2">Real-time location data and user distribution across East Africa</p>
      </div>

      <LocationAnalytics />
    </div>
  )
}
