"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Globe, Shield } from "lucide-react"
import { geolocationService, type LocationData } from "@/services/geolocation-service"

interface LocationStats {
  totalUsers: number
  eastAfricanUsers: number
  vpnUsers: number
  topCountries: Array<{ country: string; count: number }>
  topCities: Array<{ city: string; country: string; count: number }>
}

export function LocationAnalytics() {
  const [currentLocation, setCurrentLocation] = useState<LocationData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [stats] = useState<LocationStats>({
    totalUsers: 1247,
    eastAfricanUsers: 892,
    vpnUsers: 23,
    topCountries: [
      { country: "Kenya", count: 456 },
      { country: "Tanzania", count: 234 },
      { country: "Uganda", count: 123 },
      { country: "Rwanda", count: 79 },
    ],
    topCities: [
      { city: "Nairobi", country: "Kenya", count: 234 },
      { city: "Dar es Salaam", country: "Tanzania", count: 156 },
      { city: "Kampala", country: "Uganda", count: 98 },
      { city: "Kigali", country: "Rwanda", count: 67 },
    ],
  })

  useEffect(() => {
    async function detectLocation() {
      try {
        const location = await geolocationService.getCurrentLocation()
        setCurrentLocation(location)
      } catch (error) {
        console.error("Failed to detect location:", error)
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [])

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="space-y-0 pb-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2 mt-2"></div>
            </CardHeader>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Current Location Card */}
      {currentLocation && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Your Current Location
            </CardTitle>
            <CardDescription>Detected using IPinfo geolocation service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium">Country</p>
                <p className="text-2xl font-bold">{currentLocation.countryName}</p>
              </div>
              <div>
                <p className="text-sm font-medium">City</p>
                <p className="text-2xl font-bold">{currentLocation.city}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Region</p>
                <p className="text-lg">{currentLocation.region}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Coordinates</p>
                <p className="text-lg">
                  {currentLocation.latitude.toFixed(4)}, {currentLocation.longitude.toFixed(4)}
                </p>
              </div>
            </div>
            {currentLocation.isVPN && (
              <Badge variant="secondary" className="mt-4">
                <Shield className="h-3 w-3 mr-1" />
                VPN Detected
              </Badge>
            )}
          </CardContent>
        </Card>
      )}

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Active platform users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">East African Users</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.eastAfricanUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((stats.eastAfricanUsers / stats.totalUsers) * 100).toFixed(1)}% of total users
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">VPN Users</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.vpnUsers}</div>
            <p className="text-xs text-muted-foreground">
              {((stats.vpnUsers / stats.totalUsers) * 100).toFixed(1)}% using VPN
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coverage</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.topCountries.length}</div>
            <p className="text-xs text-muted-foreground">East African countries</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Countries and Cities */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Countries</CardTitle>
            <CardDescription>Most active user locations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.topCountries.map((country, index) => (
                <div key={country.country} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">#{index + 1}</span>
                    <span>{country.country}</span>
                  </div>
                  <Badge variant="secondary">{country.count} users</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Cities</CardTitle>
            <CardDescription>Most active urban centers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.topCities.map((city, index) => (
                <div key={`${city.city}-${city.country}`} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">#{index + 1}</span>
                    <div>
                      <p className="font-medium">{city.city}</p>
                      <p className="text-xs text-muted-foreground">{city.country}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{city.count} users</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
