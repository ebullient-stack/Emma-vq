'use client'

import { useState } from 'react'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Search, Star, Mail, Phone, MapPin, Store, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const suppliers = [
  {
    id: 1,
    name: 'African Coffee Traders',
    location: 'Ethiopia',
    rating: 4.9,
    reviews: 134,
    description: 'Direct source of premium coffee beans from Ethiopia, Kenya, and other African countries.',
    products: 12,
    email: 'trade@africancoffee.com',
    phone: '+251 11-123-4567',
    whatsapp: '+251911234567',
    storeUrl: '/suppliers/african-coffee-traders',
    contactUrl: '/contact?supplier=african-coffee',
  },
  {
    id: 2,
    name: 'Global Harvest Co.',
    location: 'United States',
    rating: 4.8,
    reviews: 156,
    description: 'Leading supplier of premium fruits and vegetables from the United States, with a focus on sustainable farming practices.',
    products: 24,
    email: 'contact@globalharvest.com',
    phone: '+1 555-123-4567',
    whatsapp: '+15551234567',
    storeUrl: '/suppliers/global-harvest',
    contactUrl: '/contact?supplier=global-harvest',
  },
  {
    id: 3,
    name: 'Premium Livestock Traders',
    location: 'Ireland',
    rating: 4.8,
    reviews: 112,
    description: 'Specialized in high-quality livestock and breeding animals from across Europe and North America.',
    products: 22,
    email: 'info@premiumlivestock.com',
    phone: '+353 1-234-5678',
    whatsapp: '+35312345678',
    storeUrl: '/suppliers/premium-livestock',
    contactUrl: '/contact?supplier=premium-livestock',
  },
  {
    id: 4,
    name: 'Asian Agro Solutions',
    location: 'Thailand',
    rating: 4.7,
    reviews: 203,
    description: 'Premier supplier of rice, spices, and other agricultural products from across Asia.',
    products: 32,
    email: 'sales@asianagro.com',
    phone: '+66 2-123-4567',
    whatsapp: '+66212345678',
    storeUrl: '/suppliers/asian-agro',
    contactUrl: '/contact?supplier=asian-agro',
  },
  {
    id: 5,
    name: 'FarmTech Solutions',
    location: 'Germany',
    rating: 4.7,
    reviews: 178,
    description: 'Leading provider of agricultural machinery, tools, and innovative solutions for modern farming.',
    products: 28,
    email: 'sales@farmtechsolutions.com',
    phone: '+49 30-123-45678',
    whatsapp: '+493012345678',
    storeUrl: '/suppliers/farmtech-solutions',
    contactUrl: '/contact?supplier=farmtech',
  },
  {
    id: 6,
    name: 'Tropical Exports Ltd.',
    location: 'Mexico',
    rating: 4.6,
    reviews: 89,
    description: 'Specialized in tropical fruits and organic products from Mexico and Central America.',
    products: 18,
    email: 'info@tropicalexports.com',
    phone: '+52 555-987-6543',
    whatsapp: '+525559876543',
    storeUrl: '/suppliers/tropical-exports',
    contactUrl: '/contact?supplier=tropical-exports',
  },
]

export default function SuppliersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('highest-rated')

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedSuppliers = [...filteredSuppliers].sort((a, b) => {
    if (sortBy === 'highest-rated') return b.rating - a.rating
    if (sortBy === 'most-reviewed') return b.reviews - a.reviews
    return 0
  })

  const handleVisitStore = (storeUrl: string) => {
    window.location.href = storeUrl
  }

  const handleContactSupplier = (contactUrl: string) => {
    window.location.href = contactUrl
  }

  const handleWhatsApp = (phoneNumber: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=I'm interested in your products`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Suppliers Directory</h1>
            <p className="text-muted-foreground">Find and connect with verified suppliers from around the world</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search suppliers by name, product, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-3 border border-border rounded-lg bg-card text-foreground text-sm"
            >
              <option value="highest-rated">Highest Rated</option>
              <option value="most-reviewed">Most Reviewed</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* Suppliers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSuppliers.map((supplier) => (
              <div key={supplier.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
                {/* Verified Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Verified
                  </span>
                </div>

                {/* Avatar */}
                <div className="w-20 h-20 bg-muted rounded-full mb-4 flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>

                {/* Company Info */}
                <h3 className="text-lg font-bold text-foreground mb-2">{supplier.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                  <MapPin className="w-4 h-4" />
                  {supplier.location}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">
                    {supplier.rating} ({supplier.reviews} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{supplier.description}</p>

                {/* Products Count */}
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium">{supplier.products} products</span>
                </p>

                {/* Contact Info */}
                <div className="space-y-2 mb-4 py-3 border-t border-b border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>{supplier.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{supplier.phone}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleVisitStore(supplier.storeUrl)}
                    className="flex items-center justify-center gap-1"
                  >
                    <Store className="w-4 h-4" />
                    Visit Store
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleContactSupplier(supplier.contactUrl)}
                    className="flex items-center justify-center gap-1"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </Button>
                </div>

                {/* WhatsApp Button */}
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => handleWhatsApp(supplier.whatsapp)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
