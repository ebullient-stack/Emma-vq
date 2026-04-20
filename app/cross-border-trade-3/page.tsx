'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CrossBorderTradePage3() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Trade Corridors We Support
            </h1>
            <p className="text-lg text-muted-foreground">
              We facilitate agricultural trade across major East African corridors with high volumes and established partnerships
            </p>
          </div>

          {/* Trade Corridors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { route: 'KE → TZ', volume: 'UGX 7.8T', name: 'Kenya → Tanzania', desc: 'Annual trade volume' },
              { route: 'UG → KE', volume: 'UGX 6.7T', name: 'Uganda → Kenya', desc: 'Annual trade volume' },
              { route: 'RW → UG', volume: 'UGX 3.3T', name: 'Rwanda → Uganda', desc: 'Annual trade volume' },
              { route: 'TZ → RW', volume: 'UGX 2.4T', name: 'Tanzania → Rwanda', desc: 'Annual trade volume' },
              { route: 'ET → KE', volume: 'UGX 4.4T', name: 'Ethiopia → Kenya', desc: 'Annual trade volume' },
              { route: 'BI → TZ', volume: 'UGX 1.5T', name: 'Burundi → Tanzania', desc: 'Annual trade volume' },
            ].map((corridor, i) => (
              <div
                key={i}
                className="bg-card rounded-lg border border-border p-6"
              >
                <div className="text-lg font-bold text-primary mb-2">
                  {corridor.route}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {corridor.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {corridor.desc}
                </p>
                <div className="text-2xl font-bold text-foreground">
                  {corridor.volume}
                </div>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Key Benefits for These Corridors
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-3">
                  Established Routes
                </h4>
                <p className="text-muted-foreground text-sm">
                  Pre-cleared customs procedures and established logistics networks
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-3">
                  Competitive Rates
                </h4>
                <p className="text-muted-foreground text-sm">
                  Negotiated freight rates due to high volume partnerships
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-3">
                  Fast Clearance
                </h4>
                <p className="text-muted-foreground text-sm">
                  Average 24-48 hour customs clearance on major routes
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/cross-border-trade-2">
              <Button variant="outline">← Previous</Button>
            </Link>
            <span className="text-sm text-muted-foreground">
              Step 3 of 4
            </span>
            <Link href="/cross-border-trade-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Next →
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}