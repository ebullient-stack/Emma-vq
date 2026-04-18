'use client'

import Link from 'next/link'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function SignupPage() {
  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold text-foreground mb-6">Join ASTERIC</h1>
          <p className="text-muted-foreground mb-8">
            Create your account to start trading agricultural products
          </p>

          {/* User Type Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Link href="/signup/buyer" className="p-4 border rounded-lg text-center hover:border-primary transition">
              <div className="text-2xl mb-2">👤</div>
              <div className="text-xs font-medium">Buyer</div>
            </Link>

            <Link href="/signup/supplier" className="p-4 border rounded-lg text-center hover:border-primary transition">
              <div className="text-2xl mb-2">🏢</div>
              <div className="text-xs font-medium">Supplier</div>
            </Link>

            <Link href="/signup/worker" className="p-4 border rounded-lg text-center hover:border-primary transition">
              <div className="text-2xl mb-2">👨‍🌾</div>
              <div className="text-xs font-medium">Worker</div>
            </Link>
          </div>

          {/* Info Text */}
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}