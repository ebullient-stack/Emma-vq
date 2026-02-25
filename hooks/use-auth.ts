"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import type { User, Session } from "@supabase/supabase-js"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          console.error("Error getting session:", error)
        }

        setSession(data.session)
        setUser(data.session?.user ?? null)
      } catch (error) {
        console.error("Unexpected error during getSession:", error)
      } finally {
        setLoading(false)
      }
    }

    getInitialSession()

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession)
      setUser(newSession?.user ?? null)
      setLoading(false)
    })

    // Clean up subscription
    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    try {
      await supabase.auth.signOut()
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return {
    user,
    session,
    loading,
    signOut,
    isAuthenticated: !!user,
  }
}
