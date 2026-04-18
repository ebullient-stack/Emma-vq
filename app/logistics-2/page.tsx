'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LogisticsPage2() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="bg-blue-600 rounded-lg p-12 text-center text-white mb-12">
            <h1 className="text-4xl font-bold mb-4">Ready to Ship Your Products?</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Get started with our logistics services and ensure your agricultural products reach their destination safely.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Book Transport</Button>
              <Button variant="outline" className="text-white border-white hover:bg-blue-700">Get Quote</Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/logistics-1">
              <Button variant="outline">
                ← Previous
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 2 of 3</span>
            <Link href="/logistics-3">
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
