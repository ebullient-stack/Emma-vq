import { type NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

// This would be replaced with a database in a real application
const messages = [
  {
    id: "msg1",
    conversationId: "conv1",
    senderId: "user1",
    receiverId: "vendor1",
    content: "Hello, I'm interested in your organic apples. Do you ship internationally?",
    read: true,
    createdAt: "2023-05-10T10:30:00Z",
  },
  {
    id: "msg2",
    conversationId: "conv1",
    senderId: "vendor1",
    receiverId: "user1",
    content:
      "Hi there! Yes, we do ship internationally. Our minimum order for international shipping is 500kg. Would that work for you?",
    read: false,
    createdAt: "2023-05-10T11:15:00Z",
  },
  {
    id: "msg3",
    conversationId: "conv2",
    senderId: "user1",
    receiverId: "vendor2",
    content: "I'd like to know more about your coffee beans. What varieties do you offer?",
    read: true,
    createdAt: "2023-05-09T14:20:00Z",
  },
  {
    id: "msg4",
    conversationId: "conv2",
    senderId: "vendor2",
    receiverId: "user1",
    content:
      "We offer Arabica, Robusta, and specialty blends. Our most popular is the Ethiopian Yirgacheffe. Would you like a sample?",
    read: true,
    createdAt: "2023-05-09T15:45:00Z",
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const conversationId = searchParams.get("conversationId")
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "20")

  let filteredMessages = messages

  if (conversationId) {
    filteredMessages = messages.filter((msg) => msg.conversationId === conversationId)
  }

  // Sort by date (newest first)
  filteredMessages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const total = filteredMessages.length
  const totalPages = Math.ceil(total / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedMessages = filteredMessages.slice(startIndex, endIndex)

  return NextResponse.json({
    messages: paginatedMessages,
    total,
    page,
    limit,
    totalPages,
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const newMessage = {
    id: uuidv4(),
    conversationId: body.conversationId,
    senderId: body.senderId,
    receiverId: body.receiverId,
    content: body.content,
    attachments: body.attachments || [],
    read: false,
    createdAt: new Date().toISOString(),
  }

  messages.push(newMessage)

  return NextResponse.json(newMessage, { status: 201 })
}
