import Link from "next/link"

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <p className="text-gray-700 mb-8">
          Our platform simplifies the process of connecting with experts. Here's how:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Experts</h3>
            <p className="text-gray-600">Explore our directory of qualified professionals in various fields.</p>
          </div>

          <div>
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect & Discuss</h3>
            <p className="text-gray-600">Reach out to experts, discuss your needs, and agree on a plan.</p>
          </div>

          <div>
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Results</h3>
            <p className="text-gray-600">Collaborate with experts to achieve your goals and see tangible results.</p>
          </div>
        </div>

        <Link href="/signup">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  )
}

export default HowItWorks
