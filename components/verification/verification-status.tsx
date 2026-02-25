"use client"

import { useVerificationRequests } from "@/hooks/use-verification"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Clock, CheckCircle, XCircle, FileText } from "lucide-react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import VerificationStatusBadge from "./verification-status-badge"

interface VerificationStatusProps {
  vendorId: number
}

export default function VerificationStatus({ vendorId }: VerificationStatusProps) {
  const { requests, isLoading, error } = useVerificationRequests(vendorId)

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-24 w-full" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load verification requests: {error}</AlertDescription>
      </Alert>
    )
  }

  if (requests.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Verification Status</CardTitle>
          <CardDescription>You haven't submitted any verification requests yet.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">
              Get verified to build trust with buyers and increase your visibility on the platform.
            </p>
            <Button asChild>
              <Link href="/vendor-dashboard/verification/new">Start Verification</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Get the most recent request
  const latestRequest = requests.sort(
    (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime(),
  )[0]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Verification Status</CardTitle>
            <CardDescription>Current status of your supplier verification</CardDescription>
          </div>
          <VerificationStatusBadge status={latestRequest.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium">Request Details</h3>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <div className="text-muted-foreground">Submitted:</div>
              <div>{formatDistanceToNow(new Date(latestRequest.submittedAt), { addSuffix: true })}</div>

              {latestRequest.reviewedAt && (
                <>
                  <div className="text-muted-foreground">Reviewed:</div>
                  <div>{formatDistanceToNow(new Date(latestRequest.reviewedAt), { addSuffix: true })}</div>
                </>
              )}

              <div className="text-muted-foreground">Documents:</div>
              <div>{latestRequest.documents.length} submitted</div>
            </div>
          </div>

          {latestRequest.status === "pending" && (
            <Alert className="bg-yellow-50 text-yellow-800 border-yellow-200">
              <Clock className="h-4 w-4" />
              <AlertTitle>Under Review</AlertTitle>
              <AlertDescription>
                Your verification request is currently being reviewed. This process typically takes 1-3 business days.
              </AlertDescription>
            </Alert>
          )}

          {latestRequest.status === "approved" && (
            <Alert className="bg-green-50 text-green-800 border-green-200">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Verified</AlertTitle>
              <AlertDescription>
                Congratulations! Your supplier account has been verified. Your products will now display a verified
                badge.
              </AlertDescription>
            </Alert>
          )}

          {latestRequest.status === "rejected" && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Verification Failed</AlertTitle>
              <AlertDescription>
                {latestRequest.notes ||
                  "Your verification request was rejected. Please submit a new request with the correct documentation."}
              </AlertDescription>
            </Alert>
          )}

          {latestRequest.status === "rejected" && (
            <Button asChild className="w-full">
              <Link href="/vendor-dashboard/verification/new">Submit New Request</Link>
            </Button>
          )}

          <Button variant="outline" asChild className="w-full">
            <Link href={`/vendor-dashboard/verification/${latestRequest.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
