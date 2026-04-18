'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Coffee, Leaf, Flower, Sprout } from 'lucide-react'

const agriculturalHighlights = [
  {
    icon: Coffee,
    title: 'Coffee Production',
    regions: 'Ethiopia, Kenya, Uganda',
    description: 'East Africa produces some of the world\'s finest Arabica and Robusta coffee varieties, with Ethiopia being the birthplace of coffee.',
    tag: 'High Growth Potential',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    icon: Leaf,
    title: 'Tea Exports',
    regions: 'Kenya, Rwanda, Tanzania',
    description: 'Kenya is the world\'s largest exporter of black tea, with Rwanda and Tanzania also producing high-quality tea varieties.',
    tag: 'Stable Market',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Flower,
    title: 'Floriculture',
    regions: 'Kenya, Ethiopia, Uganda',
    description: 'Kenya and Ethiopia are leading global exporters of cut flowers, particularly roses, carnations, and summer flowers.',
    tag: 'Export Leader',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Sprout,
    title: 'Organic Farming',
    regions: 'Uganda, Tanzania, Rwanda',
    description: 'Uganda is Africa\'s largest organic farming country, with Tanzania and Rwanda also seeing significant growth in organic production.',
    tag: 'Emerging Trend',
    tagColor: 'bg-purple-100 text-purple-700',
  },
]

export function InsightsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">East African Agricultural Highlights</h2>
            <p className="text-muted-foreground">Key insights and opportunities in the region</p>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agriculturalHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${highlight.tagColor}`}
                      >
                        {highlight.tag}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">{highlight.regions}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* View All Insights Button */}
          <div className="text-center pt-4">
            <Link href="/insights">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                aria-label="View all East African insights"
              >
                View All East African Insights →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}