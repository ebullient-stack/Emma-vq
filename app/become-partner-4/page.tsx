'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BecomePartnerPage4() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Partner Support & Resources</h1>
            <p className="text-lg text-muted-foreground">Get the support you need to succeed as an FARM TRIDGE partner</p>
          </div>

          {/* Support Resources */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Dedicated Support Team</h3>
              <p className="text-muted-foreground mb-4">
                Our partnership team is available to help you succeed. Get onboarding assistance, training, and ongoing support.
              </p>
              <Button variant="outline" className="w-full">Contact Support</Button>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Partner Resources</h3>
              <p className="text-muted-foreground mb-4">
                Access our comprehensive library of guides, documentation, and training materials.
              </p>
              <Button variant="outline" className="w-full">View Resources</Button>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Partner Dashboard</h3>
              <p className="text-muted-foreground mb-4">
                Monitor your partnership performance, track sales, and manage your presence on our platform.
              </p>
              <Button variant="outline" className="w-full">Access Dashboard</Button>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Community Forum</h3>
              <p className="text-muted-foreground mb-4">
                Connect with other partners, share best practices, and collaborate on opportunities.
              </p>
              <Button variant="outline" className="w-full">Join Community</Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/become-partner-3">
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
