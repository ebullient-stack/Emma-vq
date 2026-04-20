'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HireCategoriesPage() {

  /* -------------------------------
     Dynamic Feature Section (Replacement for PNG)
  --------------------------------*/

  const platformServices = [
    {
      title: 'Agro Machinery',
      description: 'Rent tractors, harvesters and modern agricultural machinery',
      href: '/machinery',
      image: '/images/machinery.jpg',
      button: 'Browse Machinery'
    },
    {
      title: 'Tools & Equipment',
      description: 'Access specialized farming tools and equipment',
      href: '/tools',
      image: '/images/tools.jpg',
      button: 'Browse Tools'
    },
    {
      title: 'Fields & Land',
      description: 'Lease fertile agricultural land for cultivation',
      href: '/fields',
      image: '/images/land.jpg',
      button: 'Browse Land'
    }
  ]


  /* -------------------------------
     Existing Category Section
  --------------------------------*/

  const categories = [
    {
      title: 'Browse Fields',
      description: 'Find and lease agricultural land for farming',
      href: '/fields',
      image: '/images/fields.jpg'
    },
    {
      title: 'Browse Farm Workers',
      description: 'Hire skilled farm workers for seasonal or permanent work',
      href: '/workers',
      image: '/images/workers.jpg'
    },
    {
      title: 'Browse Transport',
      description: 'Rent trucks and vehicles for agricultural transport',
      href: '/transport',
      image: '/images/transport.jpg'
    }
  ]


  return (
    <>
      <NavigationHeader />

      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          {/* Back Button */}
          <Link
            href="/hire-categories"
            className="flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Hire Categories
          </Link>


          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Hire What You Need
            </h1>

            <p className="text-lg text-muted-foreground">
              Choose a service category to get started with your agricultural needs
            </p>
          </div>


          {/* ------------------------------
              Dynamic Feature Section
          ------------------------------ */}
          <div className="mb-12 bg-card rounded-xl border p-10">

            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Agricultural Hiring Platform
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                Rent machinery, tools, farmland, vehicles, or hire skilled farm
                workers to support your agricultural operations efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {platformServices.map(service => (
                <Link key={service.title} href={service.href} className="group">
                  <Card className="cursor-pointer hover:shadow-xl hover:border-primary transition">
                    <CardContent className="p-6 text-center">

                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-md group-hover:scale-105 transition"
                        />
                      </div>

                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        {service.button}
                      </Button>

                    </CardContent>
                  </Card>
                </Link>
              ))}

            </div>
          </div>


          {/* ------------------------------
              Categories Grid
          ------------------------------ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            {categories.map(category => (
              <Link key={category.href} href={category.href}>
                <Card className="border hover:shadow-lg hover:border-primary transition cursor-pointer h-full overflow-hidden">

                  <div className="relative h-40">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Explore
                    </Button>
                  </CardContent>

                </Card>
              </Link>
            ))}

          </div>


          {/* ------------------------------
              Custom Request Section
          ------------------------------ */}
          <Card className="border bg-gradient-to-r from-blue-50 to-transparent">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto text-center">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Need Something Custom?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Can't find what you're looking for? Contact our team to
                  discuss your specific agricultural needs and we’ll help
                  you find the perfect solution.
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  )
}