"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle } from "lucide-react"

export default function BecomeVendorPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the form data to the server
    setSubmitted(true)
  }

  const renderStepOne = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium">
            Company Name
          </label>
          <Input id="companyName" aria-describedby="company-name-desc" required />
          <div id="company-name-desc" className="sr-only">
            Enter your company name
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="storeUrl" className="text-sm font-medium">
            Store URL
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
              asteric-ea.com/vendors/
            </span>
            <Input id="storeUrl" className="rounded-l-none" aria-describedby="store-url-desc" required />
            <div id="store-url-desc" className="sr-only">
              Enter your desired store URL
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium">
            Country
          </label>
          <Select>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ke">Kenya</SelectItem>
              <SelectItem value="tz">Tanzania</SelectItem>
              <SelectItem value="ug">Uganda</SelectItem>
              <SelectItem value="rw">Rwanda</SelectItem>
              <SelectItem value="bi">Burundi</SelectItem>
              <SelectItem value="et">Ethiopia</SelectItem>
              <SelectItem value="ss">South Sudan</SelectItem>
              <SelectItem value="so">Somalia</SelectItem>
              <SelectItem value="dj">Djibouti</SelectItem>
              <SelectItem value="er">Eritrea</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="businessType" className="text-sm font-medium">
            Business Type
          </label>
          <Select>
            <SelectTrigger id="businessType">
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manufacturer">Manufacturer</SelectItem>
              <SelectItem value="wholesaler">Wholesaler</SelectItem>
              <SelectItem value="trader">Trader</SelectItem>
              <SelectItem value="farmer">Farmer/Producer</SelectItem>
              <SelectItem value="cooperative">Cooperative</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium">
          Company Description
        </label>
        <Textarea id="description" rows={4} aria-describedby="description-desc" required />
        <div id="description-desc" className="sr-only">
          Describe your company and business
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="mainProducts" className="text-sm font-medium">
          Main Products
        </label>
        <Textarea
          id="mainProducts"
          rows={3}
          placeholder="List your main products, separated by commas"
          aria-describedby="products-desc"
          required
        />
        <div id="products-desc" className="sr-only">
          List your main products, separated by commas
        </div>
      </div>

      <Button type="button" onClick={() => setStep(2)} className="w-full">
        Continue
      </Button>
    </div>
  )

  const renderStepTwo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contactName" className="text-sm font-medium">
            Contact Person
          </label>
          <Input id="contactName" aria-describedby="contact-name-desc" required />
          <div id="contact-name-desc" className="sr-only">
            Enter the contact person's name
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="jobTitle" className="text-sm font-medium">
            Job Title
          </label>
          <Input id="jobTitle" aria-describedby="job-title-desc" required />
          <div id="job-title-desc" className="sr-only">
            Enter the contact person's job title
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" aria-describedby="email-desc" required />
          <div id="email-desc" className="sr-only">
            Enter the contact email address
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <Input id="phone" type="tel" aria-describedby="phone-desc" required />
          <div id="phone-desc" className="sr-only">
            Enter the contact phone number
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="website" className="text-sm font-medium">
          Company Website
        </label>
        <Input id="website" type="url" placeholder="https://" aria-describedby="website-desc" />
        <div id="website-desc" className="sr-only">
          Enter your company website URL (optional)
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Business Categories</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="cat-coffee" />
            <label htmlFor="cat-coffee" className="text-sm">
              Coffee & Tea
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cat-fruits" />
            <label htmlFor="cat-fruits" className="text-sm">
              Fruits & Vegetables
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cat-grains" />
            <label htmlFor="cat-grains" className="text-sm">
              Grains & Cereals
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cat-livestock" />
            <label htmlFor="cat-livestock" className="text-sm">
              Livestock & Dairy
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cat-spices" />
            <label htmlFor="cat-spices" className="text-sm">
              Spices & Herbs
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cat-flowers" />
            <label htmlFor="cat-flowers" className="text-sm">
              Flowers & Ornamentals
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cat-machinery" />
            <label htmlFor="cat-machinery" className="text-sm">
              Agro Machinery
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cat-input" />
            <label htmlFor="cat-input" className="text-sm">
              Agro Input
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-2 pt-4">
        <Checkbox id="terms" required />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the{" "}
            <Link href="/terms" className="text-primary hover:text-primary/80">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:text-primary/80">
              Privacy Policy
            </Link>
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
          Back
        </Button>
        <Button type="submit" className="flex-1">
          Submit Application
        </Button>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Thank you for applying to become a vendor on Asteric East Africa. We'll review your application and get back to
        you within 2-3 business days.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Become a Vendor on Asteric East Africa</h1>
          <p className="text-lg text-muted-foreground">
            Join our East African marketplace and reach buyers across the region
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Vendor Application</CardTitle>
            <CardDescription>
              {!submitted
                ? `Step ${step} of 2: ${step === 1 ? "Business Information" : "Contact Details"}`
                : "Application Complete"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit}>{step === 1 ? renderStepOne() : renderStepTwo()}</form>
            ) : (
              renderSuccess()
            )}
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Apply</h3>
            <p className="text-sm text-muted-foreground">
              Complete the vendor application form with your business details
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Verification</h3>
            <p className="text-sm text-muted-foreground">Our team will review and verify your business credentials</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Start Selling</h3>
            <p className="text-sm text-muted-foreground">
              Set up your store, list products, and start receiving orders
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
