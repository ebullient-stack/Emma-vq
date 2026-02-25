"use client"

import { Button } from "@/components/ui/button"

interface ErrorDisplayProps {
  error: Error
  reset: () => void
}

export default function ErrorDisplay({ error, reset }: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-4 text-center">
      <div className="rounded-full bg-red-100 p-3 text-red-600 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      </div>
      <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
      <p className="text-muted-foreground mb-4 max-w-md">
        {error.message || "An unexpected error occurred. Please try again later."}
      </p>
      <Button onClick={reset} variant="default" size="sm">
        Try again
      </Button>
    </div>
  )
}
