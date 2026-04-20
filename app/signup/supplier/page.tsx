'use client'

import { useState } from 'react'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function SupplierSignupPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    country: '',
    phoneNumber: '',
    whatsappNumber: '',
    businessNumber: '',
    categories: [] as string[],
    annualCapacity: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })

  const categories = [
    'Fruits & Vegetables',
    'Coffee & Tea',
    'Maize and Livestock',
    'Processed and Agro Products',
    'Herbs & Spices',
    'Fertilizers',
    'Agro Input',
    'Grains & Cereals',
    'Nuts & Seeds',
    'Fish and Seafood',
    'Flowers',
    'Seeds & Seedlings',
    'Agro Machinery',
  ]

  const toggleCategory = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <>
      <NavigationHeader />
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Link href="/signup" className="flex items-center gap-2 text-primary hover:underline mb-6">
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Create Supplier Account</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Join the marketplace to list products, receive inquiries, and access verification.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Company Info */}
              <div>
                <label className="block text-sm font-semibold mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="ACME Agro Ltd."
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Company Email *</label>
                  <input
                    type="email"
                    name="companyEmail"
                    placeholder="company@example.com"
                    value={formData.companyEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select country</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Ethiopia">Ethiopia</option>
                  </select>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="+254 700 000 000"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    placeholder="+254 700 000 000"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Business Registration */}
              <div>
                <label className="block text-sm font-semibold mb-2">Business Registration Number *</label>
                <input
                  type="text"
                  name="businessNumber"
                  placeholder="BRN-XXXXX"
                  value={formData.businessNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Product Categories */}
              <div>
                <label className="block text-sm font-semibold mb-4">Product Categories *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.map(category => (
                    <div key={category} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={category}
                        checked={formData.categories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <label htmlFor={category} className="text-sm text-foreground cursor-pointer">{category}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Annual Capacity */}
              <div>
                <label className="block text-sm font-semibold mb-2">Annual Capacity / Production Volume</label>
                <input
                  type="text"
                  name="annualCapacity"
                  placeholder="e.g., 2,000 MT per year"
                  value={formData.annualCapacity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Password Fields */}
              <div>
                <label className="block text-sm font-semibold mb-2">Password *</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Agreement */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  id="agree"
                  className="w-4 h-4 rounded border-border"
                />
                <label htmlFor="agree" className="text-sm text-foreground">
                  I agree to the <span className="text-primary hover:underline cursor-pointer">Terms of Service</span> and <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                Create Supplier Account
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Are you a buyer? <Link href="/signup" className="text-primary hover:underline">Create a buyer account</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
