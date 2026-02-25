import Hero from "@/components/hero"
import Features from "@/components/features"
import ProductCategories from "@/components/product-categories"
import MarketInsights from "@/components/market-insights"
import FeaturedVendors from "@/components/featured-vendors"
import HireCategories from "@/components/hire-categories"
import CtaSection from "@/components/cta-section"
import MarketPrices from "@/components/market-prices"
import DemandedCrops from "@/components/demanded-crops"
import EastAfricaHighlights from "@/components/east-africa-highlights"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <ProductCategories />

      {/* Market data section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Market Intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MarketPrices />
            <DemandedCrops />
          </div>
        </div>
      </section>

      <EastAfricaHighlights />
      <FeaturedVendors />
      <MarketInsights />
      <HireCategories />
      <CtaSection />
    </div>
  )
}
