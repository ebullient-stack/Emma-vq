import { type NextRequest, NextResponse } from "next/server"

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

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const conversation = conversations.find((conv) => conv.id === params.id)

  if (!conversation) {
    return NextResponse.json({ error: "Conversation not found" }, { status: 404 })
  }

  return NextResponse.json(conversation)
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json()
  const conversationIndex = conversations.findIndex((conv) => conv.id === params.id)

  if (conversationIndex === -1) {
    return NextResponse.json({ error: "Conversation not found" }, { status: 404 })
  }

  conversations[conversationIndex] = {
    ...conversations[conversationIndex],
    ...body,
    updatedAt: new Date().toISOString(),
  }

  return NextResponse.json(conversations[conversationIndex])
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const conversationIndex = conversations.findIndex((conv) => conv.id === params.id)

  if (conversationIndex === -1) {
    return NextResponse.json({ error: "Conversation not found" }, { status: 404 })
  }

  conversations.splice(conversationIndex, 1)

  return NextResponse.json({ success: true })
}
