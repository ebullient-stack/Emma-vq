interface LocationData {
  country: string
  countryName: string
  region: string
  city: string
  latitude: number
  longitude: number
  isVPN: boolean
  continent: string
}

// Default East African location
const DEFAULT_LOCATION: LocationData = {
  country: "KE",
  countryName: "Kenya",
  region: "Nairobi",
  city: "Nairobi",
  latitude: -1.2921,
  longitude: 36.8219,
  isVPN: false,
  continent: "Africa",
}

// Country code to name mapping
const COUNTRY_NAMES: Record<string, string> = {
  KE: "Kenya",
  TZ: "Tanzania",
  UG: "Uganda",
  RW: "Rwanda",
  BI: "Burundi",
  ET: "Ethiopia",
  MZ: "Mozambique",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  MW: "Malawi",
}

class GeolocationService {
  async getCurrentLocation(): Promise<LocationData | null> {
    try {
      // Try to use browser geolocation API if available
      return await this.getBrowserLocation()
    } catch (error) {
      console.warn("Browser geolocation not available, using default location")
      // Return default East African location as fallback
      return DEFAULT_LOCATION
    }
  }

  private getBrowserLocation(): Promise<LocationData | null> {
    return new Promise((resolve) => {
      if (typeof navigator === "undefined" || !navigator.geolocation) {
        resolve(null)
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          // For simplicity, we'll resolve to Kenya as default based on coordinates
          // In a production app, you'd use reverse geocoding
          resolve({
            country: "KE",
            countryName: "Kenya",
            region: "East Africa",
            city: "Nairobi",
            latitude,
            longitude,
            isVPN: false,
            continent: "Africa",
          })
        },
        () => {
          resolve(null)
        },
        {
          timeout: 5000,
        },
      )
    })
  }

  async getLocationByIP(ipAddress: string): Promise<LocationData | null> {
    // Without external API, we'll return default location
    // In production, you'd implement this with your own backend endpoint
    console.warn(
      "IP-based geolocation not available without external API. Using default location.",
    )
    return DEFAULT_LOCATION
  }

  async getBulkLocationData(ipAddresses: string[]): Promise<Record<string, LocationData>> {
    const result: Record<string, LocationData> = {}
    for (const ip of ipAddresses) {
      result[ip] = DEFAULT_LOCATION
    }
    return result
  }

  // Helper method to get country name from code
  getCountryName(countryCode: string): string {
    return COUNTRY_NAMES[countryCode] || "Unknown"
  }
}

export const geolocationService = new GeolocationService()
export type { LocationData }
