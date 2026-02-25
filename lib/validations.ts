import { z } from "zod"

// Market Price Schema
export const marketPriceSchema = z.object({
  id: z.number(),
  productName: z.string(),
  category: z.string(),
  currentPrice: z.number(),
  currency: z.string(),
  unit: z.string(),
  priceChange: z.number(),
  priceChangePercentage: z.number(),
  trend: z.enum(["up", "down", "stable"]),
  lastUpdated: z.string(),
})

export type MarketPrice = z.infer<typeof marketPriceSchema>

// Demanded Crop Schema
export const demandedCropSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  demandScore: z.number(),
  demandChange: z.number(),
  trend: z.enum(["up", "down", "stable"]),
  image: z.string().optional(),
})

export type DemandedCrop = z.infer<typeof demandedCropSchema>

// Product Schema
export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  currency: z.string(),
  unit: z.string(),
  category: z.string(),
  origin: z.string(),
  image: z.string(),
  rating: z.number(),
  reviewCount: z.number(),
  inStock: z.boolean(),
  vendorId: z.number().optional(),
})

export type Product = z.infer<typeof productSchema>

// Vendor Schema
export const vendorSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  logo: z.string(),
  coverImage: z.string().optional(),
  location: z.string(),
  rating: z.number(),
  reviewsCount: z.number().optional(),
  productsCount: z.number().optional(),
  responseRate: z.number().optional(),
  responseTime: z.string().optional(),
  yearEstablished: z.number().optional(),
  employeeCount: z.string().optional(),
  verificationStatus: z.enum(["pending", "verified", "rejected"]).optional(),
  storeUrl: z.string(),
  certifications: z.array(z.string()).optional(),
  mainProducts: z.array(z.string()).optional(),
  tradeCapabilities: z.array(z.string()).optional(),
  reviews: z
    .array(
      z.object({
        id: z.number(),
        user: z.string(),
        rating: z.number(),
        comment: z.string(),
        date: z.string(),
      }),
    )
    .optional(),
})

export type Vendor = z.infer<typeof vendorSchema>

// Helper function to validate data against a schema
export function validateData<T>(schema: z.ZodType<T>, data: unknown) {
  try {
    const result = schema.parse(data)
    return { success: true, data: result }
  } catch (error) {
    console.error("Validation error:", error)
    return { success: false, error }
  }
}

// Helper function to validate an array of data against a schema
export function validateArray<T>(schema: z.ZodType<T>, data: unknown[]) {
  try {
    const arraySchema = z.array(schema)
    const result = arraySchema.parse(data)
    return { success: true, data: result }
  } catch (error) {
    console.error("Array validation error:", error)
    return { success: false, error }
  }
}
