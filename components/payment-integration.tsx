"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Shield, DollarSign, CheckCircle, AlertCircle } from "lucide-react"

interface PaymentIntegrationProps {
  isOpen: boolean
  onClose: () => void
  amount: number
  itemName: string
  bookingId: string
  onPaymentSuccess: (paymentData: PaymentData) => void
}

interface PaymentData {
  paymentId: string
  amount: number
  method: string
  status: "success" | "failed" | "pending"
  transactionDate: Date
}

export function PaymentIntegration({
  isOpen,
  onClose,
  amount,
  itemName,
  bookingId,
  onPaymentSuccess,
}: PaymentIntegrationProps) {
  const [paymentMethod, setPaymentMethod] = useState("")
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  })
  const [mobileMoneyDetails, setMobileMoneyDetails] = useState({
    provider: "",
    phoneNumber: "",
  })
  const [processing, setProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "failed">("idle")
  const [step, setStep] = useState<"method" | "details" | "confirmation">("method")

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard, description: "Visa, Mastercard, American Express" },
    { id: "mpesa", name: "M-Pesa", icon: DollarSign, description: "Mobile money payment" },
    { id: "airtel", name: "Airtel Money", icon: DollarSign, description: "Mobile money payment" },
    { id: "bank", name: "Bank Transfer", icon: DollarSign, description: "Direct bank transfer" },
  ]

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method)
    setStep("details")
  }

  const processPayment = async () => {
    setProcessing(true)
    setPaymentStatus("processing")

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Simulate payment success (90% success rate)
    const isSuccess = Math.random() > 0.1

    if (isSuccess) {
      setPaymentStatus("success")
      const paymentData: PaymentData = {
        paymentId: `PAY-${Date.now()}`,
        amount,
        method: paymentMethod,
        status: "success",
        transactionDate: new Date(),
      }
      onPaymentSuccess(paymentData)
      setStep("confirmation")
    } else {
      setPaymentStatus("failed")
    }

    setProcessing(false)
  }

  const resetPayment = () => {
    setPaymentMethod("")
    setCardDetails({ number: "", expiry: "", cvv: "", name: "" })
    setMobileMoneyDetails({ provider: "", phoneNumber: "" })
    setProcessing(false)
    setPaymentStatus("idle")
    setStep("method")
  }

  const handleClose = () => {
    resetPayment()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Secure Payment - ${amount}
          </DialogTitle>
        </DialogHeader>

        {step === "method" && (
          <div className="space-y-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-medium mb-1">Payment Summary</h3>
              <p className="text-sm text-muted-foreground mb-2">{itemName}</p>
              <p className="text-lg font-bold">Total: ${amount}</p>
              <p className="text-xs text-muted-foreground">Booking ID: {bookingId}</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Select Payment Method</h3>
              {paymentMethods.map((method) => (
                <Card
                  key={method.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handlePaymentMethodSelect(method.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <method.icon className="h-6 w-6" />
                      <div className="flex-1">
                        <p className="font-medium">{method.name}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <Badge variant="outline">
                        <Shield className="h-3 w-3 mr-1" />
                        Secure
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline" onClick={handleClose} className="w-full">
              Cancel Payment
            </Button>
          </div>
        )}

        {step === "details" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Payment Details</h3>
              <Badge variant="outline">${amount}</Badge>
            </div>

            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {(paymentMethod === "mpesa" || paymentMethod === "airtel") && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    value={mobileMoneyDetails.phoneNumber}
                    onChange={(e) => setMobileMoneyDetails({ ...mobileMoneyDetails, phoneNumber: e.target.value })}
                    placeholder="+254 712 345 678"
                  />
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    You will receive a payment prompt on your phone. Please complete the transaction to confirm your
                    booking.
                  </p>
                </div>
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Bank Transfer Details</h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Bank:</span> Tridge Agricultural Bank
                    </p>
                    <p>
                      <span className="font-medium">Account:</span> 1234567890
                    </p>
                    <p>
                      <span className="font-medium">Reference:</span> {bookingId}
                    </p>
                    <p>
                      <span className="font-medium">Amount:</span> ${amount}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Please use the booking ID as your payment reference. Your booking will be confirmed once payment is
                  received.
                </p>
              </div>
            )}

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("method")}>
                Back
              </Button>
              <Button
                onClick={processPayment}
                disabled={
                  processing ||
                  (paymentMethod === "card" &&
                    (!cardDetails.name || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)) ||
                  ((paymentMethod === "mpesa" || paymentMethod === "airtel") && !mobileMoneyDetails.phoneNumber)
                }
              >
                {processing ? "Processing..." : `Pay $${amount}`}
              </Button>
            </div>
          </div>
        )}

        {step === "confirmation" && (
          <div className="space-y-6 text-center">
            {paymentStatus === "success" && (
              <>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Payment Successful!</h3>
                  <p className="text-muted-foreground">Your payment of ${amount} has been processed successfully.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-left">
                  <h4 className="font-medium mb-2">Payment Details:</h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-muted-foreground">Payment ID:</span> PAY-{Date.now()}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Amount:</span> ${amount}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Method:</span> {paymentMethod}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Date:</span> {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </>
            )}

            {paymentStatus === "failed" && (
              <>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Payment Failed</h3>
                  <p className="text-muted-foreground">There was an issue processing your payment. Please try again.</p>
                </div>
                <Button onClick={() => setStep("details")} className="w-full">
                  Try Again
                </Button>
              </>
            )}

            {paymentStatus === "success" && (
              <Button onClick={handleClose} className="w-full">
                Close
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
