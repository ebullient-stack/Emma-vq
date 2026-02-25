import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Asteric</h1>

        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Tridge team"
            width={800}
            height={400}
            className="rounded-lg w-full"
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            At Asteric, we're on a mission to make global trade easier by bringing together buyers and suppliers of food
            and agricultural products from around the world. We provide market intelligence, sourcing solutions, and
            fulfillment services to help businesses trade with confidence.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-6">
            Founded in 2015, Asteric began as a market intelligence platform for the food and agriculture industry. Over
            the years, we've evolved into a comprehensive sourcing platform that connects buyers and suppliers across
            the globe, facilitating thousands of transactions annually.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Transparency in global trade</li>
            <li className="mb-2">Reliability in sourcing and fulfillment</li>
            <li className="mb-2">Innovation in market intelligence</li>
            <li className="mb-2">Sustainability in agricultural practices</li>
            <li className="mb-2">Collaboration with global partners</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Global Presence</h2>
          <p className="mb-6">
            With offices in Kampala, Uganda,  Asteric
            has established a truly global presence. Our team of experts works tirelessly to ensure that our platform
            delivers value to businesses of all sizes.
          </p>
        </div>
      </div>
    </div>
  )
}
