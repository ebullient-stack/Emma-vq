"use client"

import Link from "next/link"
import Image from "next/image"
import { useVerificationRequest } from "@/hooks/use-verification"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ChevronLeft, AlertCircle, FileText, Download } from "lucide-react"
import { format } from "date-fns"
import VerificationStatusBadge from "@/components/verification/verification-status-badge"

export default function VerificationRequestPage({ params }: { params: { id: string } }) {
  const { request, isLoading, error } = useVerificationRequest(params.id)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="h-10 w-1/2 mb-6" />
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4 mb-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-1/3" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index} className="h-40 w-full" />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error || !request) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/vendor-dashboard/verification" className="flex items-center text-muted-foreground">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Verification
          </Link>
        </Button>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error || "Verification request not found"}</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/vendor-dashboard/verification" className="flex items-center text-muted-foreground">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Verification
        </Link>
      </Button>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Verification Request Details</h1>
        <VerificationStatusBadge status={request.status} />
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Request Information</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">Request ID:</div>
              <div>{request.id}</div>

              <div className="text-muted-foreground">Submitted:</div>
              <div>{format(new Date(request.submittedAt), "PPP 'at' p")}</div>

              {request.reviewedAt && (
                <>
                  <div className="text-muted-foreground">Reviewed:</div>
                  <div>{format(new Date(request.reviewedAt), "PPP 'at' p")}</div>
                </>
              )}

              <div className="text-muted-foreground">Status:</div>
              <div>
                <VerificationStatusBadge status={request.status} />
              </div>
            </div>
          </div>

          {request.notes && (
            <div>
              <h2 className="text-lg font-medium mb-2">Notes</h2>
              <p className="text-sm">{request.notes}</p>
            </div>
          )}

          <div>
            <h2 className="text-lg font-medium mb-4">Submitted Documents</h2>
            {request.documents.length === 0 ? (
              <div className="text-center py-6 border rounded-lg">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No documents submitted</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {request.documents.map((doc) => (
                  <div key={doc.id} className="border rounded-lg overflow-hidden">
                    <div className="relative h-40 bg-muted">
                      <Image src={doc.url || "/placeholder.svg"} alt={doc.name} fill className="object-contain" />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-sm truncate" title={doc.name}>
                            {doc.name}
                          </h3>
                          <p className="text-xs text-muted-foreground capitalize">{doc.type.replace(/_/g, " ")}</p>
                        </div>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
