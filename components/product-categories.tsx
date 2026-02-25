"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronRight } from "lucide-react"
import { useCurrencyConverter } from "@/contexts/user-preferences-context"

type CategoryProduct = {
  id: number
  name: string
  image: string
  price: string
  numericPrice: number
}

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState("fruits")
  const [categoryProducts, setCategoryProducts] = useState<Record<string, CategoryProduct[]>>({})
  const [isLoading, setIsLoading] = useState(true)
  const { convertPriceString } = useCurrencyConverter()

  const categories = [
    {
      id: "fruits",
      name: "Fruits & Vegetables",
      image: "/placeholder.svg?height=300&width=300",
      count: "2,500+ products",
      link: "/products?category=fruits",
    },
    {
      id: "grains",
      name: "Grains & Cereals",
      image: "/placeholder.svg?height=300&width=300",
      count: "1,800+ products",
      link: "/products?category=grains",
    },
    {
      id: "coffee",
      name: "Coffee & Tea",
      image: "/placeholder.svg?height=300&width=300",
      count: "1,200+ products",
      link: "/products?category=coffee",
    },
    {
      id: "nuts",
      name: "Nuts & Seeds",
      image: "/placeholder.svg?height=300&width=300",
      count: "950+ products",
      link: "/products?category=nuts",
    },
    {
      id: "machinery",
      name: "Agro Machinery",
      image: "/placeholder.svg?height=300&width=300",
      count: "750+ products",
      link: "/products?category=machinery",
    },
    {
      id: "land",
      name: "Fields and Land",
      image: "/placeholder.svg?height=300&width=300",
      count: "500+ listings",
      link: "/products?category=land",
    },
    {
      id: "input",
      name: "Agro Input",
      image: "/placeholder.svg?height=300&width=300",
      count: "1,300+ products",
      link: "/products?category=input",
    },
    {
      id: "tools",
      name: "Tools & Spare Parts",
      image: "/placeholder.svg?height=300&width=300",
      count: "1,100+ products",
      link: "/products?category=tools",
    },
    {
      id: "livestock",
      name: "Live Stock & Animals",
      image: "/placeholder.svg?height=300&width=300",
      count: "850+ animals",
      link: "/products?category=livestock",
    },
    // New categories
    {
      id: "dairy",
      name: "Dairy Products",
      image: "/placeholder.svg?height=300&width=300",
      count: "920+ products",
      link: "/products?category=dairy",
    },
    {
      id: "seafood",
      name: "Seafood",
      image: "/placeholder.svg?height=300&width=300",
      count: "780+ products",
      link: "/products?category=seafood",
    },
    {
      id: "herbs",
      name: "Herbs & Spices",
      image: "/placeholder.svg?height=300&width=300",
      count: "650+ products",
      link: "/products?category=herbs",
    },
    {
      id: "organic",
      name: "Organic Products",
      image: "/placeholder.svg?height=300&width=300",
      count: "1,450+ products",
      link: "/products?category=organic",
    },
    {
      id: "fertilizers",
      name: "Fertilizers",
      image: "/placeholder.svg?height=300&width=300",
      count: "580+ products",
      link: "/products?category=fertilizers",
    },
    {
      id: "seeds",
      name: "Seeds & Seedlings",
      image: "/placeholder.svg?height=300&width=300",
      count: "720+ products",
      link: "/products?category=seeds",
    },
  ]

  // Fetch products for each category
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setIsLoading(true)
      try {
        const productsData: Record<string, CategoryProduct[]> = {}

        // Fetch products for each category (in parallel)
        await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(`/api/products?category=${category.id}&limit=4`)
            if (response.ok) {
              const data = await response.json()
              productsData[category.id] = data.products.map((product: any) => ({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                numericPrice: product.numericPrice,
              }))
            }
          }),
        )

        setCategoryProducts(productsData)
      } catch (error) {
        console.error("Error fetching category products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategoryProducts()
  }, [])

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Product Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive catalog of food and agricultural products from around the world.
          </p>
        </div>

        <Tabs defaultValue={categories[0].id} value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="mb-8 flex flex-wrap justify-center">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Category card */}
                <Link href={category.link} className="block">
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{category.count}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View All <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>

                {/* Product cards */}
                {isLoading
                  ? // Loading skeletons
                    Array.from({ length: 3 }).map((_, index) => (
                      <Card key={index} className="overflow-hidden h-full">
                        <Skeleton className="h-48 w-full" />
                        <CardContent className="p-6">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-1/4 mb-4" />
                          <Skeleton className="h-9 w-full" />
                        </CardContent>
                      </Card>
                    ))
                  : // Product cards
                    categoryProducts[category.id]
                      ?.slice(0, 3)
                      .map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`} className="block">
                          <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <CardContent className="p-6">
                              <h3 className="text-lg font-medium mb-2 line-clamp-1">{product.name}</h3>
                              <p className="text-sm font-semibold text-primary mb-4">
                                {convertPriceString(product.price)}
                              </p>
                              <Button variant="secondary" size="sm" className="w-full">
                                View Details
                              </Button>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
