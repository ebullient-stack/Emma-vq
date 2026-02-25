"use client"

import { useState, useEffect } from "react"
import type { Message, Conversation, MessageResponse, ConversationResponse } from "@/types/message"

export function useConversations(userId: string, page = 1, limit = 10) {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [pagination, setPagination] = useState({
    total: 0,
    page: page,
    limit: limit,
    totalPages: 0,
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchConversations = async () => {
      if (!userId) return

      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/conversations?userId=${userId}&page=${page}&limit=${limit}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data: ConversationResponse = await response.json()
        setConversations(data.conversations)
        setPagination({
          total: data.total,
          page: data.page,
          limit: data.limit,
          totalPages: data.totalPages,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchConversations()
  }, [userId, page, limit])

  const nextPage = () => {
    if (pagination.page < pagination.totalPages) {
      return pagination.page + 1
    }
    return pagination.page
  }

  const prevPage = () => {
    if (pagination.page > 1) {
      return pagination.page - 1
    }
    return pagination.page
  }

  return {
    conversations,
    pagination,
    isLoading,
    error,
    nextPage,
    prevPage,
  }
}

export function useConversation(conversationId: string) {
  const [conversation, setConversation] = useState<Conversation | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchConversation = async () => {
      if (!conversationId) return

      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/conversations/${conversationId}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setConversation(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchConversation()
  }, [conversationId])

  return {
    conversation,
    isLoading,
    error,
  }
}

export function useMessages(conversationId: string, page = 1, limit = 20) {
  const [messages, setMessages] = useState<Message[]>([])
  const [pagination, setPagination] = useState({
    total: 0,
    page: page,
    limit: limit,
    totalPages: 0,
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      if (!conversationId) return

      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/messages?conversationId=${conversationId}&page=${page}&limit=${limit}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data: MessageResponse = await response.json()
        setMessages(data.messages)
        setPagination({
          total: data.total,
          page: data.page,
          limit: data.limit,
          totalPages: data.totalPages,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchMessages()
  }, [conversationId, page, limit])

  const sendMessage = async (content: string, senderId: string, receiverId: string) => {
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversationId,
          senderId,
          receiverId,
          content,
        }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const newMessage = await response.json()
      setMessages((prev) => [newMessage, ...prev])
      return newMessage
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message")
      throw err
    }
  }

  const loadMoreMessages = () => {
    if (pagination.page < pagination.totalPages) {
      return pagination.page + 1
    }
    return pagination.page
  }

  return {
    messages,
    pagination,
    isLoading,
    error,
    sendMessage,
    loadMoreMessages,
  }
}

export function useCreateConversation() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const createConversation = async (participants: string[], title?: string, isGroupChat = false) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participants,
          title: title || "",
          isGroupChat,
        }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const newConversation = await response.json()
      return newConversation
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create conversation")
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createConversation,
    isLoading,
    error,
  }
}
