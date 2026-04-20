import { HeroSection } from '@/components/hero-section'
import { WhyChooseSection } from '@/components/why-choose-section'
import { ExploreCategoriesSection } from '@/components/explore-categories-section'
import { MarketIntelligenceSection } from '@/components/market-intelligence-section'
import { InsightsSection } from '@/components/insights-section'
import { FeaturedSuppliersSection } from '@/components/featured-suppliers-section'
import { MarketInsightsSection } from '@/components/market-insights-section'
import { HireServicesSection } from '@/components/hire-services-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhyChooseSection />
      <ExploreCategoriesSection />
      <MarketIntelligenceSection />
      <InsightsSection />
      <FeaturedSuppliersSection />
      <MarketInsightsSection />
      <HireServicesSection />
      <Footer />
    </main>
  )
}
