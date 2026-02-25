"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MessageSquare, Copy, Check } from "lucide-react"

interface ContactDetails {
  name: string
  phone: string
  email: string
  whatsapp?: string
  location?: string
  verified: boolean
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  contactDetails: ContactDetails
  itemName: string
  itemType: "vehicle" | "tool" | "land" | "worker"
  actionType: "book" | "rent" | "contact" | "quote" | "details"
}

export function ContactModal({ isOpen, onClose, contactDetails, itemName, itemType, actionType }: ContactModalProps) {
  const [copied, setCopied] = useState<"phone" | "email" | "whatsapp" | null>(null)

  const copyToClipboard = (text: string, type: "phone" | "email" | "whatsapp") => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const formatWhatsApp = (phone: string) => {
    // Remove any non-digit characters
    const digits = phone.replace(/\D/g, "")
    return digits.startsWith("+") ? digits : `+${digits}`
  }

  const openWhatsApp = (phone: string) => {
    const whatsappNumber = contactDetails.whatsapp || phone
    const formattedNumber = formatWhatsApp(whatsappNumber)
    const message = encodeURIComponent(`Hello, I'm interested in your ${itemType}: "${itemName}" on Tridge.`)
    window.open(`https://wa.me/${formattedNumber}?text=${message}`, "_blank")
  }

  const sendEmail = (email: string) => {
    const subject = encodeURIComponent(`Inquiry about ${itemType}: ${itemName}`)
    const body = encodeURIComponent(
      `Hello ${contactDetails.name},\n\nI'm interested in your ${itemType}: "${itemName}" on Tridge. Could you please provide more information?\n\nThank you.`,
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  const getActionTitle = () => {
    switch (actionType) {
      case "book":
        return `Book this ${itemType}`
      case "rent":
        return `Rent this ${itemType}`
      case "contact":
        return "Contact information"
      case "quote":
        return "Request a quote"
      case "details":
        return "Owner details"
      default:
        return "Contact information"
    }
  }

  const getActionDescription = () => {
    switch (actionType) {
      case "book":
        return `Contact the owner directly to book this ${itemType}.`
      case "rent":
        return `Contact the owner directly to rent this ${itemType}.`
      case "quote":
        return `Request pricing information for this ${itemType}.`
      case "details":
        return `View detailed information about the ${itemType} owner.`
      default:
        return `Contact the owner of this ${itemType}.`
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {getActionTitle()}
            {contactDetails.verified && (
              <Badge variant="secondary" className="ml-2">
                Verified Owner
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>{getActionDescription()}</DialogDescription>
        </DialogHeader>

        <div className="p-4 border rounded-lg bg-muted/30 mb-4">
          <h3 className="font-medium mb-1">{itemName}</h3>
          {contactDetails.location && (
            <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
              <span>Location: {contactDetails.location}</span>
            </p>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Owner Information</h3>
            <p className="text-sm mb-1">{contactDetails.name}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{contactDetails.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => copyToClipboard(contactDetails.phone, "phone")}
                >
                  {copied === "phone" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{contactDetails.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => copyToClipboard(contactDetails.email, "email")}
                >
                  {copied === "email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t">
            <Button onClick={() => sendEmail(contactDetails.email)}>
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button variant="secondary" onClick={() => openWhatsApp(contactDetails.phone)}>
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp Message
            </Button>
            <Button variant="outline" onClick={() => (window.location.href = `tel:${contactDetails.phone}`)}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
