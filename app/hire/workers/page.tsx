"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function WorkersHirePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/hire" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Hire Categories
      </Link>

      <h1 className="text-3xl font-bold mb-2">Hire Farm Workers</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Find and hire skilled farm workers for seasonal or permanent work
      </p>

      {/* Similar structure to machinery page would go here */}
      <div className="text-center py-12 bg-muted/30 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
        <p className="text-muted-foreground">
          We're currently building our farm worker hiring marketplace. Check back soon!
        </p>
      </div>
    </div>
  )
}
