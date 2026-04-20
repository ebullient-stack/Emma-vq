'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react'

type Price = {
  amount: number
  currency: 'UGX'
}

const formatPrice = (price: Price) => {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount)
}

const slugify = (value: string) =>
  value.toLowerCase().replace(/\s+/g, '-')

const products = [
  { id: 1, name: 'Fresh Apples', country: 'United States', price: { amount: 9500, currency: 'UGX' }, supplier: 'Fresh Produce Co.', supplierId: 'fresh-produce' },
  { id: 2, name: 'Organic Avocados', country: 'Mexico', price: { amount: 7800, currency: 'UGX' }, supplier: 'Tropical Exports', supplierId: 'tropical-exports' },
  { id: 3, name: 'Arabica Coffee Beans', country: 'Colombia', price: { amount: 15200, currency: 'UGX' }, supplier: 'Colombian Roasts', supplierId: 'colombian-roasts' },
  { id: 4, name: 'Basmati Rice', country: 'India', price: { amount: 6800, currency: 'UGX' }, supplier: 'Happy Farms India', supplierId: 'happy-farms' },
  { id: 5, name: 'Frozen Shrimp', country: 'Vietnam', price: { amount: 18400, currency: 'UGX' }, supplier: 'SeaFood Asia', supplierId: 'seafood-asia' },
  { id: 6, name: 'Cashew Nuts', country: 'Brazil', price: { amount: 21000, currency: 'UGX' }, supplier: 'Nut Traders', supplierId: 'nut-traders' },
  { id: 7, name: 'John Deere 8R Tractor', country: 'Germany', price: { amount: 95000000, currency: 'UGX' }, supplier: 'FarmTech Solutions', supplierId: 'farmtech' },
  { id: 8, name: 'Irrigation System', country: 'Israel', price: { amount: 3200000, currency: 'UGX' }, supplier: 'Water Solutions', supplierId: 'water-solutions' },
  { id: 9, name: 'Pruning Shears Set', country: 'Switzerland', price: { amount: 45000, currency: 'UGX' }, supplier: 'Tool Manufacturers', supplierId: 'tool-mfg' },
  { id: 10, name: 'Tractor Spare Parts Kit', country: 'United States', price: { amount: 870000, currency: 'UGX' }, supplier: 'Parts Direct', supplierId: 'parts-direct' },
  { id: 11, name: 'Holstein Dairy Cows', country: 'Netherlands', price: { amount: 4500000, currency: 'UGX' }, supplier: 'Livestock Genetics', supplierId: 'livestock-genetics' },
  { id: 12, name: 'Angus Beef Cattle', country: 'United States', price: { amount: 5200000, currency: 'UGX' }, supplier: 'Beef Breeders Inc', supplierId: 'beef-breeders' },
  { id: 13, name: 'Merino Sheep', country: 'Australia', price: { amount: 1800000, currency: 'UGX' }, supplier: 'Wool Producers', supplierId: 'wool-producers' },
  { id: 14, name: 'Duroc Breeding Pigs', country: 'Denmark', price: { amount: 2300000, currency: 'UGX' }, supplier: 'Pork Genetics', supplierId: 'pork-genetics' },
  { id: 15, name: 'Leghorn Laying Hens', country: 'Italy', price: { amount: 95000, currency: 'UGX' }, supplier: 'Poultry Farms', supplierId: 'poultry-farms' },
  { id: 16, name: 'Nubian Dairy Goats', country: 'France', price: { amount: 1250000, currency: 'UGX' }, supplier: 'Goat Breeders', supplierId: 'goat-breeders' },
  { id: 17, name: 'Agricultural Land - 50 Hectares', country: 'Ukraine', price: { amount: 350000000, currency: 'UGX' }, supplier: 'Land Holdings', supplierId: 'land-holdings' },
  { id: 18, name: 'Vineyard Estate', country: 'France', price: { amount: 780000000, currency: 'UGX' }, supplier: 'Vineyard Management', supplierId: 'vineyard-mgmt' },
  { id: 19, name: 'Premium NPK Fertilizer', country: 'Germany', price: { amount: 1200000, currency: 'UGX' }, supplier: 'Agro Chemicals', supplierId: 'agro-chemicals' },
  { id: 20, name: 'Organic Seeds Collection', country: 'Netherlands', price: { amount: 650000, currency: 'UGX' }, supplier: 'Seed Specialists', supplierId: 'seed-specialists' },
]

const itemsPerPage = 4

export default function ProductsPage() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage))
  const startIdx = (currentPage - 1) * itemsPerPage
  const currentProducts = filteredProducts.slice(startIdx, startIdx + itemsPerPage)

  const handleContact = (supplier: string, productName: string) => {
    router.push({
      pathname: '/contact',
      query: {
        supplier,
        product: slugify(productName),
      },
    })
  }

  const handleQuote = (supplier: string, productName: string) => {
    router.push({
      pathname: '/quote',
      query: {
        supplier,
        product: slugify(productName),
      },
    })
  }

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span>✓ Optimized for speed</span>
              <span>✓ Cache: {products.length} items</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Agricultural Products
            </h1>
            <p className="text-muted-foreground">
              Discover quality agricultural products from verified suppliers worldwide
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Search
              </Button>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>

              <select className="px-3 py-2 border border-border rounded-lg bg-card text-foreground text-sm">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-40 bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground">📦</div>
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-foreground mb-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3">
                    {product.country}
                  </p>

                  <p className="text-lg font-bold text-primary mb-4">
                    {formatPrice(product.price)}
                  </p>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() =>
                        handleContact(product.supplierId, product.name)
                      }
                    >
                      Contact
                    </Button>

                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() =>
                        handleQuote(product.supplierId, product.name)
                      }
                    >
                      Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}