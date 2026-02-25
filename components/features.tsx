import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Globe, ShieldCheck, TrendingUp } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Network",
      description: "Access suppliers and buyers from over 150 countries around the world.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Verified Suppliers",
      description: "All suppliers undergo a rigorous verification process to ensure reliability.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Market Intelligence",
      description: "Make informed decisions with our comprehensive market data and insights.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "End-to-End Solutions",
      description: "From sourcing to fulfillment, we provide complete trade solutions.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Asteric</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're revolutionizing global trade in food and agriculture with our innovative platform and services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-0 shadow-md">
            <CardHeader>
              <div className="mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
