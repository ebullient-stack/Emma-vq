'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Filter, ArrowLeft } from 'lucide-react'

type Price = {
  amount: number
  currency: 'UGX'
  unit: 'kg'
}

type Product = {
  id: string
  name: string
  supplier: string
  supplierId: string
  price: Price
  rating: number
  reviews: number
  image: string
  description: string
}

type Category = {
  name: string
  description: string
  products: Product[]
}

const formatPrice = (price: Price) => {
  return `${new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount)}/${price.unit}`
}

const productCategories: Record<string, Category> = {
  'fruits-vegetables': {
    name: 'Fruits & Vegetables',
    description: 'Fresh, organic, and seasonal fruits and vegetables from around the world',
    products: [
      {
        id: 'fruits-1',
        name: 'Fresh Organic Apples',
        supplier: 'Global Harvest Co.',
        supplierId: 'global-harvest',
        price: { amount: 5500, currency: 'UGX', unit: 'kg' },
        rating: 4.8,
        reviews: 45,
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop',
        description: 'Crispy, sweet apples from sustainable orchards',
      },
      {
        id: 'fruits-2',
        name: 'Organic Avocados',
        supplier: 'Tropical Exports Ltd.',
        supplierId: 'tropical-exports',
        price: { amount: 2000, currency: 'UGX', unit: 'kg' },
        rating: 4.9,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
        description: 'Creamy avocados from Mexico',
      },
      {
        id: 'fruits-3',
        name: 'Premium Tomatoes',
        supplier: 'Fresh Produce Co.',
        supplierId: 'fresh-produce',
        price: { amount: 4200, currency: 'UGX', unit: 'kg' },
        rating: 4.7,
        reviews: 38,
        image: 'https://images.unsplash.com/photo-1592841494611-63a3e4a0f89e?w=400&h=300&fit=crop',
        description: 'Juicy, vine-ripened tomatoes',
      },
      {
        id: 'fruits-4',
        name: 'Organic Lettuce Mix',
        supplier: 'Global Harvest Co.',
        supplierId: 'global-harvest',
        price: { amount: 3000, currency: 'UGX', unit: 'kg' },
        rating: 4.6,
        reviews: 29,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
        description: 'Fresh mixed salad greens',
      },
    ],
  },

  'coffee-tea': {
    name: 'Coffee & Tea',
    description: 'Premium coffee beans and tea leaves from the finest growing regions',
    products: [
      {
        id: 'coffee-1',
        name: 'Arabica Coffee Beans',
        supplier: 'African Coffee Traders',
        supplierId: 'african-coffee-traders',
        price: { amount: 9800, currency: 'UGX', unit: 'kg' },
        rating: 4.9,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1559702285-d28991ba7ee7?w=400&h=300&fit=crop',
        description: 'Premium Ethiopian Arabica beans',
      },
      {
        id: 'coffee-2',
        name: 'Robusta Coffee Beans',
        supplier: 'African Coffee Traders',
        supplierId: 'african-coffee-traders',
        price: { amount: 9200, currency: 'UGX', unit: 'kg' },
        rating: 4.8,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=400&h=300&fit=crop',
        description: 'Bold, full-bodied Robusta beans',
      },
      {
        id: 'coffee-3',
        name: 'Black Tea Premium',
        supplier: 'Tea Plantations Ltd.',
        supplierId: 'tea-plantations',
        price: { amount: 7600, currency: 'UGX', unit: 'kg' },
        rating: 4.7,
        reviews: 42,
        image: 'https://images.unsplash.com/photo-1597318086827-ffb008efc2f0?w=400&h=300&fit=crop',
        description: 'Pure black tea from highland plantations',
      },
      {
        id: 'coffee-4',
        name: 'Green Tea Organic',
        supplier: 'Tea Plantations Ltd.',
        supplierId: 'tea-plantations',
        price: { amount: 8000, currency: 'UGX', unit: 'kg' },
        rating: 4.9,
        reviews: 73,
        image: 'https://images.unsplash.com/photo-1597318086827-ffb008efc2f0?w=400&h=300&fit=crop',
        description: 'Organic green tea with antioxidants',
      },
    ],
  },
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params?.slug as string

  const category: Category | null =
    slug && slug in productCategories
      ? productCategories[slug]
      : null

  if (!category) {
    return (
      <>
        <NavigationHeader />
        <main className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Category Not Found
            </h1>
            <Link href="/products">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Category Hero */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">
              {category.name}
            </h1>
            <p className="text-lg text-green-100">
              {category.description}
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Available Products
              </h2>
              <p className="text-muted-foreground">
                Showing {category.products.length} products in this category
              </p>
            </div>

            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          {category.products.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              No products available in this category.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <Card
                  key={product.id}
                  className="border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform"
                    />
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground mb-1 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-muted-foreground mb-3">
                      {product.supplier}
                    </p>

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.round(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                            }`}
                        />
                      ))}

                      <span className="text-xs text-muted-foreground ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <p className="text-lg font-bold text-primary mb-3">
                      {formatPrice(product.price)}
                    </p>

                    <div className="space-y-2">
                      <Link
                        href={{
                          pathname: '/contact',
                          query: {
                            supplier: product.supplierId,
                            product: product.id,
                          },
                        }}
                        className="w-full block"
                      >
                        <Button size="sm" variant="outline" className="w-full">
                          Contact
                        </Button>
                      </Link>

                      <Link
                        href={{
                          pathname: '/quote',
                          query: {
                            supplier: product.supplierId,
                            product: product.id,
                          },
                        }}
                        className="w-full block"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}