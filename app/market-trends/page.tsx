'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, BarChart3, CalendarDays } from 'lucide-react'
import Link from 'next/link'

// Dynamic market trends data
const marketTrends = [
  {
    name: "Coffee (Arabica)",
    icon: TrendingUp,
    iconColor: "text-green-600",
    description: "Coffee prices are rising due to strong global demand and limited supply from major producers.",
    stats: [
      { label: "Current Trend", value: "+14%", valueColor: "text-green-600" },
      { label: "Demand Growth", value: "High" },
      { label: "Market Outlook", value: "Bullish", valueColor: "text-green-600" },
    ],
    button: { text: "View Price Forecast", link: "/premium-subscription" },
  },
  {
    name: "Maize",
    icon: TrendingDown,
    iconColor: "text-red-500",
    description: "Increased harvest volumes have caused short-term price declines.",
    stats: [
      { label: "Current Trend", value: "-6%", valueColor: "text-red-500" },
      { label: "Supply Level", value: "High" },
      { label: "Market Outlook", value: "Stable" },
    ],
    button: { text: "View Price Forecast", link: "/premium-subscription" },
  },
  {
    name: "Tea",
    icon: BarChart3,
    iconColor: "text-primary",
    description: "Tea markets remain stable with moderate export demand.",
    stats: [
      { label: "Current Trend", value: "+3%", valueColor: "text-primary" },
      { label: "Export Demand", value: "Moderate" },
      { label: "Market Outlook", value: "Stable" },
    ],
    button: { text: "View Price Forecast", link: "/premium-subscription" },
  },
]

// Seasonal insights data
const seasonalInsights = [
  {
    title: "Coffee Harvest Period",
    description: "October to January harvests increase supply, often causing short-term price dips before export demand rises.",
  },
  {
    title: "Maize Supply Cycle",
    description: "Post-harvest surplus between July and September usually lowers prices.",
  },
  {
    title: "Tea Export Window",
    description: "Tea exports typically rise between March and August due to higher international demand.",
  },
]

export default function MarketTrendsPage() {
  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Market Trends</h1>
            <p className="text-lg text-muted-foreground">
              Analyze agricultural commodity trends across East Africa to identify profitable selling periods and market opportunities.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="mb-8 flex gap-2 border-b border-border overflow-x-auto">
            <Link href="/market-intelligence-1" className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
              Price Data
            </Link>
            <Link href="/market-trends" className="px-6 py-3 border-b-2 border-primary text-primary font-medium whitespace-nowrap">
              Market Trends
            </Link>
            <Link href="/market-reports" className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
              Reports
            </Link>
            <Link href="/market-analytics" className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
              Analytics
            </Link>
          </div>

          {/* Market Trend Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {marketTrends.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.name} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                    <Icon className={`${item.iconColor} w-6 h-6`} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="space-y-2 text-sm mb-6">
                    {item.stats.map((stat) => (
                      <div key={stat.label} className="flex justify-between">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className={`font-semibold ${stat.valueColor || ""}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={item.button.link}>
                    <Button variant="outline" className="w-full">{item.button.text}</Button>
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Seasonal Insights */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <CalendarDays className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold text-foreground">Seasonal Market Insights</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Seasonal production cycles significantly influence commodity prices across East Africa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {seasonalInsights.map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/market-intelligence-1">
              <Button variant="outline">← Previous</Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 2 of 2</span>
            <Link href="/market-reports">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Next →</Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}