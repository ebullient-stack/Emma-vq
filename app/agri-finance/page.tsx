import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building, FileText, Landmark, Sprout, Calculator, Award, Shield } from "lucide-react"

export default function AgriFinancePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Agri Finance Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with financial institutions, government programs, and creditors to fund your agricultural operations
        </p>
      </div>

      <Tabs defaultValue="loans" className="w-full mb-16">
        <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto mb-8">
          <TabsTrigger value="loans">Loans & Credit</TabsTrigger>
          <TabsTrigger value="government">Government Programs</TabsTrigger>
          <TabsTrigger value="investors">Investors & Grants</TabsTrigger>
        </TabsList>

        <TabsContent value="loans" className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-green-50">
                    Featured
                  </Badge>
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>AgriBank Farm Loans</CardTitle>
                <CardDescription>Specialized loans for farm operations and equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-medium">4.5% - 6.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="font-medium">$10,000 - $500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Term Length</span>
                    <span className="font-medium">1 - 15 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Time</span>
                    <span className="font-medium">5-7 business days</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-blue-50">
                    Popular
                  </Badge>
                  <Landmark className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Rural Development Credit</CardTitle>
                <CardDescription>Low-interest loans for rural agricultural businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-medium">3.75% - 5.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="font-medium">$25,000 - $1,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Term Length</span>
                    <span className="font-medium">5 - 20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Time</span>
                    <span className="font-medium">10-14 business days</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">New</Badge>
                  <Sprout className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Sustainable Farming Credit</CardTitle>
                <CardDescription>Financing for organic and sustainable agricultural practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-medium">3.2% - 4.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="font-medium">$15,000 - $350,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Term Length</span>
                    <span className="font-medium">3 - 12 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Time</span>
                    <span className="font-medium">7-10 business days</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Loan Calculator</h3>
            <div className="flex items-center justify-center">
              <Calculator className="h-16 w-16 text-primary mr-4" />
              <div>
                <p className="mb-2">Estimate your monthly payments and total interest with our loan calculator.</p>
                <Button variant="outline">
                  Open Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="government" className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-green-50">
                    High Approval
                  </Badge>
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Agricultural Development Program</CardTitle>
                <CardDescription>Government-backed loans for farm development and modernization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-medium">2.5% - 4.0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Funding Amount</span>
                    <span className="font-medium">$50,000 - $2,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Term Length</span>
                    <span className="font-medium">5 - 25 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application Deadline</span>
                    <span className="font-medium">Quarterly cycles</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Check Eligibility <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-blue-50">
                    Subsidized
                  </Badge>
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Crop Insurance Subsidy</CardTitle>
                <CardDescription>Government program to subsidize crop insurance premiums</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subsidy Rate</span>
                    <span className="font-medium">Up to 65% of premium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coverage</span>
                    <span className="font-medium">Multiple peril coverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Eligible Crops</span>
                    <span className="font-medium">Most major crops</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application Period</span>
                    <span className="font-medium">Before planting season</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Apply for Subsidy <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Tax Relief</Badge>
                  <Landmark className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Agricultural Tax Incentives</CardTitle>
                <CardDescription>Tax benefits and deductions for qualifying farm operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Benefit Type</span>
                    <span className="font-medium">Tax deductions & credits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Eligible Expenses</span>
                    <span className="font-medium">Equipment, land, operations</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Filing Period</span>
                    <span className="font-medium">Annual tax season</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Documentation</span>
                    <span className="font-medium">Expense records required</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Government Program Eligibility Check</h3>
            <div className="flex items-center justify-center">
              <FileText className="h-16 w-16 text-primary mr-4" />
              <div>
                <p className="mb-2">
                  Answer a few questions to see which government agricultural programs you may qualify for.
                </p>
                <Button variant="outline">
                  Check Eligibility <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="investors" className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-green-50">
                    Equity
                  </Badge>
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>AgriVenture Capital</CardTitle>
                <CardDescription>Equity investment for high-growth agricultural businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment Range</span>
                    <span className="font-medium">$250,000 - $5,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Equity Stake</span>
                    <span className="font-medium">10% - 30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target Business</span>
                    <span className="font-medium">Scaling agribusinesses</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application Process</span>
                    <span className="font-medium">Pitch deck + interview</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Submit Pitch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-blue-50">
                    Non-Repayable
                  </Badge>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Sustainable Farming Grant</CardTitle>
                <CardDescription>Grants for implementing sustainable agricultural practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Grant Amount</span>
                    <span className="font-medium">$5,000 - $50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Matching Required</span>
                    <span className="font-medium">25% of project cost</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus Areas</span>
                    <span className="font-medium">Water, soil, biodiversity</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Application Deadline</span>
                    <span className="font-medium">March 31 annually</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Apply for Grant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Crowdfunding</Badge>
                  <Sprout className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>AgriCrowd Platform</CardTitle>
                <CardDescription>Crowdfunding platform specifically for agricultural projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Typical Raise</span>
                    <span className="font-medium">$10,000 - $100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span className="font-medium">5% of funds raised</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Campaign Length</span>
                    <span className="font-medium">30 - 60 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-medium">68% of campaigns</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Start Campaign <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Investor Matching Service</h3>
            <div className="flex items-center justify-center">
              <Building className="h-16 w-16 text-primary mr-4" />
              <div>
                <p className="mb-2">
                  Create a profile and get matched with investors interested in agricultural businesses like yours.
                </p>
                <Button variant="outline">
                  Create Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-muted rounded-xl overflow-hidden">
          <div className="relative h-48 md:h-64">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Financial+Advisory"
              alt="Financial Advisory"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Financial Advisory Services</h3>
            <p className="text-muted-foreground mb-4">
              Get expert advice on agricultural finance, business planning, and investment strategies from our network
              of specialized advisors.
            </p>
            <Button variant="outline" asChild>
              <Link href="/services/financial-advisory">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-muted rounded-xl overflow-hidden">
          <div className="relative h-48 md:h-64">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Risk+Management"
              alt="Risk Management"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Risk Management Tools</h3>
            <p className="text-muted-foreground mb-4">
              Access tools and resources to manage agricultural risks, including weather insurance, price hedging, and
              diversification strategies.
            </p>
            <Button variant="outline" asChild>
              <Link href="/services/risk-management">
                Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Personalized Financial Guidance?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Our team of agricultural finance specialists can help you navigate the complex world of farm financing and
          find the right solution for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact an Advisor</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link href="/resources/financial-guides">Download Free Guides</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
