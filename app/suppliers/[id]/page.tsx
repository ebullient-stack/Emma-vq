'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, Mail, MessageCircle, MapPin, ArrowLeft, Share2 } from 'lucide-react'

const supplierDetails = {
  'african-coffee-traders': {
    name: 'African Coffee Traders',
    location: 'Kampala, Uganda',
    rating: 4.9,
    reviews: 134,
    description: 'Direct source of premium coffee beans from Uganda and East Africa.',
    products: 12,
    email: 'trade@africancoffee.com',
    phone: '+256 700 123 456',
    whatsapp: '+256700123456',
    image: 'https://images.unsplash.com/photo-1559702285-d28991ba7ee7?w=800&h=400&fit=crop',
    about:
      'With over 20 years of experience in coffee production and trading, African Coffee Traders is committed to delivering the highest quality coffee beans directly from Uganda’s rich coffee regions. We work with thousands of small-scale farmers across Uganda.',
    products_list: [
      { name: 'Arabica Coffee Beans', price: 'UGX 58,000/kg', rating: 4.9 },
      { name: 'Robusta Coffee Beans', price: 'UGX 44,000/kg', rating: 4.8 },
      { name: 'Specialty Single Origin', price: 'UGX 81,000/kg', rating: 5.0 },
      { name: 'Organic Fair Trade Coffee', price: 'UGX 66,000/kg', rating: 4.9 },
    ],
    certifications: ['Fair Trade Certified', 'Organic Certified', 'ISO 9001:2015', 'UTZ Certified'],
  },

  'global-harvest': {
    name: 'Global Harvest Co.',
    location: 'Entebbe, Uganda',
    rating: 4.8,
    reviews: 156,
    description: 'Leading supplier of premium fruits and vegetables in Uganda.',
    products: 24,
    email: 'contact@globalharvest.com',
    phone: '+256 701 123 456',
    whatsapp: '+256701123456',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    about:
      'Global Harvest Co. is a leader in sustainable agriculture in Uganda, providing fresh fruits and vegetables to local and regional markets.',
    products_list: [
      { name: 'Organic Avocados', price: 'UGX 31,000/kg', rating: 4.9 },
      { name: 'Fresh Strawberries', price: 'UGX 22,000/kg', rating: 4.8 },
      { name: 'Premium Tomatoes', price: 'UGX 16,000/kg', rating: 4.7 },
      { name: 'Organic Lettuce Mix', price: 'UGX 12,000/kg', rating: 4.8 },
    ],
    certifications: ['Organic Certified', 'Global GAP Certified', 'ISO 22000:2018', 'Rainforest Alliance'],
  },

  'premium-livestock': {
    name: 'Premium Livestock Traders',
    location: 'Mbarara, Uganda',
    rating: 4.8,
    reviews: 112,
    description: 'High-quality livestock supplier across Uganda.',
    products: 22,
    email: 'info@premiumlivestock.com',
    phone: '+256 702 123 456',
    whatsapp: '+256702123456',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    about:
      'Premium Livestock Traders provides superior livestock and breeding animals across Uganda while maintaining high welfare standards.',
    products_list: [
      { name: 'Grass-Fed Beef', price: 'UGX 68,000/kg', rating: 4.9 },
      { name: 'Premium Dairy Cattle', price: 'Custom Quote', rating: 4.8 },
      { name: 'Breeding Sheep', price: 'UGX 45,000/head', rating: 4.7 },
      { name: 'Poultry Selection', price: 'UGX 20,000/kg', rating: 4.8 },
    ],
    certifications: ['Uganda Veterinary Certified', 'ISO 9001:2015', 'Animal Welfare Approved'],
  },

  'asian-agro': {
    name: 'Asian Agro Solutions',
    location: 'Kampala, Uganda',
    rating: 4.7,
    reviews: 203,
    description: 'Agricultural imports and processing based in Uganda.',
    products: 32,
    email: 'sales@asianagro.com',
    phone: '+256 703 123 456',
    whatsapp: '+256703123456',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb20989b8?w=800&h=400&fit=crop',
    about:
      'Asian Agro Solutions operates in Uganda supplying rice, spices, and agricultural products to local markets.',
    products_list: [
      { name: 'Jasmine Rice', price: 'UGX 3,400/kg', rating: 4.9 },
      { name: 'Spice Mix Blends', price: 'UGX 45,000/kg', rating: 4.8 },
      { name: 'Premium Turmeric', price: 'UGX 28,000/kg', rating: 4.7 },
      { name: 'Chili Peppers', price: 'UGX 22,000/kg', rating: 4.8 },
    ],
    certifications: ['Uganda FDA Approved', 'Organic Certified', 'ISO 22000'],
  },

  'farmtech-solutions': {
    name: 'FarmTech Solutions',
    location: 'Jinja, Uganda',
    rating: 4.7,
    reviews: 178,
    description: 'Agricultural machinery supplier in Uganda.',
    products: 28,
    email: 'sales@farmtechsolutions.com',
    phone: '+256 704 123 456',
    whatsapp: '+256704123456',
    image: 'https://images.unsplash.com/photo-1552664065-5696bb2200f7?w=800&h=400&fit=crop',
    about:
      'FarmTech Solutions provides modern agricultural machinery and tools across Uganda.',
    products_list: [
      { name: 'Precision Soil Tester', price: 'UGX 1,650,000', rating: 4.9 },
      { name: 'Automated Irrigation System', price: 'UGX 9,250,000', rating: 4.8 },
      { name: 'Crop Monitoring Drone', price: 'UGX 18,500,000', rating: 4.7 },
      { name: 'Smart Pest Detector', price: 'UGX 1,300,000', rating: 4.8 },
    ],
    certifications: ['CE Certified', 'ISO 9001:2015', 'AgriTech Innovation Award'],
  },
}

export default function SupplierStorePage() {
  const params = useParams<{ id: string }>()
  const id = params.id

  const supplier = supplierDetails[id as keyof typeof supplierDetails]

  if (!supplier) {
    return (
      <>
        <NavigationHeader />
        <main className="min-h-screen bg-background">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold mb-4">Supplier Not Found</h1>
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

        {/* Back */}
        <div className="border-b bg-card">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link
              href="/suppliers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Suppliers
            </Link>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">

              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold mb-2">{supplier.name}</h1>

                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(supplier.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-white/30'
                        }`}
                    />
                  ))}
                  <span>{supplier.rating}/5</span>
                  <span className="text-white/80">({supplier.reviews})</span>
                </div>

                <p className="text-blue-100 mb-3">{supplier.description}</p>

                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  {supplier.location}
                </div>
              </div>

              <div className="flex flex-col gap-3">

                <Link href={`/contact?supplier=${id}`}>
                  <Button className="w-full bg-white text-blue-600">
                    <Mail className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </Link>

                <a
                  href={`https://wa.me/${supplier.whatsapp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-white text-blue-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>

                <Button variant="outline" className="w-full text-white border-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>

              </div>

            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left */}
            <div className="lg:col-span-2 space-y-8">

              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{supplier.about}</p>
                </CardContent>
              </Card>

              <div>
                <h2 className="text-2xl font-bold mb-4">Products</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {supplier.products_list.map((product, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">

                        <h3 className="font-bold">{product.name}</h3>

                        <p className="text-xl font-bold text-primary my-2">
                          {product.price}
                        </p>

                        <Link
                          href={`/contact?supplier=${id}&product=${encodeURIComponent(
                            product.name
                          )}`}
                        >
                          <Button className="w-full bg-blue-600 text-white">
                            Get Quote
                          </Button>
                        </Link>

                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

            </div>

            {/* Right */}
            <div className="space-y-6">

              <Card>
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>{supplier.email}</p>
                  <p>{supplier.phone}</p>
                  <p>{supplier.location}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  {supplier.certifications.map((c, i) => (
                    <p key={i} className="text-sm">• {c}</p>
                  ))}
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