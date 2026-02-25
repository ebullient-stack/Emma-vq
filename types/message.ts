export interface Message {
  id: string
  conversationId: string
  senderId: string
  receiverId: string
  content: string
  attachments?: string[]
  read: boolean
  createdAt: string
}

export interface Conversation {
  id: string
  participants: string[]
  lastMessage?: Message
  unreadCount: number
  updatedAt: string
  title?: string
  isGroupChat?: boolean
}

export interface MessageResponse {
  messages: Message[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface ConversationResponse {
  conversations: Conversation[]
  total: number
  page: number
  limit: number
  totalPages: number
}
