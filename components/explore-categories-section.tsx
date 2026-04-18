'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const categories = [
  { name: 'Maize and Livestock', slug: 'maize-livestock' },
  { name: 'Fish and Seafood', slug: 'fish-seafood' },
  { name: 'Processed and Agro Products', slug: 'processed-agro' },
  { name: 'Flowers', slug: 'flowers' },
  { name: 'Fruits & Vegetables', slug: 'fruits-vegetables' },
  { name: 'Grains & Cereals', slug: 'grains-cereals' },
  { name: 'Herbs & Spices', slug: 'herbs-spices' },
  { name: 'Seeds & Seedlings', slug: 'seeds-seedlings' },
  { name: 'Fertilizers', slug: 'fertilizers' },
  { name: 'Coffee & Tea', slug: 'coffee-tea' },
  { name: 'Nuts & Seeds', slug: 'nuts-seeds' },
  { name: 'Agro Machinery', slug: 'agro-machinery' },
  { name: 'Agro Input', slug: 'agro-input' },
]

const products = [
  {
    id: 1,
    name: 'Maize and Livestock',
    count: '7+ products',
    price: 'USh 6750000.00',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Holstein Dairy Cows',
    price: 'USh 8250000.00',
    image: 'https://images.unsplash.com/photo-1552525881-721f78ad2d7b?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Angus Beef Cattle',
    price: 'USh 1312500.00',
    image: 'https://images.unsplash.com/photo-1555081732-14653e6b9ed4?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Merino Sheep',
    price: 'USh 1312500.00',
    image: 'https://images.unsplash.com/photo-1500595046891-0573ffd4c5a5?w=400&h=300&fit=crop',
  },
]

export function ExploreCategoriesSection() {
  const [activeCategory, setActiveCategory] = useState('maize-livestock')

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Explore Product Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive catalog of food and agricultural products from around the world.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/category/${category.slug}`}
            >
              <button
                onClick={() => setActiveCategory(category.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.slug
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <div className="relative w-full h-48 bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="flex-grow">
                <h3 className="font-semibold text-foreground">{product.name}</h3>
                {product.count && <p className="text-sm text-muted-foreground">{product.count}</p>}
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-primary font-semibold">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/products/${product.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
