'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Search, ChevronLeft } from 'lucide-react'

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

const tools = [
  { id: 1, name: 'Hand Pump Kit', country: 'China', price: { amount: 85000, currency: 'UGX' }, supplier: 'Tool Suppliers Co.', supplierId: 'tool-suppliers' },
  { id: 2, name: 'Garden Tool Set', country: 'India', price: { amount: 120000, currency: 'UGX' }, supplier: 'Agri Tools Ltd', supplierId: 'agri-tools' },
  { id: 3, name: 'Pruning Shears Set', country: 'Switzerland', price: { amount: 45000, currency: 'UGX' }, supplier: 'Precision Tools', supplierId: 'precision-tools' },
  { id: 4, name: 'Spade and Shovel Collection', country: 'Poland', price: { amount: 98000, currency: 'UGX' }, supplier: 'Farm Equipment Co.', supplierId: 'farm-equipment' },
]

export default function ToolsPage() {
  const router = useRouter()
  const [priceRange, setPriceRange] = useState(150000)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.country.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesPrice = tool.price.amount <= priceRange

      return matchesSearch && matchesPrice
    })
  }, [searchTerm, priceRange])

  const handleContact = (supplierId: string, toolName: string) => {
    router.push({
      pathname: '/contact',
      query: {
        supplier: supplierId,
        tool: slugify(toolName),
      },
    })
  }

  const handleQuote = (supplierId: string, toolName: string) => {
    router.push({
      pathname: '/quote',
      query: {
        supplier: supplierId,
        tool: slugify(toolName),
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
            Back to Hire Categories
          </Link>

          {/* Header */}
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Browse Tools
          </h1>
          <p className="text-muted-foreground mb-8">
            Discover a wide range of agricultural tools available for rent or purchase
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-4 sticky top-24">
                <h2 className="text-lg font-bold text-foreground mb-4">Filters</h2>

                {/* Tool Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tool Type
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm">
                    <option>All Types</option>
                    <option>Hand Tools</option>
                    <option>Power Tools</option>
                    <option>Irrigation Tools</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Price Range
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="150000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    UGX 0 - UGX {priceRange.toLocaleString()}
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="mb-6 space-y-2">
                  <label className="flex items-center gap-2 text-sm text-foreground">
                    <input type="checkbox" className="w-4 h-4 rounded border-border" />
                    In Stock
                  </label>
                  <label className="flex items-center gap-2 text-sm text-foreground">
                    <input type="checkbox" className="w-4 h-4 rounded border-border" />
                    New Condition
                  </label>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground text-sm"
                  />
                </div>

                {/* Rental Date */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Rental Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Apply Filters
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">

              {/* Search and Sort */}
              <div className="mb-6 flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Search
                </Button>

                <select className="px-3 py-2 border border-border rounded-lg bg-card text-foreground text-sm">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="w-full h-48 bg-muted flex items-center justify-center">
                      <div className="text-muted-foreground text-4xl">🔧</div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-medium text-foreground mb-2">
                        {tool.name}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-1">
                        Supplier: {tool.supplier}
                      </p>

                      <p className="text-sm text-muted-foreground mb-3">
                        {tool.country}
                      </p>

                      <p className="text-lg font-bold text-primary mb-4">
                        {formatPrice(tool.price)}
                      </p>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() =>
                            handleContact(tool.supplierId, tool.name)
                          }
                        >
                          Contact
                        </Button>

                        <Button
                          size="sm"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() =>
                            handleQuote(tool.supplierId, tool.name)
                          }
                        >
                          Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No tools found matching your search
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}