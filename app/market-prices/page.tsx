'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react'

const cropsData = [
  {
    id: 1,
    name: 'Maize',
    category: 'Grains & Cereals',
    country: 'Uganda',
    currentPrice: 280,
    previousPrice: 265,
    unit: 'MT',
    lastUpdated: '2 hours ago',
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb20989b8?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    name: 'Coffee Beans',
    category: 'Coffee & Tea',
    country: 'Ethiopia',
    currentPrice: 185,
    previousPrice: 190,
    unit: 'kg',
    lastUpdated: '1 hour ago',
    image:
      'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    name: 'Rice',
    category: 'Grains & Cereals',
    country: 'Tanzania',
    currentPrice: 420,
    previousPrice: 410,
    unit: 'MT',
    lastUpdated: '3 hours ago',
    image:
      'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=300&h=200&fit=crop'
  },
  {
    id: 4,
    name: 'Beans',
    category: 'Grains & Cereals',
    country: 'Kenya',
    currentPrice: 650,
    previousPrice: 620,
    unit: 'MT',
    lastUpdated: '1 hour ago',
    image:
      'https://images.unsplash.com/photo-1585518419759-7e42a4e3e338?w=300&h=200&fit=crop'
  },
  {
    id: 5,
    name: 'Tea Leaves',
    category: 'Coffee & Tea',
    country: 'Uganda',
    currentPrice: 3.5,
    previousPrice: 3.45,
    unit: 'kg',
    lastUpdated: '2 hours ago',
    image:
      'https://images.unsplash.com/photo-1597318086827-ffb008efc2f0?w=300&h=200&fit=crop'
  },
  {
    id: 6,
    name: 'Banana',
    category: 'Fruits',
    country: 'Uganda',
    currentPrice: 120,
    previousPrice: 130,
    unit: 'bunch',
    lastUpdated: '4 hours ago',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop'
  }
]

function generateCategories(data) {
  const counts = {}

  data.forEach((crop) => {
    counts[crop.category] = (counts[crop.category] || 0) + 1
  })

  return Object.keys(counts).map((category) => ({
    name: category,
    count: counts[category]
  }))
}

export default function MarketPricesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [inputValue, setInputValue] = useState('')

  const priceCategories = generateCategories(cropsData)

  const filteredCrops = useMemo(() => {
    return cropsData.filter((crop) => {
      const matchesSearch =
        crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crop.country.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory =
        activeCategory === 'all' || crop.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, activeCategory])

  function calculateChange(current, previous) {
    const diff = current - previous
    const percent = ((diff / previous) * 100).toFixed(1)

    return {
      trend: diff >= 0 ? 'up' : 'down',
      percent: `${diff >= 0 ? '+' : ''}${percent}%`
    }
  }

  function handleSearch() {
    setSearchTerm(inputValue)
  }

  const averageIncrease = useMemo(() => {
    const values = cropsData.map((crop) => {
      return ((crop.currentPrice - crop.previousPrice) / crop.previousPrice) * 100
    })

    const avg =
      values.reduce((acc, val) => acc + val, 0) / values.length

    return avg.toFixed(1)
  }, [])

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-emerald-700 via-green-700 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">

            <h1 className="text-4xl font-bold mb-4">
              Market Prices
            </h1>

            <p className="text-green-100 mb-10 max-w-xl">
              Track real-time agricultural commodity prices across East Africa
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-2xl">
              <div className="flex gap-3">

                <input
                  type="text"
                  placeholder="Search crops or countries..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />

                <Button
                  onClick={handleSearch}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6"
                >
                  Search
                </Button>

              </div>
            </div>

          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 py-12">

          <div className="grid lg:grid-cols-4 gap-8">

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>

                <CardContent className="space-y-2">

                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg ${activeCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-muted'
                      }`}
                  >
                    All Products ({cropsData.length})
                  </button>

                  {priceCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full text-left px-4 py-2 rounded-lg ${activeCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-muted'
                        }`}
                    >
                      <div className="flex justify-between">
                        <span>{category.name}</span>
                        <span className="text-xs bg-muted px-2 rounded">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}

                </CardContent>
              </Card>
            </div>

            {/* CROP CARDS */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">

                {filteredCrops.map((crop) => {

                  const change = calculateChange(
                    crop.currentPrice,
                    crop.previousPrice
                  )

                  return (

                    <Card key={crop.id} className="overflow-hidden hover:shadow-lg">

                      <div className="relative h-40">
                        <Image
                          src={crop.image}
                          alt={crop.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <CardContent className="p-4">

                        <div className="flex justify-between mb-3">

                          <div>
                            <h3 className="font-bold text-lg">{crop.name}</h3>
                            <p className="text-sm text-muted-foreground">{crop.country}</p>
                          </div>

                          <div
                            className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${change.trend === 'up'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                              }`}
                          >

                            {change.trend === 'up'
                              ? <TrendingUp className="w-4 h-4" />
                              : <TrendingDown className="w-4 h-4" />}

                            {change.percent}

                          </div>

                        </div>

                        <p className="text-2xl font-bold">
                          ${crop.currentPrice}/{crop.unit}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Previous: ${crop.previousPrice}/{crop.unit}
                        </p>

                        <p className="text-xs text-muted-foreground mb-4">
                          Updated: {crop.lastUpdated}
                        </p>

                        <Link href={`/market-prices/${crop.id}`}>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            View Details
                          </Button>
                        </Link>

                      </CardContent>

                    </Card>

                  )
                })}

              </div>
            </div>

          </div>

          {/* PRICE TRENDS & ANALYSIS */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 border border-border">

            <h2 className="text-2xl font-bold text-foreground mb-6">
              Price Trends & Analysis
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <Card>
                <CardContent className="p-6">

                  <div className="text-3xl font-bold text-green-600 mb-2">
                    +{averageIncrease}%
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Average price change this week
                  </p>

                  <Link href="/premium-subscription">
                    <Button variant="outline" className="w-full">
                      View Trends
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">

                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {cropsData.length}
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Products being tracked
                  </p>

                  <Link href="/premium-subscription">
                    <Button variant="outline" className="w-full">
                      Explore All
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">

                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    Real-time
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Live price updates available
                  </p>

                  <Link href="/premium-subscription">
                    <Button variant="outline" className="w-full">
                      Get Updates
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

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