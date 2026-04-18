'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function MarketIntelligencePage2() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get Market Intelligence</h2>
            <p className="text-lg text-blue-100 mb-8">
              Access premium market data and insights to stay ahead in East African agricultural markets.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium">
                Start Free Trial
              </Button>
              <Link href="support">
                <Button className="text-white border-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Premium Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Real-time Updates', desc: 'Get price updates every hour' },
                { title: 'Historical Data', desc: 'Access 5+ years of data' },
                { title: 'Forecasts', desc: 'AI-powered price predictions' },
                { title: 'Alerts', desc: 'Custom price movement alerts' },
                { title: 'Reports', desc: 'Detailed market reports' },
                { title: 'Analytics', desc: 'Advanced analytics tools' },
                { title: 'API Access', desc: 'Integrate with your systems' },
                { title: 'Support', desc: 'Dedicated support team' },
              ].map((feature, i) => (
                <div key={i} className="bg-card rounded-lg border border-border p-6">
                  <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Section */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Partnership Opportunities</h3>
            <p className="text-muted-foreground mb-6">
              Join leading agricultural organizations and trade companies using our market intelligence platform.
            </p>
            <Link href="/become-partner-1">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Partnerships
              </Button>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/market-intelligence-1">
              <Button variant="outline">
                ← Previous
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 2 of 2</span>
            <Link href="market-trends">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Market Trends
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
