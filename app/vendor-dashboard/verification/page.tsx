"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VerificationStatus from "@/components/verification/verification-status"
import VerificationForm from "@/components/verification/verification-form"

export default function VerificationPage() {
  // In a real app, you would get the vendor ID from authentication
  const vendorId = 2

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Supplier Verification</h1>

      <Tabs defaultValue="status">
        <TabsList className="mb-6">
          <TabsTrigger value="status">Verification Status</TabsTrigger>
          <TabsTrigger value="new">Submit Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="status">
          <VerificationStatus vendorId={vendorId} />
        </TabsContent>

        <TabsContent value="new">
          <VerificationForm vendorId={vendorId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
