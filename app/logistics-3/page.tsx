'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LogisticsPage3() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Comprehensive Logistics Features</h1>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Documentation', items: ['Export/Import permits', 'Certificates of origin', 'Phytosanitary certificates'] },
              { title: 'Logistics', items: ['Transportation coordination', 'Warehousing services', 'Last-mile delivery'] },
              { title: 'Compliance', items: ['Customs clearance', 'Tax optimization', 'Regulatory updates'] },
              { title: 'Tracking', items: ['GPS tracking', 'Status notifications', 'Delivery confirmation'] },
            ].map((feature, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/logistics-1">
              <Button variant="outline">
                ← Previous
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 2 of 2</span>
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
