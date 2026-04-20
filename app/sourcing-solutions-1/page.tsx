'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Shield } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

/* -----------------------------
   Reusable Feature Card Component
------------------------------ */
function FeatureCard({ icon: Icon, title, description, items }) {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <Icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* -----------------------------
   Data (Scalable)
------------------------------ */
const features = [
  {
    icon: CheckCircle,
    title: 'Verified Suppliers',
    description:
      'All suppliers are thoroughly vetted for quality, reliability, and compliance standards',
    items: [
      'Certification verification',
      'Track record reviews',
      'On-site inspections',
    ],
  },
  {
    icon: Users,
    title: 'Supplier Network',
    description:
      'Access to thousands of suppliers across crops, livestock, and value-added products',
    items: [
      'Wide supplier selection',
      'Multiple product categories',
      'Seasonal availability tracking',
    ],
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Comprehensive quality checks and guarantees on all sourced agricultural products',
    items: [
      'Pre-shipment testing',
      'Compliance certifications',
      'Quality guarantees',
    ],
  },
]

/* -----------------------------
   Page Component
------------------------------ */
export default function SourcingSolutionsPage1() {
  // Example media source URL (image or animation)
  const [mediaSrc, setMediaSrc] = useState('https://via.placeholder.com/400x260.png?text=Illustration+Area')

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HEADER */}
          <section className="mb-12" aria-labelledby="sourcing-heading">
            <h1
              id="sourcing-heading"
              className="text-4xl font-bold text-foreground mb-4"
            >
              Sourcing Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Connect with verified suppliers across East Africa. We help you
              find reliable partners for your agricultural sourcing needs with
              quality assurance and competitive pricing.
            </p>
          </section>

          {/* WHY CHOOSE SECTION (Dynamic Image / Animation Area) */}
          <section className="mb-12 bg-card rounded-lg border border-border p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* LEFT CONTENT */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose Our Sourcing Platform?
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Verified Suppliers
                      </p>
                      <p className="text-sm text-muted-foreground">
                        All suppliers undergo rigorous verification for quality
                        and reliability
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Regional Expertise
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Deep knowledge of East African agricultural markets and
                        regulations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Fast Matching
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Quick supplier matching based on your specific
                        requirements
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link href="/suppliers">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Find Suppliers Now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE (Dynamic Image / Animation Area) */}
              <div className="w-full h-[300px] bg-muted rounded-lg border border-dashed border-border flex items-center justify-center overflow-hidden">
                <img
                  src={mediaSrc}
                  alt="Dynamic illustration or animation"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

            </div>
          </section>

          {/* FEATURES GRID */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </section>

          {/* NAVIGATION */}
          <section className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Button variant="outline" disabled>
              ← Previous
            </Button>

            <span className="text-sm text-muted-foreground">
              Step 1 of 2
            </span>

            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/sourcing-solutions-2">Next →</Link>
            </Button>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}