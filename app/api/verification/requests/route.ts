import { type NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const vendorId = searchParams.get("vendorId")

  let filteredRequests = verificationRequests

  if (vendorId) {
    filteredRequests = verificationRequests.filter((req) => req.vendorId === Number.parseInt(vendorId))
  }

  return NextResponse.json(filteredRequests)
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const newRequest = {
    id: uuidv4(),
    vendorId: body.vendorId,
    status: "pending",
    submittedAt: new Date().toISOString(),
    documents: body.documents.map((doc: any) => ({
      ...doc,
      id: uuidv4(),
      uploadedAt: new Date().toISOString(),
      verified: false,
    })),
  }

  verificationRequests.push(newRequest)

  return NextResponse.json(newRequest, { status: 201 })
}
