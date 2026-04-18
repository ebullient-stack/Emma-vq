'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, Mail, Phone, MapPin, MessageCircle, ArrowLeft, Share2 } from 'lucide-react'

const supplierDetails = {
  'african-coffee-traders': {
    name: 'African Coffee Traders',
    location: 'Ethiopia',
    rating: 4.9,
    reviews: 134,
    description: 'Direct source of premium coffee beans from Ethiopia, Kenya, and other African countries.',
    products: 12,
    email: 'trade@africancoffee.com',
    phone: '+251 11-123-4567',
    whatsapp: '+251911234567',
    image: 'https://images.unsplash.com/photo-1559702285-d28991ba7ee7?w=800&h=400&fit=crop',
    about: 'With over 20 years of experience in coffee production and trading, African Coffee Traders is committed to delivering the highest quality coffee beans directly from the source. We work with thousands of small-scale farmers across Ethiopia, Kenya, and Uganda to bring you authentic, premium coffee.',
    products_list: [
      { name: 'Arabica Coffee Beans', price: '$15.50/kg', rating: 4.9 },
      { name: 'Robusta Coffee Beans', price: '$12.00/kg', rating: 4.8 },
      { name: 'Specialty Single Origin', price: '$22.00/kg', rating: 5.0 },
      { name: 'Organic Fair Trade Coffee', price: '$18.50/kg', rating: 4.9 },
    ],
    certifications: ['Fair Trade Certified', 'Organic Certified', 'ISO 9001:2015', 'UTZ Certified'],
  },
  'global-harvest': {
    name: 'Global Harvest Co.',
    location: 'United States',
    rating: 4.8,
    reviews: 156,
    description: 'Leading supplier of premium fruits and vegetables from the United States, with a focus on sustainable farming practices.',
    products: 24,
    email: 'contact@globalharvest.com',
    phone: '+1 555-123-4567',
    whatsapp: '+15551234567',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    about: 'Global Harvest Co. is a leader in sustainable agriculture, providing fresh, high-quality fruits and vegetables to markets worldwide. Our commitment to environmental stewardship and quality assurance ensures every product meets the highest standards.',
    products_list: [
      { name: 'Organic Avocados', price: '$8.50/kg', rating: 4.9 },
      { name: 'Fresh Strawberries', price: '$6.00/kg', rating: 4.8 },
      { name: 'Premium Tomatoes', price: '$4.50/kg', rating: 4.7 },
      { name: 'Organic Lettuce Mix', price: '$3.50/kg', rating: 4.8 },
    ],
    certifications: ['USDA Organic', 'Global GAP Certified', 'ISO 22000:2018', 'Rainforest Alliance'],
  },
  'premium-livestock': {
    name: 'Premium Livestock Traders',
    location: 'Ireland',
    rating: 4.8,
    reviews: 112,
    description: 'Specialized in high-quality livestock and breeding animals from across Europe and North America.',
    products: 22,
    email: 'info@premiumlivestock.com',
    phone: '+353 1-234-5678',
    whatsapp: '+35312345678',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    about: 'With expertise spanning multiple livestock species, Premium Livestock Traders provides superior breeding animals and livestock products. We maintain the highest welfare standards for all animals.',
    products_list: [
      { name: 'Grass-Fed Beef', price: '$18.00/kg', rating: 4.9 },
      { name: 'Premium Dairy Cattle', price: 'Custom Quote', rating: 4.8 },
      { name: 'Breeding Sheep', price: '$12.00/head', rating: 4.7 },
      { name: 'Poultry Selection', price: '$5.50/kg', rating: 4.8 },
    ],
    certifications: ['EU Certified', 'ISO 9001:2015', 'Animal Welfare Approved', 'Food Safety Standards'],
  },
  'asian-agro': {
    name: 'Asian Agro Solutions',
    location: 'Thailand',
    rating: 4.7,
    reviews: 203,
    description: 'Premier supplier of rice, spices, and other agricultural products from across Asia.',
    products: 32,
    email: 'sales@asianagro.com',
    phone: '+66 2-123-4567',
    whatsapp: '+66212345678',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb20989b8?w=800&h=400&fit=crop',
    about: 'Asian Agro Solutions is the bridge between Asian agricultural producers and global markets. We supply premium rice, spices, and specialty crops with consistent quality and competitive pricing.',
    products_list: [
      { name: 'Jasmine Rice', price: '$0.85/kg', rating: 4.9 },
      { name: 'Spice Mix Blends', price: '$12.50/kg', rating: 4.8 },
      { name: 'Premium Turmeric', price: '$8.00/kg', rating: 4.7 },
      { name: 'Thai Chili Peppers', price: '$6.50/kg', rating: 4.8 },
    ],
    certifications: ['Thai FDA Approved', 'Organic Certified', 'ISO 22000', 'Export Ready'],
  },
  'farmtech-solutions': {
    name: 'FarmTech Solutions',
    location: 'Germany',
    rating: 4.7,
    reviews: 178,
    description: 'Leading provider of agricultural machinery, tools, and innovative solutions for modern farming.',
    products: 28,
    email: 'sales@farmtechsolutions.com',
    phone: '+49 30-123-45678',
    whatsapp: '+493012345678',
    image: 'https://images.unsplash.com/photo-1552664065-5696bb2200f7?w=800&h=400&fit=crop',
    about: 'FarmTech Solutions delivers cutting-edge agricultural technology and machinery designed to increase farm efficiency and productivity. Our German engineering ensures reliability and performance.',
    products_list: [
      { name: 'Precision Soil Tester', price: '$450.00', rating: 4.9 },
      { name: 'Automated Irrigation System', price: '$2,500.00', rating: 4.8 },
      { name: 'Crop Monitoring Drone', price: '$5,000.00', rating: 4.7 },
      { name: 'Smart Pest Detector', price: '$350.00', rating: 4.8 },
    ],
    certifications: ['CE Certified', 'ISO 9001:2015', 'AgriTech Innovation Award', 'German Quality Seal'],
  },
}

export default function SupplierStorePage() {
  const params = useParams()
  const id = params.id as string
  const supplier = supplierDetails[id as keyof typeof supplierDetails]

  if (!supplier) {
    return (
      <>
        <NavigationHeader />
        <main className="min-h-screen bg-background">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Supplier Not Found</h1>
            <Link href="/suppliers">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Back to Suppliers
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
        {/* Header Navigation */}
        <div className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/suppliers" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to Suppliers
            </Link>
          </div>
        </div>

        {/* Store Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold mb-2">{supplier.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(supplier.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{supplier.rating}/5</span>
                  <span className="text-white/80">({supplier.reviews} reviews)</span>
                </div>
                <p className="text-lg text-blue-100 mb-4">{supplier.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {supplier.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded">
                      {supplier.products} Products
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href={`/contact?supplier=${id}`}>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </Link>
                <Link href={`https://wa.me/${supplier.whatsapp.replace(/\s/g, '')}`} target="_blank">
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </Link>
                <Button variant="outline" className="w-full text-white border-white hover:bg-white/10">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Store
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>About {supplier.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{supplier.about}</p>
                </CardContent>
              </Card>

              {/* Products */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Featured Products</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {supplier.products_list.map((product, index) => (
                    <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-foreground mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-foreground">{product.rating}/5</span>
                        </div>
                        <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                        <Link href={`/contact?supplier=${id}&product=${product.name}`}>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Get Quote
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <a href={`mailto:${supplier.email}`} className="text-primary hover:underline block">
                      {supplier.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <a href={`tel:${supplier.phone}`} className="text-primary hover:underline block">
                      {supplier.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground">{supplier.location}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {supplier.certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-foreground">{cert}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Store Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Products</span>
                      <span className="font-bold text-foreground">{supplier.products}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Reviews</span>
                      <span className="font-bold text-foreground">{supplier.reviews}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Rating</span>
                      <span className="font-bold text-foreground">{supplier.rating}/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
