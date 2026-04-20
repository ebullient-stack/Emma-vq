'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AgriFinancePage3() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Financial Advisory Services</h1>
            <p className="text-lg text-muted-foreground">Get expert advice on agricultural finance, business planning, and investment strategies</p>
          </div>

          {/* Advisory Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Financial Advisory Services</h3>
              <p className="text-muted-foreground mb-4">
                Get expert advice on agricultural finance, business planning, and investment strategies from our network of specialized advisors.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Personalized financial planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Investment strategy development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tax optimization strategies</span>
                </li>
              </ul>
              <Link href="/support">
                <Button variant="outline">Book a Consultation</Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Risk Management Tools</h3>
              <p className="text-muted-foreground mb-4">
                Access tools and resources to manage agricultural risks, including weather insurance, price hedging, and diversification strategies.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Agricultural insurance options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Weather risk management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Price hedging strategies</span>
                </li>
              </ul>
              <Link href="risk-management-tools">
                <Button variant="outline">Explore Tools</Button>
              </Link>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Farm Size:</p>
                <p className="font-bold text-foreground mb-4">250 acres in Kenya</p>
                <p className="text-muted-foreground mb-4">
                  "With guidance from our advisors, I secured $150,000 in financing to expand my coffee farming operations and improve yields by 40%."
                </p>
                <p className="font-semibold text-foreground">- James Kipchoge</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Farm Size:</p>
                <p className="font-bold text-foreground mb-4">150 acres in Tanzania</p>
                <p className="text-muted-foreground mb-4">
                  "The financial planning services helped me understand my cash flow better and made it easy to qualify for a $75,000 loan for equipment."
                </p>
                <p className="font-semibold text-foreground">- Maria Mwangi</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/agri-finance-2">
              <Button variant="outline">
                ← Previous
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 3 of 3</span>
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
