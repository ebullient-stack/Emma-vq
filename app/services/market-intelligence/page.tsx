import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, BarChart3, Globe, Download, Eye } from "lucide-react"

export default function MarketIntelligencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Market Intelligence</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Access comprehensive market data, price trends, and insights to make informed decisions in East African
          agricultural markets.
        </p>
      </div>

      <Tabs defaultValue="prices" className="w-full mb-16">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8">
          <TabsTrigger value="prices">Price Data</TabsTrigger>
          <TabsTrigger value="trends">Market Trends</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="prices" className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Real-time Prices</CardTitle>
                <CardDescription>Live pricing data from major markets across East Africa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Coffee (Arabica)</span>
                    <span className="font-medium text-green-600">$4.20/kg ↑</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maize</span>
                    <span className="font-medium text-red-600">$0.85/kg ↓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tea</span>
                    <span className="font-medium text-green-600">$3.15/kg ↑</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/insights">View All Prices</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Price History</CardTitle>
                <CardDescription>Historical price trends and seasonal patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>30-day trend</span>
                    <Badge variant="outline" className="text-green-600">
                      +12%
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>90-day trend</span>
                    <Badge variant="outline" className="text-red-600">
                      -5%
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Seasonal high</span>
                    <span className="font-medium">$4.85/kg</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/insights">View Charts</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Regional Comparison</CardTitle>
                <CardDescription>Compare prices across different East African markets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Kenya</span>
                    <span className="font-medium">$4.20/kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tanzania</span>
                    <span className="font-medium">$3.95/kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uganda</span>
                    <span className="font-medium">$4.10/kg</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/insights">Compare Markets</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Market Trends</CardTitle>
                <CardDescription>Key trends shaping East African agriculture</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Organic Coffee Demand Rising</h4>
                      <p className="text-sm text-muted-foreground">25% increase in organic coffee exports</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Digital Payment Adoption</h4>
                      <p className="text-sm text-muted-foreground">Mobile payments up 40% in rural areas</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Climate-Smart Agriculture</h4>
                      <p className="text-sm text-muted-foreground">Drought-resistant crops gaining popularity</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Insights</CardTitle>
                <CardDescription>Understanding seasonal market patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-800">Current Season: Harvest</h4>
                    <p className="text-sm text-green-700">Peak supply period for most crops</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Coffee harvest</span>
                      <span className="text-green-600">Oct - Feb</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Maize harvest</span>
                      <span className="text-green-600">Dec - Mar</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tea production</span>
                      <span className="text-blue-600">Year-round</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "East Africa Coffee Market Report 2024",
                description: "Comprehensive analysis of coffee markets across the region",
                date: "December 2024",
                pages: "45 pages",
                type: "Premium",
              },
              {
                title: "Maize Price Forecast Q1 2025",
                description: "Quarterly forecast for maize prices and market conditions",
                date: "January 2025",
                pages: "28 pages",
                type: "Free",
              },
              {
                title: "Tea Export Trends Analysis",
                description: "Analysis of tea export patterns and international demand",
                date: "November 2024",
                pages: "32 pages",
                type: "Premium",
              },
            ].map((report, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={report.type === "Premium" ? "default" : "secondary"}>{report.type}</Badge>
                    <span className="text-sm text-muted-foreground">{report.date}</span>
                  </div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{report.pages}</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span>Preview</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Advanced Analytics Dashboard</h3>
            <p className="text-muted-foreground mb-6">
              Get deeper insights with our advanced analytics tools and custom reporting features.
            </p>
            <Button size="lg" asChild>
              <Link href="/analytics/location">
                View Analytics Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Market Intelligence</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Access premium market data and insights to stay ahead in East African agricultural markets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Start Free Trial</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
