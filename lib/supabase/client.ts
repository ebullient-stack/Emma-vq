'use client'

import { createClient } from "@supabase/supabase-js"

// Get Supabase configuration from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create a singleton instance for client-side usage
let supabaseInstance: ReturnType<typeof createClient> | null = null

export const getSupabaseClient = () => {
  if (!supabaseInstance) {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn("Missing Supabase environment variables. Some features may not work properly.")
      // Create a dummy instance to prevent initialization errors
      supabaseInstance = createClient(supabaseUrl || "https://dummy.supabase.co", supabaseAnonKey || "dummy-key", {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      })
    } else {
      supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      })
    }
  }
  return supabaseInstance
}

export const supabase = getSupabaseClient()
