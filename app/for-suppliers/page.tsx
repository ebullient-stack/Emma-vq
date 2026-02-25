import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ForSuppliersPage() {
  const benefits = [
    {
      title: "Global Market Access",
      description: "Connect with buyers from over 150 countries and expand your business globally.",
      icon: "/placeholder.svg?height=60&width=60&text=🌎",
    },
    {
      title: "Verified Buyer Network",
      description: "Access a network of pre-verified buyers actively looking for products like yours.",
      icon: "/placeholder.svg?height=60&width=60&text=✓",
    },
    {
      title: "Digital Storefront",
      description: "Showcase your products with a customizable online store on our platform.",
      icon: "/placeholder.svg?height=60&width=60&text=🏪",
    },
    {
      title: "Market Intelligence",
      description: "Get insights on market trends, pricing, and demand to make informed decisions.",
      icon: "/placeholder.svg?height=60&width=60&text=📊",
    },
    {
      title: "Trade Finance",
      description: "Access financing solutions to support your international trade activities.",
      icon: "/placeholder.svg?height=60&width=60&text=💰",
    },
    {
      title: "Logistics Support",
      description: "Simplify shipping and fulfillment with our integrated logistics solutions.",
      icon: "/placeholder.svg?height=60&width=60&text=🚢",
    },
  ]

  const testimonials = [
    {
      quote:
        "Joining Asteric has transformed our export business. We've connected with buyers from markets we never had access to before, and our sales have increased by 40% in just one year.",
      author: "Maria Rodriguez",
      company: "Fresh Harvest Co., Mexico",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The market intelligence and pricing data provided by Asteric has been invaluable for our business strategy. We're now able to time our market entry perfectly and optimize our pricing.",
      author: "Chen Wei",
      company: "Golden Grain Exports, China",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a small producer, we struggled to reach international markets. Asteric's platform gave us the visibility and tools we needed to compete globally. Now we export to 12 countries.",
      author: "Samuel Osei",
      company: "Organic Farms Collective, Ghana",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for new suppliers looking to explore global opportunities",
      features: [
        "Basic supplier profile",
        "List up to 10 products",
        "Access to buyer inquiries",
        "Basic market reports",
        "Standard customer support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$99/month",
      description: "For established suppliers ready to grow their international presence",
      features: [
        "Enhanced supplier profile with verification badge",
        "List up to 50 products with detailed specifications",
        "Priority in search results",
        "Detailed market intelligence reports",
        "Trade finance options",
        "Priority customer support",
      ],
      cta: "Start 14-Day Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale suppliers with complex needs",
      features: [
        "Fully customized supplier storefront",
        "Unlimited product listings",
        "Featured placement on the platform",
        "Custom market research and analysis",
        "Dedicated account manager",
        "Premium logistics and fulfillment solutions",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/20 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Grow Your Business with Asteric</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect with buyers worldwide, showcase your products, and expand your market reach on our trusted
                agricultural trading platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/become-vendor">Become a Supplier</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Supplier+Success"
                alt="Supplier Success"
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
            <h2 className="text-3xl font-bold mb-4">Why Suppliers Choose Asteric</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of suppliers who trust Asteric to grow their business and reach new markets.
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

      {/* How It Works Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting started as a supplier on Asteric is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Account</h3>
              <p className="text-muted-foreground">
                Sign up and complete your supplier profile with your company information and product categories.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">List Your Products</h3>
              <p className="text-muted-foreground">
                Add your products with detailed descriptions, specifications, pricing, and high-quality images.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Receiving Orders</h3>
              <p className="text-muted-foreground">
                Connect with buyers, respond to inquiries, and grow your business globally.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/become-vendor">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from suppliers who have transformed their business with Asteric.
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

      {/* Pricing Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Supplier Plans</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-sm ${plan.popular ? "relative border-primary shadow-md" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/become-vendor"}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Expand Your Global Reach?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of suppliers who are growing their business with Asteric. Get started today and connect
              with buyers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/become-vendor">Become a Supplier</Link>
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
