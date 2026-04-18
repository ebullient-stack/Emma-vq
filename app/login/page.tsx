'use client'

import Link from 'next/link'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <NavigationHeader />
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-4 py-12">
          <div className="bg-card rounded-lg border border-border p-8">
            <h1 className="text-3xl font-bold text-foreground text-center mb-2">Sign in to FARM TRIDGE</h1>
            <p className="text-center text-muted-foreground mb-8">
              Enter your email and password to access your account
            </p>

            <form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded border-border" />
                  <span className="text-sm text-foreground">Remember me</span>
                </label>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                Sign in
              </Button>
            </form>

            {/* Sign Up Link */}
            <p className="text-center text-muted-foreground mt-6">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
