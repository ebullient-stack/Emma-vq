'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Star, MapPin, Store } from 'lucide-react'
import Link from 'next/link'

// Supplier data with IDs matching your supplier detail pages
const suppliers = [
  {
    id: 'global-harvest',
    name: 'Global Harvest Co.',
    country: 'United States',
    rating: 4.8,
    reviews: 156,
    description: 'Leading supplier of premium fruits and vegetables from the United States, with a focus on sustainable farming.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 'tropical-exports',
    name: 'Tropical Exports Ltd.',
    country: 'Mexico',
    rating: 4.6,
    reviews: 89,
    description: 'Specialized in tropical fruits and organic products from Mexico and Central America.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3649cda?w=400&h=300&fit=crop',
  },
  {
    id: 'african-coffee-traders',
    name: 'African Coffee Traders',
    country: 'Ethiopia',
    rating: 4.9,
    reviews: 134,
    description: 'Direct source of premium coffee beans from Ethiopia, Kenya, and other African countries.',
    image: 'https://images.unsplash.com/photo-1559702285-d28991ba7ee7?w=400&h=300&fit=crop',
  },
  {
    id: 'farmtech-solutions',
    name: 'FarmTech Solutions',
    country: 'Germany',
    rating: 4.7,
    reviews: 178,
    description: 'Leading provider of agricultural machinery, tools, and technology solutions for modern farming.',
    image: 'https://images.unsplash.com/photo-1552664065-5696bb2200f7?w=400&h=300&fit=crop',
  },
]

export function FeaturedSuppliersSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Featured Suppliers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with our trusted suppliers offering high-quality products and excellent service
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {suppliers.map((supplier) => (
            <Card key={supplier.id} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <div className="relative w-full h-40 bg-muted">
                <Image
                  src={supplier.image}
                  alt={supplier.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Verified
                </div>
              </div>

              <CardHeader className="flex-grow">
                <h3 className="font-bold text-foreground mb-2">{supplier.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  {supplier.country}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(supplier.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{supplier.rating}</span>
                  <span className="text-xs text-muted-foreground">({supplier.reviews} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="pb-4">
                <p className="text-sm text-muted-foreground">{supplier.description}</p>
              </CardContent>

              <CardFooter>
                <Link href={`/suppliers/${supplier.id}`} className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                    <Store className="w-4 h-4 mr-2" />
                    Visit Store
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/suppliers">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">View All Suppliers</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}