'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BecomePartnerPage2() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Partnership Opportunities</h1>
            <p className="text-lg text-muted-foreground">Explore different partnership models and find the one that best suits your organization</p>
          </div>

          {/* Partnership Models */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Technology Partners</h3>
              <p className="text-muted-foreground mb-4">
                Integrate your technology solutions with our platform to enhance agricultural trading capabilities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>API integration support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Revenue sharing model</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Service Partners</h3>
              <p className="text-muted-foreground mb-4">
                Provide complementary services like logistics, finance, or certification to our network of users.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Service listing on platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Lead generation support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Commission-based income</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/become-partner-1">
              <Button variant="outline">
                ← Previous
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 2 of 4</span>
            <Link href="/become-partner-3">
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
