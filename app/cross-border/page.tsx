import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Truck, FileText, Shield, Clock, CheckCircle } from "lucide-react"

export default function CrossBorderTradePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Cross-Border Trade Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Simplify your agricultural trade across East African borders with our comprehensive trade facilitation
          services, documentation support, and logistics solutions.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Trade Across East Africa with Confidence</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FileText className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Documentation Support</h3>
                <p className="text-muted-foreground">
                  Complete assistance with trade documentation and customs clearance
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Logistics Coordination</h3>
                <p className="text-muted-foreground">End-to-end logistics management across borders</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Compliance Assurance</h3>
                <p className="text-muted-foreground">Stay compliant with all regional trade regulations</p>
              </div>
            </div>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Cross+Border+Trade"
            alt="Cross Border Trade"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Countries Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Trade Corridors We Support</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { from: "Kenya", to: "Tanzania", flag1: "🇰🇪", flag2: "🇹🇿", volume: "$2.1B" },
            { from: "Uganda", to: "Kenya", flag1: "🇺🇬", flag2: "🇰🇪", volume: "$1.8B" },
            { from: "Rwanda", to: "Uganda", flag1: "🇷🇼", flag2: "🇺🇬", volume: "$890M" },
            { from: "Tanzania", to: "Rwanda", flag1: "🇹🇿", flag2: "🇷🇼", volume: "$650M" },
            { from: "Ethiopia", to: "Kenya", flag1: "🇪🇹", flag2: "🇰🇪", volume: "$1.2B" },
            { from: "Burundi", to: "Tanzania", flag1: "🇧🇮", flag2: "🇹🇿", volume: "$420M" },
          ].map((corridor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{corridor.flag1}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-2xl">{corridor.flag2}</span>
                  </div>
                  <Badge variant="outline">{corridor.volume}</Badge>
                </div>
                <h3 className="font-semibold mb-2">
                  {corridor.from} → {corridor.to}
                </h3>
                <p className="text-sm text-muted-foreground">Annual trade volume</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Complete trade documentation services</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Export/Import permits
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Certificates of origin
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Phytosanitary certificates
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Truck className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Logistics</CardTitle>
            <CardDescription>End-to-end logistics solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Transportation coordination
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Warehousing services
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Last-mile delivery
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Compliance</CardTitle>
            <CardDescription>Regulatory compliance support</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Customs clearance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Tax optimization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Regulatory updates
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Clock className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Tracking</CardTitle>
            <CardDescription>Real-time shipment tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                GPS tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Status notifications
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Delivery confirmation
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Submit Request", description: "Provide trade details and requirements" },
            { step: "2", title: "Documentation", description: "We prepare all necessary documents" },
            { step: "3", title: "Logistics", description: "Coordinate transportation and clearance" },
            { step: "4", title: "Delivery", description: "Track and confirm successful delivery" },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Trade?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Let us help you navigate the complexities of cross-border agricultural trade in East Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link href="/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
