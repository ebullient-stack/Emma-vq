"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Shield, CheckCircle, AlertTriangle, DollarSign, FileText } from "lucide-react"

interface InsuranceOptionsProps {
  isOpen: boolean
  onClose: () => void
  itemValue: number
  rentalDuration: number
  itemType: "vehicle" | "tool" | "land"
  onInsuranceSelect: (insurance: InsuranceData) => void
}

interface InsuranceData {
  planId: string
  planName: string
  coverage: number
  premium: number
  deductible: number
  features: string[]
}

export function InsuranceOptions({
  isOpen,
  onClose,
  itemValue,
  rentalDuration,
  itemType,
  onInsuranceSelect,
}: InsuranceOptionsProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const insurancePlans = [
    {
      id: "basic",
      name: "Basic Protection",
      coverage: itemValue * 0.7,
      premium: Math.round(itemValue * 0.02 * rentalDuration),
      deductible: Math.round(itemValue * 0.1),
      features: [
        "Theft protection",
        "Accidental damage (up to 70% of value)",
        "24/7 support hotline",
        "Quick claim processing",
      ],
      recommended: false,
      color: "blue",
    },
    {
      id: "standard",
      name: "Standard Protection",
      coverage: itemValue * 0.9,
      premium: Math.round(itemValue * 0.035 * rentalDuration),
      deductible: Math.round(itemValue * 0.05),
      features: [
        "Full theft protection",
        "Accidental damage (up to 90% of value)",
        "Weather damage coverage",
        "Replacement equipment during repairs",
        "24/7 support hotline",
        "Priority claim processing",
      ],
      recommended: true,
      color: "green",
    },
    {
      id: "premium",
      name: "Premium Protection",
      coverage: itemValue,
      premium: Math.round(itemValue * 0.05 * rentalDuration),
      deductible: 0,
      features: [
        "100% theft protection",
        "Full accidental damage coverage",
        "Weather and natural disaster coverage",
        "Immediate replacement equipment",
        "Zero deductible",
        "24/7 premium support",
        "Express claim processing (24 hours)",
        "Legal liability coverage",
      ],
      recommended: false,
      color: "purple",
    },
  ]

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleProceed = () => {
    const plan = insurancePlans.find((p) => p.id === selectedPlan)
    if (plan) {
      const insuranceData: InsuranceData = {
        planId: plan.id,
        planName: plan.name,
        coverage: plan.coverage,
        premium: plan.premium,
        deductible: plan.deductible,
        features: plan.features,
      }
      onInsuranceSelect(insuranceData)
    }
    onClose()
  }

  const getItemTypeSpecificRisks = () => {
    switch (itemType) {
      case "vehicle":
        return ["Accidents", "Theft", "Mechanical breakdown", "Weather damage"]
      case "tool":
        return ["Theft", "Damage during use", "Loss", "Electrical failure"]
      case "land":
        return ["Crop damage", "Natural disasters", "Liability issues", "Property damage"]
      default:
        return ["General damage", "Theft", "Accidents"]
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Rental Insurance Options
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Why Choose Insurance?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Protect yourself from unexpected costs during your rental period. Our insurance covers:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {getItemTypeSpecificRisks().map((risk, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{risk}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {insurancePlans.map((plan) => (
              <Card
                key={plan.id}
                className={`cursor-pointer transition-all ${
                  selectedPlan === plan.id ? "ring-2 ring-primary shadow-md" : "hover:shadow-md"
                } ${plan.recommended ? "border-green-500" : ""}`}
                onClick={() => handlePlanSelect(plan.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    {plan.recommended && <Badge className="bg-green-500">Recommended</Badge>}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-2xl font-bold">${plan.premium}</span>
                      <span className="text-sm text-muted-foreground">total</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Coverage up to ${plan.coverage.toLocaleString()}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Deductible:</span>
                      <span className="font-medium">{plan.deductible === 0 ? "None" : `$${plan.deductible}`}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Coverage:</span>
                      <span className="font-medium">{Math.round((plan.coverage / itemValue) * 100)}% of value</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Features:</h4>
                    <ul className="space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedPlan === plan.id && (
                    <div className="pt-2 border-t">
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Selected</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800">Important Information</h4>
                <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                  <li>• Insurance must be purchased before the rental period begins</li>
                  <li>• Claims must be reported within 24 hours of the incident</li>
                  <li>• Coverage is valid only during the rental period</li>
                  <li>• Some exclusions may apply - see full terms and conditions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the <button className="text-primary underline">insurance terms and conditions</button>
            </Label>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={onClose}>
              Skip Insurance
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                <FileText className="h-4 w-4 mr-2" />
                View Full Terms
              </Button>
              <Button onClick={handleProceed} disabled={!selectedPlan || !agreedToTerms}>
                {selectedPlan
                  ? `Add Insurance - $${insurancePlans.find((p) => p.id === selectedPlan)?.premium}`
                  : "Select a Plan"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
