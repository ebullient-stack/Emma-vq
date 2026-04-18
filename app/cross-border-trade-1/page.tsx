'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { FileText, Truck, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function CrossBorderTradePage1() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Cross-Border Trade Solutions</h1>
            <p className="text-lg text-muted-foreground">
              Simplify your agricultural trade across East African borders with our comprehensive trade facilitation services, documentation support, and logistics solutions.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-lg border border-border p-6">
              <FileText className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Documentation Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Complete assistance with trade documentation and customs clearance</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Export/Import permits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Certificates of origin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Phytosanitary certificates</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <Truck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Logistics Coordination</h3>
              <p className="text-sm text-muted-foreground mb-4">End-to-end logistics management across borders</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Transportation coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Warehousing services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Last-mile delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Compliance Assurance</h3>
              <p className="text-sm text-muted-foreground mb-4">Regulatory compliance and quality assurance support</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Customs clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tax optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Regulatory updates</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Button variant="outline" disabled>
              ← Previous
            </Button>
            <span className="text-sm text-muted-foreground">Step 1 of 4</span>
            <Link href="/cross-border-trade-2">
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
