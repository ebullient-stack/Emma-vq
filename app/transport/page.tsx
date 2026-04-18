'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TransportPage() {
  const router = useRouter()

  // USER INPUT FILTERS
  const [filters, setFilters] = useState({
    vehicleType: 'All Types',
    priceRange: 1000000,
    location: '',
    rentalDate: '',
    availableNow: false,
    withDriver: false,
  })

  // APPLIED FILTERS
  const [appliedFilters, setAppliedFilters] = useState(filters)

  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('Newest First')

  const vehicles = [
    {
      id: 1,
      title: 'Livestock Transport Trailer',
      type: 'Livestock',
      price: 450000,
      available: true,
      driver: false,
      location: 'Australia',
      capacity: 'Up to 20 cattle or 80 sheep',
      description: 'Specialized trailer designed for safe livestock transport.',
      image:
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7',
      features: ['Ventilation', 'Water System', 'Safe Loading'],
      supplier: 'Premium Transport Co.',
      supplierId: 'premium-transport',
      supplierPhone: '+61 458 234 889',
    },
    {
      id: 2,
      title: 'Grain Hopper Truck - 15 Ton',
      type: 'Hopper',
      price: 750000,
      available: true,
      driver: true,
      location: 'Canada',
      capacity: '15 tons',
      description: 'Efficient grain transport truck with hydraulic hopper.',
      image:
        'https://images.unsplash.com/photo-1563720223185-11003d516935',
      features: ['Hydraulic Hopper', 'GPS Tracking', 'Insurance'],
      supplier: 'Logistics Express',
      supplierId: 'logistics-express',
      supplierPhone: '+1 604 334 9921',
    },
    {
      id: 3,
      title: 'Tanker Truck - 8000 Liters',
      type: 'Tanker',
      price: 656250,
      available: true,
      driver: true,
      location: 'France',
      capacity: '8,000 liters',
      description: 'Insulated tanker for transporting liquids.',
      image:
        'https://images.unsplash.com/photo-1581093458791-9d15482442f1',
      features: ['Temperature Control', 'Safety Certified', 'Documentation'],
      supplier: 'AgriHaul Services',
      supplierId: 'agrihaul-services',
      supplierPhone: '+33 673 223 901',
    },
    {
      id: 4,
      title: 'Heavy Duty Flatbed Truck',
      type: 'Flatbed',
      price: 580000,
      available: true,
      driver: false,
      location: 'Germany',
      capacity: '20 tons',
      description: 'Flatbed truck for transporting heavy machinery.',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
      features: ['Heavy Duty', 'Tie-down Points', 'Wide Platform'],
      supplier: 'EuroFarm Logistics',
      supplierId: 'eurofarm-logistics',
      supplierPhone: '+49 171 443 902',
    },
  ]

  // APPLY FILTERS BUTTON
  const applyFilters = () => {
    setAppliedFilters(filters)
  }

  // BOOK NOW → SUPPLIER CONTACT PAGE
  const handleBookNow = (supplierId: string, vehicleTitle: string) => {
    const slug = vehicleTitle.replace(/\s+/g, '-').toLowerCase()
    router.push(`/suppliers/${supplierId}?vehicle=${slug}`)
  }

  const handleRequestQuote = (supplierId: string, vehicleTitle: string) => {
    const slug = vehicleTitle.replace(/\s+/g, '-').toLowerCase()
    router.push(`/quote?supplier=${supplierId}&vehicle=${slug}`)
  }

  const processedVehicles = useMemo(() => {
    let result = [...vehicles]

    // SEARCH
    if (searchTerm) {
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // VEHICLE TYPE
    if (appliedFilters.vehicleType !== 'All Types') {
      result = result.filter((v) => v.type === appliedFilters.vehicleType)
    }

    // PRICE
    result = result.filter((v) => v.price <= appliedFilters.priceRange)

    // LOCATION
    if (appliedFilters.location) {
      result = result.filter((v) =>
        v.location
          .toLowerCase()
          .includes(appliedFilters.location.toLowerCase())
      )
    }

    // AVAILABLE NOW
    if (appliedFilters.availableNow) {
      result = result.filter((v) => v.available)
    }

    // DRIVER FILTER
    if (appliedFilters.withDriver) {
      result = result.filter((v) => v.driver)
    }

    // SORTING
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [vehicles, appliedFilters, searchTerm, sortBy])

  return (
    <>
      <NavigationHeader />

      <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <Link
            href="/hire-categories"
            className="flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Hire Categories
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Rent Transport Vehicles
            </h1>
            <p className="text-lg text-muted-foreground">
              Find trucks and specialized transport vehicles for your agricultural needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* FILTER SIDEBAR */}

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">

                  <h3 className="font-semibold">Filters</h3>

                  {/* VEHICLE TYPE */}

                  <div>
                    <label className="text-sm font-semibold mb-2 block">
                      Vehicle Type
                    </label>

                    <select
                      value={filters.vehicleType}
                      onChange={(e) =>
                        setFilters({ ...filters, vehicleType: e.target.value })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                    >
                      <option>All Types</option>
                      <option>Livestock</option>
                      <option>Hopper</option>
                      <option>Tanker</option>
                      <option>Flatbed</option>
                    </select>
                  </div>

                  {/* PRICE RANGE */}

                  <div>
                    <label className="text-sm font-semibold block mb-2">
                      Price Range (per day)
                    </label>

                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      value={filters.priceRange}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          priceRange: Number(e.target.value),
                        })
                      }
                      className="w-full"
                    />

                    <p className="text-sm mt-2">
                      USh 0 – USh {filters.priceRange.toLocaleString()}
                    </p>
                  </div>

                  {/* AVAILABILITY */}

                  <div className="space-y-2">

                    <label className="flex gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={filters.availableNow}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            availableNow: e.target.checked,
                          })
                        }
                      />
                      Available Now
                    </label>

                    <label className="flex gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={filters.withDriver}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            withDriver: e.target.checked,
                          })
                        }
                      />
                      With Driver
                    </label>

                  </div>

                  {/* PICKUP LOCATION */}

                  <div>
                    <label className="text-sm font-semibold block mb-2">
                      Pickup Location
                    </label>

                    <input
                      type="text"
                      value={filters.location}
                      onChange={(e) =>
                        setFilters({ ...filters, location: e.target.value })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>

                  {/* RENTAL DATE */}

                  <div>
                    <label className="text-sm font-semibold block mb-2">
                      Rental Date
                    </label>

                    <input
                      type="date"
                      value={filters.rentalDate}
                      onChange={(e) =>
                        setFilters({ ...filters, rentalDate: e.target.value })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>

                  {/* APPLY FILTER BUTTON */}

                  <Button
                    onClick={applyFilters}
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Apply Filters
                  </Button>

                </CardContent>
              </Card>
            </div>

            {/* RESULTS */}

            <div className="lg:col-span-3 space-y-6">

              <div className="flex gap-4">

                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 border rounded-lg px-4 py-2"
                />

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>

              </div>

              {processedVehicles.map((vehicle) => (

                <Card key={vehicle.id} className="hover:shadow-lg transition">

                  <CardContent className="p-0">

                    <div className="grid md:grid-cols-3 gap-6 p-6">

                      <div className="relative h-48 rounded-lg overflow-hidden">

                        <Image
                          src={vehicle.image}
                          alt={vehicle.title}
                          fill
                          className="object-cover"
                        />

                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                          {vehicle.available ? 'Available' : 'Unavailable'}
                        </div>

                      </div>

                      <div className="md:col-span-2">

                        <h3 className="text-xl font-bold mb-1">
                          {vehicle.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-3">
                          📍 {vehicle.location}
                        </p>

                        <p className="text-sm mb-4">
                          {vehicle.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {vehicle.features.map((f) => (
                            <span
                              key={f}
                              className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                            >
                              {f}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">

                          <div>
                            <p className="text-sm">{vehicle.type}</p>
                            <p className="text-sm mb-2">
                              Capacity: {vehicle.capacity}
                            </p>

                            <p className="text-2xl font-bold text-primary">
                              USh {vehicle.price.toLocaleString()}/day
                            </p>
                          </div>

                          <div className="flex gap-2">

                            <Button
                              variant="outline"
                              onClick={() =>
                                handleRequestQuote(
                                  vehicle.supplierId,
                                  vehicle.title
                                )
                              }
                            >
                              Request Quote
                            </Button>

                            <Button
                              className="bg-blue-600 text-white hover:bg-blue-700"
                              onClick={() =>
                                handleBookNow(
                                  vehicle.supplierId,
                                  vehicle.title
                                )
                              }
                            >
                              Book Now
                            </Button>

                          </div>

                        </div>

                      </div>

                    </div>

                  </CardContent>

                </Card>

              ))}

            </div>

          </div>

        </div>
      </div>
    </>
  )
}