'use client'

import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LoanApplicationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    registrationNumber: '',
    // Loan Details
    loanAmount: '',
    loanPurpose: '',
    loanTerm: '',
    collateral: '',
    // Financial Information
    annualRevenue: '',
    yearsInBusiness: '',
    bankName: '',
    accountNumber: '',
    // Additional Details
    farmSize: '',
    cropType: '',
    location: '',
    additionalInfo: '',
    termsAccepted: false,
  })

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! Your loan application has been submitted. Our team will contact you within 24 hours.')
  }

  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link href="/agri-finance-1" className="text-primary hover:underline flex items-center gap-2 mb-6">
              ← Back to Agri Finance
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">Agricultural Loan Application</h1>
            <p className="text-lg text-muted-foreground">
              Complete this form to apply for agricultural financing. Our team will review your application and contact you within 24 hours.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                Step {step} of 4: {step === 1 ? 'Personal Information' : step === 2 ? 'Loan Details' : step === 3 ? 'Financial Information' : 'Review & Submit'}
              </h2>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          <Card className="border border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-foreground">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="businessName" className="text-foreground">Business/Farm Name *</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Your Farm Name"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="businessType" className="text-foreground">Business Type *</Label>
                        <Select value={formData.businessType} onValueChange={(value) => handleSelectChange('businessType', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Individual Farmer</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="company">Company</SelectItem>
                            <SelectItem value="cooperative">Cooperative</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="registrationNumber" className="text-foreground">Registration Number</Label>
                        <Input
                          id="registrationNumber"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleInputChange}
                          placeholder="Business registration number"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Loan Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-foreground">Loan Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="loanAmount" className="text-foreground">Loan Amount Needed (USD) *</Label>
                        <Input
                          id="loanAmount"
                          name="loanAmount"
                          type="number"
                          value={formData.loanAmount}
                          onChange={handleInputChange}
                          placeholder="50000"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="loanTerm" className="text-foreground">Loan Term (Years) *</Label>
                        <Select value={formData.loanTerm} onValueChange={(value) => handleSelectChange('loanTerm', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select loan term" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Year</SelectItem>
                            <SelectItem value="3">3 Years</SelectItem>
                            <SelectItem value="5">5 Years</SelectItem>
                            <SelectItem value="10">10 Years</SelectItem>
                            <SelectItem value="15">15 Years</SelectItem>
                            <SelectItem value="20">20 Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="loanPurpose" className="text-foreground">What will the loan be used for? *</Label>
                      <Select value={formData.loanPurpose} onValueChange={(value) => handleSelectChange('loanPurpose', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select loan purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="equipment">Equipment Purchase</SelectItem>
                          <SelectItem value="land">Land Acquisition</SelectItem>
                          <SelectItem value="working-capital">Working Capital</SelectItem>
                          <SelectItem value="expansion">Farm Expansion</SelectItem>
                          <SelectItem value="technology">Technology & Infrastructure</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="collateral" className="text-foreground">Collateral Available</Label>
                      <Textarea
                        id="collateral"
                        name="collateral"
                        value={formData.collateral}
                        onChange={handleInputChange}
                        placeholder="Describe any collateral you can offer (property, equipment, etc.)"
                        className="mt-2 min-h-32"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Financial Information */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-foreground">Financial Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="annualRevenue" className="text-foreground">Annual Farm Revenue (USD) *</Label>
                        <Input
                          id="annualRevenue"
                          name="annualRevenue"
                          type="number"
                          value={formData.annualRevenue}
                          onChange={handleInputChange}
                          placeholder="100000"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="yearsInBusiness" className="text-foreground">Years in Agriculture *</Label>
                        <Select value={formData.yearsInBusiness} onValueChange={(value) => handleSelectChange('yearsInBusiness', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select years" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="less-1">Less than 1 year</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10plus">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bankName" className="text-foreground">Current Bank Name</Label>
                        <Input
                          id="bankName"
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          placeholder="Bank name"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="accountNumber" className="text-foreground">Account Number</Label>
                        <Input
                          id="accountNumber"
                          name="accountNumber"
                          value={formData.accountNumber}
                          onChange={handleInputChange}
                          placeholder="Account number (optional)"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-foreground">Review Your Application</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted p-6 rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="font-semibold text-foreground">{formData.firstName} {formData.lastName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Business Name</p>
                        <p className="font-semibold text-foreground">{formData.businessName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Loan Amount</p>
                        <p className="font-semibold text-foreground">${formData.loanAmount || '0'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Loan Term</p>
                        <p className="font-semibold text-foreground">{formData.loanTerm} years</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Annual Revenue</p>
                        <p className="font-semibold text-foreground">${formData.annualRevenue || '0'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="font-semibold text-foreground">{formData.yearsInBusiness}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="termsAccepted"
                          name="termsAccepted"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) => handleInputChange({ target: { name: 'termsAccepted', type: 'checkbox', checked } })}
                        />
                        <Label htmlFor="termsAccepted" className="text-sm text-muted-foreground cursor-pointer flex-1">
                          I declare that all information provided in this application is true and accurate. I understand that providing false information may result in rejection of my application and legal action.
                        </Label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-4 pt-8 border-t border-border">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    disabled={step === 1}
                  >
                    ← Previous
                  </Button>
                  
                  {step < 4 ? (
                    <Button
                      type="button"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => setStep(step + 1)}
                    >
                      Next <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      disabled={!formData.termsAccepted}
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              Our agricultural finance team is here to help you. Contact us for assistance with your application.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
