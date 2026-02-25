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
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, Search, Filter, MapPin, Wrench, Phone, Mail, Star, Shield, Clock } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"

interface ToolListing {
  id: string
  name: string
  description: string
  category: string
  location: string
  pricePerDay: number
  condition: "Excellent" | "Good" | "Fair"
  availability: "Available Now" | "Available Soon" | "Unavailable"
  owner: {
    name: string
    phone: string
    email: string
    whatsapp?: string
    verified: boolean
  }
  images: string[]
  features: string[]
  specifications: Record<string, string>
  rating: number
  reviews: number
  trainingIncluded: boolean
  insuranceIncluded: boolean
  deliveryAvailable: boolean
}

// Mock data for tool listings
const mockToolListings: ToolListing[] = [
  {
    id: "1",
    name: "Professional Chainsaw - Stihl MS 362",
    description:
      "Heavy-duty professional chainsaw perfect for forestry work, land clearing, and tree cutting. Well-maintained with recent service.",
    category: "Cutting Tools",
    location: "Nairobi, Kenya",
    pricePerDay: 25,
    condition: "Excellent",
    availability: "Available Now",
    owner: {
      name: "Peter Mwangi",
      phone: "+254 712 345 678",
      email: "peter.mwangi@email.com",
      whatsapp: "+254712345678",
      verified: true,
    },
    images: ["/placeholder.svg?height=300&width=400&text=Chainsaw"],
    features: ["18-inch bar", "Anti-vibration system", "Easy start technology", "Safety chain brake"],
    specifications: {
      Engine: "59cc 2-stroke",
      "Bar Length": "18 inches",
      Weight: "5.6 kg",
      "Fuel Tank": "0.6 liters",
    },
    rating: 4.8,
    reviews: 24,
    trainingIncluded: true,
    insuranceIncluded: true,
    deliveryAvailable: true,
  },
  {
    id: "2",
    name: "Irrigation Pump Set - Honda WB30X",
    description:
      "Reliable water pump for irrigation with high pressure output. Includes hoses, fittings, and sprinkler attachments.",
    category: "Irrigation",
    location: "Kampala, Uganda",
    pricePerDay: 40,
    condition: "Good",
    availability: "Available Now",
    owner: {
      name: "Sarah Nakato",
      phone: "+256 701 234 567",
      email: "sarah.nakato@email.com",
      whatsapp: "+256701234567",
      verified: true,
    },
    images: ["/placeholder.svg?height=300&width=400&text=Water+Pump"],
    features: ["High pressure output", "Fuel efficient", "Portable design", "Multiple outlet options"],
    specifications: {
      Engine: "Honda GX160",
      "Flow Rate": "1100 L/min",
      Head: "26m",
      "Fuel Tank": "3.6 liters",
    },
    rating: 4.5,
    reviews: 18,
    trainingIncluded: false,
    insuranceIncluded: true,
    deliveryAvailable: true,
  },
  {
    id: "3",
    name: "Digital Soil Testing Kit",
    description:
      "Professional soil analysis equipment for pH, nutrients, and moisture testing. Recently calibrated with certification.",
    category: "Testing Equipment",
    location: "Arusha, Tanzania",
    pricePerDay: 15,
    condition: "Excellent",
    availability: "Available Now",
    owner: {
      name: "John Mushi",
      phone: "+255 754 123 456",
      email: "john.mushi@email.com",
      whatsapp: "+255754123456",
      verified: true,
    },
    images: ["/placeholder.svg?height=300&width=400&text=Soil+Tester"],
    features: ["pH testing", "NPK analysis", "Digital display", "Calibration certificate"],
    specifications: {
      "pH Range": "3.5-9.0",
      Accuracy: "±0.1 pH",
      Display: "LCD digital",
      Power: "9V battery",
    },
    rating: 4.9,
    reviews: 31,
    trainingIncluded: true,
    insuranceIncluded: false,
    deliveryAvailable: false,
  },
  {
    id: "4",
    name: "Power Sprayer - Solo 425",
    description:
      "Professional backpack sprayer for pesticides and fertilizers. Comfortable design with adjustable straps and nozzles.",
    category: "Spraying Equipment",
    location: "Kigali, Rwanda",
    pricePerDay: 12,
    condition: "Good",
    availability: "Available Now",
    owner: {
      name: "Marie Uwimana",
      phone: "+250 788 123 456",
      email: "marie.uwimana@email.com",
      whatsapp: "+250788123456",
      verified: true,
    },
    images: ["/placeholder.svg?height=300&width=400&text=Backpack+Sprayer"],
    features: ["16L capacity", "Adjustable nozzle", "Comfortable straps", "Pressure gauge"],
    specifications: {
      Capacity: "16 liters",
      Pressure: "0-6 bar",
      Weight: "2.8 kg empty",
      "Hose Length": "1.5m",
    },
    rating: 4.6,
    reviews: 15,
    trainingIncluded: false,
    insuranceIncluded: true,
    deliveryAvailable: true,
  },
  {
    id: "5",
    name: "Seed Drill - Precision Planter",
    description:
      "Precision seed planting equipment with adjustable depth and spacing. Perfect for accurate seed placement and fertilizer application.",
    category: "Planting Tools",
    location: "Nakuru, Kenya",
    pricePerDay: 60,
    condition: "Excellent",
    availability: "Available Soon",
    owner: {
      name: "James Kiprop",
      phone: "+254 722 987 654",
      email: "james.kiprop@email.com",
      whatsapp: "+254722987654",
      verified: true,
    },
    images: ["/placeholder.svg?height=300&width=400&text=Seed+Drill"],
    features: ["Precision planting", "Adjustable depth", "Fertilizer attachment", "Row markers"],
    specifications: {
      "Working Width": "2.5m",
      "Seed Spacing": "2.5-30cm",
      "Depth Range": "1-8cm",
      "Hopper Capacity": "50kg",
    },
    rating: 4.4,
    reviews: 22,
    trainingIncluded: true,
    insuranceIncluded: true,
    deliveryAvailable: false,
  },
]

export default function ToolsHirePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined)
  const [selectedCondition, setSelectedCondition] = useState<string | undefined>(undefined)
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined)
  const [availableOnly, setAvailableOnly] = useState(false)
  const [trainingIncluded, setTrainingIncluded] = useState(false)
  const [insuranceIncluded, setInsuranceIncluded] = useState(false)
  const [deliveryAvailable, setDeliveryAvailable] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [selectedTool, setSelectedTool] = useState<ToolListing | null>(null)
  const [actionType, setActionType] = useState<"rent" | "contact">("rent")

  // Filter listings based on criteria
  const filteredListings = mockToolListings.filter((tool) => {
    if (
      searchQuery &&
      !tool.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !tool.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !tool.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }
    if (tool.pricePerDay < priceRange[0] || tool.pricePerDay > priceRange[1]) {
      return false
    }
    if (selectedCategory && selectedCategory !== "all" && tool.category !== selectedCategory) {
      return false
    }
    if (selectedCondition && selectedCondition !== "all" && tool.condition !== selectedCondition) {
      return false
    }
    if (selectedLocation && selectedLocation !== "all" && !tool.location.includes(selectedLocation)) {
      return false
    }
    if (availableOnly && tool.availability !== "Available Now") {
      return false
    }
    if (trainingIncluded && !tool.trainingIncluded) {
      return false
    }
    if (insuranceIncluded && !tool.insuranceIncluded) {
      return false
    }
    if (deliveryAvailable && !tool.deliveryAvailable) {
      return false
    }
    return true
  })

  const resetFilters = () => {
    setSearchQuery("")
    setPriceRange([0, 100])
    setSelectedCategory(undefined)
    setSelectedCondition(undefined)
    setSelectedLocation(undefined)
    setAvailableOnly(false)
    setTrainingIncluded(false)
    setInsuranceIncluded(false)
    setDeliveryAvailable(false)
  }

  const handleRentClick = (tool: ToolListing) => {
    setSelectedTool(tool)
    setActionType("rent")
    setContactModalOpen(true)
  }

  const handleContactClick = (tool: ToolListing) => {
    setSelectedTool(tool)
    setActionType("contact")
    setContactModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/hire" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Hire Categories
      </Link>

      <h1 className="text-3xl font-bold mb-2">Rent Agricultural Tools & Equipment</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Find and rent specialized farming tools and equipment across East Africa
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
        {/* Filters Sidebar */}
        <div className={`md:col-span-1 ${showMobileFilters ? "block" : "hidden md:block"}`}>
          <div className="bg-white p-6 rounded-lg border sticky top-6">
            <h2 className="text-lg font-bold mb-4">Filters</h2>

            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <Label htmlFor="category" className="text-sm font-medium mb-1.5 block">
                  Category
                </Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Cutting Tools">Cutting Tools</SelectItem>
                    <SelectItem value="Irrigation">Irrigation</SelectItem>
                    <SelectItem value="Testing Equipment">Testing Equipment</SelectItem>
                    <SelectItem value="Spraying Equipment">Spraying Equipment</SelectItem>
                    <SelectItem value="Planting Tools">Planting Tools</SelectItem>
                    <SelectItem value="Harvesting Tools">Harvesting Tools</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location Filter */}
              <div>
                <Label htmlFor="location" className="text-sm font-medium mb-1.5 block">
                  Location
                </Label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Kenya">Kenya</SelectItem>
                    <SelectItem value="Uganda">Uganda</SelectItem>
                    <SelectItem value="Tanzania">Tanzania</SelectItem>
                    <SelectItem value="Rwanda">Rwanda</SelectItem>
                    <SelectItem value="Burundi">Burundi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Condition Filter */}
              <div>
                <Label htmlFor="condition" className="text-sm font-medium mb-1.5 block">
                  Condition
                </Label>
                <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                  <SelectTrigger id="condition">
                    <SelectValue placeholder="All Conditions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Conditions</SelectItem>
                    <SelectItem value="Excellent">Excellent</SelectItem>
                    <SelectItem value="Good">Good</SelectItem>
                    <SelectItem value="Fair">Fair</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
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
                  defaultValue={[0, 100]}
                  max={100}
                  step={5}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
              </div>

              {/* Feature Checkboxes */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="available-only"
                    checked={availableOnly}
                    onCheckedChange={(checked) => setAvailableOnly(checked as boolean)}
                  />
                  <Label htmlFor="available-only" className="text-sm">
                    Available Now Only
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="training-included"
                    checked={trainingIncluded}
                    onCheckedChange={(checked) => setTrainingIncluded(checked as boolean)}
                  />
                  <Label htmlFor="training-included" className="text-sm">
                    Training Included
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="insurance-included"
                    checked={insuranceIncluded}
                    onCheckedChange={(checked) => setInsuranceIncluded(checked as boolean)}
                  />
                  <Label htmlFor="insurance-included" className="text-sm">
                    Insurance Included
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="delivery-available"
                    checked={deliveryAvailable}
                    onCheckedChange={(checked) => setDeliveryAvailable(checked as boolean)}
                  />
                  <Label htmlFor="delivery-available" className="text-sm">
                    Delivery Available
                  </Label>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button onClick={() => setIsLoading(true)}>Apply Filters</Button>
                <Button variant="outline" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search tools and equipment..."
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
                  <SelectItem value="availability">Available First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-0">
                    <Skeleton className="h-48 w-full rounded-t-lg" />
                    <div className="p-4 space-y-3">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-5 w-1/3" />
                        <Skeleton className="h-5 w-1/4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredListings.length === 0 ? (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <Wrench className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No tools found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button onClick={resetFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredListings.map((tool) => (
                <Card key={tool.id} className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={tool.images[0] || "/placeholder.svg"} alt={tool.name} fill className="object-cover" />
                    <Badge
                      className={`absolute top-2 right-2 ${
                        tool.availability === "Available Now"
                          ? "bg-green-500"
                          : tool.availability === "Available Soon"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    >
                      {tool.availability}
                    </Badge>
                    <Badge
                      className={`absolute top-2 left-2 ${
                        tool.condition === "Excellent"
                          ? "bg-green-600"
                          : tool.condition === "Good"
                            ? "bg-blue-600"
                            : "bg-orange-600"
                      }`}
                    >
                      {tool.condition}
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg line-clamp-2">{tool.name}</h3>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{tool.category}</Badge>
                      <div className="text-right">
                        <div className="font-bold text-primary">${tool.pricePerDay}/day</div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{tool.location}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tool.description}</p>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{tool.rating}</span>
                        <span className="text-xs text-muted-foreground">({tool.reviews})</span>
                      </div>
                      {tool.owner.verified && (
                        <Badge variant="secondary" className="text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {tool.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {tool.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tool.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {tool.trainingIncluded && (
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            Training
                          </Badge>
                        )}
                        {tool.insuranceIncluded && (
                          <Badge variant="outline" className="text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            Insurance
                          </Badge>
                        )}
                        {tool.deliveryAvailable && (
                          <Badge variant="outline" className="text-xs">
                            Delivery
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div>
                        <p className="text-sm font-medium">{tool.owner.name}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          <span>{tool.owner.phone}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleContactClick(tool)}>
                          <Mail className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                        <Button size="sm" onClick={() => handleRentClick(tool)}>
                          <Wrench className="h-4 w-4 mr-1" />
                          Rent
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedTool && (
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          contactDetails={selectedTool.owner}
          itemName={selectedTool.name}
          itemType="tool"
          actionType={actionType}
        />
      )}
    </div>
  )
}
