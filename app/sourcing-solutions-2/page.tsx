'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SourcingSolutionsPage2() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Ready to Start Sourcing?</h1>
            <p className="text-lg text-muted-foreground">
              Join thousands of buyers who trust our platform for their agricultural sourcing needs across East Africa.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Begin Your Sourcing Journey</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our platform connects you with thousands of verified suppliers across East Africa. Start browsing available products today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {/* Get Started Button */}
              <Link href="/signup">
                <Button
                  className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition"
                  aria-label="Get started with sourcing"
                >
                  Get Started
                </Button>
              </Link>

              {/* Contact Sales Button */}
              <Link href="/support">
                <Button
                  className="bg-white text-blue-700 hover:bg-blue-100 font-medium px-6 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition"
                  aria-label="Contact Sales team for assistance"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/sourcing-solutions-1">
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