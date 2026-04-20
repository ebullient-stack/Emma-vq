'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Search, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { products } from '@/lib/data'

type Price = {
  amount: number
  currency: 'UGX'
  unit?: string
}

const formatPrice = (price?: Price) => {
  if (!price) return 'UGX 0'

  return `${new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount)}${price.unit ? `/${price.unit}` : ''}`
}

const slugify = (value?: string) =>
  value?.toLowerCase().replace(/\s+/g, '-') || ''

const categoryMap: Record<string, string> = {
  'maize-livestock': 'Maize and Livestock',
  'fish-seafood': 'Fish and Seafood',
  'processed-agro': 'Processed and Agro Products',
  'flowers': 'Flowers',
  'fruits-vegetables': 'Fruits & Vegetables',
  'grains-cereals': 'Grains & Cereals',
  'herbs-spices': 'Herbs & Spices',
  'seeds-seedlings': 'Seeds & Seedlings',
  'fertilizers': 'Fertilizers',
  'coffee-tea': 'Coffee & Tea',
  'nuts-seeds': 'Nuts & Seeds',
  'agro-machinery': 'Agro Machinery',
  'agro-input': 'Agro Input',
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  const slug = params?.slug
  const categoryName = categoryMap[slug] || 'Products'

  // ✅ Strict category matching using slug
  const categoryProducts = products.filter((p) => {
    const productCategorySlug = slugify(p.category)
    return productCategorySlug === slug
  })

  // ✅ Safe search filter
  const filteredProducts = categoryProducts.filter((p) =>
    p.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleContact = (supplierId: string, productId: string) => {
    router.push({
      pathname: '/contact',
      query: {
        supplier: supplierId,
        product: productId,
      },
    })
  }

  const handleQuote = (supplierId: string, productId: string) => {
    router.push({
      pathname: '/quote',
      query: {
        supplier: supplierId,
        product: productId,
      },
    })
  }

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Back Link */}
          <Link
            href="/"
            className="text-primary hover:underline flex items-center gap-1 mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {categoryName}
          </h1>

          <p className="text-muted-foreground mb-8">
            Browse all products in the {categoryName} category
          </p>

          {/* Search */}
          <div className="mb-8 flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products in this category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Search
            </Button>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const supplierSlug = slugify(product.supplier) || 'supplier'

                return (
                  <div
                    key={product.id}
                    className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <div className="w-full h-40 bg-muted flex items-center justify-center">
                      <div className="text-muted-foreground text-2xl">📦</div>
                    </div>

                    <div className="p-4 flex-1">
                      <h3 className="font-medium text-foreground mb-2">
                        {product.name}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-2">
                        Supplier: {product.supplier || 'N/A'}
                      </p>

                      <p className="text-sm text-muted-foreground mb-3">
                        {product.origin || 'Unknown origin'}
                      </p>

                      <p className="text-lg font-bold text-primary mb-4">
                        {formatPrice(product.price)}
                      </p>
                    </div>

                    <div className="px-4 pb-4 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          handleContact(supplierSlug, product.id)
                        }
                      >
                        Contact
                      </Button>

                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() =>
                          handleQuote(supplierSlug, product.id)
                        }
                      >
                        Quote
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found in this category
              </p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  )
}