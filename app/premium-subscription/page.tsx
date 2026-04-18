'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CreditCard, ShieldCheck, Globe } from 'lucide-react'
import { subscriptionPlans } from '@/lib/subscription-plans'

// Premium Features
const premiumFeatures = [
  {
    icon: Globe,
    title: "Full Market Access",
    description:
      "Access real-time prices, market analytics, commodity trends, and trade insights across East Africa.",
  },
  {
    icon: CreditCard,
    title: "Advanced Forecasts",
    description:
      "Get predictive commodity pricing models and early trend indicators before public reports.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Data",
    description:
      "All market intelligence is verified and continuously updated from trusted regional sources.",
  },
]

export default function PremiumSubscriptionPage() {
  const router = useRouter()

  const handleSubscribe = (planId: string) => {
    router.push(`/checkout?plan=${planId}`)
  }

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">

          {/* Page Header */}
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Go Premium
          </h1>

          <p className="text-lg text-muted-foreground mb-12">
            Subscribe to unlock complete East African agricultural market
            intelligence, analytics, and forecasting tools.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {premiumFeatures.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="bg-card border border-border rounded-lg p-6 flex flex-col items-center"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Subscription Plans */}
          <div className="space-y-6 mb-12">

            {Object.values(subscriptionPlans).map((plan) => (

              <div
                key={plan.id}
                className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row items-center justify-between"
              >
                <div className="mb-4 md:mb-0 text-left">
                  <h4 className="text-xl font-bold text-foreground">
                    {plan.name}
                  </h4>

                  <p className="text-muted-foreground">
                    {plan.displayPrice}
                  </p>
                </div>

                <Button
                  onClick={() => handleSubscribe(plan.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto"
                >
                  Subscribe Now
                </Button>
              </div>

            ))}

          </div>

          {/* Already subscribed */}
          <p className="text-sm text-muted-foreground">
            Already subscribed?{" "}
            <Link
              href="/market-intelligence-1"
              className="text-blue-600 font-medium hover:underline"
            >
              Access the full market data
            </Link>
          </p>

        </div>

      </main>

      <Footer />
    </>
  )
}