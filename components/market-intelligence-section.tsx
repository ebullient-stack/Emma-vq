'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUp, ArrowDown } from 'lucide-react'

/* ---------------- TYPES ---------------- */
interface MarketPrice {
  product: string
  price: number
  currency: string
  change: number
  category: string
  updated: string
}

interface CropDemand {
  name: string
  category: string
  demand: number
  trend: number
  image: string
}

type CountryCurrency = {
  country: string
  currency: string
  rateToKES: number // conversion from KSh to local currency
}

/* ---------------- STATIC DATA ---------------- */
const fallbackPrices: MarketPrice[] = [
  { product: 'Arabica Coffee', price: 615.13, currency: 'KSh/kg', change: 3.26, category: 'Coffee', updated: '01:24 am' },
  { product: 'Black Tea', price: 304.32, currency: 'KSh/kg', change: -3.29, category: 'Tea', updated: '01:24 am' },
  { product: 'Maize', price: 54.39, currency: 'KSh/kg', change: 5.0, category: 'Grains', updated: '01:24 am' },
  { product: 'Avocados', price: 239.58, currency: 'KSh/kg', change: 5.71, category: 'Fruits', updated: '01:24 am' },
  { product: 'Vanilla', price: 32375.0, currency: 'KSh/kg', change: -4.76, category: 'Spices', updated: '01:24 am' },
]

const fallbackTopCrops: CropDemand[] = [
  { name: 'Avocados', category: 'Fruits', demand: 92, trend: 5, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578' },
  { name: 'Quinoa', category: 'Grains', demand: 88, trend: 3, image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25' },
  { name: 'Blueberries', category: 'Fruits', demand: 85, trend: 7, image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e' },
  { name: 'Almonds', category: 'Nuts', demand: 82, trend: 1, image: 'https://images.unsplash.com/photo-1508747703725-719777637510' },
  { name: 'Kale', category: 'Vegetables', demand: 79, trend: 2, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
]

const categories = ['All', 'Coffee', 'Tea', 'Grains', 'Fruits', 'Spices', 'Flowers', 'Nuts', 'Livestock']

// Simple static currency table
const countryCurrency: CountryCurrency[] = [
  { country: 'Uganda', currency: 'UGX', rateToKES: 40 },
  { country: 'Kenya', currency: 'KES', rateToKES: 1 },
  { country: 'Tanzania', currency: 'TZS', rateToKES: 27 },
  { country: 'Rwanda', currency: 'RWF', rateToKES: 9 },
  { country: 'Ethiopia', currency: 'ETB', rateToKES: 0.49 },
  { country: 'South Sudan', currency: 'SSP', rateToKES: 53 },
]

/* ---------------- COMPONENT ---------------- */

export function MarketIntelligenceSection() {
  const [prices, setPrices] = useState<MarketPrice[]>(fallbackPrices)
  const [topCrops, setTopCrops] = useState<CropDemand[]>(fallbackTopCrops)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'price' | 'change'>('price')
  const [country, setCountry] = useState('Kenya')
  const [loading, setLoading] = useState(true)

  const selectedCurrency = useMemo(() => countryCurrency.find(c => c.country === country) || countryCurrency[1], [country])

  /* ---------------- FETCH DATA ---------------- */
  async function fetchMarketData() {
    try {
      const res = await fetch('/api/market/prices')
      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      if (data.prices) setPrices(data.prices)
      if (data.topCrops) setTopCrops(data.topCrops)
    } catch {
      console.log('API not connected — using fallback data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMarketData()
  }, [])

  /* ---------------- FILTER & SORT ---------------- */
  const filteredPrices = useMemo(() => {
    let data = [...prices]
    if (selectedCategory !== 'All') data = data.filter(p => p.category === selectedCategory)
    if (search) data = data.filter(p => p.product.toLowerCase().includes(search.toLowerCase()))
    data.sort((a, b) => sortBy === 'price' ? b.price - a.price : b.change - a.change)
    return data
  }, [prices, selectedCategory, search, sortBy])

  function formatPrice(price: number) {
    // Convert from KES to selected currency
    const converted = price * selectedCurrency.rateToKES
    return new Intl.NumberFormat().format(converted)
  }

  /* ---------------- UI ---------------- */
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT PANEL */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">East African Market Prices</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Current prices for East African agricultural commodities</p>
              </CardHeader>

              <CardContent className="space-y-6">

                {/* COUNTRY SELECT */}
                <div className="flex gap-3 mb-4">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="border rounded-md px-3 py-2 text-sm"
                  >
                    {countryCurrency.map(c => (
                      <option key={c.country} value={c.country}>{c.country}</option>
                    ))}
                  </select>

                  <input
                    placeholder="Search commodity..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-md px-3 py-2 text-sm w-full"
                  />

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'price' | 'change')}
                    className="border rounded-md px-3 py-2 text-sm"
                  >
                    <option value="price">Sort by Price</option>
                    <option value="change">Sort by Change</option>
                  </select>
                </div>

                {/* CATEGORY FILTER */}
                <div className="flex flex-wrap gap-2 pb-4 border-b border-border">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-sm px-3 py-1 rounded-full transition-colors ${selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* TABLE */}
                {loading ? (
                  <div className="text-center py-10 text-muted-foreground">Loading data...</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 font-semibold">Product</th>
                          <th className="text-right py-3 font-semibold">Price ({selectedCurrency.currency})</th>
                          <th className="text-right py-3 font-semibold">Change</th>
                          <th className="text-right py-3 font-semibold">Updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPrices.map((item, index) => (
                          <tr key={index} className="border-b border-border/50 hover:bg-muted/50">
                            <td className="py-4 font-medium">{item.product}</td>
                            <td className="text-right py-4">
                              <div className="font-semibold">{formatPrice(item.price)}</div>
                              <div className="text-xs text-muted-foreground">{selectedCurrency.currency}/kg</div>
                            </td>
                            <td className="text-right py-4">
                              <span className={`flex items-center justify-end gap-1 font-semibold ${item.change > 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {item.change > 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                                {item.change > 0 ? '+' : ''}{item.change}%
                              </span>
                            </td>
                            <td className="text-right py-4 text-muted-foreground">{item.updated}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

              </CardContent>
            </Card>
          </div>

          {/* RIGHT PANEL */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Top 5 Most Demanded East African Crops</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Based on regional market trends</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {topCrops.map((crop, index) => (
                    <div key={index} className="flex items-center justify-between pb-4 border-b border-border/50 last:border-0">
                      <div className="flex items-center gap-3">
                        <Image src={crop.image} alt={crop.name} width={40} height={40} className="object-cover rounded-full" />
                        <div>
                          <p className="font-semibold">{crop.name}</p>
                          <p className="text-xs text-muted-foreground">{crop.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">Demand: {crop.demand}/100</p>
                        <p className="text-sm text-green-600 flex items-center justify-end gap-1">
                          <ArrowUp className="w-3 h-3" /> {crop.trend}%
                        </p>
                      </div>
                    </div>
                  ))}
                  <Link href="/market-prices">
                    <Button variant="outline" className="w-full mt-4 text-primary">View All Market Prices →</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}