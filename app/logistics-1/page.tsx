'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Truck, Clock, Thermometer, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

/* -----------------------------
   Reusable Service Card
------------------------------ */
function ServiceCard({ icon: Icon, title, description, items }) {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <Icon className="w-8 h-8 text-primary mb-4" />

      <h3 className="text-xl font-bold text-foreground mb-3">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4">
        {description}
      </p>

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
   Logistics Visualization
------------------------------ */

function LogisticsVisualization({ type, src }) {
  return (
    <div className="w-full h-[260px] bg-muted rounded-lg border border-border overflow-hidden flex items-center justify-center">

      {type === 'image' && (
        <Image
          src={src}
          alt="Logistics visualization"
          width={600}
          height={260}
          className="object-cover w-full h-full"
        />
      )}

      {type === 'animation' && (
        <img
          src={src}
          alt="Logistics animation"
          className="object-cover w-full h-full"
        />
      )}

      {type === 'video' && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        />
      )}

    </div>
  )
}

/* -----------------------------
   Data (Scalable)
------------------------------ */

const services = [
  {
    icon: Truck,
    title: 'Transportation',
    description:
      'Reliable transportation for all agricultural commodities across East Africa',
    items: [
      'Road transport',
      'Rail logistics',
      'Air freight services',
    ],
  },
  {
    icon: Thermometer,
    title: 'Cold Chain',
    description:
      'Temperature-controlled logistics for fresh produce and perishables',
    items: [
      'Refrigerated transport',
      'Climate monitoring',
      'Freshness guarantee',
    ],
  },
  {
    icon: Clock,
    title: 'On-time Delivery',
    description:
      'Real-time tracking and guaranteed timely delivery of your shipments',
    items: [
      'GPS tracking',
      'Delivery updates',
      'On-time guarantees',
    ],
  },
]

/* -----------------------------
   Page Component
------------------------------ */

export default function LogisticsPage1() {

  /* Change these values anytime */
  const visualizationType = 'image'   // image | animation | video
  const visualizationSrc = '/images/logistics-truck.jpg'

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* HEADER */}

          <section className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Agricultural Logistics Solutions
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive logistics services for agricultural products
              across East Africa. From farm to market, we ensure your
              products reach their destination safely and on time.
            </p>
          </section>

          {/* VISUALIZATION SECTION */}

          <section className="mb-12 bg-card rounded-lg border border-border p-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* LEFT SIDE */}

              <div>

                <h2 className="text-2xl font-bold text-foreground mb-6">
                  End-to-End Logistics Solutions
                </h2>

                <div className="space-y-5">

                  <div className="flex items-start gap-3">
                    <Truck className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Transportation Network
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Extensive fleet covering all major routes in
                        East Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Thermometer className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Cold Chain Management
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Temperature-controlled storage and transportation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Real-time Tracking
                      </p>
                      <p className="text-sm text-muted-foreground">
                        GPS tracking and live updates on your shipments
                      </p>
                    </div>
                  </div>

                </div>

                {/* CTA */}

                <div className="mt-6">
                  <Link href="/transport">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Book Transport
                    </Button>
                  </Link>
                </div>

              </div>

              {/* RIGHT SIDE VISUALIZATION */}

              <LogisticsVisualization
                type={visualizationType}
                src={visualizationSrc}
              />

            </div>

          </section>

          {/* SERVICES GRID */}

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
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
              <Link href="/logistics-3">
                Next →
              </Link>
            </Button>

          </section>

        </div>

      </main>

      <Footer />
    </>
  )
}