'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function RiskManagementToolsPage() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Agricultural Risk Management Tools</h1>
            <p className="text-lg text-muted-foreground">
              Explore tools and strategies to protect your farm from weather, market fluctuations, and financial risks.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Agricultural Insurance */}
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Agricultural Insurance</h3>
              <p className="text-muted-foreground mb-4">
                Protect your crops and livestock against losses due to natural disasters, pests, and diseases.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Crop insurance for yield loss</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Livestock insurance</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Revenue-based coverage</li>
              </ul>
              <Link href="/insurance">
                <Button variant="outline" className="mt-auto">Learn More</Button>
              </Link>
            </div>

            {/* Weather Risk Management */}
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Weather Risk Management</h3>
              <p className="text-muted-foreground mb-4">
                Plan for unpredictable weather events using forecasting tools, irrigation, and diversification strategies.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Weather derivatives</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Early warning systems</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Crop diversification and irrigation</li>
              </ul>
              <Link href="/weather-tools">
                <Button variant="outline" className="mt-auto">Explore Tools</Button>
              </Link>
            </div>

            {/* Price Hedging Strategies */}
            <div className="bg-card rounded-lg border border-border p-8 flex flex-col">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Price Hedging Strategies</h3>
              <p className="text-muted-foreground mb-4">
                Minimize the impact of market fluctuations on your farm income with futures, options, and forward contracts.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Futures contracts</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Options contracts</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Forward selling agreements</li>
              </ul>
              <Link href="/support">
                <Button variant="outline" className="mt-auto">Get Started</Button>
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Resources & Guides</h3>
            <p className="text-muted-foreground mb-4">
              Access downloadable guides, tutorials, and case studies to implement risk management strategies effectively.
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mb-6 space-y-2">
              <li>Step-by-step guide to crop insurance</li>
              <li>Weather risk mitigation toolkit</li>
              <li>Price hedging strategies for smallholders</li>
            </ul>
            <Link href="/support">
              <Button variant="outline">Request Resources</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}