'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CrossBorderTradePage2() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">How It Works</h1>
          </div>

          {/* Steps Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { step: 1, title: 'Submit Request', desc: 'Provide trade details and requirements' },
              { step: 2, title: 'Documentation', desc: 'We prepare all necessary documents' },
              { step: 3, title: 'Logistics', desc: 'Coordinate transportation and clearance' },
              { step: 4, title: 'Delivery', desc: 'Track and confirm successful delivery' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Process Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Trade Process</h3>
              <div className="space-y-4">
                <div className="bg-card rounded-lg border border-border p-4">
                  <h4 className="font-bold text-foreground mb-2">Fast Processing</h4>
                  <p className="text-sm text-muted-foreground">Average processing time: 3-5 business days</p>
                </div>
                <div className="bg-card rounded-lg border border-border p-4">
                  <h4 className="font-bold text-foreground mb-2">Expert Support</h4>
                  <p className="text-sm text-muted-foreground">Dedicated trade specialists for your shipment</p>
                </div>
                <div className="bg-card rounded-lg border border-border p-4">
                  <h4 className="font-bold text-foreground mb-2">Real-time Tracking</h4>
                  <p className="text-sm text-muted-foreground">Monitor your shipment every step of the way</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What You'll Need</h3>
              <div className="space-y-4">
                <div className="bg-card rounded-lg border border-border p-4">
                  <h4 className="font-bold text-foreground mb-2">Trade Documents</h4>
                  <p className="text-sm text-muted-foreground">Invoices, packing lists, and commercial details</p>
                </div>
                <div className="bg-card rounded-lg border border-border p-4">
                  <h4 className="font-bold text-foreground mb-2">Product Information</h4>
                  <p className="text-sm text-muted-foreground">Specifications, quantities, and destinations</p>
                </div>
                <div className="bg-card rounded-lg border border-border p-4">
                  <h4 className="font-bold text-foreground mb-2">Contact Details</h4>
                  <p className="text-sm text-muted-foreground">Shipping and receiving party information</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/cross-border-trade-1">
              <Button variant="outline">
                ← Previous
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 2 of 4</span>
            <Link href="/cross-border-trade-3">
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
