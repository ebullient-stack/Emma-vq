"use client"

import { useEffect, useState } from "react"
import { useUserPreferences } from "@/contexts/user-preferences-context"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function AutoDetectionHandler() {
  const { autoDetectLocationAndCurrency, isAutoDetecting } = useUserPreferences()
  const [showAlert, setShowAlert] = useState(false)
  const [hasAttempted, setHasAttempted] = useState(false)

  useEffect(() => {
    // Check if we've already attempted detection in this session
    const hasAttemptedDetection = sessionStorage.getItem("hasAttemptedDetection")

    if (hasAttemptedDetection !== "true") {
      // Set a small delay to ensure the component is fully mounted
      const timer = setTimeout(() => {
        autoDetectLocationAndCurrency().catch((error) => {
          console.error("Initial auto-detection failed:", error)
          setShowAlert(true)
        })
        sessionStorage.setItem("hasAttemptedDetection", "true")
        setHasAttempted(true)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      setHasAttempted(true)
    }
  }, [autoDetectLocationAndCurrency])

  if (!showAlert) return null

  return (
    <Alert className="fixed bottom-4 right-4 w-auto max-w-md z-50 bg-white shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <AlertTitle>Location detection failed</AlertTitle>
          <AlertDescription>
            We couldn't automatically detect your location. You can set it manually in preferences.
          </AlertDescription>
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => {
              autoDetectLocationAndCurrency()
              setShowAlert(false)
            }}
            disabled={isAutoDetecting}
          >
            Try again
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="ml-2 p-1 h-auto" onClick={() => setShowAlert(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Alert>
  )
}
