'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BecomePartnerPage3() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Partner Application Form</h1>
            <p className="text-lg text-muted-foreground">Fill out the form below and our partnerships team will get back to you within 2-3 business days.</p>
          </div>

          {/* Application Form */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Organization Name</label>
                <input className="w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground" type="text" placeholder="Your organization name" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Contact Name</label>
                  <input className="w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground" type="text" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input className="w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground" type="email" placeholder="you@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Partnership Type</label>
                <select className="w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground">
                  <option>Select a partnership type</option>
                  <option>Technology Partner</option>
                  <option>Service Partner</option>
                  <option>Reseller</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tell us about your organization</label>
                <textarea className="w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground h-32" placeholder="Describe your organization and how you plan to work with FARM TRIDGE"></textarea>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit Application</Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/become-partner-2">
              <Button variant="outline">
                ← Previous
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">Step 3 of 4</span>
            <Link href="/become-partner-4">
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
