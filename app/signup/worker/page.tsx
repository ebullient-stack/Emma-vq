'use client'

import { useState } from 'react'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, Users } from 'lucide-react'
import Link from 'next/link'

export default function WorkerSignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    phoneNumber: '',
    whatsappNumber: '',
    experienceLevel: '',
    availability: '',
    skills: [] as string[],
    expectedWage: '',
    about: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })

  const skillsOptions = [
    'Crop Planting & Harvesting',
    'Livestock Management',
    'Irrigation Systems',
    'Tractor Operation',
    'Greenhouse Management',
    'Pest Control',
    'Organic Farming',
    'Dairy Farming',
    'Poultry Farming',
    'General Farm Labor',
  ]

  const toggleSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
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
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl">Register as Farm Worker</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Join our platform to connect with farms and agricultural businesses looking for skilled workers.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Info */}
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
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

              {/* Experience and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Experience Level *</label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select experience level</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Availability *</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select availability</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Seasonal">Seasonal</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Skills - First Row */}
              <div>
                <label className="block text-sm font-semibold mb-4">Skills & Expertise *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillsOptions.slice(0, 5).map(skill => (
                    <div key={skill} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={skill}
                        checked={formData.skills.includes(skill)}
                        onChange={() => toggleSkill(skill)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <label htmlFor={skill} className="text-sm text-foreground cursor-pointer">{skill}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills - Second Row */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillsOptions.slice(5).map(skill => (
                    <div key={skill} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={skill}
                        checked={formData.skills.includes(skill)}
                        onChange={() => toggleSkill(skill)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <label htmlFor={skill} className="text-sm text-foreground cursor-pointer">{skill}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Wage */}
              <div>
                <label className="block text-sm font-semibold mb-2">Expected Wage (per day/month)</label>
                <input
                  type="text"
                  name="expectedWage"
                  placeholder="e.g., $15/day or $400/month"
                  value={formData.expectedWage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* About Section */}
              <div>
                <label className="block text-sm font-semibold mb-2">About You / Additional Information</label>
                <textarea
                  name="about"
                  placeholder="Tell us about your experience, certifications, or any other relevant information..."
                  value={formData.about}
                  onChange={handleInputChange}
                  rows={4}
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
                Register as Farm Worker
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Looking for workers? <Link href="/signup/worker" className="text-primary hover:underline">Browse farm workers</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
