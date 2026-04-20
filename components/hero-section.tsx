'use client'

import Link from 'next/link'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <>
      <NavigationHeader />

      {/* Hero Section */}
      <section className="bg-muted py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Marketplace for Quality Products
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty">
            Discover a wide range of products and connect with trusted suppliers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Browse Products
              </Button>
            </Link>
            <Link href="/suppliers">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold">
                Find Suppliers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
