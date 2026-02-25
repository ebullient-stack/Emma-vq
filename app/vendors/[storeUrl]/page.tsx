"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useVendorByStoreUrl, useVendorProducts } from "@/hooks/use-vendors"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ProductCard } from "@/components/product-card"
import { Search, Star, MapPin, Mail, Phone, Globe, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useCurrencyConverter } from "@/contexts/user-preferences-context"

export default function VendorStorePage({ params }: { params: { storeUrl: string } }) {
  const { storeUrl } = params
  const { vendor, isLoading: vendorLoading, error: vendorError } = useVendorByStoreUrl(storeUrl)
  const { convertPriceString } = useCurrencyConverter()

  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
    sortBy: "newest" as const,
    category: "",
  })

  const {
    products,
    pagination,
    isLoading: productsLoading,
    error: productsError,
    updateFilters,
    nextPage,
    prevPage,
  } = useVendorProducts(vendor?.id || 0, filters)

  const [searchQuery, setSearchQuery] = useState("")
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    if (products && products.length > 0) {
      // Extract unique categories from products
      const uniqueCategories = Array.from(new Set(products.map((product) => product.category)))
      setCategories(uniqueCategories)
    }
  }, [products])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setFilters(updateFilters({ search: searchQuery }))
  }

  const handleCategoryChange = (category: string) => {
    setFilters(updateFilters({ category }))
  }

  const handleSortChange = (sortBy: string) => {
    setFilters(updateFilters({ sortBy: sortBy as any }))
  }

  if (vendorLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-10 w-1/3 mb-4" />
          <Skeleton className="h-6 w-2/3 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <Skeleton className="h-64 w-full rounded-lg mb-4" />
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <Skeleton className="h-24 w-full" />
            </div>
            <div className="md:col-span-3">
              <Skeleton className="h-8 w-1/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-64 w-full rounded-lg" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (vendorError || !vendor) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Error Loading Supplier</h1>
        <p className="text-muted-foreground mb-6">{vendorError || "Supplier not found"}</p>
        <Button asChild>
          <Link href="/vendors">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Suppliers
          </Link>
        </Button>
      </div>
    )
  }

  // Ensure these properties exist with default values if they're undefined
  const certifications = vendor.certifications || []
  const mainProducts = vendor.mainProducts || []
  const reviewsCount = vendor.reviewsCount || 0
  const productsCount = vendor.productsCount || 0
  const responseRate = vendor.responseRate || 0
  const responseTime = vendor.responseTime || "N/A"
  const memberSince = vendor.memberSince || "N/A"
  const email = vendor.contactEmail || vendor.email || "N/A"
  const phone = vendor.contactPhone || vendor.phone || "N/A"
  const website = vendor.website || "#"
  const rating = vendor.rating || 0

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/vendors"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Suppliers
      </Link>

      {/* Vendor Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative h-24 w-24 rounded-full overflow-hidden border">
            <Image src={vendor.logo || "/placeholder.svg"} alt={vendor.name} fill className="object-cover" />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{vendor.name}</h1>
                <div className="flex items-center mt-2 gap-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">{vendor.country}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm font-medium">
                      {rating} ({reviewsCount} reviews)
                    </span>
                  </div>
                  {vendor.verificationStatus === "verified" && (
                    <Badge className="bg-green-50 text-green-700 border-green-200">Verified Supplier</Badge>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="sm" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button size="sm">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Request Quote
                </Button>
              </div>
            </div>

            <p className="mt-4 text-muted-foreground">{vendor.description}</p>

            {certifications.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="py-1">
                    {cert}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-lg mb-4">Store Information</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Contact</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <Mail className="h-4 w-4 text-muted-foreground mr-2 mt-0.5" />
                      <span>{email}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-4 w-4 text-muted-foreground mr-2 mt-0.5" />
                      <span>{phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-4 w-4 text-muted-foreground mr-2 mt-0.5" />
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Business Information</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Member since:</span>
                      <span>{memberSince}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Products:</span>
                      <span>{productsCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response rate:</span>
                      <span>{responseRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response time:</span>
                      <span>{responseTime}</span>
                    </div>
                  </div>
                </div>

                {mainProducts.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Main Products</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {mainProducts.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6">Products ({productsCount})</h2>

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <form onSubmit={handleSearch} className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" variant="ghost" className="absolute right-0 top-0 h-full px-3">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>

              <div className="flex gap-2">
                <Select onValueChange={handleCategoryChange} value={filters.category || ""}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select onValueChange={handleSortChange} defaultValue={filters.sortBy}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            {productsLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} className="h-64 w-full rounded-lg" />
                ))}
              </div>
            ) : productsError ? (
              <div className="text-center py-12">
                <p className="text-red-500 mb-4">Error loading products: {productsError}</p>
                <Button onClick={() => setFilters(updateFilters({}))}>Try Again</Button>
              </div>
            ) : products && products.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-8">
                  <div className="text-sm text-muted-foreground">
                    Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                    {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} products
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFilters(prevPage())}
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
                      onClick={() => setFilters(nextPage())}
                      disabled={pagination.page >= pagination.totalPages}
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
                <p className="text-lg mb-4">No products found.</p>
                <Button onClick={() => setFilters(updateFilters({}))}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
