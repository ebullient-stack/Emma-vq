'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { FinancingOptionsSection } from '@/components/financing-options-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AgriFinancePage1() {
  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Agri Finance Solutions
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              Connect with financial institutions, government programs, and creditors to fund your agricultural operations
            </p>

            {/* Financing Category Buttons */}
            <div className="flex flex-wrap gap-4">

              {/* Government Programs */}
              <Link href="/agri-finance-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-base">
                  Government Programs
                </Button>
              </Link>

              {/* Explore Tools */}
              <Link href="/risk-management-tools">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-base">
                  Explore Tools
                </Button>
              </Link>

            </div>
          </div>

          {/* Financing Options - Existing Component */}
          <FinancingOptionsSection />

          {/* Testimonials Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-12 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>

                <p className="text-muted-foreground mb-4">
                  "The loan application process was smooth and the approval came within a week. This funding transformed our farm operations."
                </p>

                <p className="font-semibold text-foreground">
                  - James Kimani, Farmer
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>

                <p className="text-muted-foreground mb-4">
                  "Access to government programs through this platform helped us get subsidies we didn't know existed. Highly recommended!"
                </p>

                <p className="font-semibold text-foreground">
                  - Mary Ochieng, Agribusiness Owner
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>

                <p className="text-muted-foreground mb-4">
                  "The investment opportunities helped us scale our operation. We grew from small-scale to commercial farming."
                </p>

                <p className="font-semibold text-foreground">
                  - Peter Mutua, Coffee Farmer
                </p>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">

            <Button variant="outline" disabled>
              ← Previous
            </Button>

            <span className="text-sm text-muted-foreground">
              Step 1 of 3
            </span>

            <Link href="/agri-finance-2">
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