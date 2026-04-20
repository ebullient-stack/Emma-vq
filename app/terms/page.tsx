'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

            {/* Section 1: Agreement to Terms */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using FARM TRIDGE, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Section 2: Use License */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on FARM TRIDGE for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-muted-foreground mb-4">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile, reverse engineer, disassemble, or otherwise attempting to discover source code</li>
                <li>Transferring the materials to another person or "mirroring" on any other server</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            {/* Section 3: Disclaimer */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on FARM TRIDGE's website are provided on an 'as is' basis. FARM TRIDGE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            {/* Section 4: Limitations */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall FARM TRIDGE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FARM TRIDGE's website, even if FARM TRIDGE or an FARM TRIDGE authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Section 5: Contact Us */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@farmtridge.com" className="text-blue-600 hover:text-blue-700">
                  legal@farmtridge.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
