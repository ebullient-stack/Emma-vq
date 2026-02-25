"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Store, ShoppingCart } from "lucide-react"
import { signup } from "@/app/actions/auth"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userType, setUserType] = useState<"supplier" | "buyer">("buyer")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!agreeTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      // Add user type to form data
      formData.set("userType", userType)

      const result = await signup(formData)

      if (result.success) {
        // If signup was successful and we have a redirect URL, navigate to it
        if (result.redirect) {
          router.push(result.redirect)
        }
      } else {
        // If there was an error in the signup process
        setError(result.message || "An error occurred during signup. Please try again.")
        setIsSubmitting(false)
      }
    } catch (err) {
      console.error("Signup error:", err)
      setError("An error occurred during signup. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-muted-foreground">Join thousands of businesses using Asteric for global sourcing</p>
        </div>

        <Card>
          <CardContent className="p-8">
            {error && <div className="bg-destructive/10 text-destructive p-3 rounded-md mb-6">{error}</div>}

            {/* User Type Selection */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">I want to join as a:</h2>
              <RadioGroup
                value={userType}
                onValueChange={(value) => setUserType(value as "supplier" | "buyer")}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${userType === "supplier" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <RadioGroupItem value="supplier" id="supplier" className="sr-only" />
                  <Label htmlFor="supplier" className="flex items-center cursor-pointer">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${userType === "supplier" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                    >
                      <Store className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Supplier</div>
                      <div className="text-sm text-muted-foreground">I want to sell products</div>
                    </div>
                  </Label>
                </div>

                <div
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${userType === "buyer" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <RadioGroupItem value="buyer" id="buyer" className="sr-only" />
                  <Label htmlFor="buyer" className="flex items-center cursor-pointer">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${userType === "buyer" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Buyer</div>
                      <div className="text-sm text-muted-foreground">I want to purchase products</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <Input id="firstName" name="firstName" type="text" aria-describedby="firstName-desc" required />
                  <div id="firstName-desc" className="sr-only">
                    Enter your first name
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <Input id="lastName" name="lastName" type="text" aria-describedby="lastName-desc" required />
                  <div id="lastName-desc" className="sr-only">
                    Enter your last name
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Work Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@company.com"
                  aria-describedby="email-desc"
                  required
                />
                <div id="email-desc" className="sr-only">
                  Enter your work email address
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    aria-describedby="password-desc"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <div id="password-desc" className="mt-2 text-sm text-muted-foreground">
                  Password must be at least 8 characters long with a number and a special character
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <Input id="companyName" name="companyName" type="text" aria-describedby="company-desc" required />
                  <div id="company-desc" className="sr-only">
                    Enter your company name
                  </div>
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium mb-1">
                    Job Title
                  </label>
                  <Input id="jobTitle" name="jobTitle" type="text" aria-describedby="job-desc" required />
                  <div id="job-desc" className="sr-only">
                    Enter your job title
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                />
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

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-muted-foreground">Or sign up with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button type="button" variant="outline" className="w-full inline-flex justify-center py-2 px-4">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                  Google
                </Button>
                <Button type="button" variant="outline" className="w-full inline-flex justify-center py-2 px-4">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127 C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
              Sign in
            </Link>
          </p>
        </div>

        {/* Learn more links based on user type */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-2">Want to learn more about being a {userType}?</p>
          <Link
            href={userType === "supplier" ? "/for-suppliers" : "/for-buyers"}
            className="text-primary hover:text-primary/80 font-medium"
          >
            Visit our {userType === "supplier" ? "Suppliers" : "Buyers"} page
          </Link>
        </div>
      </div>
    </div>
  )
}
