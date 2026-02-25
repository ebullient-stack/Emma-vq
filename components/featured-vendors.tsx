"use client"

import Link from "next/link"
import Image from "next/image"
import { useFeaturedVendors } from "@/hooks/use-vendors"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { MapPin, Star, Store } from "lucide-react"

export function FeaturedVendors() {
  const { vendors, isLoading, error } = useFeaturedVendors()

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Suppliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-64" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || !vendors || vendors.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Suppliers</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Connect with our trusted suppliers offering high-quality products and excellent service
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <Card key={vendor.id} className="overflow-hidden">
              <div className="relative h-32 bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Image
                    src="/placeholder.svg?height=128&width=384&text=Vendor+Banner"
                    alt="Vendor banner"
                    width={384}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white bg-white">
                    <Image src={vendor.logo || "/placeholder.svg"} alt={vendor.name} fill className="object-cover" />
                  </div>
                </div>
                {vendor.verificationStatus === "verified" && (
                  <Badge className="absolute top-4 right-4 bg-green-50 text-green-700 border-green-200">Verified</Badge>
                )}
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold mb-1">{vendor.name}</h3>
                <div className="flex items-center mb-2">
                  <MapPin className="h-3 w-3 text-muted-foreground mr-1" />
                  <span className="text-xs text-muted-foreground">{vendor.country}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-xs">
                    {vendor.rating} ({vendor.reviewsCount || 0} reviews)
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{vendor.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/vendors/${vendor.storeUrl}`}>
                    <Store className="h-4 w-4 mr-2" />
                    Visit Store
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="/vendors">View All Suppliers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedVendors
