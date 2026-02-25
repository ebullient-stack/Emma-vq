"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useCreateConversation } from "@/hooks/use-messages"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft } from "lucide-react"

export default function NewMessagePage() {
  const router = useRouter()
  const { createConversation, isLoading, error } = useCreateConversation()
  // In a real app, you would get the current user ID from authentication
  const currentUserId = "user1"

  const [recipient, setRecipient] = useState("")
  const [message, setMessage] = useState("")
  const [formError, setFormError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError("")

    if (!recipient.trim()) {
      setFormError("Please enter a recipient")
      return
    }

    if (!message.trim()) {
      setFormError("Please enter a message")
      return
    }

    try {
      // Create a new conversation
      const newConversation = await createConversation([currentUserId, recipient])

      // Send the first message
      await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversationId: newConversation.id,
          senderId: currentUserId,
          receiverId: recipient,
          content: message,
        }),
      })

      // Redirect to the new conversation
      router.push(`/messages/${newConversation.id}`)
    } catch (err) {
      setFormError("Failed to create conversation. Please try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/messages" className="flex items-center text-muted-foreground">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to messages
        </Link>
      </Button>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold mb-6">New Message</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {formError && <div className="text-red-500 mb-4">{formError}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium mb-1">
              Recipient ID
            </label>
            <Input
              id="recipient"
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Enter recipient ID"
              aria-describedby="recipient-desc"
              disabled={isLoading}
            />
            <p id="recipient-desc" className="text-xs text-muted-foreground mt-1">
              In a real app, you would search for users by name or email
            </p>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={5}
              aria-describedby="message-desc"
              disabled={isLoading}
            />
            <div id="message-desc" className="sr-only">
              Enter your message content
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  )
}
