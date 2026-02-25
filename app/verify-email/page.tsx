"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Mail, AlertCircle } from "lucide-react"
import { resendVerificationEmail } from "@/app/actions/auth"

export default function VerifyEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""
  const token = searchParams.get("token") || ""
  const userType = (searchParams.get("userType") as "supplier" | "buyer") || "buyer"

  const [isResending, setIsResending] = useState(false)
  const [resendStatus, setResendStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleResendEmail = async () => {
    if (!email) return

    setIsResending(true)
    setResendStatus(null)

    try {
      const result = await resendVerificationEmail(email)
      setResendStatus({
        success: result.success,
        message: result.message,
      })
    } catch (error) {
      setResendStatus({
        success: false,
        message: "An error occurred while resending the verification email.",
      })
    } finally {
      setIsResending(false)
    }
  }

  // Redirect to appropriate page based on user type after verification
  const handleContinue = () => {
    if (userType === "supplier") {
      router.push("/for-suppliers")
    } else {
      router.push("/for-buyers")
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="w-full max-w-md">
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Check your email</h1>
              <p className="text-muted-foreground mb-6">
                We've sent a verification link to <strong>{email}</strong>. Please check your email and click the link
                to verify your account.
              </p>

              {resendStatus && (
                <div
                  className={`w-full p-3 rounded-md mb-6 ${
                    resendStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  <div className="flex items-center">
                    {resendStatus.success ? (
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    )}
                    <span>{resendStatus.message}</span>
                  </div>
                </div>
              )}

              <div className="space-y-4 w-full">
                <Button variant="outline" className="w-full" onClick={handleResendEmail} disabled={isResending}>
                  {isResending ? "Resending..." : "Resend verification email"}
                </Button>

                <Button className="w-full" onClick={handleContinue}>
                  Continue to {userType === "supplier" ? "Supplier" : "Buyer"} Page
                </Button>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                <p>
                  Already verified?{" "}
                  <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
