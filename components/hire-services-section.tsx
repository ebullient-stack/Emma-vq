'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Zap, Check } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Agricultural Machinery',
    region: 'East Africa',
    description: 'Rent tractors, harvesters, planters, and other farming equipment',
    count: '150+ items',
    priceRange: '$50-500/day',
    keyFeatures: ['GPS tracking', 'Insurance covered', 'Operator included', '24/7 support'],
    popular: true,
    icon: '🚜',
  },
  {
    id: 2,
    title: 'Tools & Equipment',
    region: 'East Africa',
    description: 'Professional farming tools, irrigation systems, and specialized equipment',
    count: '300+ items',
    priceRange: '$10-200/day',
    keyFeatures: ['Quality assured', 'Flexible rental', 'Training included', 'Local pickup'],
    popular: false,
    icon: '🔧',
  },
  {
    id: 3,
    title: 'Fields & Land',
    region: 'East Africa',
    description: 'Rent agricultural land, greenhouses, and farming facilities',
    count: '80+ listings',
    priceRange: '$100-2000/month',
    keyFeatures: ['Soil tested', 'Read connectivity', 'Water access', 'Legal support'],
    popular: true,
    icon: '🌾',
  },
  {
    id: 4,
    title: 'Farm Workers',
    region: 'East Africa',
    description: 'Hire skilled agricultural workers and farming specialists',
    count: '500+ workers',
    priceRange: '$20-100/day',
    keyFeatures: ['Verified profiles', 'Background checked', 'Skill ratings', 'Insurance covered'],
    popular: false,
    icon: '👨‍🌾',
  },
  {
    id: 5,
    title: 'Transport & Logistics',
    region: 'East Africa',
    description: 'Trucks, trailers, and logistics services for agricultural products',
    count: '120+ vehicles',
    priceRange: '$80-400/day',
    keyFeatures: ['Temperature controlled', 'GPS tracking', 'Licensed drivers', 'Cargo insurance'],
    popular: false,
    icon: '🚚',
  },
]

export function HireServicesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Hire What You Need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access agricultural resources on-demand. From machinery to land, find everything you need to grow your farming business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col relative">
              {service.popular && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  Popular
                </div>
              )}

              <CardHeader>
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{service.region}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Availability</span>
                    <p className="font-semibold text-foreground">{service.count}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Price Range</span>
                    <p className="font-semibold text-primary">{service.priceRange}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-foreground mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {service.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Link
                  href={
                    service.id === 1 ? '/machinery' :
                      service.id === 2 ? '/tools' :
                        service.id === 3 ? '/fields' :
                          service.id === 4 ? '/workers' :
                            service.id === 5 ? '/transport' :
                              '/hire-categories'
                  }
                  className="w-full"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Browse {service.title.split(' ')[0]} →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Need Something Custom?</h3>
          <p className="text-blue-100 mb-6">
            Can't find what you're looking for? Contact our team for custom rental solutions and bulk discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Contact Us</Button>
            </Link>
            <Link href="post-ad">
              <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                List Your Equipment
              </Button>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">Join our community and unlock a world of possibilities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </Link>
            <Link href="post-ad">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Post Your Ad</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
