"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useVendors } from "@/hooks/use-vendors"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, ChevronRight, Search, MapPin, Star, Store } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VendorsPage() {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("rating")
  const { vendors, pagination, isLoading, error } = useVendors(page)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would implement search functionality here
    console.log("Search for:", searchQuery)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    // In a real app, you would implement sorting functionality here
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Suppliers Directory</h1>
        <p className="text-muted-foreground mb-8">Find and connect with verified suppliers from around the world</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-32" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-64" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Error Loading Suppliers</h1>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Suppliers Directory</h1>
      <p className="text-muted-foreground mb-8">Find and connect with verified suppliers from around the world</p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <form onSubmit={handleSearch} className="relative flex-1">
          <Input
            type="search"
            placeholder="Search suppliers by name, product, or location..."
            className="pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="ghost" className="absolute right-0 top-0 h-full px-3">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>

        <Select onValueChange={handleSortChange} defaultValue={sortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="products">Most Products</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="overflow-hidden">
            <div className="relative h-40 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image
                  src="/placeholder.svg?height=160&width=400&text=Vendor+Banner"
                  alt="Vendor banner"
                  width={400}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white bg-white">
                  <Image src={vendor.logo || "/placeholder.svg"} alt={vendor.name} fill className="object-cover" />
                </div>
              </div>
              {vendor.verificationStatus === "verified" && (
                <Badge className="absolute top-4 right-4 bg-green-50 text-green-700 border-green-200">Verified</Badge>
              )}
            </div>
            <CardContent className="pt-4">
              <h2 className="text-xl font-bold mb-1">{vendor.name}</h2>
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground">{vendor.country}</span>
              </div>
              <div className="flex items-center mb-3">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="text-sm">
                  {vendor.rating} ({vendor.reviewsCount || 0} reviews)
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{vendor.description}</p>
              <div className="text-sm">
                <span className="font-medium">{vendor.productsCount}</span>{" "}
                <span className="text-muted-foreground">products</span>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3 pt-0">
              <Button asChild variant="outline" className="flex-1">
                <Link href={`/vendors/${vendor.storeUrl}`}>
                  <Store className="h-4 w-4 mr-2" />
                  Visit Store
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href={`/messages/new?vendor=${vendor.id}`}>Contact</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
          {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} suppliers
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(pagination.page - 1)}
            disabled={pagination.page <= 1}
            className="flex items-center"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <span className="text-sm">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(pagination.page + 1)}
            disabled={pagination.page >= pagination.totalPages}
            className="flex items-center"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
