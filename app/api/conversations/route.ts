import { type NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

// This would be replaced with a database in a real application
const conversations = [
  {
    id: "conv1",
    participants: ["user1", "vendor1"],
    lastMessage: {
      id: "msg2",
      conversationId: "conv1",
      senderId: "vendor1",
      receiverId: "user1",
      content:
        "Hi there! Yes, we do ship internationally. Our minimum order for international shipping is 500kg. Would that work for you?",
      read: false,
      createdAt: "2023-05-10T11:15:00Z",
    },
    unreadCount: 1,
    updatedAt: "2023-05-10T11:15:00Z",
  },
  {
    id: "conv2",
    participants: ["user1", "vendor2"],
    lastMessage: {
      id: "msg4",
      conversationId: "conv2",
      senderId: "vendor2",
      receiverId: "user1",
      content:
        "We offer Arabica, Robusta, and specialty blends. Our most popular is the Ethiopian Yirgacheffe. Would you like a sample?",
      read: true,
      createdAt: "2023-05-09T15:45:00Z",
    },
    unreadCount: 0,
    updatedAt: "2023-05-09T15:45:00Z",
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")

  let filteredConversations = conversations

  if (userId) {
    filteredConversations = conversations.filter((conv) => conv.participants.includes(userId))
  }

  // Sort by updatedAt (newest first)
  filteredConversations.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())

  const total = filteredConversations.length
  const totalPages = Math.ceil(total / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedConversations = filteredConversations.slice(startIndex, endIndex)

  return NextResponse.json({
    conversations: paginatedConversations,
    total,
    page,
    limit,
    totalPages,
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const newConversation = {
    id: uuidv4(),
    participants: body.participants,
    unreadCount: 0,
    updatedAt: new Date().toISOString(),
    title: body.title,
    isGroupChat: body.isGroupChat || false,
  }

  conversations.push(newConversation)

  return NextResponse.json(newConversation, { status: 201 })
}
