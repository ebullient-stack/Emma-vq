"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Search, Filter, MapPin, Calendar, Truck } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"

export default function TransportHirePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined)
  const [availableNow, setAvailableNow] = useState(false)
  const [withDriver, setWithDriver] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null)
  const [actionType, setActionType] = useState<"book" | "quote">("book")

  // Mock transport vehicles data
  const transportVehicles = [
    {
      id: 1,
      name: "Refrigerated Truck - 5 Ton",
      description: "Temperature-controlled truck ideal for transporting perishable goods",
      type: "Refrigerated",
      origin: "Germany",
      price: "$180/day",
      image: "/placeholder.svg?height=300&width=400&text=Refrigerated+Truck",
      availableNow: true,
      includesDriver: true,
      capacity: "5 tons",
      temperature: "-20°C to +5°C",
      owner: {
        name: "John Kamau",
        phone: "+254 712 345 678",
        email: "john.kamau@email.com",
        whatsapp: "+254712345678",
        verified: true,
      },
    },
    {
      id: 2,
      name: "Flatbed Truck - 10 Ton",
      description: "Versatile flatbed truck for transporting machinery and bulk goods",
      type: "Flatbed",
      origin: "United States",
      price: "$150/day",
      image: "/placeholder.svg?height=300&width=400&text=Flatbed+Truck",
      availableNow: true,
      includesDriver: false,
      capacity: "10 tons",
      owner: {
        name: "Sarah Mukasa",
        phone: "+256 701 234 567",
        email: "sarah.mukasa@email.com",
        whatsapp: "+256701234567",
        verified: true,
      },
    },
    {
      id: 3,
      name: "Cargo Van - 1.5 Ton",
      description: "Compact cargo van for smaller deliveries and urban transport",
      type: "Van",
      origin: "Japan",
      price: "$85/day",
      image: "/placeholder.svg?height=300&width=400&text=Cargo+Van",
      availableNow: true,
      includesDriver: true,
      capacity: "1.5 tons",
      owner: {
        name: "David Mwangi",
        phone: "+255 754 123 456",
        email: "david.mwangi@email.com",
        whatsapp: "+255754123456",
        verified: false,
      },
    },
    {
      id: 4,
      name: "Livestock Transport Trailer",
      description: "Specialized trailer for safe and humane transport of livestock",
      type: "Livestock",
      origin: "Australia",
      price: "$120/day",
      image: "/placeholder.svg?height=300&width=400&text=Livestock+Trailer",
      availableNow: false,
      includesDriver: false,
      capacity: "Up to 20 cattle or 80 sheep",
      features: "Ventilation, water systems, adjustable partitions",
      owner: {
        name: "Marie Uwimana",
        phone: "+250 788 123 456",
        email: "marie.uwimana@email.com",
        whatsapp: "+250788123456",
        verified: true,
      },
    },
    {
      id: 5,
      name: "Grain Hopper Truck - 15 Ton",
      description: "Specialized truck for efficient transport of grain and other dry bulk goods",
      type: "Hopper",
      origin: "Canada",
      price: "$200/day",
      image: "/placeholder.svg?height=300&width=400&text=Grain+Hopper",
      availableNow: true,
      includesDriver: true,
      capacity: "15 tons",
      owner: {
        name: "James Kiprop",
        phone: "+254 722 987 654",
        email: "james.kiprop@email.com",
        whatsapp: "+254722987654",
        verified: true,
      },
    },
    {
      id: 6,
      name: "Tanker Truck - 8000 Liters",
      description: "Insulated tanker for transporting milk, water, and other liquids",
      type: "Tanker",
      origin: "France",
      price: "$175/day",
      image: "/placeholder.svg?height=300&width=400&text=Tanker+Truck",
      availableNow: true,
      includesDriver: true,
      capacity: "8,000 liters",
      features: "Insulated, food-grade stainless steel",
      owner: {
        name: "Peter Mwangi",
        phone: "+254 712 345 678",
        email: "peter.mwangi@email.com",
        whatsapp: "+254712345678",
        verified: true,
      },
    },
  ]

  // Filter vehicles based on search, type, availability, and driver
  const filteredVehicles = transportVehicles.filter((vehicle) => {
    if (
      searchQuery &&
      !vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !vehicle.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }
    if (selectedType && selectedType !== "all" && vehicle.type !== selectedType) {
      return false
    }
    if (availableNow && !vehicle.availableNow) {
      return false
    }
    if (withDriver && !vehicle.includesDriver) {
      return false
    }
    return true
  })

  const handleBookNow = (vehicle: any) => {
    setSelectedVehicle(vehicle)
    setActionType("book")
    setContactModalOpen(true)
  }

  const handleRequestQuote = (vehicle: any) => {
    setSelectedVehicle(vehicle)
    setActionType("quote")
    setContactModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/hire" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Hire Categories
      </Link>

      <h1 className="text-3xl font-bold mb-2">Rent Transport Vehicles</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Find and rent trucks, vans, and specialized transport vehicles for your agricultural needs
      </p>

      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-between"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <span className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </span>
          <span>{showMobileFilters ? "Hide" : "Show"}</span>
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className={`md:col-span-1 ${showMobileFilters ? "block" : "hidden md:block"}`}>
          <div className="bg-white p-6 rounded-lg border sticky top-6">
            <h2 className="text-lg font-bold mb-4">Filters</h2>

            <div className="space-y-6">
              <div>
                <Label htmlFor="vehicle-type" className="text-sm font-medium mb-1.5 block">
                  Vehicle Type
                </Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger id="vehicle-type">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Refrigerated">Refrigerated</SelectItem>
                    <SelectItem value="Flatbed">Flatbed</SelectItem>
                    <SelectItem value="Van">Cargo Van</SelectItem>
                    <SelectItem value="Livestock">Livestock Transport</SelectItem>
                    <SelectItem value="Hopper">Grain Hopper</SelectItem>
                    <SelectItem value="Tanker">Tanker</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label htmlFor="price-range" className="text-sm font-medium">
                    Price Range (per day)
                  </Label>
                  <span className="text-sm">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <Slider
                  id="price-range"
                  defaultValue={[0, 1000]}
                  max={1000}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="available-now"
                    checked={availableNow}
                    onCheckedChange={(checked) => setAvailableNow(checked as boolean)}
                  />
                  <Label htmlFor="available-now" className="text-sm">
                    Available Now
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="with-driver"
                    checked={withDriver}
                    onCheckedChange={(checked) => setWithDriver(checked as boolean)}
                  />
                  <Label htmlFor="with-driver" className="text-sm">
                    With Driver
                  </Label>
                </div>
              </div>

              <div>
                <Label htmlFor="location" className="text-sm font-medium mb-1.5 block">
                  Pickup Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input id="location" type="text" placeholder="Enter your location" className="pl-10" />
                </div>
              </div>

              <div>
                <Label htmlFor="date" className="text-sm font-medium mb-1.5 block">
                  Rental Date
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input id="date" type="date" className="pl-10" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button>Apply Filters</Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setPriceRange([0, 1000])
                    setSelectedType(undefined)
                    setAvailableNow(false)
                    setWithDriver(false)
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search vehicles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredVehicles.length === 0 ? (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <Truck className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No vehicles found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedType(undefined)
                  setAvailableNow(false)
                  setWithDriver(false)
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
                    {!vehicle.availableNow && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Unavailable
                      </div>
                    )}
                    {vehicle.includesDriver && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        With Driver
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold">{vehicle.name}</h3>
                      <div className="text-right">
                        <div className="font-bold">{vehicle.price}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{vehicle.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{vehicle.origin}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-2 py-1 bg-muted rounded-full">{vehicle.type}</span>
                      <span className="text-xs text-muted-foreground">Capacity: {vehicle.capacity}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="w-full" onClick={() => handleBookNow(vehicle)}>
                        Book Now
                      </Button>
                      <Button variant="outline" className="w-full" onClick={() => handleRequestQuote(vehicle)}>
                        Request Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedVehicle && (
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          contactDetails={selectedVehicle.owner}
          itemName={selectedVehicle.name}
          itemType="vehicle"
          actionType={actionType}
        />
      )}
    </div>
  )
}
