"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Skeleton } from "@/components/ui/skeleton"
import { useProducts, useOrigins } from "@/hooks/use-products"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"

export default function LivestockPage() {
  // Local state for filter inputs
  const [searchInput, setSearchInput] = useState("")
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const { origins, isLoading: originsLoading } = useOrigins()

  // Initialize products with filters
  const { data, isLoading, error, filters, updateFilters, nextPage, prevPage } = useProducts({
    page: 1,
    limit: 12,
    sortBy: "newest",
    category: "Live Stock & Animals",
  })

  // Get unique subcategories for livestock
  const subcategories = data
    ? Array.from(new Set(data.products.map((product) => product.subcategory).filter(Boolean)))
    : []

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilters({ search: searchInput })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Live Stock & Animals</h1>
        <p className="text-muted-foreground">
          Browse our selection of high-quality livestock and animals from trusted suppliers worldwide.
        </p>
      </div>

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
            <h3 className="font-medium mb-3">Filter Animals</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Animal Type</label>
                <Select
                  value={filters.subcategory}
                  onValueChange={(value) => updateFilters({ subcategory: value === "all" ? undefined : value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {subcategories.map((subcategory) => (
                      <SelectItem key={subcategory} value={subcategory as string}>
                        {subcategory}
                      </SelectItem>
                    ))}
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
                  Available Now
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
                  Featured Animals
                </label>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSearchInput("")
                  updateFilters({
                    search: undefined,
                    subcategory: undefined,
                    origin: undefined,
                    inStock: undefined,
                    featured: undefined,
                    category: "Live Stock & Animals",
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
                placeholder="Search livestock..."
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
              <p className="text-red-500 mb-4">Error loading livestock: {error}</p>
              <Button onClick={() => updateFilters({ category: "Live Stock & Animals" })}>Try Again</Button>
            </div>
          ) : data && data.products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.products.map((product) => (
                  <Link href={`/products/${product.id}`} key={product.id} className="block">
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="relative h-48 w-full">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                          {!product.inStock && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                              Not Available
                            </div>
                          )}
                          {product.featured && (
                            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{product.origin}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{product.price}</span>
                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{product.subcategory}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-8">
                <div className="text-sm text-muted-foreground">
                  Showing {(data.page - 1) * data.limit + 1} to {Math.min(data.page * data.limit, data.total)} of{" "}
                  {data.total} animals
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
              <p className="text-lg mb-4">No livestock found matching your criteria.</p>
              <Button onClick={() => updateFilters({ category: "Live Stock & Animals" })}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
