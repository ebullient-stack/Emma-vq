"use client"

import { useState, useEffect } from "react"
import type { Vendor, Product, ProductFilters } from "@/types/product"

export function useVendors(page = 1, limit = 10) {
  const [vendors, setVendors] = useState<Vendor[]>([])
  const [pagination, setPagination] = useState({
    total: 0,
    page: page,
    limit: limit,
    totalPages: 0,
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVendors = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/vendors?page=${page}&limit=${limit}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setVendors(data.vendors)
        setPagination({
          total: data.total,
          page: data.page,
          limit: data.limit,
          totalPages: data.totalPages,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchVendors()
  }, [page, limit])

  const nextPage = () => {
    if (pagination.page < pagination.totalPages) {
      return pagination.page + 1
    }
    return pagination.page
  }

  const prevPage = () => {
    if (pagination.page > 1) {
      return pagination.page - 1
    }
    return pagination.page
  }

  return {
    vendors,
    pagination,
    isLoading,
    error,
    nextPage,
    prevPage,
  }
}

export function useFeaturedVendors() {
  const [vendors, setVendors] = useState<Vendor[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeaturedVendors = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/vendors/featured")

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setVendors(data.vendors)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeaturedVendors()
  }, [])

  return {
    vendors,
    isLoading,
    error,
  }
}

export function useVendor(id: number) {
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVendor = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/vendors/${id}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setVendor(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchVendor()
    }
  }, [id])

  return {
    vendor,
    isLoading,
    error,
  }
}

export function useVendorByStoreUrl(storeUrl: string) {
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVendor = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/vendors/store/${storeUrl}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setVendor(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    if (storeUrl) {
      fetchVendor()
    }
  }, [storeUrl])

  return {
    vendor,
    isLoading,
    error,
  }
}

export function useVendorProducts(vendorId: number, filters: ProductFilters = {}) {
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [pagination, setPagination] = useState({
    total: 0,
    page: filters.page || 1,
    limit: filters.limit || 10,
    totalPages: 0,
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVendorProducts = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // Build query string from filters
        const params = new URLSearchParams()

        if (filters.search) params.append("search", filters.search)
        if (filters.category) params.append("category", filters.category)
        if (filters.subcategory) params.append("subcategory", filters.subcategory)
        if (filters.origin) params.append("origin", filters.origin)
        if (filters.minPrice !== undefined) params.append("minPrice", filters.minPrice.toString())
        if (filters.maxPrice !== undefined) params.append("maxPrice", filters.maxPrice.toString())
        if (filters.inStock !== undefined) params.append("inStock", filters.inStock.toString())
        if (filters.featured !== undefined) params.append("featured", filters.featured.toString())
        if (filters.sortBy) params.append("sortBy", filters.sortBy)
        if (filters.page) params.append("page", filters.page.toString())
        if (filters.limit) params.append("limit", filters.limit.toString())

        const response = await fetch(`/api/vendors/${vendorId}/products?${params.toString()}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setVendor(data.vendor)
        setProducts(data.products)
        setPagination({
          total: data.total,
          page: data.page,
          limit: data.limit,
          totalPages: data.totalPages,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    if (vendorId) {
      fetchVendorProducts()
    }
  }, [vendorId, filters])

  const updateFilters = (newFilters: Partial<ProductFilters>) => {
    return { ...filters, ...newFilters, page: 1 } // Reset to page 1 when filters change
  }

  const nextPage = () => {
    if (pagination.page < pagination.totalPages) {
      return { ...filters, page: pagination.page + 1 }
    }
    return filters
  }

  const prevPage = () => {
    if (pagination.page > 1) {
      return { ...filters, page: pagination.page - 1 }
    }
    return filters
  }

  return {
    vendor,
    products,
    pagination,
    isLoading,
    error,
    updateFilters,
    nextPage,
    prevPage,
  }
}
