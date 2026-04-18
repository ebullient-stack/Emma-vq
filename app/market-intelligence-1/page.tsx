'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { TrendingUp, BarChart3, Globe } from 'lucide-react'
import Link from 'next/link'

// Dynamic feature cards
const featureCards = [
  {
    title: "Real-time Prices",
    icon: TrendingUp,
    description: "Live pricing data from major markets across East Africa",
    items: [
      { name: "Coffee (Arabica)", value: "$4.20/kg" },
      { name: "Maize", value: "$0.85/kg" },
      { name: "Tea", value: "$3.15/kg" },
    ],
    button: { text: "View All Prices", link: "/market-prices" },
  },
  {
    title: "Price History",
    icon: BarChart3,
    description: "Historical price trends and seasonal patterns",
    items: [
      { name: "30-day trend", value: "+12%" },
      { name: "90-day trend", value: "-5%" },
      { name: "Seasonal high", value: "$4.85/kg" },
    ],
    // Redirect non-subscribed users to Premium Subscription
    button: { text: "View Charts", link: "/premium-subscription" },
  },
  {
    title: "Regional Comparison",
    icon: Globe,
    description: "Compare prices across different East African markets",
    items: [
      { name: "Kenya", value: "$4.20/kg" },
      { name: "Tanzania", value: "$3.95/kg" },
      { name: "Uganda", value: "$4.10/kg" },
    ],
    // Redirect non-subscribed users to Premium Subscription
    button: { text: "Compare Markets", link: "/premium-subscription" },
  },
]

export default function MarketIntelligencePage1() {
  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Market Intelligence
            </h1>
            <p className="text-lg text-muted-foreground">
              Access comprehensive market data, price trends, and insights to make informed decisions in East African agricultural markets.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="mb-8 flex gap-2 border-b border-border overflow-x-auto">
            <Link href="/market-intelligence-1">
              <button className="px-6 py-3 border-b-2 border-primary text-primary font-medium whitespace-nowrap">
                Price Data
              </button>
            </Link>
            <Link href="/market-trends">
              <button className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
                Market Trends
              </button>
            </Link>
            <Link href="/market-reports">
              <button className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
                Reports
              </button>
            </Link>
            <Link href="/market-analytics">
              <button className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
                Analytics
              </button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featureCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-card rounded-lg border border-border p-6">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{card.description}</p>

                  <div className="space-y-3 mb-6">
                    {card.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{item.name}</span>
                        <span className="font-bold text-foreground">{item.value}</span>
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

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Button variant="outline" disabled>
              ← Previous
            </Button>
            <span className="text-sm text-muted-foreground">Step 1 of 2</span>
            <Link href="/market-trends">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Next →</Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}