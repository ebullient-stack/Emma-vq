'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProductCard } from './product-card'
import { products, categories } from '@/lib/data'
import { Filter, X } from 'lucide-react'

export function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'trending'>('trending')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && priceMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return b.rating - a.rating
  })

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Browse Products</h2>
            <p className="text-muted-foreground">Find and compare agricultural products from verified sellers worldwide</p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Desktop Filters */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <Card className="p-6 space-y-6 sticky top-4">
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    <Button
                      variant={selectedCategory === 'all' ? 'default' : 'outline'}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory('all')}
                    >
                      All Products
                    </Button>
                    {categories.map((cat) => (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.name ? 'default' : 'outline'}
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory(cat.name)}
                      >
                        {cat.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">${priceRange[0]}</span>
                      <span className="text-muted-foreground">${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Sort By</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'trending' as const, label: 'Trending' },
                      { value: 'price-low' as const, label: 'Price: Low to High' },
                      { value: 'price-high' as const, label: 'Price: High to Low' },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant={sortBy === option.value ? 'default' : 'outline'}
                        className="w-full justify-start"
                        onClick={() => setSortBy(option.value)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                className="gap-2 w-full"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>

              {showFilters && (
                <Card className="p-6 mt-4 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Categories</h3>
                    <div className="space-y-2">
                      <Button
                        variant={selectedCategory === 'all' ? 'default' : 'outline'}
                        className="w-full justify-start"
                        onClick={() => {
                          setSelectedCategory('all')
                          setShowFilters(false)
                        }}
                      >
                        All Products
                      </Button>
                      {categories.map((cat) => (
                        <Button
                          key={cat.id}
                          variant={selectedCategory === cat.name ? 'default' : 'outline'}
                          className="w-full justify-start"
                          onClick={() => {
                            setSelectedCategory(cat.name)
                            setShowFilters(false)
                          }}
                        >
                          {cat.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="space-y-3">
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">${priceRange[0]}</span>
                        <span className="text-muted-foreground">${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Sort By</h3>
                    <div className="space-y-2">
                      {[
                        { value: 'trending' as const, label: 'Trending' },
                        { value: 'price-low' as const, label: 'Price: Low to High' },
                        { value: 'price-high' as const, label: 'Price: High to Low' },
                      ].map((option) => (
                        <Button
                          key={option.value}
                          variant={sortBy === option.value ? 'default' : 'outline'}
                          className="w-full justify-start"
                          onClick={() => {
                            setSortBy(option.value)
                            setShowFilters(false)
                          }}
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {sortedProducts.length} of {products.length} products
                </p>
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">No products match your filters. Try adjusting your search.</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
