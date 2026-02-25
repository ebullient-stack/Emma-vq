import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, XCircle } from "lucide-react"

interface VerificationStatusBadgeProps {
  status: "pending" | "approved" | "rejected"
  className?: string
}

export default function VerificationStatusBadge({ status, className }: VerificationStatusBadgeProps) {
  switch (status) {
    case "approved":
      return (
        <Badge className={`bg-green-100 text-green-800 border-green-200 ${className}`}>
          <CheckCircle className="h-3 w-3 mr-1" />
          Verified
        </Badge>
      )
    case "pending":
      return (
        <Badge variant="outline" className={`bg-yellow-50 text-yellow-800 border-yellow-200 ${className}`}>
          <Clock className="h-3 w-3 mr-1" />
          Pending
        </Badge>
      )
    case "rejected":
      return (
        <Badge variant="outline" className={`bg-red-50 text-red-800 border-red-200 ${className}`}>
          <XCircle className="h-3 w-3 mr-1" />
          Rejected
        </Badge>
      )
    default:
      return null
  }
}
