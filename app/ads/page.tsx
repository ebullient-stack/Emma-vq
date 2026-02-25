"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, DollarSign, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function AdsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedType, setSelectedType] = useState("")

  // Mock ads data
  const ads = [
    {
      id: 1,
      title: "Premium Arabica Coffee Beans",
      description:
        "High-quality Arabica coffee beans from the highlands of Kenya. Perfect for export or local roasting.",
      type: "product",
      category: "coffee-tea",
      price: 850,
      currency: "USD",
      unit: "per ton",
      location: "Nairobi, Kenya",
      contactName: "John Kamau",
      phone: "+254 700 123 456",
      email: "john@coffeefarm.ke",
      featured: true,
      urgent: false,
      createdAt: "2024-01-15",
      expiresAt: "2024-02-15",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Tractor Rental Service",
      description:
        "Modern John Deere tractor available for hire. Includes operator and fuel. Perfect for land preparation.",
      type: "hire",
      category: "tractors",
      price: 50,
      currency: "USD",
      unit: "per day",
      location: "Kampala, Uganda",
      contactName: "Sarah Nakato",
      phone: "+256 700 987 654",
      email: "sarah@agrirent.ug",
      featured: false,
      urgent: true,
      createdAt: "2024-01-14",
      expiresAt: "2024-02-14",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Fresh Avocados for Export",
      description: "Grade A Hass avocados ready for export. Certified organic and sustainably grown.",
      type: "product",
      category: "fruits-vegetables",
      price: 1200,
      currency: "USD",
      unit: "per ton",
      location: "Arusha, Tanzania",
      contactName: "Mohamed Hassan",
      phone: "+255 700 555 123",
      email: "mohamed@avocadofarm.tz",
      featured: true,
      urgent: false,
      createdAt: "2024-01-13",
      expiresAt: "2024-02-13",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredAds = ads.filter((ad) => {
    const matchesSearch =
      ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || ad.category === selectedCategory
    const matchesType = !selectedType || ad.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Marketplace Ads</h1>
          <p className="text-muted-foreground">Discover products and services from verified suppliers</p>
        </div>
        <Button asChild>
          <Link href="/post-ad">Post Your Ad</Link>
        </Button>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search ads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Ad Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="product">Products</SelectItem>
                <SelectItem value="service">Services</SelectItem>
                <SelectItem value="hire">Equipment Hire</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="coffee-tea">Coffee & Tea</SelectItem>
                <SelectItem value="fruits-vegetables">Fruits & Vegetables</SelectItem>
                <SelectItem value="grains-cereals">Grains & Cereals</SelectItem>
                <SelectItem value="tractors">Tractors</SelectItem>
                <SelectItem value="tools">Tools</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("")
                setSelectedType("")
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Ads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAds.map((ad) => (
          <Card key={ad.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={ad.image || "/placeholder.svg"} alt={ad.title} className="w-full h-48 object-cover" />
              <div className="absolute top-2 left-2 flex gap-1">
                {ad.featured && <Badge className="bg-yellow-500">Featured</Badge>}
                {ad.urgent && <Badge variant="destructive">Urgent</Badge>}
              </div>
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="capitalize">
                  {ad.type}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{ad.title}</CardTitle>
              <CardDescription className="line-clamp-2">{ad.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-lg font-bold text-primary">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {ad.price} {ad.currency}
                  </div>
                  <span className="text-sm text-muted-foreground">{ad.unit}</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {ad.location}
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  Posted {new Date(ad.createdAt).toLocaleDateString()}
                </div>

                <div className="pt-3 border-t">
                  <p className="text-sm font-medium mb-2">Contact: {ad.contactName}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAds.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No ads found matching your criteria.</p>
          <Button asChild className="mt-4">
            <Link href="/post-ad">Post the first ad</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
