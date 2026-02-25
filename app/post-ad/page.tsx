"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  ArrowLeft,
  Plus,
  Upload,
  MapPin,
  Calendar,
  DollarSign,
  Package,
  Truck,
  Shield,
  Star,
  AlertCircle,
} from "lucide-react"

export default function PostAdPage() {
  const { toast } = useToast()
  const [adType, setAdType] = useState<"product" | "service" | "hire">("product")
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [images, setImages] = useState<string[]>([])

  // Mock verification status - in real app, this would come from user context
  const isVerified = true
  const userType = "supplier"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Ad posted successfully",
        description: "Your ad has been submitted for review and will be live within 24 hours.",
      })
    }, 2000)
  }

  if (userType !== "supplier") {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Supplier Account Required</h1>
          <p className="text-muted-foreground mb-6">You need a supplier account to post ads on our platform.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/become-vendor">Become a Supplier</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!isVerified) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Shield className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Verification Required</h1>
          <p className="text-muted-foreground mb-6">
            Your supplier account needs to be verified before you can post ads. This helps maintain quality and trust on
            our platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/vendor-dashboard/verification">Complete Verification</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/vendor-dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/vendor-dashboard"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Post New Ad</h1>
          <p className="text-muted-foreground">Reach thousands of buyers across East Africa</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-1">
          <Shield className="h-3 w-3" />
          Verified Supplier
        </Badge>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Ad Type</CardTitle>
              <CardDescription>Choose what type of ad you want to post</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                defaultValue="product"
                value={adType}
                onValueChange={(value) => setAdType(value as "product" | "service" | "hire")}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50">
                  <RadioGroupItem value="product" id="product" />
                  <div className="flex-1">
                    <Label htmlFor="product" className="font-medium cursor-pointer">
                      <Package className="h-5 w-5 inline mr-2" />
                      Product Sale
                    </Label>
                    <p className="text-sm text-muted-foreground">Sell agricultural products</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50">
                  <RadioGroupItem value="service" id="service" />
                  <div className="flex-1">
                    <Label htmlFor="service" className="font-medium cursor-pointer">
                      <Star className="h-5 w-5 inline mr-2" />
                      Service
                    </Label>
                    <p className="text-sm text-muted-foreground">Offer agricultural services</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50">
                  <RadioGroupItem value="hire" id="hire" />
                  <div className="flex-1">
                    <Label htmlFor="hire" className="font-medium cursor-pointer">
                      <Truck className="h-5 w-5 inline mr-2" />
                      Equipment Hire
                    </Label>
                    <p className="text-sm text-muted-foreground">Rent out machinery or tools</p>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Provide the basic details about your {adType}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    {adType === "product" ? "Product" : adType === "service" ? "Service" : "Equipment"} Title
                  </Label>
                  <Input id="title" placeholder="Enter a descriptive title" aria-describedby="title-desc" required />
                  <div id="title-desc" className="sr-only">
                    Enter a descriptive title for your {adType}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select required onValueChange={setCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {adType === "product" && (
                        <>
                          <SelectItem value="fruits-vegetables">Fruits & Vegetables</SelectItem>
                          <SelectItem value="grains-cereals">Grains & Cereals</SelectItem>
                          <SelectItem value="coffee-tea">Coffee & Tea</SelectItem>
                          <SelectItem value="nuts-seeds">Nuts & Seeds</SelectItem>
                          <SelectItem value="livestock-dairy">Livestock & Dairy</SelectItem>
                          <SelectItem value="spices-herbs">Spices & Herbs</SelectItem>
                        </>
                      )}
                      {adType === "service" && (
                        <>
                          <SelectItem value="farming-consultation">Farming Consultation</SelectItem>
                          <SelectItem value="soil-testing">Soil Testing</SelectItem>
                          <SelectItem value="crop-management">Crop Management</SelectItem>
                          <SelectItem value="logistics-transport">Logistics & Transport</SelectItem>
                          <SelectItem value="processing-packaging">Processing & Packaging</SelectItem>
                        </>
                      )}
                      {adType === "hire" && (
                        <>
                          <SelectItem value="tractors">Tractors</SelectItem>
                          <SelectItem value="harvesters">Harvesters</SelectItem>
                          <SelectItem value="irrigation">Irrigation Equipment</SelectItem>
                          <SelectItem value="tools">Hand Tools</SelectItem>
                          <SelectItem value="processing">Processing Equipment</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder={`Describe your ${adType} in detail...`}
                  rows={4}
                  aria-describedby="description-desc"
                  required
                />
                <div id="description-desc" className="sr-only">
                  Provide detailed description of your {adType}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    Location
                  </Label>
                  <Input id="location" placeholder="City, Country" aria-describedby="location-desc" required />
                  <div id="location-desc" className="sr-only">
                    Enter the location where the {adType} is available
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Availability
                  </Label>
                  <Select defaultValue="immediate">
                    <SelectTrigger id="availability">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Available Now</SelectItem>
                      <SelectItem value="1-week">Within 1 Week</SelectItem>
                      <SelectItem value="2-weeks">Within 2 Weeks</SelectItem>
                      <SelectItem value="1-month">Within 1 Month</SelectItem>
                      <SelectItem value="seasonal">Seasonal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <DollarSign className="h-5 w-5 inline mr-2" />
                Pricing Information
              </CardTitle>
              <CardDescription>Set your pricing details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">{adType === "hire" ? "Rental Price" : "Price"}</Label>
                  <Input id="price" type="number" placeholder="0.00" aria-describedby="price-desc" required />
                  <div id="price-desc" className="sr-only">
                    Enter the price for your {adType}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="USD">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="KES">KES (Kenyan Shilling)</SelectItem>
                      <SelectItem value="TZS">TZS (Tanzanian Shilling)</SelectItem>
                      <SelectItem value="UGX">UGX (Ugandan Shilling)</SelectItem>
                      <SelectItem value="RWF">RWF (Rwandan Franc)</SelectItem>
                      <SelectItem value="ETB">ETB (Ethiopian Birr)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">{adType === "hire" ? "Per" : "Unit"}</Label>
                  <Select>
                    <SelectTrigger id="unit">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {adType === "product" && (
                        <>
                          <SelectItem value="kg">Per Kg</SelectItem>
                          <SelectItem value="ton">Per Ton</SelectItem>
                          <SelectItem value="piece">Per Piece</SelectItem>
                          <SelectItem value="bag">Per Bag</SelectItem>
                          <SelectItem value="crate">Per Crate</SelectItem>
                        </>
                      )}
                      {adType === "service" && (
                        <>
                          <SelectItem value="hour">Per Hour</SelectItem>
                          <SelectItem value="day">Per Day</SelectItem>
                          <SelectItem value="project">Per Project</SelectItem>
                          <SelectItem value="hectare">Per Hectare</SelectItem>
                        </>
                      )}
                      {adType === "hire" && (
                        <>
                          <SelectItem value="hour">Per Hour</SelectItem>
                          <SelectItem value="day">Per Day</SelectItem>
                          <SelectItem value="week">Per Week</SelectItem>
                          <SelectItem value="month">Per Month</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {adType === "product" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minOrder">Minimum Order</Label>
                    <Input id="minOrder" placeholder="e.g. 100 kg" aria-describedby="min-order-desc" />
                    <div id="min-order-desc" className="sr-only">
                      Enter the minimum order quantity
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxOrder">Maximum Order</Label>
                    <Input id="maxOrder" placeholder="e.g. 10 tons" aria-describedby="max-order-desc" />
                    <div id="max-order-desc" className="sr-only">
                      Enter the maximum order quantity
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox id="negotiable" />
                <Label htmlFor="negotiable" className="font-normal">
                  Price is negotiable
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
              <CardDescription>Upload high-quality images to attract more buyers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-40 cursor-pointer hover:bg-muted/50 transition-colors">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    Click to upload main image
                    <br />
                    <span className="text-xs">PNG, JPG up to 5MB</span>
                  </p>
                  <input type="file" className="hidden" accept="image/*" />
                </div>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-40 cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <Plus className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Add image {index + 2}</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                First image will be used as the main image. You can upload up to 4 images.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How buyers can reach you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person</Label>
                  <Input id="contactName" placeholder="Your name" aria-describedby="contact-name-desc" required />
                  <div id="contact-name-desc" className="sr-only">
                    Enter the contact person's name
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+254 700 000 000" aria-describedby="phone-desc" required />
                  <div id="phone-desc" className="sr-only">
                    Enter the contact phone number
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" aria-describedby="email-desc" required />
                <div id="email-desc" className="sr-only">
                  Enter the contact email address
                </div>
              </div>

              <div className="space-y-2">
                <Label>Preferred Contact Method</Label>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="phone-contact" defaultChecked />
                    <Label htmlFor="phone-contact" className="font-normal">
                      Phone
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="email-contact" defaultChecked />
                    <Label htmlFor="email-contact" className="font-normal">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="whatsapp-contact" />
                    <Label htmlFor="whatsapp-contact" className="font-normal">
                      WhatsApp
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ad Settings</CardTitle>
              <CardDescription>Configure how your ad appears</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Ad Duration</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 Days</SelectItem>
                    <SelectItem value="14">14 Days</SelectItem>
                    <SelectItem value="30">30 Days (Recommended)</SelectItem>
                    <SelectItem value="60">60 Days</SelectItem>
                    <SelectItem value="90">90 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="featured" />
                <Label htmlFor="featured" className="font-normal">
                  Make this a featured ad (+$10)
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="urgent" />
                <Label htmlFor="urgent" className="font-normal">
                  Mark as urgent (+$5)
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="font-normal">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/ad-policy" className="text-primary hover:underline">
                    Ad Posting Policy
                  </Link>
                </Label>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline" asChild>
              <Link href="/vendor-dashboard">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isSubmitting} className="min-w-32">
              {isSubmitting ? "Posting..." : "Post Ad"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
