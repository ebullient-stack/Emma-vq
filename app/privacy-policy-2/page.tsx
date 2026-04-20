'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PrivacyPolicyPage2() {
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
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Use of Data</h2>
            <p className="text-muted-foreground mb-4">
              FARM TRIDGE  uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Security of Data</h2>
            <p className="text-muted-foreground mb-4">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@farmtridge.com" className="text-blue-600 hover:text-blue-700">privacy@farmtridge.com</a>
            </p>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Link href="/privacy-policy-1">
              <Button variant="outline">
                ← Previous
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">Page 2 of 2</span>
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
