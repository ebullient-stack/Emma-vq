'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'

export default function BuyerSignupPage() {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement
      setFormData(prev => ({ ...prev, [name]: target.checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const validateForm = () => {

    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim())
      newErrors.fullName = 'Full name is required'

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'Valid email is required'

    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters'

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match'

    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = 'You must agree to the terms'

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {

      setIsSubmitted(true)

      console.log('Buyer signup:', formData)

      setTimeout(() => {
        alert(`Welcome ${formData.fullName}! Your buyer account has been created.`)
      }, 500)

    } else {
      setErrors(newErrors)
    }
  }

  if (isSubmitted) {
    return (
      <>
        <NavigationHeader />

        <main className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full text-center border rounded-lg p-8">

            <div className="text-5xl mb-4">✓</div>

            <h2 className="text-2xl font-bold mb-4">
              Account Created Successfully
            </h2>

            <p className="text-muted-foreground mb-6">
              Welcome to ASTERIC, {formData.fullName}.
            </p>

            <Link href="/">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Go to Home
              </Button>
            </Link>

          </div>
        </main>

        <Footer />
      </>
    )
  }

  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen flex items-center justify-center">

        <div className="max-w-md w-full border rounded-lg p-8">

          <h1 className="text-3xl font-bold text-center mb-2">
            Buyer Signup
          </h1>

          <p className="text-center text-muted-foreground mb-6">
            Create your buyer account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name *
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg ${errors.fullName ? 'border-red-500' : ''
                  }`}
              />

              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg ${errors.email ? 'border-red-500' : ''
                  }`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Country
              </label>

              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Select country</option>
                <option>Uganda</option>
                <option>Kenya</option>
                <option>Tanzania</option>
                <option>Rwanda</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Password *
              </label>

              <div className="relative">

                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg ${errors.password ? 'border-red-500' : ''
                    }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}

            </div>

            {/* Confirm Password */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Confirm Password *
              </label>

              <div className="relative">

                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg ${errors.confirmPassword ? 'border-red-500' : ''
                    }`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}

            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">

              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
              />

              <span className="text-sm">
                I agree to the{' '}
                <Link href="/terms" className="text-primary underline">
                  Terms
                </Link>{' '}
                and{' '}
                <Link href="/privacy-policy" className="text-primary underline">
                  Privacy Policy
                </Link>
              </span>

            </div>

            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm">
                {errors.agreeToTerms}
              </p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create Buyer Account
            </Button>

          </form>

          <p className="text-center text-sm mt-6">

            Already have an account?{' '}

            <Link href="/login" className="text-primary underline">
              Sign in
            </Link>

          </p>

        </div>

      </main>

      <Footer />
    </>
  )
}