'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Check, Globe, BarChart3, Lock, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access suppliers and buyers from over 150 countries around the world.'
  },
  {
    icon: Lock,
    title: 'Verified Suppliers',
    description: 'All suppliers undergo a rigorous verification process to ensure reliability.'
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    description: 'Make informed decisions with our comprehensive market data and insights.'
  },
  {
    icon: Zap,
    title: 'End-to-End Solutions',
    description: 'From sourcing to fulfillment, we provide complete trade solutions.'
  }
]

export function WhyChooseSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Why Choose Farm Tridge</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing global trade in food and agriculture with our innovative platform and services.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>


        </div>
      </div>
    </section>
  )
}
