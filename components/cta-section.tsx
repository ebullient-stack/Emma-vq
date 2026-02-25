import Link from "next/link"

const CtaSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-8">Join our community and unlock a world of possibilities.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
