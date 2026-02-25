"use client"

import Link from "next/link"
import Image from "next/image"
import { useConversation } from "@/hooks/use-messages"
import ConversationList from "@/components/messaging/conversation-list"
import MessageThread from "@/components/messaging/message-thread"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft } from "lucide-react"

export default function ConversationPage({ params }: { params: { id: string } }) {
  // In a real app, you would get the current user ID from authentication
  const currentUserId = "user1"
  const { conversation, isLoading, error } = useConversation(params.id)

  // Get the other participant's ID
  const otherUserId = conversation?.participants.find((participant) => participant !== currentUserId) || ""

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white rounded-lg shadow-sm border">
          <div className="p-6">
            <div className="md:hidden mb-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/messages" className="flex items-center text-muted-foreground">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to messages
                </Link>
              </Button>
            </div>
            <ConversationList userId={currentUserId} />
          </div>
        </div>
        <div className="md:col-span-2 bg-white rounded-lg shadow-sm border h-[calc(100vh-200px)] flex flex-col">
          {isLoading ? (
            <>
              <div className="border-b p-4 flex items-center">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="ml-3">
                  <Skeleton className="h-5 w-32" />
                </div>
              </div>
              <div className="flex-1">
                <MessageThread conversationId={params.id} currentUserId={currentUserId} otherUserId="" />
              </div>
            </>
          ) : error ? (
            <div className="p-4 text-red-500">Error loading conversation: {error}</div>
          ) : !conversation ? (
            <div className="p-4 text-center text-muted-foreground">Conversation not found</div>
          ) : (
            <>
              <div className="border-b p-4 flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={`/placeholder.svg?height=40&width=40&text=${otherUserId.charAt(0).toUpperCase()}`}
                    alt={otherUserId}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="font-medium">{otherUserId}</h2>
                </div>
              </div>
              <div className="flex-1">
                <MessageThread conversationId={params.id} currentUserId={currentUserId} otherUserId={otherUserId} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
