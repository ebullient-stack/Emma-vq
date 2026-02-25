import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Calendar, TrendingUp, TrendingDown } from "lucide-react"

export default function MarketInsights() {
  const insights = [
    {
      title: "Global Avocado Market Report 2023",
      image: "/placeholder.svg?height=200&width=400&text=Avocado",
      date: "Oct 15, 2023",
      trend: "up",
      percentage: "12%",
      description: "Analysis of production, trade flows, and price trends in the global avocado market",
      link: "/insights/avocado-market-2023",
      category: "Market Analysis",
    },
    {
      title: "Coffee Bean Price Forecast Q4 2023",
      image: "/placeholder.svg?height=200&width=400&text=Coffee",
      date: "Sep 28, 2023",
      trend: "down",
      percentage: "8%",
      description: "Detailed price forecast for Arabica and Robusta coffee beans for Q4 2023",
      link: "/insights/coffee-price-forecast-q4-2023",
      category: "Price Forecast",
    },
    {
      title: "Emerging Trends in Organic Grain Trade",
      image: "/placeholder.svg?height=200&width=400&text=Grains",
      date: "Nov 5, 2023",
      trend: "up",
      percentage: "15%",
      description: "Analysis of growing demand for organic grains and impact on global supply chains",
      link: "/insights/organic-grain-trends-2023",
      category: "Trade Flows",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Market Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay informed with the latest market trends, price analyses, and industry reports
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild>
              <Link href="/insights" className="flex items-center">
                View All Insights
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Link key={index} href={insight.link} className="block">
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image src={insight.image || "/placeholder.svg"} alt={insight.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{insight.date}</span>
                    <div className="ml-auto flex items-center">
                      {insight.trend === "up" ? (
                        <>
                          <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                          <span className="text-green-600">+{insight.percentage}</span>
                        </>
                      ) : (
                        <>
                          <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                          <span className="text-red-600">-{insight.percentage}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <Badge className="mb-3">{insight.category}</Badge>
                  <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{insight.description}</p>
                  <div className="text-primary text-sm font-medium flex items-center">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
