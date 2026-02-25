"use client"

import { useState, useEffect } from "react"
import type { VerificationRequest, VerificationCriteria, VerificationDocument } from "@/types/verification"

export function useVerificationCriteria() {
  const [criteria, setCriteria] = useState<VerificationCriteria[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCriteria = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/verification/criteria")

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setCriteria(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCriteria()
  }, [])

  return {
    criteria,
    isLoading,
    error,
  }
}

export function useVerificationRequests(vendorId?: number) {
  const [requests, setRequests] = useState<VerificationRequest[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRequests = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const url = vendorId ? `/api/verification/requests?vendorId=${vendorId}` : "/api/verification/requests"

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setRequests(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchRequests()
  }, [vendorId])

  return {
    requests,
    isLoading,
    error,
  }
}

export function useVerificationRequest(requestId: string) {
  const [request, setRequest] = useState<VerificationRequest | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRequest = async () => {
      if (!requestId) return

      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/verification/requests/${requestId}`)

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setRequest(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchRequest()
  }, [requestId])

  const updateRequest = async (updates: Partial<VerificationRequest>) => {
    if (!requestId) return null

    try {
      const response = await fetch(`/api/verification/requests/${requestId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const updatedRequest = await response.json()
      setRequest(updatedRequest)
      return updatedRequest
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update request")
      throw err
    }
  }

  return {
    request,
    isLoading,
    error,
    updateRequest,
  }
}

export function useCreateVerificationRequest() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const createRequest = async (
    vendorId: number,
    documents: Omit<VerificationDocument, "id" | "uploadedAt" | "verified">[],
  ) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/verification/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vendorId,
          documents,
        }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const newRequest = await response.json()
      return newRequest
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create verification request")
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createRequest,
    isLoading,
    error,
  }
}
