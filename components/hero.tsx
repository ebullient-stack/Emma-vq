import Link from "next/link"

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Your Marketplace for Quality Products</h1>
        <p className="text-xl text-gray-700 mb-8">
          Discover a wide range of products and connect with trusted suppliers.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Browse Products
          </Link>
          <Link href="/vendors" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Find Suppliers
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
