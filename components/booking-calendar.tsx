"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays } from "lucide-react"
import { format, differenceInDays } from "date-fns"

interface BookingCalendarProps {
  isOpen: boolean
  onClose: () => void
  itemName: string
  itemType: "vehicle" | "tool" | "land"
  pricePerDay: number
  ownerName: string
  unavailableDates?: Date[]
  onBookingSubmit: (booking: BookingData) => void
}

interface BookingData {
  startDate: Date
  endDate: Date
  duration: number
  totalCost: number
  purpose: string
  notes: string
  contactMethod: string
}

export function BookingCalendar({
  isOpen,
  onClose,
  itemName,
  itemType,
  pricePerDay,
  ownerName,
  unavailableDates = [],
  onBookingSubmit,
}: BookingCalendarProps) {
  const [selectedDates, setSelectedDates] = useState<{ from?: Date; to?: Date }>({})
  const [purpose, setPurpose] = useState("")
  const [notes, setNotes] = useState("")
  const [contactMethod, setContactMethod] = useState("email")
  const [step, setStep] = useState<"calendar" | "details" | "confirmation">("calendar")

  const duration =
    selectedDates.from && selectedDates.to ? differenceInDays(selectedDates.to, selectedDates.from) + 1 : 0
  const totalCost = duration * pricePerDay

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some(
      (unavailableDate) => format(date, "yyyy-MM-dd") === format(unavailableDate, "yyyy-MM-dd"),
    )
  }

  const handleDateSelect = (range: { from?: Date; to?: Date } | undefined) => {
    if (range) {
      setSelectedDates(range)
    }
  }

  const handleSubmitBooking = () => {
    if (selectedDates.from && selectedDates.to) {
      const bookingData: BookingData = {
        startDate: selectedDates.from,
        endDate: selectedDates.to,
        duration,
        totalCost,
        purpose,
        notes,
        contactMethod,
      }
      onBookingSubmit(bookingData)
      setStep("confirmation")
    }
  }

  const resetForm = () => {
    setSelectedDates({})
    setPurpose("")
    setNotes("")
    setContactMethod("email")
    setStep("calendar")
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            {step === "calendar" && `Select Dates - ${itemName}`}
            {step === "details" && `Booking Details - ${itemName}`}
            {step === "confirmation" && `Booking Confirmed - ${itemName}`}
          </DialogTitle>
        </DialogHeader>

        {step === "calendar" && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Select your rental dates</h3>
              <p className="text-sm text-muted-foreground">Choose start and end dates for your {itemType} rental</p>
            </div>

            <div className="flex justify-center">
              <Calendar
                mode="range"
                selected={selectedDates}
                onSelect={handleDateSelect}
                disabled={(date) => date < new Date() || isDateUnavailable(date)}
                className="rounded-md border"
                numberOfMonths={2}
                aria-label="Select rental dates"
              />
            </div>

            {selectedDates.from && selectedDates.to && (
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Start Date:</span>
                    <p className="font-medium">{format(selectedDates.from, "PPP")}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">End Date:</span>
                    <p className="font-medium">{format(selectedDates.to, "PPP")}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <p className="font-medium">{duration} days</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Total Cost:</span>
                    <p className="font-medium text-primary">${totalCost}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={() => setStep("details")} disabled={!selectedDates.from || !selectedDates.to}>
                Continue to Details
              </Button>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Booking Summary</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span>Dates:</span>
                <span>
                  {selectedDates.from &&
                    selectedDates.to &&
                    `${format(selectedDates.from, "MMM dd")} - ${format(selectedDates.to, "MMM dd")}`}
                </span>
                <span>Duration:</span>
                <span>{duration} days</span>
                <span>Rate:</span>
                <span>${pricePerDay}/day</span>
                <span className="font-medium">Total:</span>
                <span className="font-medium text-primary">${totalCost}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="purpose">Purpose of Rental</Label>
                <Select value={purpose} onValueChange={setPurpose}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    {itemType === "vehicle" && (
                      <>
                        <SelectItem value="crop-transport">Crop Transportation</SelectItem>
                        <SelectItem value="livestock-transport">Livestock Transportation</SelectItem>
                        <SelectItem value="equipment-transport">Equipment Transportation</SelectItem>
                        <SelectItem value="general-transport">General Transportation</SelectItem>
                      </>
                    )}
                    {itemType === "tool" && (
                      <>
                        <SelectItem value="land-preparation">Land Preparation</SelectItem>
                        <SelectItem value="planting">Planting</SelectItem>
                        <SelectItem value="harvesting">Harvesting</SelectItem>
                        <SelectItem value="maintenance">Farm Maintenance</SelectItem>
                      </>
                    )}
                    {itemType === "land" && (
                      <>
                        <SelectItem value="crop-farming">Crop Farming</SelectItem>
                        <SelectItem value="livestock-grazing">Livestock Grazing</SelectItem>
                        <SelectItem value="mixed-farming">Mixed Farming</SelectItem>
                        <SelectItem value="experimental">Experimental/Research</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="contact-method">Preferred Contact Method</Label>
                <Select value={contactMethod} onValueChange={setContactMethod}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requirements or additional information..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  aria-describedby="notes-desc"
                />
                <div id="notes-desc" className="sr-only">
                  Enter any special requirements or additional information for your booking
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("calendar")}>
                Back to Calendar
              </Button>
              <Button onClick={handleSubmitBooking} disabled={!purpose}>
                Submit Booking Request
              </Button>
            </div>
          </div>
        )}

        {step === "confirmation" && (
          <div className="space-y-6 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CalendarDays className="h-8 w-8 text-green-600" />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Booking Request Submitted!</h3>
              <p className="text-muted-foreground">
                Your booking request has been sent to {ownerName}. They will contact you via {contactMethod} to confirm
                the details.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg text-left">
              <h4 className="font-medium mb-2">Booking Details:</h4>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="text-muted-foreground">Item:</span> {itemName}
                </p>
                <p>
                  <span className="text-muted-foreground">Dates:</span>{" "}
                  {selectedDates.from &&
                    selectedDates.to &&
                    `${format(selectedDates.from, "PPP")} - ${format(selectedDates.to, "PPP")}`}
                </p>
                <p>
                  <span className="text-muted-foreground">Duration:</span> {duration} days
                </p>
                <p>
                  <span className="text-muted-foreground">Purpose:</span> {purpose}
                </p>
                <p>
                  <span className="text-muted-foreground">Total Cost:</span> ${totalCost}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                You will receive a confirmation email with the booking details.
              </p>
              <p className="text-sm text-muted-foreground">Reference ID: BK-{Date.now().toString().slice(-6)}</p>
            </div>

            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
