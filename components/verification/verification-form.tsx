"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useVerificationCriteria, useCreateVerificationRequest } from "@/hooks/use-verification"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Upload, AlertCircle, CheckCircle } from "lucide-react"

interface VerificationFormProps {
  vendorId: number
}

export default function VerificationForm({ vendorId }: VerificationFormProps) {
  const router = useRouter()
  const { criteria, isLoading: criteriaLoading, error: criteriaError } = useVerificationCriteria()
  const { createRequest, isLoading: submitLoading, error: submitError } = useCreateVerificationRequest()

  const [documents, setDocuments] = useState<Record<string, { name: string; type: string }>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleFileChange = (criteriaId: string, documentType: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setDocuments({
        ...documents,
        [criteriaId]: {
          name: file.name,
          type: documentType,
        },
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)
    setSuccess(false)

    // Check if all required documents are uploaded
    const requiredCriteria = criteria.filter((c) => c.required)
    const missingRequired = requiredCriteria.filter((c) => !documents[c.id])

    if (missingRequired.length > 0) {
      setFormError(`Please upload all required documents: ${missingRequired.map((c) => c.name).join(", ")}`)
      return
    }

    try {
      // In a real app, you would upload the files to a storage service
      // and get back URLs to include in the request
      const documentsList = Object.entries(documents).map(([criteriaId, doc]) => {
        const criteriaItem = criteria.find((c) => c.id === criteriaId)
        return {
          type: doc.type,
          name: doc.name,
          url: `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(doc.name)}`,
        }
      })

      await createRequest(vendorId, documentsList)
      setSuccess(true)

      // Clear form
      setDocuments({})

      // Redirect after a delay
      setTimeout(() => {
        router.push("/vendor-dashboard/verification")
      }, 2000)
    } catch (error) {
      setFormError("Failed to submit verification request. Please try again.")
    }
  }

  if (criteriaLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full" />
        </CardHeader>
        <CardContent className="space-y-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>
    )
  }

  if (criteriaError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load verification criteria: {criteriaError}</AlertDescription>
      </Alert>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Supplier Verification</CardTitle>
        <CardDescription>
          Upload the required documents to verify your supplier account. Verification helps build trust with buyers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{formError}</AlertDescription>
          </Alert>
        )}

        {submitError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your verification request has been submitted successfully. We will review your documents and update your
              status.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {criteria.map((criterion) => (
            <div key={criterion.id} className="space-y-2">
              <Label htmlFor={criterion.id} className="flex items-center">
                {criterion.name}
                {criterion.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
              <p className="text-sm text-muted-foreground">{criterion.description}</p>
              <div className="flex items-center gap-4">
                <Input
                  id={criterion.id}
                  type="file"
                  className="hidden"
                  aria-describedby={`${criterion.id}-desc`}
                  onChange={(e) => handleFileChange(criterion.id, criterion.documentTypes[0], e)}
                />
                <div id={`${criterion.id}-desc`} className="sr-only">
                  Upload {criterion.name} document. {criterion.description}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById(criterion.id)?.click()}
                  className="w-full"
                  aria-label={`Upload ${criterion.name} document`}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {documents[criterion.id] ? `Selected: ${documents[criterion.id].name}` : `Upload ${criterion.name}`}
                </Button>
              </div>
            </div>
          ))}
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={submitLoading || success} className="w-full">
          {submitLoading ? "Submitting..." : "Submit Verification Request"}
        </Button>
      </CardFooter>
    </Card>
  )
}
