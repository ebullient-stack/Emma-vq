import { type NextRequest, NextResponse } from "next/server"

// This would be replaced with a database in a real application
const verificationRequests = [
  {
    id: "vr1",
    vendorId: 1,
    status: "approved",
    submittedAt: "2023-04-15T10:30:00Z",
    reviewedAt: "2023-04-18T14:20:00Z",
    documents: [
      {
        id: "doc1",
        type: "business_license",
        name: "Business License.pdf",
        url: "/placeholder.svg?height=200&width=200&text=License",
        uploadedAt: "2023-04-15T10:25:00Z",
        verified: true,
      },
      {
        id: "doc2",
        type: "identity",
        name: "ID Card.jpg",
        url: "/placeholder.svg?height=200&width=200&text=ID",
        uploadedAt: "2023-04-15T10:28:00Z",
        verified: true,
      },
    ],
    notes: "All documents verified successfully.",
  },
  {
    id: "vr2",
    vendorId: 2,
    status: "pending",
    submittedAt: "2023-05-10T09:15:00Z",
    documents: [
      {
        id: "doc3",
        type: "business_license",
        name: "Company Registration.pdf",
        url: "/placeholder.svg?height=200&width=200&text=Registration",
        uploadedAt: "2023-05-10T09:10:00Z",
        verified: false,
      },
    ],
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const verificationRequest = verificationRequests.find((req) => req.id === params.id)

  if (!verificationRequest) {
    return NextResponse.json({ error: "Verification request not found" }, { status: 404 })
  }

  return NextResponse.json(verificationRequest)
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json()
  const requestIndex = verificationRequests.findIndex((req) => req.id === params.id)

  if (requestIndex === -1) {
    return NextResponse.json({ error: "Verification request not found" }, { status: 404 })
  }

  verificationRequests[requestIndex] = {
    ...verificationRequests[requestIndex],
    ...body,
    ...(body.status === "approved" || body.status === "rejected" ? { reviewedAt: new Date().toISOString() } : {}),
  }

  return NextResponse.json(verificationRequests[requestIndex])
}
