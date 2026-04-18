'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Share2, Bookmark } from 'lucide-react'

const insights = [
  {
    id: 1,
    title: 'Rice Price Forecast Tanzania Q4',
    tags: ['Price Forecast', 'Rice', 'Tanzania'],
    date: '8/5/2025',
    description: 'Rice prices projected to soften slightly with anticipated harvest inflows; monitor import parity with Asian markets.',
    nextMonths: 'Sep 0.92 USD/kg, Oct 0.88 USD/kg, Nov 0.86 USD/kg',
    fullContent: `
      <h2>Market Overview</h2>
      <p>Tanzania's rice market is experiencing dynamic shifts as we approach the final quarter of 2025. Our latest analysis indicates that rice prices are projected to soften slightly with anticipated harvest inflows entering the market.</p>
      
      <h2>Price Forecast by Month</h2>
      <ul>
        <li><strong>September 2025:</strong> 0.92 USD/kg - Expected decline as harvest ramps up</li>
        <li><strong>October 2025:</strong> 0.88 USD/kg - Further softening as supply peaks</li>
        <li><strong>November 2025:</strong> 0.86 USD/kg - Stabilization at lower levels</li>
      </ul>
      
      <h2>Key Factors Influencing Prices</h2>
      <p>Several factors are contributing to this forecast:</p>
      <ul>
        <li>Anticipated harvest inflows from local production</li>
        <li>Import parity with Asian markets, particularly Thailand and Vietnam</li>
        <li>Seasonal demand patterns in East Africa</li>
        <li>Regional trade flows and logistics costs</li>
      </ul>
      
      <h2>Recommendations</h2>
      <p>Market participants should monitor import parity closely with Asian markets to understand price dynamics. Retailers should prepare for lower price points while maintaining competitive margins.</p>
    `,
    image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=800&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Onion Price Forecast Kenya Q4',
    tags: ['Price Forecast', 'Onion', 'Kenya'],
    date: '8/3/2025',
    description: 'Domestic onion prices expected to edge higher due to reduced Tanzanian imports and localized weather issues.',
    nextMonths: 'Sep 1.05 USD/kg, Oct 1.12 USD/kg, Nov 1.15 USD/kg',
    fullContent: `
      <h2>Market Overview</h2>
      <p>Kenya's onion market is facing supply constraints that are expected to support higher prices through Q4 2025. Our analysis suggests that domestic onion prices will edge higher due to two key factors: reduced Tanzanian imports and localized weather issues affecting local production.</p>
      
      <h2>Price Forecast by Month</h2>
      <ul>
        <li><strong>September 2025:</strong> 1.05 USD/kg - Initial price support</li>
        <li><strong>October 2025:</strong> 1.12 USD/kg - Supply tightening effects</li>
        <li><strong>November 2025:</strong> 1.15 USD/kg - Peak prices before year-end</li>
      </ul>
      
      <h2>Supply Dynamics</h2>
      <p>The Kenya-Tanzania onion trade relationship is critical to regional price dynamics. Recent changes in Tanzania's import policies and domestic demand are reducing available supplies for Kenya.</p>
      
      <h2>Weather Impact</h2>
      <p>Localized weather challenges in Kenya's onion-producing regions are further constraining supply. Farmers and traders should prepare for sustained higher prices.</p>
    `,
    image: 'https://images.unsplash.com/photo-1585518419759-7e42a4e3e338?w=800&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Tomato Price Forecast Q4: Weather and Transport Effects',
    tags: ['Price Forecast', 'Tomato', 'Kenya'],
    date: '8/1/2025',
    description: 'Tomato prices likely to trend higher due to weather-related supply gaps and increased transport costs. Retailers should plan promotions carefully.',
    nextMonths: 'Sep 1.15 USD/kg, Oct 1.22 USD/kg, Nov 1.28 USD/kg',
    fullContent: `
      <h2>Market Overview</h2>
      <p>Kenya's tomato market is facing dual pressures from weather-related supply constraints and elevated transport costs. Our forecast indicates higher prices throughout Q4 2025.</p>
      
      <h2>Price Forecast by Month</h2>
      <ul>
        <li><strong>September 2025:</strong> 1.15 USD/kg - Initial price increase</li>
        <li><strong>October 2025:</strong> 1.22 USD/kg - Supply gap widens</li>
        <li><strong>November 2025:</strong> 1.28 USD/kg - Peak seasonal prices</li>
      </ul>
      
      <h2>Supply Chain Impact</h2>
      <p>Weather disruptions are affecting tomato production in traditional growing regions. Additionally, increased fuel and logistics costs are pushing transport expenses higher, adding pressure to wholesale and retail prices.</p>
      
      <h2>Retailer Recommendations</h2>
      <p>Retailers should plan promotions carefully given the higher price environment. Consider dynamic pricing strategies and volume discounts to maintain customer loyalty while protecting margins.</p>
    `,
    image: 'https://images.unsplash.com/photo-1592841494611-63a3e4a0f89e?w=800&h=400&fit=crop'
  },
]

export default function InsightDetailPage() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const insight = insights.find(i => i.id === id)

  if (!insight) {
    return (
      <>
        <NavigationHeader />
        <main className="min-h-screen bg-background">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Insight Not Found</h1>
            <Link href="/insights">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Back to Insights
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Navigation */}
          <Link href="/insights" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          {/* Insight Article */}
          <article className="bg-card border border-border rounded-lg overflow-hidden">
            {/* Featured Image */}
            {insight.image && (
              <div className="h-96 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8 sm:p-12">
              {/* Metadata */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-4">{insight.title}</h1>
                <p className="text-sm text-muted-foreground">Published: {insight.date}</p>
              </div>

              {/* Share and Save Buttons */}
              <div className="flex gap-3 mb-8 pb-8 border-b border-border">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  Save
                </Button>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-lg text-muted-foreground mb-8">{insight.description}</p>
                
                <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
                  <h3 className="font-bold text-foreground mb-2">Q4 Price Forecast</h3>
                  <p className="text-foreground">{insight.nextMonths}</p>
                </div>

                {/* Parse and display full content */}
                <div 
                  className="space-y-6 text-foreground"
                  dangerouslySetInnerHTML={{
                    __html: insight.fullContent
                      .replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                      .replace(/<h3>/g, '<h3 class="text-xl font-bold mt-6 mb-3">')
                      .replace(/<p>/g, '<p class="mb-4 leading-relaxed">')
                      .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 space-y-2">')
                      .replace(/<li>/g, '<li class="text-foreground">')
                  }}
                />
              </div>

              {/* Related Insights */}
              <div className="mt-16 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Related Insights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {insights
                    .filter(i => i.id !== insight.id && i.tags.some(tag => insight.tags.includes(tag)))
                    .slice(0, 2)
                    .map((relatedInsight) => (
                      <Link key={relatedInsight.id} href={`/insights/${relatedInsight.id}`}>
                        <Card className="border border-border h-full hover:shadow-lg transition-shadow cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex gap-2 mb-3">
                              {relatedInsight.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="font-bold text-foreground mb-2 line-clamp-2">
                              {relatedInsight.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {relatedInsight.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </article>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get More Insights</h2>
            <p className="mb-6 text-green-100">Subscribe to our insights newsletter for weekly market analysis and price forecasts.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/insights">
                <Button className="bg-white text-green-600 hover:bg-green-50">
                  View All Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
