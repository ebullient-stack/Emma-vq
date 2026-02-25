import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Asteric has transformed how we source our agricultural products. The platform is intuitive, and the market intelligence has been invaluable for our business.",
      author: "Sarah Johnson",
      position: "Procurement Manager",
      company: "Global Foods Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a supplier, Asteric has opened up new markets for our products. The verification process was thorough, which gives buyers confidence in our offerings.",
      author: "Miguel Rodriguez",
      position: "Export Director",
      company: "Fresh Harvest Co.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The end-to-end service from Asteric is exceptional. From sourcing to logistics, they've streamlined our entire procurement process.",
      author: "Lisa Chen",
      position: "Supply Chain Director",
      company: "Organic Brands Ltd.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that have transformed their global trade with Asteric.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
