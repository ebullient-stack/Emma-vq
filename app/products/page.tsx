"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Skeleton } from "@/components/ui/skeleton"
import { useProducts, useCategories, useOrigins, usePriceRange } from "@/hooks/use-products"
import { ProductCard } from "@/components/product-card"
import { useUserPreferences } from "@/contexts/user-preferences-context"
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProductsPage() {
  // Get filter options
  const { categories, isLoading: categoriesLoading } = useCategories()
  const { origins, isLoading: originsLoading } = useOrigins()
  const { priceRange, isLoading: priceRangeLoading } = usePriceRange()
  const { location } = useUserPreferences()

  // Local state for filter inputs
  const [searchInput, setSearchInput] = useState("")
  const [priceInput, setPriceInput] = useState<[number, number]>([0, 100])
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Initialize products with filters
  const { data, isLoading, error, filters, updateFilters, nextPage, prevPage } = useProducts({
    page: 1,
    limit: 12,
    sortBy: "newest",
    origin: location.name, // Default to user's location
  })

  // Update price slider when price range is loaded
  useEffect(() => {
    if (priceRange) {
      setPriceInput([priceRange.min, priceRange.max])
      updateFilters({
        minPrice: priceRange.min,
        maxPrice: priceRange.max,
      })
    }
  }, [priceRange, updateFilters])

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilters({ search: searchInput })
  }

  // Handle price change
  const handlePriceChange = (value: number[]) => {
    setPriceInput([value[0], value[1]])
  }

  // Apply price filter
  const applyPriceFilter = () => {
    updateFilters({
      minPrice: priceInput[0],
      maxPrice: priceInput[1],
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

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

      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Filters sidebar */}
        <div className={`w-full lg:w-64 space-y-4 ${showMobileFilters ? "block" : "hidden lg:block"}`}>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Filter Products</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Category</label>
                <Select
                  value={filters.category}
                  onValueChange={(value) => updateFilters({ category: value === "all" ? undefined : value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categoriesLoading ? (
                      <SelectItem value="loading" disabled>
                        Loading...
                      </SelectItem>
                    ) : (
                      categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Origin</label>
                <Select
                  value={filters.origin}
                  onValueChange={(value) => updateFilters({ origin: value === "all" ? undefined : value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Origins" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Origins</SelectItem>
                    {originsLoading ? (
                      <SelectItem value="loading" disabled>
                        Loading...
                      </SelectItem>
                    ) : (
                      origins.map((origin) => (
                        <SelectItem key={origin} value={origin}>
                          {origin}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Listing Type</label>
                <Select
                  value={filters.listingType}
                  onValueChange={(value) =>
                    updateFilters({ listingType: value === "all" ? undefined : (value as any) })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Listings" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Listings</SelectItem>
                    <SelectItem value="sell">For Sale Only</SelectItem>
                    <SelectItem value="hire">For Hire Only</SelectItem>
                    <SelectItem value="both">Sale & Hire</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Price Range</label>
                {priceRangeLoading ? (
                  <Skeleton className="h-10 w-full" />
                ) : (
                  <>
                    <div className="mb-6">
                      <Slider
                        value={priceInput}
                        min={priceRange?.min || 0}
                        max={priceRange?.max || 100}
                        step={0.1}
                        onValueChange={handlePriceChange}
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span>${priceInput[0].toFixed(2)}</span>
                      <span>${priceInput[1].toFixed(2)}</span>
                    </div>
                    <Button size="sm" className="w-full" onClick={applyPriceFilter}>
                      Apply Price
                    </Button>
                  </>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="inStock"
                  checked={filters.inStock === true}
                  onCheckedChange={(checked) => updateFilters({ inStock: checked ? true : undefined })}
                />
                <label
                  htmlFor="inStock"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  In Stock Only
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={filters.featured === true}
                  onCheckedChange={(checked) => updateFilters({ featured: checked ? true : undefined })}
                />
                <label
                  htmlFor="featured"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Featured Products
                </label>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSearchInput("")
                  setPriceInput(priceRange ? [priceRange.min, priceRange.max] : [0, 100])
                  updateFilters({
                    search: undefined,
                    category: undefined,
                    origin: undefined,
                    minPrice: priceRange?.min,
                    maxPrice: priceRange?.max,
                    inStock: undefined,
                    featured: undefined,
                    listingType: undefined,
                  })
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md">
              <Input
                type="search"
                placeholder="Search products..."
                className="pr-10"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button type="submit" variant="ghost" className="absolute right-0 top-0 h-full px-3">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>

            <Select
              value={filters.sortBy || "newest"}
              onValueChange={(value) => updateFilters({ sortBy: value as any })}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
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
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">Error loading products: {error}</p>
              <Button onClick={() => updateFilters({})}>Try Again</Button>
            </div>
          ) : data && data.products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-8">
                <div className="text-sm text-muted-foreground">
                  Showing {(data.page - 1) * data.limit + 1} to {Math.min(data.page * data.limit, data.total)} of{" "}
                  {data.total} products
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevPage}
                    disabled={data.page <= 1}
                    className="flex items-center"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <span className="text-sm">
                    Page {data.page} of {data.totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextPage}
                    disabled={data.page >= data.totalPages}
                    className="flex items-center"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg mb-4">No products found matching your criteria.</p>
              <Button onClick={() => updateFilters({})}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
