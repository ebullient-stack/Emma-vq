'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

const insightCategories = ['All', 'Market Analysis', 'Price Forecast', 'Trade Trends', 'Sustainability']

const insights = [
  {
    id: 1,
    title: 'Rice Price Forecast Tanzania Q4',
    tags: ['Price Forecast', 'Rice', 'Tanzania'],
    date: '8/5/2025',
    description: 'Rice prices projected to soften slightly with anticipated harvest inflows; monitor import parity with Asian markets.',
    nextMonths: 'Sep 0.92 USD/kg, Oct 0.88 USD/kg, Nov 0.86 USD/kg',
  },
  {
    id: 2,
    title: 'Onion Price Forecast Kenya Q4',
    tags: ['Price Forecast', 'Onion', 'Kenya'],
    date: '8/3/2025',
    description: 'Domestic onion prices expected to edge higher due to reduced Tanzanian imports and localized weather issues.',
    nextMonths: 'Sep 1.05 USD/kg, Oct 1.12 USD/kg, Nov 1.15 USD/kg',
  },
  {
    id: 3,
    title: 'Tomato Price Forecast Q4: Weather and Transport Effects',
    tags: ['Price Forecast', 'Tomato', 'Kenya'],
    date: '8/1/2025',
    description: 'Tomato prices likely to trend higher due to weather-related supply gaps and increased transport costs. Retailers should plan promotions carefully.',
    nextMonths: 'Sep 1.15 USD/kg, Oct 1.22 USD/kg, Nov 1.28 USD/kg',
  },
  {
    id: 4,
    title: 'Tea Smallholders: Sustainability and Yield Gains',
    tags: ['Sustainability', 'Tea', 'Kenya'],
    date: '7/12/2025',
    description: 'Precision soil testing and targeted fertilizer use boost yields while reducing run-off.',
  },
  {
    id: 5,
    title: 'Maize Demand Surges in East Africa (Q3)',
    tags: ['Market Analysis', 'Maize', 'East Africa'],
    date: '7/10/2025',
    description: 'Strong regional demand for maize, driven by feed manufacturers and cross-border trade, is pushing prices up across Kenya, Uganda, and Tanzania.',
  },
  {
    id: 6,
    title: 'Sunflower Demand from Processors in Uganda',
    tags: ['Market Analysis', 'Sunflower', 'Uganda'],
    date: '7/15/2025',
    description: 'Oilseed processors ramp up sunflower seed purchases, driving price gains in producing districts.',
  },
  {
    id: 7,
    title: 'Avocado Export Trends 2025: Kenya and Tanzania Lead',
    tags: ['Trade Trends', 'Avocado', 'East Africa'],
    date: '6/22/2025',
    description: 'Kenya and Tanzania strengthen their positions as leading avocado exporters to the Middle East and Europe, supported by improved cold-chain logistics.',
  },
  {
    id: 8,
    title: 'Coffee Sustainability Certifications: ROI for Smallholders',
    tags: ['Sustainability', 'Coffee', 'Tanzania'],
    date: '5/18/2025',
    description: 'Certification schemes like Rainforest Alliance can improve access to premium buyers. We break down costs, benefits, and timelines.',
  },
  {
    id: 9,
    title: 'Cassava Trade Flows 2025: Rural to Urban Dynamics',
    tags: ['Trade Trends', 'Cassava', 'East Africa'],
    date: '5/2/2025',
    description: 'Urban demand supports steady cassava flows. Price seasonality and FX rates create short-term arbitrage.',
  },
]

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredInsights = activeCategory === 'All' 
    ? insights 
    : insights.filter(insight => insight.tags.includes(activeCategory))

  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Market Insights</h1>
            </div>
            <Button variant="outline">All Insights</Button>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search insights (crop, region, tag, title)"
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex gap-3">
              <select className="px-3 py-2 border border-border rounded-lg bg-card text-foreground text-sm">
                <option>All Crops</option>
              </select>
              <select className="px-3 py-2 border border-border rounded-lg bg-card text-foreground text-sm">
                <option>All Regions</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {insightCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight) => (
              <div key={insight.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-foreground mb-2">{insight.title}</h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <p className="text-xs text-muted-foreground mb-3">{insight.date}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>

                {/* Next Months */}
                {insight.nextMonths && (
                  <p className="text-xs text-muted-foreground mb-4">
                    <span className="font-medium">Next months:</span> {insight.nextMonths}
                  </p>
                )}

                <Link href={`/insights/${insight.id}`} className="w-full block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Read More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
