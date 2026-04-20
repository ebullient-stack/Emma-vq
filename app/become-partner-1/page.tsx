'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function BecomePartnerPage1() {
  const partners = [
    {
      title: 'Logistics Partners',
      subtitle: 'Transportation and warehousing services',
      items: [
        'Freight forwarding and customs clearance',
        'Cold chain and storage solutions',
        'Last-mile delivery services',
      ],
    },
    {
      title: 'Financial Partners',
      subtitle: 'Banking and financing solutions',
      items: [
        'Trade finance and credit facilities',
        'Payment processing and escrow services',
        'Insurance and risk management',
      ],
    },
    {
      title: 'Technology Partners',
      subtitle: 'Software and integration services',
      items: [
        'API integrations and data exchange',
        'AgriTech solutions and IoT devices',
        'Analytics and business intelligence',
      ],
    },
    {
      title: 'Service Partners',
      subtitle: 'Quality assurance and certification',
      items: [
        'Quality inspection and testing',
        'Certification and compliance services',
        'Market research and consulting',
      ],
    },
  ]

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Become a Partner
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join FarmTridge's growing network of partners and help transform agricultural trade across Africa and beyond.
            </p>
          </div>

          {/* Partnership Opportunities Section */}
          <section className="py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Partnership Opportunities
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <Link key={index} href="/become-partner-3">
                  <div className="bg-card border border-border rounded-lg p-6 
                                  hover:shadow-lg hover:border-primary 
                                  transition duration-300 cursor-pointer group">

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary">
                      {partner.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {partner.subtitle}
                    </p>

                    {/* List of Benefits */}
                    <ul className="space-y-2">
                      {partner.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>

                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}