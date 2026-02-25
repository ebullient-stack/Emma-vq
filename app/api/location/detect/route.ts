import { type NextRequest, NextResponse } from "next/server"
import { geolocationService } from "@/services/geolocation-service"

export async function GET(request: NextRequest) {
  try {
    // Get client IP from headers
    const forwarded = request.headers.get("x-forwarded-for")
    const realIp = request.headers.get("x-real-ip")
    const clientIp = forwarded?.split(",")[0] || realIp || "unknown"

    if (clientIp === "unknown" || clientIp === "127.0.0.1" || clientIp === "::1") {
      // For localhost/development, get current location without IP
      const locationData = await geolocationService.getCurrentLocation()
      return NextResponse.json(locationData)
    }

    // Get location data for the specific IP
    const locationData = await geolocationService.getLocationByIP(clientIp)

    if (!locationData) {
      return NextResponse.json({ error: "Unable to detect location" }, { status: 404 })
    }

    return NextResponse.json(locationData)
  } catch (error) {
    console.error("Location detection error:", error)
    return NextResponse.json({ error: "Location detection failed" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { ipAddresses } = await request.json()

    if (!Array.isArray(ipAddresses) || ipAddresses.length === 0) {
      return NextResponse.json({ error: "Invalid IP addresses array" }, { status: 400 })
    }

    const locationData = await geolocationService.getBulkLocationData(ipAddresses)
    return NextResponse.json(locationData)
  } catch (error) {
    console.error("Bulk location detection error:", error)
    return NextResponse.json({ error: "Bulk location detection failed" }, { status: 500 })
  }
}
