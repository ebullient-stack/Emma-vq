'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PrivacyPolicyPage1() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back link */}
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
            ← Back to Home
          </Link>



          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              FARM TRIDGE ("we", "us", "our" or "Company") operates the platform. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Information Collection and Use</h2>
            <p className="text-muted-foreground mb-4">
              We collect several different types of information for various purposes to provide and improve our Service to you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Personal Data: Name, email address, phone number, company information</li>
              <li>Usage Data: Browser type, IP address, pages visited, time and date of visits</li>
              <li>Cookies and Tracking Data: We use cookies to enhance your experience</li>
            </ul>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Button variant="outline" disabled>
              ← Previous
            </Button>
            <span className="text-sm text-muted-foreground">Page 1 of 2</span>
            <Link href="/privacy-policy-2">
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
