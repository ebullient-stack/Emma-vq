"use client"

import { useState, useEffect, useCallback } from "react"
import type { Product, ProductFilters, ProductsResponse, Vendor } from "@/types/product"

export function useProducts(initialFilters: ProductFilters = {}) {
  const [data, setData] = useState<ProductsResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<ProductFilters>(initialFilters)

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Build query string from filters
      const queryParams = new URLSearchParams()
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, String(value))
        }
      })

      const response = await fetch(`/api/products?${queryParams.toString()}`)
      if (!response.ok) {
        throw new Error("Failed to fetch products")
      }

      const data = await response.json()
      setData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const updateFilters = useCallback((newFilters: ProductFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }))
  }, [])

  return { data, isLoading, error, filters, updateFilters, refetch: fetchProducts }
}

export function useProduct(id: number) {
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true)
      setError(null)

      try {
        // Fetch product
        const productResponse = await fetch(`/api/products/${id}`)
        if (!productResponse.ok) {
          throw new Error("Failed to fetch product")
        }
        const productData = await productResponse.json()
        setProduct(productData)

        // Fetch related products
        const relatedResponse = await fetch(`/api/products/${id}/related`)
        if (!relatedResponse.ok) {
          throw new Error("Failed to fetch related products")
        }
        const relatedData = await relatedResponse.json()
        setRelatedProducts(relatedData)

        // Fetch vendor information
        if (productData.vendorId) {
          const vendorResponse = await fetch(`/api/vendors/${productData.vendorId}`)
          if (vendorResponse.ok) {
            const vendorData = await vendorResponse.json()
            setVendor(vendorData)
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  return { product, relatedProducts, vendor, isLoading, error }
}

export function useCategories() {
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCategories() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/products/categories")
        if (!response.ok) {
          throw new Error("Failed to fetch categories")
        }
        const data = await response.json()
        setCategories(data.categories)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, isLoading, error }
}

export function useOrigins() {
  const [origins, setOrigins] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchOrigins() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/products/origins")
        if (!response.ok) {
          throw new Error("Failed to fetch origins")
        }
        const data = await response.json()
        setOrigins(data.origins)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrigins()
  }, [])

  return { origins, isLoading, error }
}

export function usePriceRange() {
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPriceRange() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/products/price-range")
        if (!response.ok) {
          throw new Error("Failed to fetch price range")
        }
        const data = await response.json()
        setPriceRange(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPriceRange()
  }, [])

  return { priceRange, isLoading, error }
}
