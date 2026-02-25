"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import { verifyEmail } from "@/app/actions/auth"

export default function VerifyPage({ params }: { params: { token: string } }) {
  const router = useRouter()
  const [verificationStatus, setVerificationStatus] = useState<{
    success: boolean
    message: string
    userType?: "supplier" | "buyer"
  } | null>(null)
  const [isVerifying, setIsVerifying] = useState(true)

  useEffect(() => {
    const verify = async () => {
      try {
        const result = await verifyEmail(params.token)
        setVerificationStatus({
          success: result.success,
          message: result.message,
          userType: result.userType,
        })
      } catch (error) {
        setVerificationStatus({
          success: false,
          message: "An error occurred during verification.",
        })
      } finally {
        setIsVerifying(false)
      }
    }

    verify()
  }, [params.token])

  const handleContinue = () => {
    if (verificationStatus?.userType === "supplier") {
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
              {isVerifying ? (
                <>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  </div>
                  <h1 className="text-2xl font-bold mb-2">Verifying your email</h1>
                  <p className="text-muted-foreground mb-6">Please wait while we verify your email address...</p>
                </>
              ) : verificationStatus?.success ? (
                <>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h1 className="text-2xl font-bold mb-2">Email Verified!</h1>
                  <p className="text-muted-foreground mb-6">{verificationStatus.message}</p>
                  <Button className="w-full" onClick={handleContinue}>
                    Continue to {verificationStatus.userType === "supplier" ? "Supplier" : "Buyer"} Page
                  </Button>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <XCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h1 className="text-2xl font-bold mb-2">Verification Failed</h1>
                  <p className="text-muted-foreground mb-6">{verificationStatus?.message}</p>
                  <Link href="/signup">
                    <Button variant="outline" className="w-full">
                      Back to Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
