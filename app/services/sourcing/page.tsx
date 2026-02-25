import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Users, Shield, Clock, Globe, CheckCircle } from "lucide-react"

export default function SourcingSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sourcing Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with verified suppliers across East Africa. We help you find reliable partners for your agricultural
          sourcing needs with quality assurance and competitive pricing.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why Choose Our Sourcing Platform?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold">Verified Suppliers</h3>
                <p className="text-muted-foreground">
                  All suppliers undergo rigorous verification for quality and reliability
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold">Regional Expertise</h3>
                <p className="text-muted-foreground">
                  Deep knowledge of East African agricultural markets and regulations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold">Fast Matching</h3>
                <p className="text-muted-foreground">Quick supplier matching based on your specific requirements</p>
              </div>
            </div>
          </div>
          <Button size="lg" asChild>
            <Link href="/vendors">Find Suppliers Now</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Sourcing+Solutions"
            alt="Sourcing Solutions"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <Search className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Supplier Discovery</CardTitle>
            <CardDescription>Find the right suppliers for your specific agricultural products</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Advanced search filters
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Product category matching
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Geographic proximity
              </li>
            </ul>
            <Button className="w-full mt-4" variant="outline" asChild>
              <Link href="/vendors">Start Searching</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Supplier Verification</CardTitle>
            <CardDescription>Comprehensive vetting process for all suppliers on our platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Business registration check
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Quality certifications
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Reference verification
              </li>
            </ul>
            <Button className="w-full mt-4" variant="outline" asChild>
              <Link href="/vendor-dashboard/verification">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Quality Assurance</CardTitle>
            <CardDescription>Ensuring product quality and delivery reliability</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Product quality checks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Delivery tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Dispute resolution
              </li>
            </ul>
            <Button className="w-full mt-4" variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Sourcing?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Join thousands of buyers who trust our platform for their agricultural sourcing needs across East Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Get Started</Link>
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
