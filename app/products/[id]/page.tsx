"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useProduct } from "@/hooks/use-products"
import { SupplierContactModal } from "@/components/supplier-contact-modal"
import { useCurrencyConverter } from "@/contexts/user-preferences-context"
import Link from "next/link"
import { ArrowLeft, Info, Calendar, Mail, Phone, Globe } from "lucide-react"
import { ProductCard } from "@/components/product-card"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const { product, relatedProducts, vendor, isLoading, error } = useProduct(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState<"buy" | "hire">("buy")
  const { convertPriceString } = useCurrencyConverter()

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <Skeleton className="h-[400px] w-full rounded-lg" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((_, index) => (
                <Skeleton key={index} className="h-24 w-full rounded-md" />
              ))}
            </div>
          </div>

          <div>
            <Skeleton className="h-10 w-3/4 mb-2" />
            <Skeleton className="h-6 w-1/2 mb-4" />
            <Skeleton className="h-8 w-1/4 mb-4" />
            <Skeleton className="h-24 w-full mb-6" />
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Skeleton className="h-16 w-full rounded-lg" />
              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Error Loading Product</h1>
        <p className="text-muted-foreground mb-6">{error || "Product not found"}</p>
        <Button asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    )
  }

  const canBuy = product.listingType === "sell" || product.listingType === "both"
  const canHire = product.listingType === "hire" || product.listingType === "both"

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/products"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden border">
            <Image
              src={product.images?.[selectedImage] || product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            {!product.inStock && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md">Out of Stock</div>
            )}
            {product.listingType === "both" && (
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-md">Buy or Hire</div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {(product.images || [product.image]).map((image, index) => (
              <div
                key={index}
                className={`relative h-24 rounded-md overflow-hidden cursor-pointer border-2 ${
                  selectedImage === index ? "border-primary" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="outline">{product.category}</Badge>
              {product.subcategory && <Badge variant="outline">{product.subcategory}</Badge>}
              <span className="text-sm text-muted-foreground">Origin: {product.origin}</span>
            </div>

            {canBuy && canHire && (
              <div className="mb-6">
                <Tabs
                  defaultValue="buy"
                  className="w-full"
                  onValueChange={(value) => setActiveTab(value as "buy" | "hire")}
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="buy">Buy</TabsTrigger>
                    <TabsTrigger value="hire">Hire</TabsTrigger>
                  </TabsList>
                  <TabsContent value="buy" className="pt-4">
                    <div className="text-2xl font-bold mb-4">{convertPriceString(product.price)}</div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 bg-muted rounded-lg">
                        <span className="text-sm text-muted-foreground">Minimum Order</span>
                        <p className="font-medium">{product.minOrder}</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <span className="text-sm text-muted-foreground">Lead Time</span>
                        <p className="font-medium">{product.leadTime}</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="hire" className="pt-4">
                    {product.hirePrice && (
                      <>
                        <div className="text-2xl font-bold mb-4">
                          {convertPriceString(product.hirePrice)}/{product.hirePriceUnit}
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="p-3 bg-muted rounded-lg">
                            <span className="text-sm text-muted-foreground">Availability</span>
                            <p className="font-medium">
                              {product.hireAvailability?.availableNow ? "Available Now" : "Check Dates"}
                            </p>
                          </div>
                          <div className="p-3 bg-muted rounded-lg">
                            <span className="text-sm text-muted-foreground">Includes Operator</span>
                            <p className="font-medium">{product.includesOperator ? "Yes" : "No"}</p>
                          </div>
                        </div>
                        {product.hireTerms && (
                          <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg mb-6">
                            <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-blue-700 mb-1">Hire Terms</p>
                              <p className="text-sm text-blue-600">{product.hireTerms}</p>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {/* If only one option is available, show it without tabs */}
            {canBuy && !canHire && (
              <>
                <div className="text-2xl font-bold mb-4">{convertPriceString(product.price)}</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Minimum Order</span>
                    <p className="font-medium">{product.minOrder}</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Lead Time</span>
                    <p className="font-medium">{product.leadTime}</p>
                  </div>
                </div>
              </>
            )}

            {!canBuy && canHire && product.hirePrice && (
              <>
                <div className="text-2xl font-bold mb-4">
                  {convertPriceString(product.hirePrice)}/{product.hirePriceUnit}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Availability</span>
                    <p className="font-medium">
                      {product.hireAvailability?.availableNow ? "Available Now" : "Check Dates"}
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Includes Operator</span>
                    <p className="font-medium">{product.includesOperator ? "Yes" : "No"}</p>
                  </div>
                </div>
                {product.hireTerms && (
                  <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg mb-6">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-700 mb-1">Hire Terms</p>
                      <p className="text-sm text-blue-600">{product.hireTerms}</p>
                    </div>
                  </div>
                )}
              </>
            )}

            <p className="mb-6">{product.description}</p>
          </div>

          <div className="space-y-4">
            {canBuy && activeTab === "buy" && (
              <Button size="lg" className="w-full" disabled={!product.inStock}>
                {product.inStock ? "Request Quote" : "Out of Stock"}
              </Button>
            )}

            {canHire && activeTab === "hire" && (
              <Button size="lg" className="w-full" disabled={!product.hireAvailability?.availableNow} asChild>
                <Link href={`/hire/contact?product=${product.id}`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  {product.hireAvailability?.availableNow ? "Book Now" : "Check Availability"}
                </Link>
              </Button>
            )}

            {vendor && (
              <SupplierContactModal vendor={vendor} productName={product.name}>
                <Button variant="outline" size="lg" className="w-full">
                  Contact Supplier
                </Button>
              </SupplierContactModal>
            )}

            <Button variant="ghost" size="lg" className="w-full">
              Add to Favorites
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="specifications" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Packaging</TabsTrigger>
          <TabsTrigger value="supplier">Supplier Information</TabsTrigger>
        </TabsList>
        <TabsContent value="specifications" className="p-4 border rounded-lg mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications?.map((spec, index) => (
              <div key={index} className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="font-medium">{spec.name}</span>
                <span>{spec.value}</span>
              </div>
            )) || <p className="text-muted-foreground">No specifications available for this product.</p>}
          </div>
        </TabsContent>
        <TabsContent value="shipping" className="p-4 border rounded-lg mt-4">
          <div className="prose max-w-none">
            <h3>Shipping Information</h3>
            <p>
              Standard shipping is available worldwide. Shipping costs are calculated based on weight and destination.
            </p>

            <h3>Packaging Details</h3>
            <p>
              Products are packaged to maintain freshness and quality during transit. Each package contains the quantity
              specified in your order.
            </p>

            <h3>Customs & Import Duties</h3>
            <p>
              Buyers are responsible for any customs duties and import taxes that may apply. We provide all necessary
              documentation to facilitate the customs clearance process.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="supplier" className="p-4 border rounded-lg mt-4">
          {vendor ? (
            <div className="prose max-w-none">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border">
                  <Image src={vendor.logo || "/placeholder.svg"} alt={vendor.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{vendor.name}</h3>
                  <p className="text-muted-foreground">
                    {vendor.country} · Joined {new Date(vendor.joinedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <p>{vendor.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">Verification Status</span>
                  <p className="font-medium">
                    <Badge variant={vendor.verificationStatus === "verified" ? "success" : "outline"}>
                      {vendor.verificationStatus.charAt(0).toUpperCase() + vendor.verificationStatus.slice(1)}
                    </Badge>
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <p className="font-medium flex items-center">
                    {vendor.rating} / 5
                    <span className="ml-2 flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(vendor.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{vendor.contactEmail}</span>
                  </li>
                  {vendor.contactPhone && (
                    <li className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{vendor.contactPhone}</span>
                    </li>
                  )}
                  {vendor.website && (
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={vendor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {vendor.website}
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <div className="mt-6">
                <Button asChild>
                  <Link href={`/vendors/${vendor.storeUrl}`}>View All Products from this Supplier</Link>
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">Supplier information not available.</p>
          )}
        </TabsContent>
      </Tabs>

      {relatedProducts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
