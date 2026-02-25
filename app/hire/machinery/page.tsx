"use client"

import { Skeleton } from "@/components/ui/skeleton"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Search, Filter, MapPin, Calendar } from "lucide-react"
import { useProducts } from "@/hooks/use-products"

export default function MachineryHirePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined)
  const [availableNow, setAvailableNow] = useState(false)
  const [withOperator, setWithOperator] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Use the products hook to fetch machinery available for hire
  const { data, isLoading, error, filters, updateFilters } = useProducts({
    category: "Agro Machinery",
    listingType: "hire",
    page: 1,
    limit: 12,
  })

  // Apply filters
  const applyFilters = () => {
    updateFilters({
      search: searchQuery || undefined,
      subcategory: selectedType === "all" ? undefined : selectedType,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    })
  }

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setPriceRange([0, 1000])
    setSelectedType(undefined)
    setAvailableNow(false)
    setWithOperator(false)
    updateFilters({
      category: "Agro Machinery",
      listingType: "hire",
      search: undefined,
      subcategory: undefined,
      minPrice: undefined,
      maxPrice: undefined,
    })
  }

  // Filter products based on availableNow and withOperator
  const filteredProducts =
    data?.products.filter((product) => {
      if (availableNow && !product.hireAvailability?.availableNow) {
        return false
      }
      if (withOperator && !product.includesOperator) {
        return false
      }
      return true
    }) || []

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/hire" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Hire Categories
      </Link>

      <h1 className="text-3xl font-bold mb-2">Rent Agricultural Machinery</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Find and rent tractors, harvesters, and other agricultural machinery
      </p>

      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-between"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <span className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </span>
          <span>{showMobileFilters ? "Hide" : "Show"}</span>
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className={`md:col-span-1 ${showMobileFilters ? "block" : "hidden md:block"}`}>
          <div className="bg-white p-6 rounded-lg border sticky top-6">
            <h2 className="text-lg font-bold mb-4">Filters</h2>

            <div className="space-y-6">
              <div>
                <Label htmlFor="machinery-type" className="text-sm font-medium mb-1.5 block">
                  Machinery Type
                </Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger id="machinery-type">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Tractors">Tractors</SelectItem>
                    <SelectItem value="Harvesters">Harvesters</SelectItem>
                    <SelectItem value="Planters">Planters</SelectItem>
                    <SelectItem value="Sprayers">Sprayers</SelectItem>
                    <SelectItem value="Tillage">Tillage Equipment</SelectItem>
                    <SelectItem value="Irrigation">Irrigation Systems</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label htmlFor="price-range" className="text-sm font-medium">
                    Price Range (per day)
                  </Label>
                  <span className="text-sm">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <Slider
                  id="price-range"
                  defaultValue={[0, 1000]}
                  max={1000}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="available-now"
                    checked={availableNow}
                    onCheckedChange={(checked) => setAvailableNow(checked as boolean)}
                  />
                  <Label htmlFor="available-now" className="text-sm">
                    Available Now
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="with-operator"
                    checked={withOperator}
                    onCheckedChange={(checked) => setWithOperator(checked as boolean)}
                  />
                  <Label htmlFor="with-operator" className="text-sm">
                    With Operator
                  </Label>
                </div>
              </div>

              <div>
                <Label htmlFor="location" className="text-sm font-medium mb-1.5 block">
                  Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input id="location" type="text" placeholder="Enter your location" className="pl-10" />
                </div>
              </div>

              <div>
                <Label htmlFor="date" className="text-sm font-medium mb-1.5 block">
                  Rental Date
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input id="date" type="date" className="pl-10" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button onClick={applyFilters}>Apply Filters</Button>
                <Button variant="outline" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search machinery..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-0">
                    <Skeleton className="h-48 w-full rounded-t-lg" />
                    <div className="p-4 space-y-3">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-5 w-1/3" />
                        <Skeleton className="h-5 w-1/4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Error loading machinery</h3>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button onClick={resetFilters}>Try Again</Button>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-medium mb-2">No machinery found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button onClick={resetFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((item) => (
                <Card key={item.id} className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    {!item.hireAvailability?.availableNow && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Unavailable
                      </div>
                    )}
                    {item.includesOperator && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        With Operator
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold">{item.name}</h3>
                      <div className="text-right">
                        <div className="font-bold">{item.hirePrice}</div>
                        <div className="text-xs text-muted-foreground">per {item.hirePriceUnit}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{item.origin}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-2 py-1 bg-muted rounded-full">{item.subcategory || "Machinery"}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="w-full" asChild>
                        <Link href={`/products/${item.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
