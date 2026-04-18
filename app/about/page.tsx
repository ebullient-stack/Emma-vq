'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Mission Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At FarmTridge, we're on a mission to make global trade easier by bringing together buyers and suppliers of food and agricultural products from around the world. We provide market intelligence, sourcing solutions, and fulfillment services to help businesses trade with confidence.
            </p>
          </section>

          {/* Story Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2015, FarmTridge began as a market intelligence platform for the food and agriculture industry. Over the years, we've evolved into a comprehensive sourcing platform that connects buyers and suppliers across the globe, facilitating thousands of transactions annually.
            </p>
          </section>

          {/* Values Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Transparency in global trade</span> - We believe in open, honest, and fair trading practices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Reliability in sourcing and fulfillment</span> - We ensure our partners can count on us
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Innovation in market intelligence</span> - We leverage data to provide actionable insights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Sustainability in agricultural practices</span> - We support responsible farming
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Collaboration with global partners</span> - We believe in the power of partnerships
                </span>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
