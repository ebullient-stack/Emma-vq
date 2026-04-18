'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Filter, ArrowLeft } from 'lucide-react'

const productCategories = {
  'fruits-vegetables': {
    name: 'Fruits & Vegetables',
    description: 'Fresh, organic, and seasonal fruits and vegetables from around the world',
    products: [
      {
        id: 1,
        name: 'Fresh Organic Apples',
        supplier: 'Global Harvest Co.',
        supplierId: 'global-harvest',
        price: '$4.50/kg',
        rating: 4.8,
        reviews: 45,
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop',
        description: 'Crispy, sweet apples from sustainable orchards'
      },
      {
        id: 2,
        name: 'Organic Avocados',
        supplier: 'Tropical Exports Ltd.',
        supplierId: 'tropical-exports',
        price: '$8.50/kg',
        rating: 4.9,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
        description: 'Creamy avocados from Mexico'
      },
      {
        id: 3,
        name: 'Premium Tomatoes',
        supplier: 'Fresh Produce Co.',
        supplierId: 'fresh-produce',
        price: '$3.20/kg',
        rating: 4.7,
        reviews: 38,
        image: 'https://images.unsplash.com/photo-1592841494611-63a3e4a0f89e?w=400&h=300&fit=crop',
        description: 'Juicy, vine-ripened tomatoes'
      },
      {
        id: 4,
        name: 'Organic Lettuce Mix',
        supplier: 'Global Harvest Co.',
        supplierId: 'global-harvest',
        price: '$2.80/kg',
        rating: 4.6,
        reviews: 29,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
        description: 'Fresh mixed salad greens'
      },
    ]
  },
  'coffee-tea': {
    name: 'Coffee & Tea',
    description: 'Premium coffee beans and tea leaves from the finest growing regions',
    products: [
      {
        id: 5,
        name: 'Arabica Coffee Beans',
        supplier: 'African Coffee Traders',
        supplierId: 'african-coffee-traders',
        price: '$15.50/kg',
        rating: 4.9,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1559702285-d28991ba7ee7?w=400&h=300&fit=crop',
        description: 'Premium Ethiopian Arabica beans'
      },
      {
        id: 6,
        name: 'Robusta Coffee Beans',
        supplier: 'African Coffee Traders',
        supplierId: 'african-coffee-traders',
        price: '$12.00/kg',
        rating: 4.8,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=400&h=300&fit=crop',
        description: 'Bold, full-bodied Robusta beans'
      },
      {
        id: 7,
        name: 'Black Tea Premium',
        supplier: 'Tea Plantations Ltd.',
        supplierId: 'tea-plantations',
        price: '$6.50/kg',
        rating: 4.7,
        reviews: 42,
        image: 'https://images.unsplash.com/photo-1597318086827-ffb008efc2f0?w=400&h=300&fit=crop',
        description: 'Pure black tea from highland plantations'
      },
      {
        id: 8,
        name: 'Green Tea Organic',
        supplier: 'Tea Plantations Ltd.',
        supplierId: 'tea-plantations',
        price: '$8.00/kg',
        rating: 4.9,
        reviews: 73,
        image: 'https://images.unsplash.com/photo-1597318086827-ffb008efc2f0?w=400&h=300&fit=crop',
        description: 'Organic green tea with antioxidants'
      },
    ]
  },
  'grains-cereals': {
    name: 'Grains & Cereals',
    description: 'High-quality grains and cereals for food production and agriculture',
    products: [
      {
        id: 9,
        name: 'Basmati Rice Premium',
        supplier: 'Asian Agro Solutions',
        supplierId: 'asian-agro',
        price: '$0.90/kg',
        rating: 4.8,
        reviews: 123,
        image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400&h=300&fit=crop',
        description: 'Long-grain basmati rice'
      },
      {
        id: 10,
        name: 'Maize (Corn)',
        supplier: 'Grain Traders International',
        supplierId: 'grain-traders',
        price: '$0.45/kg',
        rating: 4.6,
        reviews: 87,
        image: 'https://images.unsplash.com/photo-1574943320219-553eb20989b8?w=400&h=300&fit=crop',
        description: 'High-quality yellow corn'
      },
      {
        id: 11,
        name: 'Wheat Flour',
        supplier: 'Grain Traders International',
        supplierId: 'grain-traders',
        price: '$0.35/kg',
        rating: 4.7,
        reviews: 54,
        image: 'https://images.unsplash.com/photo-1574943320219-553eb20989b8?w=400&h=300&fit=crop',
        description: 'All-purpose wheat flour'
      },
      {
        id: 12,
        name: 'Oats Organic',
        supplier: 'Organic Grain Co.',
        supplierId: 'organic-grain',
        price: '$2.20/kg',
        rating: 4.9,
        reviews: 61,
        image: 'https://images.unsplash.com/photo-1574943320219-553eb20989b8?w=400&h=300&fit=crop',
        description: 'Pure organic rolled oats'
      },
    ]
  },
  'spices-herbs': {
    name: 'Spices & Herbs',
    description: 'Aromatic spices and herbs for culinary and medicinal purposes',
    products: [
      {
        id: 13,
        name: 'Premium Turmeric Powder',
        supplier: 'Asian Agro Solutions',
        supplierId: 'asian-agro',
        price: '$8.50/kg',
        rating: 4.9,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1596040522881-fdf70bb66e0f?w=400&h=300&fit=crop',
        description: 'High-curcumin turmeric powder'
      },
      {
        id: 14,
        name: 'Thai Chili Peppers',
        supplier: 'Asian Agro Solutions',
        supplierId: 'asian-agro',
        price: '$6.50/kg',
        rating: 4.7,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1599599810694-b308ca884cb4?w=400&h=300&fit=crop',
        description: 'Hot and flavorful Thai peppers'
      },
      {
        id: 15,
        name: 'Organic Black Pepper',
        supplier: 'Spice Traders Ltd.',
        supplierId: 'spice-traders',
        price: '$12.00/kg',
        rating: 4.8,
        reviews: 95,
        image: 'https://images.unsplash.com/photo-1596040522881-fdf70bb66e0f?w=400&h=300&fit=crop',
        description: 'Premium black peppercorns'
      },
      {
        id: 16,
        name: 'Cinnamon Sticks',
        supplier: 'Spice Traders Ltd.',
        supplierId: 'spice-traders',
        price: '$9.80/kg',
        rating: 4.9,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1596040522881-fdf70bb66e0f?w=400&h=300&fit=crop',
        description: 'Premium Ceylon cinnamon'
      },
    ]
  },
  'nuts-seeds': {
    name: 'Nuts & Seeds',
    description: 'Premium nuts and seeds for nutrition and agriculture',
    products: [
      {
        id: 17,
        name: 'Raw Cashew Nuts',
        supplier: 'Nut Traders International',
        supplierId: 'nut-traders',
        price: '$16.00/kg',
        rating: 4.8,
        reviews: 112,
        image: 'https://images.unsplash.com/photo-1585518419759-7e42a4e3e338?w=400&h=300&fit=crop',
        description: 'Premium raw cashews'
      },
      {
        id: 18,
        name: 'Sunflower Seeds',
        supplier: 'Seed Specialists',
        supplierId: 'seed-specialists',
        price: '$3.50/kg',
        rating: 4.7,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1599599810694-b308ca884cb4?w=400&h=300&fit=crop',
        description: 'High-oil sunflower seeds'
      },
      {
        id: 19,
        name: 'Almond Kernels',
        supplier: 'Nut Traders International',
        supplierId: 'nut-traders',
        price: '$18.50/kg',
        rating: 4.9,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1585518419759-7e42a4e3e338?w=400&h=300&fit=crop',
        description: 'Premium California almonds'
      },
      {
        id: 20,
        name: 'Sesame Seeds',
        supplier: 'Seed Specialists',
        supplierId: 'seed-specialists',
        price: '$8.00/kg',
        rating: 4.6,
        reviews: 56,
        image: 'https://images.unsplash.com/photo-1599599810694-b308ca884cb4?w=400&h=300&fit=crop',
        description: 'Pure white sesame seeds'
      },
    ]
  },
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const category = productCategories[slug as keyof typeof productCategories]

  if (!category) {
    return (
      <>
        <NavigationHeader />
        <main className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Category Not Found</h1>
            <Link href="/products">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Back to Products
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
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Category Hero */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="text-lg text-green-100">{category.description}</p>
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Available Products</h2>
              <p className="text-muted-foreground">Showing {category.products.length} products in this category</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <Card key={product.id} className="border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{product.supplier}</p>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <p className="text-lg font-bold text-primary mb-3">{product.price}</p>

                  <div className="space-y-2">
                    <Link href={`/contact?supplier=${product.supplierId}&product=${product.id}`} className="w-full block">
                      <Button size="sm" variant="outline" className="w-full">
                        Contact
                      </Button>
                    </Link>
                    <Link href={`/quote?supplier=${product.supplierId}&product=${product.id}`} className="w-full block">
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
