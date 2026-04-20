'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, MapPin, Droplet, Star, Search } from 'lucide-react'
import Link from 'next/link'

export default function FieldsPage() {
  const router = useRouter()
  const [filters, setFilters] = useState({
    location: '',
    minSize: '',
    maxPrice: '',
    soilType: '',
    waterAccess: '',
  })

  const [sortBy, setSortBy] = useState('Newest First')
  const [searchTerm, setSearchTerm] = useState('')

  const fields = [
    {
      id: 1,
      title: 'Premium Agricultural Land - Kisumu County',
      location: 'Kisumu County, Nyanza Region',
      size: 25,
      price: 9375000,
      rating: 4.8,
      reviews: 12,
      features: ['Fertile Soil', 'Water Access', 'Road Access'],
      description: 'Fertile black cotton soil perfect for maize, beans, and sugarcane cultivation. Located in a high-rainfall area with...',
      availability: 'Available Now',
      owner: 'Kisumu Agri Land Holdings',
      ownerId: 'kisumu-agri',
    },
    {
      id: 2,
      title: 'Commercial Farming Land - Nakuru',
      location: 'Nakuru County, Rift Valley',
      size: 50,
      price: 18750000,
      rating: 4.9,
      reviews: 18,
      features: ['Modern Irrigation', 'Equipment Storage', 'Processing Facility'],
      description: 'Large-scale farming opportunity in Kenya\'s agricultural heartland. Ideal for wheat, barley, and horticulture crops...',
      availability: 'Available from April 2024',
      owner: 'Nakuru Premium Farms',
      ownerId: 'nakuru-premium',
    },
    {
      id: 3,
      title: 'Organic Farming Plot - Meru',
      location: 'Meru County, Eastern Region',
      size: 10,
      price: 5625000,
      rating: 4.7,
      reviews: 8,
      features: ['Organic Certified', 'Natural Water', 'Mountain Climate'],
      description: 'Certified organic farmland perfect for sustainable agriculture. Rich volcanic soil with natural water sources and mountain...',
      availability: 'Available Now',
      owner: 'Meru Organic Estates',
      ownerId: 'meru-organic',
    },
  ]

  const handleViewDetails = (fieldId: number) => {
    router.push(`/fields/${fieldId}`)
  }

  const handleContactOwner = (ownerId: string, fieldTitle: string) => {
    router.push(`/contact?supplier=${ownerId}&field=${fieldTitle.replace(/\s+/g, '-').toLowerCase()}`)
  }

  const filteredFields = fields.filter(f =>
    f.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <NavigationHeader />
      <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link href="/hire-categories" className="flex items-center gap-2 text-primary hover:underline mb-6">
            <ChevronLeft className="w-4 h-4" />
            Back to Hire Categories
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Agricultural Land for Lease</h1>
            <p className="text-lg text-muted-foreground">
              Find the perfect land for your farming needs across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border border-border sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Location</label>
                    <input
                      type="text"
                      placeholder="Enter county or region"
                      value={filters.location}
                      onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Min Size (acres)</label>
                    <input
                      type="number"
                      placeholder="Minimum acres"
                      value={filters.minSize}
                      onChange={(e) => setFilters(prev => ({ ...prev, minSize: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Max Price (per month)</label>
                    <input
                      type="number"
                      placeholder="Maximum price"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Soil Type</label>
                    <select
                      value={filters.soilType}
                      onChange={(e) => setFilters(prev => ({ ...prev, soilType: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select soil type</option>
                      <option value="loamy">Loamy</option>
                      <option value="clay">Clay</option>
                      <option value="sandy">Sandy</option>
                      <option value="volcanic">Volcanic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Water Access</label>
                    <select
                      value={filters.waterAccess}
                      onChange={(e) => setFilters(prev => ({ ...prev, waterAccess: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Water access</option>
                      <option value="river">River</option>
                      <option value="borehole">Borehole</option>
                      <option value="irrigation">Irrigation System</option>
                      <option value="natural">Natural</option>
                    </select>
                  </div>

                  <Button 
                    onClick={() => {}}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-6">
              {/* Search Bar */}
              <div className="flex gap-3 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by title or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Sort Bar */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">{filteredFields.length} lands available</p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Newest First">Newest First</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Size: Large to Small">Size: Large to Small</option>
                </select>
              </div>

              {/* Field Cards */}
              {filteredFields.map(field => (
                <Card key={field.id} className="border border-border hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Image Placeholder */}
                      <div className="bg-muted h-48 rounded-lg flex items-center justify-center">
                        <MapPin className="w-12 h-12 text-muted-foreground" />
                      </div>

                      {/* Details */}
                      <div className="md:col-span-2">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{field.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <MapPin className="w-4 h-4" />
                              {field.location}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            <span className="font-semibold">{field.rating}</span>
                            <span className="text-sm text-muted-foreground">({field.reviews})</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4">{field.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {field.features.map(feature => (
                            <span key={feature} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {feature}
                            </span>
                          ))}
                          <span className="px-3 py-1 bg-muted text-foreground text-xs rounded-full">+2 more</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{field.size} acres</p>
                            <p className="text-2xl font-bold text-primary">USh {field.price.toLocaleString()}/month</p>
                            <p className="text-xs text-green-600 font-semibold">{field.availability}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              className="border-border hover:bg-muted"
                              onClick={() => handleViewDetails(field.id)}
                            >
                              View Details
                            </Button>
                            <Button 
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                              onClick={() => handleContactOwner(field.ownerId, field.title)}
                            >
                              Contact Owner
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
