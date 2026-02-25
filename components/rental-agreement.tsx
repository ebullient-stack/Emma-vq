"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Download, Send } from "lucide-react"
import { format } from "date-fns"

interface RentalAgreementProps {
  isOpen: boolean
  onClose: () => void
  bookingData: {
    itemName: string
    itemType: string
    startDate: Date
    endDate: Date
    totalCost: number
    renterName: string
    ownerName: string
    ownerContact: string
  }
}

export function RentalAgreement({ isOpen, onClose, bookingData }: RentalAgreementProps) {
  const [renterDetails, setRenterDetails] = useState({
    fullName: "",
    idNumber: "",
    address: "",
    phone: "",
    email: "",
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [step, setStep] = useState<"details" | "agreement" | "signed">("details")

  const generateAgreementText = () => {
    return `
RENTAL AGREEMENT

This Rental Agreement is entered into on ${format(new Date(), "MMMM dd, yyyy")} between:

OWNER: ${bookingData.ownerName}
Contact: ${bookingData.ownerContact}

RENTER: ${renterDetails.fullName}
ID Number: ${renterDetails.idNumber}
Address: ${renterDetails.address}
Phone: ${renterDetails.phone}
Email: ${renterDetails.email}

RENTAL ITEM: ${bookingData.itemName}
TYPE: ${bookingData.itemType}

RENTAL PERIOD:
Start Date: ${format(bookingData.startDate, "MMMM dd, yyyy")}
End Date: ${format(bookingData.endDate, "MMMM dd, yyyy")}

RENTAL COST: $${bookingData.totalCost}

TERMS AND CONDITIONS:

1. PAYMENT: The total rental fee of $${bookingData.totalCost} is due before the start of the rental period.

2. CONDITION: The renter acknowledges receiving the item in good working condition and agrees to return it in the same condition.

3. LIABILITY: The renter is responsible for any damage, loss, or theft of the rented item during the rental period.

4. INSURANCE: The renter is advised to obtain appropriate insurance coverage for the rental period.

5. USE: The item shall be used only for its intended purpose and in accordance with manufacturer guidelines.

6. RETURN: The item must be returned on or before the end date specified above.

7. LATE FEES: A late fee of 10% of the daily rental rate will be charged for each day the item is returned late.

8. CANCELLATION: Cancellations must be made at least 24 hours before the start date for a full refund.

9. DISPUTE RESOLUTION: Any disputes shall be resolved through mediation or arbitration.

10. GOVERNING LAW: This agreement is governed by the laws of the jurisdiction where the rental takes place.

By signing below, both parties agree to the terms and conditions outlined in this agreement.

OWNER SIGNATURE: ___________________________ DATE: ___________
${bookingData.ownerName}

RENTER SIGNATURE: ___________________________ DATE: ___________
${renterDetails.fullName}

Generated via Tridge Platform - Reference: RA-${Date.now().toString().slice(-8)}
    `
  }

  const handleDownloadAgreement = () => {
    const agreementText = generateAgreementText()
    const blob = new Blob([agreementText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `rental-agreement-${bookingData.itemName.replace(/\s+/g, "-")}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleSendAgreement = () => {
    const agreementText = generateAgreementText()
    const subject = `Rental Agreement - ${bookingData.itemName}`
    const body = encodeURIComponent(agreementText)
    window.location.href = `mailto:${bookingData.ownerContact}?subject=${subject}&body=${body}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Rental Agreement - {bookingData.itemName}
          </DialogTitle>
        </DialogHeader>

        {step === "details" && (
          <div className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Rental Summary</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span>Item:</span>
                <span>{bookingData.itemName}</span>
                <span>Owner:</span>
                <span>{bookingData.ownerName}</span>
                <span>Period:</span>
                <span>
                  {format(bookingData.startDate, "MMM dd")} - {format(bookingData.endDate, "MMM dd")}
                </span>
                <span>Total Cost:</span>
                <span className="font-medium">${bookingData.totalCost}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Renter Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={renterDetails.fullName}
                    onChange={(e) => setRenterDetails({ ...renterDetails, fullName: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="idNumber">ID Number *</Label>
                  <Input
                    id="idNumber"
                    value={renterDetails.idNumber}
                    onChange={(e) => setRenterDetails({ ...renterDetails, idNumber: e.target.value })}
                    placeholder="Enter your ID number"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={renterDetails.address}
                    onChange={(e) => setRenterDetails({ ...renterDetails, address: e.target.value })}
                    placeholder="Enter your full address"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={renterDetails.phone}
                    onChange={(e) => setRenterDetails({ ...renterDetails, phone: e.target.value })}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={renterDetails.email}
                    onChange={(e) => setRenterDetails({ ...renterDetails, email: e.target.value })}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={() => setStep("agreement")}
                disabled={
                  !renterDetails.fullName ||
                  !renterDetails.idNumber ||
                  !renterDetails.address ||
                  !renterDetails.phone ||
                  !renterDetails.email
                }
              >
                Generate Agreement
              </Button>
            </div>
          </div>
        )}

        {step === "agreement" && (
          <div className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg max-h-96 overflow-y-auto">
              <pre className="text-sm whitespace-pre-wrap font-mono">{generateAgreementText()}</pre>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm">
                I have read and agree to the terms and conditions of this rental agreement
              </Label>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("details")}>
                Back to Details
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleDownloadAgreement}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button onClick={handleSendAgreement} disabled={!agreedToTerms}>
                  <Send className="h-4 w-4 mr-2" />
                  Send to Owner
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
