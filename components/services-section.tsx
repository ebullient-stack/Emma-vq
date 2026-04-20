'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ServiceCard } from './service-card'
import { rentalServices } from '@/lib/data'
import { Wrench, Filter } from 'lucide-react'

const serviceCategories = ['All', 'Equipment Rental', 'Transportation', 'Storage', 'Processing', 'Consulting']

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = selectedCategory === 'All'
    ? rentalServices
    : rentalServices.filter(service => service.category === selectedCategory)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
              <Wrench className="h-8 w-8 text-primary" />
              Farming Services
            </h2>
            <p className="text-muted-foreground">Access equipment rentals, logistics, storage solutions, and expert consulting services</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="gap-1"
              >
                {category === 'All' && <Filter className="h-4 w-4" />}
                {category}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.name}
                description={service.description}
                category={service.category}
              />
            ))}
          </div>

          {/* Services CTA */}
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Need Custom Solutions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert team can help you find tailored solutions for your specific agricultural needs. Connect with service providers directly.
            </p>
            <Button size="lg" className="gap-2">
              Contact Support <span>→</span>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
