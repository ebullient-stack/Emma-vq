"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { useConversations } from "@/hooks/use-messages"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, Plus } from "lucide-react"

export default function ConversationList({ userId }: { userId: string }) {
  const [searchQuery, setSearchQuery] = useState("")
  const { conversations, isLoading, error } = useConversations(userId)

  const filteredConversations = conversations.filter((conversation) => {
    // In a real app, you would search by participant names, not IDs
    return conversation.participants.some((participant) => participant.includes(searchQuery.toLowerCase()))
  })

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Messages</h2>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            New Message
          </Button>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input type="search" placeholder="Search conversations..." className="pl-10" disabled />
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center p-3 rounded-lg border">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="ml-3 flex-1">
              <Skeleton className="h-5 w-1/3 mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500">Error loading conversations: {error}</div>
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Messages</h2>
        <Button size="sm" variant="outline" asChild>
          <Link href="/messages/new">
            <Plus className="h-4 w-4 mr-2" />
            New Message
          </Link>
        </Button>
      </div>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="search"
          placeholder="Search conversations..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredConversations.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          {searchQuery ? "No conversations match your search" : "No conversations yet"}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredConversations.map((conversation) => {
            // In a real app, you would get the other participant's info
            const otherParticipant =
              conversation.participants.find((participant) => participant !== userId) || "Unknown"

            return (
              <Link
                key={conversation.id}
                href={`/messages/${conversation.id}`}
                className="flex items-center p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={`/placeholder.svg?height=48&width=48&text=${otherParticipant.charAt(0).toUpperCase()}`}
                    alt={otherParticipant}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium truncate">{otherParticipant}</h3>
                    <span className="text-xs text-muted-foreground">
                      {conversation.lastMessage
                        ? formatDistanceToNow(new Date(conversation.lastMessage.createdAt), {
                            addSuffix: false,
                          })
                        : ""}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.lastMessage ? conversation.lastMessage.content : "No messages yet"}
                  </p>
                </div>
                {conversation.unreadCount > 0 && <Badge className="ml-2 bg-primary">{conversation.unreadCount}</Badge>}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
