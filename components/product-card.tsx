import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Clock } from "lucide-react"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block">
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
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Out of Stock</div>
            )}
            {product.featured && (
              <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                Featured
              </div>
            )}
            {product.listingType === "both" && (
              <div className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <ShoppingCart className="h-3 w-3" />
                <Clock className="h-3 w-3" />
                <span>Buy or Hire</span>
              </div>
            )}
            {product.listingType === "hire" && (
              <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>For Hire</span>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{product.origin}</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">{product.price}</span>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{product.category}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
