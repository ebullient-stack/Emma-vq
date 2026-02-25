"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tractor, Wrench, Landmark, Users, Truck, ArrowRight, Clock, MapPin, Star } from "lucide-react"

const hireCategories = [
  {
    id: "machinery",
    title: "Agricultural Machinery",
    description: "Rent tractors, harvesters, planters, and other farming equipment",
    icon: Tractor,
    href: "/hire/machinery",
    itemCount: "150+ items",
    priceRange: "$50-500/day",
    popular: true,
    features: ["GPS tracking", "Operator included", "Insurance covered", "24/7 support"],
  },
  {
    id: "tools",
    title: "Tools & Equipment",
    description: "Professional farming tools, irrigation systems, and specialized equipment",
    icon: Wrench,
    href: "/hire/tools",
    itemCount: "300+ items",
    priceRange: "$10-200/day",
    popular: false,
    features: ["Quality assured", "Training included", "Flexible rental", "Local pickup"],
  },
  {
    id: "land",
    title: "Fields & Land",
    description: "Rent agricultural land, greenhouses, and farming facilities",
    icon: Landmark,
    href: "/hire/land",
    itemCount: "80+ listings",
    priceRange: "$100-2000/month",
    popular: true,
    features: ["Soil tested", "Water access", "Road connectivity", "Legal support"],
  },
  {
    id: "workers",
    title: "Farm Workers",
    description: "Hire skilled agricultural workers and farming specialists",
    icon: Users,
    href: "/hire/workers",
    itemCount: "500+ workers",
    priceRange: "$20-100/day",
    popular: false,
    features: ["Verified profiles", "Skill ratings", "Background checked", "Insurance covered"],
  },
  {
    id: "transport",
    title: "Transport & Logistics",
    description: "Trucks, trailers, and logistics services for agricultural products",
    icon: Truck,
    href: "/hire/transport",
    itemCount: "120+ vehicles",
    priceRange: "$80-400/day",
    popular: false,
    features: ["Temperature controlled", "GPS tracking", "Licensed drivers", "Cargo insurance"],
  },
]

export default function HireCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hire What You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access agricultural resources on-demand. From machinery to land, find everything you need to grow your
            farming business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hireCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id} className="relative overflow-hidden hover:shadow-lg transition-shadow group">
                {category.popular && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">Popular</Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>East Africa</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {category.itemCount}
                    </span>
                    <span className="font-medium text-primary">{category.priceRange}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Key Features:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {category.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-1 text-xs">
                          <Star className="h-2 w-2 fill-current text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                    <Link href={category.href} className="flex items-center justify-center gap-2">
                      Browse {category.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
              <p className="mb-6 opacity-90">
                Can't find what you're looking for? Contact our team for custom rental solutions and bulk discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" asChild>
                  <Link href="/hire/contact">Contact Us</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/post-ad">List Your Equipment</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
