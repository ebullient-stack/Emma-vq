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
    location: 'Kampala, Uganda',
    rating: 4.9,
    reviews: 134,
    description: 'Direct source of premium coffee beans from Uganda and East Africa.',
    products: 12,
    email: 'trade@africancoffee.com',
    phone: '+256 700 123 456',
    whatsapp: '+256700123456',
    storeUrl: '/suppliers/african-coffee-traders',
    contactUrl: '/contact?supplier=african-coffee-traders',
  },
  {
    id: 2,
    name: 'Global Harvest Co.',
    location: 'Entebbe, Uganda',
    rating: 4.8,
    reviews: 156,
    description: 'Leading supplier of premium fruits and vegetables in Uganda.',
    products: 24,
    email: 'contact@globalharvest.com',
    phone: '+256 701 123 456',
    whatsapp: '+256701123456',
    storeUrl: '/suppliers/global-harvest',
    contactUrl: '/contact?supplier=global-harvest',
  },
  {
    id: 3,
    name: 'Premium Livestock Traders',
    location: 'Mbarara, Uganda',
    rating: 4.8,
    reviews: 112,
    description: 'Specialized in high-quality livestock and breeding animals across Uganda.',
    products: 22,
    email: 'info@premiumlivestock.com',
    phone: '+256 702 123 456',
    whatsapp: '+256702123456',
    storeUrl: '/suppliers/premium-livestock',
    contactUrl: '/contact?supplier=premium-livestock',
  },
  {
    id: 4,
    name: 'Asian Agro Solutions',
    location: 'Kampala, Uganda',
    rating: 4.7,
    reviews: 203,
    description: 'Premier supplier of rice, spices, and agricultural products in Uganda.',
    products: 32,
    email: 'sales@asianagro.com',
    phone: '+256 703 123 456',
    whatsapp: '+256703123456',
    storeUrl: '/suppliers/asian-agro',
    contactUrl: '/contact?supplier=asian-agro',
  },
  {
    id: 5,
    name: 'FarmTech Solutions',
    location: 'Jinja, Uganda',
    rating: 4.7,
    reviews: 178,
    description: 'Agricultural machinery and smart farming solutions in Uganda.',
    products: 28,
    email: 'sales@farmtechsolutions.com',
    phone: '+256 704 123 456',
    whatsapp: '+256704123456',
    storeUrl: '/suppliers/farmtech-solutions',
    contactUrl: '/contact?supplier=farmtech-solutions',
  },
  {
    id: 6,
    name: 'Tropical Exports Ltd.',
    location: 'Gulu, Uganda',
    rating: 4.6,
    reviews: 89,
    description: 'Supplier of tropical fruits and organic produce across Uganda.',
    products: 18,
    email: 'info@tropicalexports.com',
    phone: '+256 705 123 456',
    whatsapp: '+256705123456',
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
    const cleanNumber = phoneNumber.replace(/\s/g, '')
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=I'm interested in your products`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Suppliers Directory (Uganda)
            </h1>
            <p className="text-muted-foreground">
              Find and connect with verified suppliers across Uganda
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search suppliers by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground"
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {sortedSuppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >

                {/* Badge */}
                <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-4">
                  Verified Uganda Supplier
                </span>

                {/* Icon */}
                <div className="w-20 h-20 bg-muted rounded-full mb-4 flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold mb-2">{supplier.name}</h3>

                <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                  <MapPin className="w-4 h-4" />
                  {supplier.location}
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{supplier.rating} ({supplier.reviews})</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {supplier.description}
                </p>

                <p className="text-sm mb-4">
                  <strong>{supplier.products}</strong> products
                </p>

                {/* Contact */}
                <div className="space-y-2 border-t border-b py-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4" />
                    {supplier.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4" />
                    {supplier.phone}
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleVisitStore(supplier.storeUrl)}
                  >
                    <Store className="w-4 h-4 mr-1" />
                    Store
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleContactSupplier(supplier.contactUrl)}
                  >
                    <Mail className="w-4 h-4 mr-1" />
                    Contact
                  </Button>
                </div>

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