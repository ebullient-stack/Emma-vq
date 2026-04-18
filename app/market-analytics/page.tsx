'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react'
import Link from 'next/link'

// Dynamic analytics cards
const analyticsCards = [
  {
    title: "Commodity Performance",
    icon: TrendingUp,
    description: "Track price growth, market demand, and top-performing commodities across regional markets.",
    stats: [
      { label: "Top Commodity", value: "Coffee" },
      { label: "Growth Rate", value: "+14%", valueColor: "text-green-600" },
      { label: "Market Demand", value: "High" },
    ],
    button: { text: "View Details", link: "/premium-subscription" },
  },
  {
    title: "Price Forecast",
    icon: LineChart,
    description: "Predict short and long-term commodity price trends using historical data and market indicators.",
    stats: [
      { label: "Forecast Period", value: "90 Days" },
      { label: "Coffee Prediction", value: "+6%", valueColor: "text-green-600" },
      { label: "Maize Prediction", value: "-2%", valueColor: "text-red-500" },
    ],
    button: { text: "View Forecast Charts", link: "/premium-subscription" },
  },
  {
    title: "Market Share Analysis",
    icon: PieChart,
    description: "Compare production, export, and market share of commodities across East African countries.",
    stats: [
      { label: "Kenya", value: "38%" },
      { label: "Uganda", value: "34%" },
      { label: "Tanzania", value: "28%" },
    ],
    button: { text: "View Market Breakdown", link: "/premium-subscription" },
  },
]

const regionalAnalytics = [
  { title: "Kenya Market Growth", description: "Strong coffee exports and improved logistics drive higher market performance." },
  { title: "Uganda Production Increase", description: "Rising maize and coffee production supports regional supply expansion." },
  { title: "Tanzania Export Expansion", description: "Improved port infrastructure boosts agricultural export opportunities." },
]

export default function MarketAnalyticsPage() {
  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Market Analytics</h1>
            <p className="text-lg text-muted-foreground">
              Advanced insights and analytics to evaluate commodity performance, forecast prices, and understand market dynamics across East Africa.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="mb-8 flex gap-2 border-b border-border overflow-x-auto">
            <Link href="/market-intelligence-1" className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
              Price Data
            </Link>
            <Link href="/market-trends" className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
              Market Trends
            </Link>
            <Link href="/market-reports" className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
              Reports
            </Link>
            <Link href="/market-analytics" className="px-6 py-3 border-b-2 border-primary text-primary font-medium whitespace-nowrap">
              Analytics
            </Link>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {analyticsCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-card border border-border rounded-lg p-6">
                  <Icon className="text-primary w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
                  <div className="space-y-2 mb-6 text-sm">
                    {card.stats.map((stat) => (
                      <div key={stat.label} className="flex justify-between">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className={`font-semibold ${stat.valueColor || ""}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={card.button.link}>
                    <Button variant="outline" className="w-full">{card.button.text}</Button>
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Regional Analytics */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold text-foreground">Regional Market Performance</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Analyze performance, production trends, and growth opportunities across East African agricultural markets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {regionalAnalytics.map((region) => (
                <div key={region.title}>
                  <h4 className="font-semibold text-foreground mb-2">{region.title}</h4>
                  <p className="text-muted-foreground">{region.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/market-reports">
              <Button variant="outline">← Previous</Button>
            </Link>
            <span className="text-sm text-muted-foreground">Market Analytics</span>
            <Link href="/market-intelligence-1">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Price Data</Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}