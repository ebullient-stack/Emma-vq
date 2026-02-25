"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Plus, Upload } from "lucide-react"
import Link from "next/link"

export default function AddProductPage() {
  const { toast } = useToast()
  const [listingType, setListingType] = useState<"sell" | "hire" | "both">("sell")
  const [category, setCategory] = useState("")
  const [includesOperator, setIncludesOperator] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Product added successfully",
        description: "Your product has been added to the marketplace.",
      })
    }, 1500)
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
        <h1 className="text-3xl font-bold">Add New Product</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Provide the basic details about your product</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="Enter product name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select required onValueChange={setCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Fruits & Vegetables">Fruits & Vegetables</SelectItem>
                      <SelectItem value="Grains & Cereals">Grains & Cereals</SelectItem>
                      <SelectItem value="Coffee & Tea">Coffee & Tea</SelectItem>
                      <SelectItem value="Nuts & Seeds">Nuts & Seeds</SelectItem>
                      <SelectItem value="Agro Machinery">Agro Machinery</SelectItem>
                      <SelectItem value="Fields & Land">Fields & Land</SelectItem>
                      <SelectItem value="Agro Input">Agro Input</SelectItem>
                      <SelectItem value="Tools & Spare Parts">Tools & Spare Parts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subcategory">Subcategory</Label>
                  <Select>
                    <SelectTrigger id="subcategory">
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {category === "Agro Machinery" && (
                        <>
                          <SelectItem value="Tractors">Tractors</SelectItem>
                          <SelectItem value="Harvesters">Harvesters</SelectItem>
                          <SelectItem value="Planters">Planters</SelectItem>
                          <SelectItem value="Irrigation">Irrigation Systems</SelectItem>
                        </>
                      )}
                      {category === "Fields & Land" && (
                        <>
                          <SelectItem value="Farmland">Farmland</SelectItem>
                          <SelectItem value="Vineyards">Vineyards</SelectItem>
                          <SelectItem value="Orchards">Orchards</SelectItem>
                        </>
                      )}
                      {category === "Tools & Spare Parts" && (
                        <>
                          <SelectItem value="Hand Tools">Hand Tools</SelectItem>
                          <SelectItem value="Machinery Parts">Machinery Parts</SelectItem>
                          <SelectItem value="Irrigation Parts">Irrigation Parts</SelectItem>
                        </>
                      )}
                      {/* Add more subcategories for other categories */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin</Label>
                  <Input id="origin" placeholder="Country of origin" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your product" rows={4} required />
              </div>

              <div className="space-y-2">
                <Label>Listing Type</Label>
                <RadioGroup
                  defaultValue="sell"
                  value={listingType}
                  onValueChange={(value) => setListingType(value as "sell" | "hire" | "both")}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sell" id="sell" />
                    <Label htmlFor="sell" className="font-normal">
                      For Sale Only
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hire" id="hire" />
                    <Label htmlFor="hire" className="font-normal">
                      For Hire Only
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="font-normal">
                      Both Sale and Hire
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="sale" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sale" disabled={listingType === "hire"}>
                Sale Information
              </TabsTrigger>
              <TabsTrigger value="hire" disabled={listingType === "sell"}>
                Hire Information
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sale">
              <Card>
                <CardHeader>
                  <CardTitle>Sale Information</CardTitle>
                  <CardDescription>Provide details for selling your product</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input id="price" type="text" placeholder="e.g. $100.00" required={listingType !== "hire"} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="USD">
                        <SelectTrigger id="currency">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="unit">Unit</Label>
                      <Input id="unit" placeholder="e.g. kg, unit, hectare" required={listingType !== "hire"} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="minOrder">Minimum Order</Label>
                      <Input id="minOrder" placeholder="e.g. 500 kg, 1 unit" required={listingType !== "hire"} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="leadTime">Lead Time</Label>
                      <Input id="leadTime" placeholder="e.g. 1-2 weeks" required={listingType !== "hire"} />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="inStock" defaultChecked />
                    <Label htmlFor="inStock" className="font-normal">
                      Product is in stock
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="hire">
              <Card>
                <CardHeader>
                  <CardTitle>Hire Information</CardTitle>
                  <CardDescription>Provide details for hiring out your product</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hirePrice">Hire Price</Label>
                      <Input id="hirePrice" type="text" placeholder="e.g. $50.00" required={listingType !== "sell"} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hireCurrency">Currency</Label>
                      <Select defaultValue="USD">
                        <SelectTrigger id="hireCurrency">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hirePriceUnit">Price Unit</Label>
                      <Select defaultValue="day">
                        <SelectTrigger id="hirePriceUnit">
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hour">Per Hour</SelectItem>
                          <SelectItem value="day">Per Day</SelectItem>
                          <SelectItem value="week">Per Week</SelectItem>
                          <SelectItem value="month">Per Month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hireTerms">Hire Terms</Label>
                    <Textarea
                      id="hireTerms"
                      placeholder="Describe your hire terms, minimum period, security deposit, etc."
                      rows={3}
                      required={listingType !== "sell"}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="availableNow" defaultChecked />
                    <Label htmlFor="availableNow" className="font-normal">
                      Available for hire now
                    </Label>
                  </div>

                  {(category === "Agro Machinery" || category === "Tools & Spare Parts") && (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="includesOperator"
                        checked={includesOperator}
                        onCheckedChange={(checked) => setIncludesOperator(checked as boolean)}
                      />
                      <Label htmlFor="includesOperator" className="font-normal">
                        Includes operator/technician
                      </Label>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
              <CardDescription>Upload images of your product</CardDescription>
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
                    <p className="text-sm text-muted-foreground">Add additional image</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline" asChild>
              <Link href="/vendor-dashboard">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding Product..." : "Add Product"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
