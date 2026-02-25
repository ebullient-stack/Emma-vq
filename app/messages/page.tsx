"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import ConversationList from "@/components/messaging/conversation-list"

export default function MessagesPage() {
  const router = useRouter()
  // In a real app, you would get the current user ID from authentication
  const currentUserId = "user1"

  // Redirect to the first conversation if available
  useEffect(() => {
    const checkConversations = async () => {
      try {
        const response = await fetch(`/api/conversations?userId=${currentUserId}`)
        if (response.ok) {
          const data = await response.json()
          if (data.conversations.length > 0) {
            router.push(`/messages/${data.conversations[0].id}`)
          }
        }
      } catch (error) {
        console.error("Failed to fetch conversations:", error)
      }
    }

    checkConversations()
  }, [router, currentUserId])

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <ConversationList userId={currentUserId} />
        </div>
      </div>
    </div>
  )
}
