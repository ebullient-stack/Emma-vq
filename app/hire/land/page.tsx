"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { LandDetailsModal } from "@/components/land-details-modal"
import { MapPin, Ruler, Droplets, Calendar, Star } from "lucide-react"

// Enhanced land data with complete structure
const landsData = [
  {
    id: "land-1",
    title: "Premium Agricultural Land - Kisumu County",
    description:
      "Fertile black cotton soil perfect for maize, beans, and sugarcane cultivation. Located in a high-rainfall area with excellent drainage and road access.",
    location: "Kisumu County, Nyanza Region",
    size: 25,
    pricePerMonth: 2500,
    soilType: "Black Cotton Soil",
    waterAccess: true,
    irrigationSystem: true,
    cropHistory: ["Maize", "Beans", "Sugarcane", "Vegetables"],
    availability: "Available Now",
    owner: {
      name: "John Kamau",
      phone: "+254712345678",
      email: "john.kamau@example.com",
      verified: true,
      description:
        "Experienced farmer and landowner with over 15 years in agriculture. Committed to sustainable farming practices.",
      experience: 15,
      otherProperties: 3,
    },
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    features: ["Fertile Soil", "Water Access", "Road Access", "Electricity", "Storage Facilities"],
    coordinates: { lat: -0.0917, lng: 34.768 },
    rating: 4.8,
    reviews: 12,
    leaseTerms: "Minimum 1 year lease. Payment quarterly in advance. Tenant responsible for crop insurance.",
    availableFrom: "2024-03-01",
    restrictions: ["No permanent structures without permission", "Organic farming preferred", "No livestock grazing"],
  },
  {
    id: "land-2",
    title: "Commercial Farming Land - Nakuru",
    description:
      "Large-scale farming opportunity in Kenya's agricultural heartland. Ideal for wheat, barley, and horticultural crops with modern infrastructure.",
    location: "Nakuru County, Rift Valley",
    size: 50,
    pricePerMonth: 5000,
    soilType: "Red Volcanic Soil",
    waterAccess: true,
    irrigationSystem: true,
    cropHistory: ["Wheat", "Barley", "Potatoes", "Carrots"],
    availability: "Available from April 2024",
    owner: {
      name: "Mary Wanjiku",
      phone: "+254722334455",
      email: "mary.wanjiku@example.com",
      verified: true,
      description: "Third-generation farmer specializing in large-scale crop production. Modern farming advocate.",
      experience: 20,
      otherProperties: 5,
    },
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    features: ["Modern Irrigation", "Equipment Storage", "Processing Facility", "Cold Storage", "Transport Access"],
    coordinates: { lat: -0.3031, lng: 36.08 },
    rating: 4.9,
    reviews: 18,
    leaseTerms: "2-5 year lease options available. Bulk payment discounts offered. Equipment rental available.",
    availableFrom: "2024-04-01",
    restrictions: ["Commercial farming only", "Environmental compliance required", "Minimum investment threshold"],
  },
  {
    id: "land-3",
    title: "Organic Farming Plot - Meru",
    description:
      "Certified organic farmland perfect for sustainable agriculture. Rich volcanic soil with natural water sources and mountain climate.",
    location: "Meru County, Eastern Region",
    size: 10,
    pricePerMonth: 1500,
    soilType: "Volcanic Soil",
    waterAccess: true,
    irrigationSystem: false,
    cropHistory: ["Coffee", "Bananas", "Vegetables", "Herbs"],
    availability: "Available Now",
    owner: {
      name: "Peter Mwangi",
      phone: "+254733445566",
      email: "peter.mwangi@example.com",
      verified: true,
      description: "Organic farming specialist with certification in sustainable agriculture practices.",
      experience: 12,
      otherProperties: 2,
    },
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    features: ["Organic Certified", "Natural Water", "Mountain Climate", "Shade Trees", "Composting Area"],
    coordinates: { lat: 0.0469, lng: 37.6553 },
    rating: 4.7,
    reviews: 8,
    leaseTerms: "Organic farming only. 1-3 year lease terms. Certification support provided.",
    availableFrom: "2024-02-15",
    restrictions: ["Organic farming only", "No chemical fertilizers", "Sustainable practices required"],
  },
  {
    id: "land-4",
    title: "Greenhouse Ready Land - Kiambu",
    description:
      "Prime location for greenhouse farming with excellent climate control conditions. Perfect for flowers, vegetables, and herbs.",
    location: "Kiambu County, Central Region",
    size: 5,
    pricePerMonth: 3000,
    soilType: "Red Soil",
    waterAccess: true,
    irrigationSystem: true,
    cropHistory: ["Flowers", "Tomatoes", "Capsicum", "Herbs"],
    availability: "Available from March 2024",
    owner: {
      name: "Grace Njeri",
      phone: "+254744556677",
      email: "grace.njeri@example.com",
      verified: true,
      description: "Greenhouse farming expert with connections to export markets. Technical support available.",
      experience: 10,
      otherProperties: 1,
    },
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    features: ["Greenhouse Ready", "Drip Irrigation", "Climate Control", "Export Access", "Technical Support"],
    coordinates: { lat: -1.1748, lng: 36.8341 },
    rating: 4.6,
    reviews: 15,
    leaseTerms: "Greenhouse farming focus. 2-4 year lease. Technical support included.",
    availableFrom: "2024-03-15",
    restrictions: ["Greenhouse farming preferred", "Quality standards required", "Export compliance needed"],
  },
]

export default function LandPage() {
  const [location, setLocation] = useState("")
  const [minSize, setMinSize] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [soilType, setSoilType] = useState("")
  const [waterAccess, setWaterAccess] = useState("")

  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [selectedLand, setSelectedLand] = useState<any>(null)

  // Filter lands based on search criteria
  const filteredLands = landsData.filter((land) => {
    const matchesLocation = !location || land.location.toLowerCase().includes(location.toLowerCase())
    const matchesMinSize = !minSize || land.size >= Number.parseInt(minSize)
    const matchesMaxPrice = !maxPrice || land.pricePerMonth <= Number.parseInt(maxPrice)
    const matchesSoilType = !soilType || land.soilType.toLowerCase().includes(soilType.toLowerCase())
    const matchesWaterAccess = !waterAccess || (waterAccess === "yes" ? land.waterAccess : !land.waterAccess)

    return matchesLocation && matchesMinSize && matchesMaxPrice && matchesSoilType && matchesWaterAccess
  })

  const handleContactClick = (land: any) => {
    setSelectedLand({
      ...land,
      owner: {
        ...land.owner,
        verified: land.owner.verified,
      },
    })
    setContactModalOpen(true)
  }

  const handleDetailsClick = (land: any) => {
    setSelectedLand(land)
    setDetailsModalOpen(true)
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Agricultural Land for Lease</h1>
        <p className="text-muted-foreground">Find the perfect land for your farming needs across Kenya</p>
      </div>

      {/* Enhanced Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 p-6 bg-muted/30 rounded-lg">
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            id="location"
            placeholder="Enter county or region"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="minSize">Min Size (acres)</Label>
          <Input
            type="number"
            id="minSize"
            placeholder="Minimum acres"
            value={minSize}
            onChange={(e) => setMinSize(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="maxPrice">Max Price (USD/month)</Label>
          <Input
            type="number"
            id="maxPrice"
            placeholder="Maximum price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="soilType">Soil Type</Label>
          <Select value={soilType} onValueChange={setSoilType}>
            <SelectTrigger>
              <SelectValue placeholder="Select soil type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="black cotton">Black Cotton</SelectItem>
              <SelectItem value="volcanic">Volcanic</SelectItem>
              <SelectItem value="red">Red Soil</SelectItem>
              <SelectItem value="sandy">Sandy</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="waterAccess">Water Access</Label>
          <Select value={waterAccess} onValueChange={setWaterAccess}>
            <SelectTrigger>
              <SelectValue placeholder="Water access" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="yes">With Water</SelectItem>
              <SelectItem value="no">No Water</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredLands.length} of {landsData.length} available properties
        </p>
      </div>

      {/* Land Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLands.map((land) => (
          <Card key={land.id} className="hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img src={land.images[0] || "/placeholder.svg"} alt={land.title} className="w-full h-full object-cover" />
              {land.owner.verified && <Badge className="absolute top-2 right-2 bg-green-500">Verified</Badge>}
            </div>

            <CardHeader>
              <CardTitle className="text-lg">{land.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {land.location}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Ruler className="h-4 w-4 text-muted-foreground" />
                  <span>{land.size} acres</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">${land.pricePerMonth}/month</span>
                </div>
                <div className="flex items-center gap-1">
                  <Droplets className="h-4 w-4 text-muted-foreground" />
                  <span>{land.waterAccess ? "Water" : "No Water"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>
                    {land.rating} ({land.reviews})
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {land.features.slice(0, 3).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {land.features.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{land.features.length - 3} more
                  </Badge>
                )}
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">{land.description}</p>

              <div className="flex items-center gap-1 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{land.availability}</span>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1" onClick={() => handleDetailsClick(land)}>
                  View Details
                </Button>
                <Button className="flex-1" onClick={() => handleContactClick(land)}>
                  Contact Owner
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results Message */}
      {filteredLands.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No land matches your search criteria.</p>
          <Button
            variant="outline"
            onClick={() => {
              setLocation("")
              setMinSize("")
              setMaxPrice("")
              setSoilType("")
              setWaterAccess("")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Modals */}
      {selectedLand && (
        <>
          <ContactModal
            isOpen={contactModalOpen}
            onClose={() => setContactModalOpen(false)}
            contactDetails={{
              name: selectedLand.owner.name,
              phone: selectedLand.owner.phone,
              email: selectedLand.owner.email,
              verified: selectedLand.owner.verified,
              location: selectedLand.location,
            }}
            itemName={selectedLand.title}
            itemType="land"
            actionType="contact"
          />
          <LandDetailsModal
            isOpen={detailsModalOpen}
            onClose={() => setDetailsModalOpen(false)}
            landDetails={selectedLand}
          />
        </>
      )}
    </div>
  )
}
