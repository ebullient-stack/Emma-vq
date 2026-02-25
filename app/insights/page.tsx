import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Calendar, TrendingUp, TrendingDown, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InsightsPage() {
  const featuredInsight = {
    title: "2023 Global Agricultural Market Outlook",
    image: "/placeholder.svg?height=400&width=800&text=Market+Outlook",
    date: "Dec 1, 2023",
    trend: "up",
    percentage: "5.2%",
    description:
      "Comprehensive analysis of global agricultural markets, including production forecasts, trade dynamics, and price trends for major commodities in 2023 and beyond.",
    link: "/insights/global-agricultural-outlook-2023",
    categories: ["Market Analysis", "Price Forecast", "Trade Flows"],
  }

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
    {
      title: "Citrus Market Supply Chain Disruptions",
      image: "/placeholder.svg?height=200&width=400&text=Citrus",
      date: "Nov 12, 2023",
      trend: "up",
      percentage: "7%",
      description: "Impact of recent weather events and logistics challenges on global citrus supply",
      link: "/insights/citrus-supply-chain-2023",
      category: "Supply Chain",
    },
    {
      title: "Sustainable Seafood Sourcing Report",
      image: "/placeholder.svg?height=200&width=400&text=Seafood",
      date: "Oct 30, 2023",
      trend: "up",
      percentage: "9%",
      description: "Trends in sustainable seafood certification and consumer preferences",
      link: "/insights/sustainable-seafood-2023",
      category: "Sustainability",
    },
    {
      title: "Dairy Price Volatility Analysis",
      image: "/placeholder.svg?height=200&width=400&text=Dairy",
      date: "Sep 15, 2023",
      trend: "down",
      percentage: "11%",
      description: "Factors contributing to recent price volatility in global dairy markets",
      link: "/insights/dairy-price-volatility-2023",
      category: "Price Forecast",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Market Insights</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Stay informed with the latest market trends, price analyses, and industry reports to make better sourcing
          decisions.
        </p>
      </div>

      {/* Search and filter */}
      <div className="max-w-5xl mx-auto mb-12 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Input type="search" placeholder="Search insights..." className="pr-10" />
          <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Featured insight */}
      <div className="max-w-5xl mx-auto mb-12">
        <Link href={featuredInsight.link} className="block">
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-[300px] w-full">
              <Image
                src={featuredInsight.image || "/placeholder.svg"}
                alt={featuredInsight.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{featuredInsight.date}</span>
                  <div className="ml-4 flex items-center">
                    {featuredInsight.trend === "up" ? (
                      <>
                        <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                        <span className="text-green-400">+{featuredInsight.percentage}</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="h-4 w-4 text-red-400 mr-1" />
                        <span className="text-red-400">-{featuredInsight.percentage}</span>
                      </>
                    )}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{featuredInsight.title}</h2>
                <p className="text-white/80 mb-4">{featuredInsight.description}</p>
                <div className="flex flex-wrap gap-2">
                  {featuredInsight.categories.map((category, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/20 hover:bg-white/30">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      {/* Tabs for different categories */}
      <div className="max-w-5xl mx-auto mb-8">
        <Tabs defaultValue="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Insights</TabsTrigger>
            <TabsTrigger value="market-analysis">Market Analysis</TabsTrigger>
            <TabsTrigger value="price-forecast">Price Forecast</TabsTrigger>
            <TabsTrigger value="trade-flows">Trade Flows</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <Link key={index} href={insight.link} className="block">
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48 w-full">
                      <Image
                        src={insight.image || "/placeholder.svg"}
                        alt={insight.title}
                        fill
                        className="object-cover"
                      />
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
          </TabsContent>
          <TabsContent value="market-analysis" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights
                .filter((insight) => insight.category === "Market Analysis")
                .map((insight, index) => (
                  <Link key={index} href={insight.link} className="block">
                    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-48 w-full">
                        <Image
                          src={insight.image || "/placeholder.svg"}
                          alt={insight.title}
                          fill
                          className="object-cover"
                        />
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
          </TabsContent>
          {/* Similar TabsContent for other categories */}
        </Tabs>
      </div>

      {/* Newsletter signup */}
      <div className="max-w-5xl mx-auto mt-16">
        <Card className="bg-muted">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Market Insights</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest market insights, price analyses, and industry reports
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
