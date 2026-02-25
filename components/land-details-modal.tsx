"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Ruler, Droplets, Calendar, Shield, Phone, Mail, MessageSquare } from "lucide-react"
import Image from "next/image"

interface LandDetails {
  id: string
  title: string
  description: string
  location: string
  size: number
  pricePerMonth: number
  soilType: string
  waterAccess: boolean
  irrigationSystem: boolean
  cropHistory: string[]
  availability: string
  owner: {
    name: string
    phone: string
    email: string
    verified: boolean
    description?: string
    experience?: number
    otherProperties?: number
  }
  images: string[]
  features: string[]
  coordinates?: { lat: number; lng: number }
  rating: number
  reviews: number
  leaseTerms?: string
  availableFrom?: string
  restrictions?: string[]
}

interface LandDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  landDetails: LandDetails
}

export function LandDetailsModal({ isOpen, onClose, landDetails }: LandDetailsModalProps) {
  const openWhatsApp = (phone: string) => {
    const formattedNumber = phone.replace(/\D/g, "")
    const message = encodeURIComponent(`Hello, I'm interested in your land: "${landDetails.title}" on Tridge.`)
    window.open(`https://wa.me/${formattedNumber}?text=${message}`, "_blank")
  }

  const sendEmail = (email: string) => {
    const subject = encodeURIComponent(`Inquiry about land: ${landDetails.title}`)
    const body = encodeURIComponent(
      `Hello ${landDetails.owner.name},\n\nI'm interested in your land: "${landDetails.title}" on Tridge. Could you please provide more information?\n\nThank you.`,
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{landDetails.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {landDetails.location}
            {landDetails.owner.verified && (
              <Badge variant="secondary" className="ml-2">
                Verified Owner
              </Badge>
            )}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="details">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="details">Land Details</TabsTrigger>
            <TabsTrigger value="owner">Owner Information</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{landDetails.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Specifications</h3>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-muted-foreground" />
                      <span>Size: {landDetails.size} acres</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Soil Type:</span>
                      <span>{landDetails.soilType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-muted-foreground" />
                      <span>{landDetails.waterAccess ? "Water Access" : "No Water"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Irrigation:</span>
                      <span>{landDetails.irrigationSystem ? "Available" : "None"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Available: {landDetails.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-medium">${landDetails.pricePerMonth}/month</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {landDetails.features.map((feature, index) => (
                      <Badge key={index} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Crop History</h3>
                  <div className="flex flex-wrap gap-2">
                    {landDetails.cropHistory.map((crop, index) => (
                      <Badge key={index} variant="secondary">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </div>

                {landDetails.leaseTerms && (
                  <div>
                    <h3 className="font-medium mb-2">Lease Terms</h3>
                    <p className="text-sm text-muted-foreground">{landDetails.leaseTerms}</p>
                  </div>
                )}

                {landDetails.restrictions && landDetails.restrictions.length > 0 && (
                  <div>
                    <h3 className="font-medium mb-2">Restrictions</h3>
                    <ul className="text-sm text-muted-foreground list-disc pl-5">
                      {landDetails.restrictions.map((restriction, index) => (
                        <li key={index}>{restriction}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="owner" className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium">{landDetails.owner.name}</h3>
                {landDetails.owner.verified && (
                  <Badge className="bg-green-500">
                    <Shield className="h-3 w-3 mr-1" /> Verified
                  </Badge>
                )}
              </div>

              {landDetails.owner.description && (
                <p className="text-sm text-muted-foreground mb-4">{landDetails.owner.description}</p>
              )}

              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                {landDetails.owner.experience && (
                  <div>
                    <span className="text-muted-foreground">Experience:</span> {landDetails.owner.experience} years
                  </div>
                )}
                {landDetails.owner.otherProperties && (
                  <div>
                    <span className="text-muted-foreground">Other properties:</span> {landDetails.owner.otherProperties}
                  </div>
                )}
                <div>
                  <span className="text-muted-foreground">Rating:</span> ⭐ {landDetails.rating} ({landDetails.reviews}{" "}
                  reviews)
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{landDetails.owner.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{landDetails.owner.email}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={() => sendEmail(landDetails.owner.email)}
                  aria-label={`Send email to ${landDetails.owner.name}`}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => openWhatsApp(landDetails.owner.phone)}
                  aria-label={`Contact ${landDetails.owner.name} via WhatsApp`}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = `tel:${landDetails.owner.phone}`)}
                  aria-label={`Call ${landDetails.owner.name} at ${landDetails.owner.phone}`}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="photos" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {landDetails.images.map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${landDetails.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 mt-4 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => sendEmail(landDetails.owner.email)}>Contact Owner</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
