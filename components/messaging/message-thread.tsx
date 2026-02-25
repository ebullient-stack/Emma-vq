"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { useMessages } from "@/hooks/use-messages"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Skeleton } from "@/components/ui/skeleton"
import { Send } from "lucide-react"

interface MessageThreadProps {
  conversationId: string
  currentUserId: string
  otherUserId: string
}

export default function MessageThread({ conversationId, currentUserId, otherUserId }: MessageThreadProps) {
  const { messages, isLoading, error, sendMessage } = useMessages(conversationId)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messageInput, setMessageInput] = useState("")

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!messageInput.trim()) return

    try {
      await sendMessage(messageInput, currentUserId, otherUserId)
      setMessageInput("")
    } catch (error) {
      console.error("Failed to send message:", error)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[70%] ${index % 2 === 0 ? "bg-muted" : "bg-primary text-primary-foreground"} rounded-lg p-3`}
              >
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
                <div className="mt-1 text-right">
                  <Skeleton className="h-3 w-16 inline-block" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-4">
          <Skeleton className="h-20 w-full rounded-md" />
        </div>
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500 p-4">Error loading messages: {error}</div>
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">No messages yet. Start the conversation!</div>
        ) : (
          messages.map((message) => {
            const isCurrentUser = message.senderId === currentUserId
            return (
              <div key={message.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                {!isCurrentUser && (
                  <div className="relative h-8 w-8 rounded-full overflow-hidden bg-muted mr-2">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${message.senderId.charAt(0).toUpperCase()}`}
                      alt={message.senderId}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{message.content}</p>
                  <div className="mt-1 text-right">
                    <span className="text-xs opacity-70">
                      {formatDistanceToNow(new Date(message.createdAt), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">
        <div className="flex items-end gap-2">
          <Textarea
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message..."
            className="min-h-[80px] resize-none"
            aria-describedby="message-input-desc"
            onKeyDown={handleKeyDown}
          />
          <div id="message-input-desc" className="sr-only">
            Type your message and press Enter to send
          </div>
          <Button type="button" size="icon" className="h-10 w-10 shrink-0" onClick={handleSendMessage}>
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
