'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CrossBorderTradePage4() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-4">Ready to Expand Your Trade?</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Let us help you navigate the complexities of cross-border agricultural trade in East Africa.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/support">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium">
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          {/* Partnership Opportunities */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Why Partner with Us</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg border border-border p-6">
                <h4 className="font-bold text-foreground mb-2">Experience</h4>
                <p className="text-sm text-muted-foreground">15+ years of cross-border trade facilitation in East Africa</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6">
                <h4 className="font-bold text-foreground mb-2">Network</h4>
                <p className="text-sm text-muted-foreground">Partnerships with customs, logistics providers, and financial institutions</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6">
                <h4 className="font-bold text-foreground mb-2">Support</h4>
                <p className="text-sm text-muted-foreground">24/7 trade support and expert guidance throughout your shipment</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8 mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4">Next Steps</h3>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li>Contact us with your shipment details</li>
              <li>Receive a customized quote within 24 hours</li>
              <li>Submit required documentation</li>
              <li>Track your shipment in real-time</li>
              <li>Receive delivery confirmation</li>
            </ol>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/cross-border-trade-3">
              <Button variant="outline">
                ← Previous
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 4 of 4</span>
            <Button variant="outline" disabled>
              Next →
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
