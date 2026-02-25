import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ForBuyersPage() {
  const benefits = [
    {
      title: "Verified Suppliers",
      description: "Access a network of pre-verified suppliers from over 150 countries.",
      icon: "/placeholder.svg?height=60&width=60&text=✓",
    },
    {
      title: "Quality Assurance",
      description: "All products undergo rigorous quality checks before listing on our platform.",
      icon: "/placeholder.svg?height=60&width=60&text=🔍",
    },
    {
      title: "Competitive Pricing",
      description: "Connect directly with producers to get the best possible prices.",
      icon: "/placeholder.svg?height=60&width=60&text=💰",
    },
    {
      title: "Market Intelligence",
      description: "Make informed decisions with our comprehensive market data and insights.",
      icon: "/placeholder.svg?height=60&width=60&text=📊",
    },
    {
      title: "Secure Transactions",
      description: "Our secure payment system protects your transactions and ensures reliability.",
      icon: "/placeholder.svg?height=60&width=60&text=🔒",
    },
    {
      title: "End-to-End Solutions",
      description: "From sourcing to fulfillment, we provide complete trade solutions.",
      icon: "/placeholder.svg?height=60&width=60&text=🚢",
    },
  ]

  const testimonials = [
    {
      quote:
        "Asteric has transformed our procurement process. We've found reliable suppliers for all our agricultural needs and reduced our sourcing costs by 15%.",
      author: "James Wilson",
      company: "Global Foods Inc., United States",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The quality of products and suppliers on Asteric is exceptional. The verification process gives us confidence, and the market intelligence helps us time our purchases perfectly.",
      author: "Sophia Müller",
      company: "European Grocery Group, Germany",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a small business, finding reliable international suppliers was always a challenge. Asteric made it simple and secure. We've expanded our product range and improved our margins.",
      author: "Raj Patel",
      company: "Spice Traders Ltd., India",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const categories = [
    {
      name: "Fruits & Vegetables",
      image: "/placeholder.svg?height=200&width=200",
      count: "2,500+ products",
    },
    {
      name: "Grains & Cereals",
      image: "/placeholder.svg?height=200&width=200",
      count: "1,800+ products",
    },
    {
      name: "Coffee & Tea",
      image: "/placeholder.svg?height=200&width=200",
      count: "1,200+ products",
    },
    {
      name: "Nuts & Seeds",
      image: "/placeholder.svg?height=200&width=200",
      count: "950+ products",
    },
    {
      name: "Agro Machinery",
      image: "/placeholder.svg?height=200&width=200",
      count: "750+ products",
    },
    {
      name: "Agro Input",
      image: "/placeholder.svg?height=200&width=200",
      count: "1,300+ products",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/20 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Source Regionally  with Confidence</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find verified suppliers, access quality products, and streamline your procurement process with Asteric.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/signup">Create Free Account</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Global+Sourcing"
                alt="Global Sourcing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Buyers Choose Asteric</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of businesses that trust Asteric for their global sourcing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image src={benefit.icon || "/placeholder.svg"} alt={benefit.title} width={60} height={60} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Discover Our Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our extensive catalog of food and agricultural products from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={`/products?category=${category.name.toLowerCase()}`} className="block">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/products">View All Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sourcing products regionally  has never been easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-muted-foreground">
                Browse our extensive catalog or search for specific products you need.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground">Reach out to verified suppliers directly through our platform.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Negotiate</h3>
              <p className="text-muted-foreground">Compare offers and negotiate terms to find the best deal.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trade</h3>
              <p className="text-muted-foreground">Complete your transaction securely and track your order.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Buyers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from businesses that have transformed their sourcing with Asteric.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Buyer Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond connecting you with suppliers, we offer comprehensive services to support your global trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Sourcing Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom sourcing for specific product requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Supplier verification and due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sample coordination and quality inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Negotiation support and contract assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Market Intelligence</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time price tracking and market trends</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Supply and demand forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Country and regional market reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customized market analysis for your specific needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Trade Finance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Secure payment solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trade credit and financing options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Currency exchange services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Risk management solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Logistics & Fulfillment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span> Border to border trader</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customs clearance assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Warehousing and distribution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Order tracking and delivery management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sourcing?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that use Asteric to source products, find suppliers, and access market
              intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Create Free Account</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
