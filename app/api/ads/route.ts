import { type NextRequest, NextResponse } from "next/server"

// Mock database - in a real app, this would be stored in a database
const ads = new Map()

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const adData = {
      id: Date.now().toString(),
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      adType: formData.get("adType"),
      price: formData.get("price"),
      currency: formData.get("currency"),
      unit: formData.get("unit"),
      location: formData.get("location"),
      availability: formData.get("availability"),
      contactName: formData.get("contactName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      duration: formData.get("duration"),
      featured: formData.get("featured") === "true",
      urgent: formData.get("urgent") === "true",
      status: "pending", // pending, approved, rejected
      createdAt: new Date().toISOString(),
      expiresAt: new Date(
        Date.now() + Number.parseInt(formData.get("duration") as string) * 24 * 60 * 60 * 1000,
      ).toISOString(),
    }

    // Store the ad
    ads.set(adData.id, adData)

    return NextResponse.json({
      success: true,
      message: "Ad submitted successfully",
      adId: adData.id,
    })
  } catch (error) {
    console.error("Error creating ad:", error)
    return NextResponse.json({ success: false, message: "Failed to create ad" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get("status")
    const vendorId = searchParams.get("vendorId")

    let filteredAds = Array.from(ads.values())

    if (status) {
      filteredAds = filteredAds.filter((ad) => ad.status === status)
    }

    if (vendorId) {
      filteredAds = filteredAds.filter((ad) => ad.vendorId === vendorId)
    }

    return NextResponse.json({
      ads: filteredAds,
      total: filteredAds.length,
    })
  } catch (error) {
    console.error("Error fetching ads:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch ads" }, { status: 500 })
  }
}
