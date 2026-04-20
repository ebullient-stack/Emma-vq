'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'

const filters = ['All', 'Market Analysis', 'Price Forecast', 'Trade Trends', 'Sustainability']

const insightCards = [
  {
    id: 1,
    title: 'Rice Price Forecast Tanzania Q4',
    tags: ['Price Forecast', 'Rice', 'Tanzania'],
    description: 'Rice prices projected to soften slightly with anticipated harvest inflows; monitor import parity with Asian markets.',
  },
  {
    id: 2,
    title: 'Onion Price Forecast Kenya Q4',
    tags: ['Price Forecast', 'Onion', 'Kenya'],
    description: 'Domestic onion prices expected to edge higher due to reduced Tanzanian imports and localized weather issues.',
  },
  {
    id: 3,
    title: 'Tomato Price Forecast Q4: Weather and Transport Effects',
    tags: ['Price Forecast', 'Tomato', 'Kenya'],
    description: 'Tomato prices likely to trend higher due to weather-related supply gaps and increased transport costs. Retailers should plan promotions carefully.',
  },
  {
    id: 4,
    title: 'Tea Smallholders: Sustainability and Yield Gains',
    tags: ['Sustainability', 'Tea', 'Kenya'],
    description: 'Precision soil testing and targeted fertilizer use boost yields while reducing run-off.',
  },
]

export function MarketInsightsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Memoize filtered insights for performance
  const filteredInsights = useMemo(() => {
    return insightCards.filter((card) => {
      const matchesFilter = activeFilter === 'All' || card.tags.includes(activeFilter)
      const matchesSearch =
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchTerm])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Market Insights</h2>
            <p className="text-muted-foreground">
              Search and filter insights across market analysis, forecasts, and trends.
            </p>
          </div>
          <Link href="/insights">
            <Button
              variant="outline"
              className="hidden md:flex"
              aria-label="View all insights"
            >
              All Insights
            </Button>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search insights"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
                  }`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredInsights.map((insight) => (
            <Card key={insight.id} className="hover:shadow-md transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{insight.title}</CardTitle>
                <div className="flex gap-2 flex-wrap mt-2">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded cursor-pointer hover:bg-primary/10"
                      onClick={() => setActiveFilter(tag)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Filter by ${tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={`/insights/${insight.id}`}>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    aria-label={`Read more about ${insight.title}`}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Insights Button */}
        <div className="text-center">
          <Link href="/insights">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
              aria-label="View all insights"
            >
              View All Insights
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}