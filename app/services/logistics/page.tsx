import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, MapPin, Clock, Thermometer, Shield, CheckCircle } from "lucide-react"

export default function LogisticsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Agricultural Logistics Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive logistics services for agricultural products across East Africa. From farm to market, we ensure
          your products reach their destination safely and on time.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">End-to-End Logistics Solutions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Truck className="h-6 w-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold">Transportation Network</h3>
                <p className="text-muted-foreground">Extensive fleet covering all major routes in East Africa</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Thermometer className="h-6 w-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold">Cold Chain Management</h3>
                <p className="text-muted-foreground">Temperature-controlled storage and transportation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold">Real-time Tracking</h3>
                <p className="text-muted-foreground">GPS tracking and live updates on your shipments</p>
              </div>
            </div>
          </div>
          <Button size="lg" asChild>
            <Link href="/hire/transport">Book Transport</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Logistics+Solutions"
            alt="Logistics Solutions"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <Truck className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Transportation</CardTitle>
            <CardDescription>Reliable transport solutions for all agricultural products</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Refrigerated trucks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Dry cargo vehicles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Specialized equipment
              </li>
            </ul>
            <Button className="w-full mt-4" variant="outline" asChild>
              <Link href="/hire/transport">Book Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Package className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Warehousing</CardTitle>
            <CardDescription>Secure storage facilities across the region</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Climate-controlled storage
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Inventory management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Quality monitoring
              </li>
            </ul>
            <Button className="w-full mt-4" variant="outline" asChild>
              <Link href="/contact">Find Warehouse</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Insurance</CardTitle>
            <CardDescription>Comprehensive cargo insurance coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Transit insurance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Storage insurance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Damage protection
              </li>
            </ul>
            <Button className="w-full mt-4" variant="outline" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Logistics?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Clock, title: "Fast Delivery", description: "Express delivery options available" },
            { icon: Thermometer, title: "Cold Chain", description: "Temperature-controlled transport" },
            { icon: MapPin, title: "Wide Coverage", description: "Serving all East African countries" },
            { icon: Shield, title: "Secure Handling", description: "Professional cargo handling" },
          ].map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Ship Your Products?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Get started with our logistics services and ensure your agricultural products reach their destination safely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/hire/transport">Book Transport</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
