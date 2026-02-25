import { NextResponse } from "next/server"

// This would be replaced with a database in a real application
const verificationCriteria = [
  {
    id: "crit1",
    name: "Business License",
    description: "Official business registration or license document",
    required: true,
    documentTypes: ["business_license"],
  },
  {
    id: "crit2",
    name: "Identity Verification",
    description: "Government-issued ID of the business owner or authorized representative",
    required: true,
    documentTypes: ["identity"],
  },
  {
    id: "crit3",
    name: "Product Certifications",
    description: "Relevant certifications for your products (organic, fair trade, etc.)",
    required: false,
    documentTypes: ["certification"],
  },
  {
    id: "crit4",
    name: "Tax Documentation",
    description: "Tax registration or similar documentation",
    required: true,
    documentTypes: ["tax"],
  },
  {
    id: "crit5",
    name: "Additional Documents",
    description: "Any other relevant documentation to support your verification",
    required: false,
    documentTypes: ["other"],
  },
]

export async function GET() {
  return NextResponse.json(verificationCriteria)
}
