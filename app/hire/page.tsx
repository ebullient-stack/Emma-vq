import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function HirePage() {
  const categories = [
    {
      title: "Agro Machinery",
      description: "Rent tractors, harvesters, and other agricultural machinery",
      image: "/placeholder.svg?height=300&width=400&text=Machinery",
      link: "/hire/machinery",
    },
    {
      title: "Tools & Equipment",
      description: "Rent specialized farming tools and equipment",
      image: "/placeholder.svg?height=300&width=400&text=Tools",
      link: "/hire/tools",
    },
    {
      title: "Fields & Land",
      description: "Rent agricultural land and fields for farming",
      image: "/placeholder.svg?height=300&width=400&text=Land",
      link: "/hire/land",
    },
    {
      title: "Transport Vehicles",
      description: "Rent trucks, vans, and specialized transport vehicles",
      image: "/placeholder.svg?height=300&width=400&text=Transport",
      link: "/hire/transport",
    },
    {
      title: "Farm Workers",
      description: "Hire skilled farm workers for seasonal or permanent work",
      image: "/placeholder.svg?height=300&width=400&text=Workers",
      link: "/hire/workers",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Agricultural Hiring Platform</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Rent machinery, tools, land, vehicles, or hire farm workers to support your agricultural operations
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {categories.map((category) => (
          <Link key={category.title} href={category.link} className="block">
            <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline" className="w-full">
                  Explore
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-muted rounded-xl p-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-1">Browse Categories</h3>
                  <p className="text-muted-foreground">
                    Explore our wide range of machinery, tools, land, vehicles, and worker profiles
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-1">Contact Providers</h3>
                  <p className="text-muted-foreground">
                    Reach out to providers directly to discuss your needs and requirements
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-1">Secure Booking</h3>
                  <p className="text-muted-foreground">
                    Book and pay securely through our platform with protection for both parties
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium mb-1">Get to Work</h3>
                  <p className="text-muted-foreground">
                    Receive your rental or welcome your hired workers and get started
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=How+It+Works"
              alt="How It Works"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Hiring Platform?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border rounded-lg">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
            <p className="text-muted-foreground">
              Our platform ensures secure payments and protects both renters and providers
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Providers</h3>
            <p className="text-muted-foreground">All providers are verified to ensure quality and reliability</p>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Wide Network</h3>
            <p className="text-muted-foreground">
              Access to a large network of machinery, tools, land, vehicles, and skilled workers
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Join thousands of farmers who are already using our platform to access the resources they need
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/hire/machinery">Rent Machinery</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/hire/transport">Rent Transport</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
