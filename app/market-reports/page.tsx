'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { FileText, CalendarDays, Download, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function MarketReportsPage() {
  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Market Reports</h1>
            <p className="text-lg text-muted-foreground">
              Access detailed agricultural market reports covering commodity prices, supply forecasts, and regional trade insights across East Africa.
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
            <Link href="/market-reports" className="px-6 py-3 border-b-2 border-primary text-primary font-medium whitespace-nowrap">
              Reports
            </Link>
            <Link href="/market-analytics" className="px-6 py-3 text-muted-foreground hover:text-foreground whitespace-nowrap">
              Analytics
            </Link>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {/* Weekly Commodity Report */}
            <div className="bg-card border border-border rounded-lg p-6">
              <FileText className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Weekly Commodity Report</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Overview of weekly price movements across major commodities including coffee, maize, tea, and beans.
              </p>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between"><span className="text-muted-foreground">Report Date</span><span className="font-semibold">June 10, 2026</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Coverage</span><span className="font-semibold">East Africa</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Markets</span><span className="font-semibold">12</span></div>
              </div>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download size={16} /> Download Report
              </Button>
            </div>

            {/* Monthly Market Outlook */}
            <div className="bg-card border border-border rounded-lg p-6">
              <CalendarDays className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Monthly Market Outlook</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Forecast of commodity price trends, expected harvest volumes, and export market demand.
              </p>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between"><span className="text-muted-foreground">Month</span><span className="font-semibold">June 2026</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Forecast Period</span><span className="font-semibold">3 Months</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Markets</span><span className="font-semibold">Kenya, Uganda, Tanzania</span></div>
              </div>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download size={16} /> Download Report
              </Button>
            </div>

            {/* Trade & Export Report */}
            <div className="bg-card border border-border rounded-lg p-6">
              <TrendingUp className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Trade & Export Report</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Analysis of export demand, international pricing trends, and cross-border commodity trade flows.
              </p>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between"><span className="text-muted-foreground">Export Markets</span><span className="font-semibold">EU, Asia</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Top Commodity</span><span className="font-semibold">Coffee</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Growth Rate</span><span className="font-semibold text-green-600">+9%</span></div>
              </div>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download size={16} /> Download Report
              </Button>
            </div>

          </div>

          {/* Key Insights */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Key Market Insights</h2>
            <p className="text-muted-foreground mb-6">
              Recent reports highlight strong demand for export crops such as coffee and tea, while staple crops like maize remain sensitive to regional supply cycles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Coffee Demand Rising</h4>
                <p className="text-muted-foreground">
                  Global coffee demand continues to grow, supporting higher farmgate prices across East Africa.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Maize Supply Pressure</h4>
                <p className="text-muted-foreground">
                  High regional harvest levels have temporarily lowered maize prices in several markets.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Export Opportunities</h4>
                <p className="text-muted-foreground">
                  Expanding export markets in Asia are increasing demand for specialty agricultural products.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/market-trends">
              <Button variant="outline">← Previous</Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 3 of 3</span>
            <Link href="/market-analytics">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Next →</Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}