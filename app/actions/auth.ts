"use server"

import { createServerSupabaseClient, supabaseAdmin } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export async function signup(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const companyName = formData.get("companyName") as string
    const jobTitle = formData.get("jobTitle") as string
    const userType = formData.get("userType") as "supplier" | "buyer"
    const country = formData.get("country") as string

    // Validate form data
    if (!firstName || !lastName || !email || !password || !companyName || !jobTitle || !userType) {
      return { success: false, message: "All fields are required" }
    }

    // Validate password strength
    if (password.length < 8) {
      return { success: false, message: "Password must be at least 8 characters long" }
    }

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: false,
      user_metadata: {
        first_name: firstName,
        last_name: lastName,
        company_name: companyName,
        job_title: jobTitle,
        user_type: userType,
        country: country || "KE",
      },
    })

    if (authError) {
      console.error("Auth error:", authError)
      return { success: false, message: authError.message }
    }

    // Insert user data into our users table
    const { error: dbError } = await supabaseAdmin.from("users").insert({
      id: authData.user.id,
      email,
      first_name: firstName,
      last_name: lastName,
      company_name: companyName,
      job_title: jobTitle,
      user_type: userType,
      country: country || "KE",
      verified: false,
    })

    if (dbError) {
      console.error("Database error:", dbError)
      return { success: false, message: "Failed to create user profile" }
    }

    // If user is a supplier, create vendor profile
    if (userType === "supplier") {
      const storeUrl = `${companyName.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${Date.now()}`

      const { error: vendorError } = await supabaseAdmin.from("vendors").insert({
        user_id: authData.user.id,
        company_name: companyName,
        store_url: storeUrl,
        country: country || "KE",
        email: email,
        verification_status: "pending",
      })

      if (vendorError) {
        console.error("Vendor creation error:", vendorError)
      }
    }

    // Generate verification token
    const token = generateToken()
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24) // Token expires in 24 hours

    // Store verification token in database
    const { error: tokenError } = await supabaseAdmin.from("verification_tokens").insert({
      token,
      email,
      expires_at: expiresAt.toISOString(),
      verified: false,
    })

    if (tokenError) {
      console.error("Token creation error:", tokenError)
    }

    // In a real application, send verification email
    console.log(`
      Sending verification email to ${email}
      Verification link: ${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/verify/${token}
    `)

    return {
      success: true,
      message: "Account created successfully",
      redirect: `/verify-email?email=${encodeURIComponent(email)}&userType=${userType}`,
      userType,
    }
  } catch (error) {
    console.error("Signup error:", error)
    return { success: false, message: "An error occurred during signup" }
  }
}

export async function login(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!email || !password) {
      return { success: false, message: "Email and password are required" }
    }

    // Get user data from database to check verification status
    const { data: userData, error: userError } = await supabaseAdmin
      .from("users")
      .select("verified, user_type")
      .eq("email", email)
      .single()

    if (userError) {
      console.error("User fetch error:", userError)
      return { success: false, message: "Invalid email or password" }
    }

    if (!userData.verified) {
      return {
        success: false,
        message: "Please verify your email before logging in",
        needsVerification: true,
        email,
      }
    }

    // Sign in with Supabase Auth
    const supabase = createServerSupabaseClient()
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      console.error("Sign in error:", signInError)
      return { success: false, message: "Invalid email or password" }
    }

    // Revalidate paths that might depend on auth state
    revalidatePath("/")
    revalidatePath("/profile")
    revalidatePath("/vendor-dashboard")

    return {
      success: true,
      message: "Logged in successfully",
      userType: userData.user_type,
      redirect: userData.user_type === "supplier" ? "/vendor-dashboard" : "/",
    }
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, message: "An error occurred during login" }
  }
}

export async function signOut() {
  const supabase = createServerSupabaseClient()
  await supabase.auth.signOut()
  revalidatePath("/")
  redirect("/")
}

export async function verifyEmail(token: string) {
  try {
    // Check if token exists and is valid
    const { data: tokenData, error: tokenError } = await supabaseAdmin
      .from("verification_tokens")
      .select("*")
      .eq("token", token)
      .single()

    if (tokenError || !tokenData) {
      return { success: false, message: "Invalid verification token" }
    }

    if (new Date(tokenData.expires_at) < new Date()) {
      return { success: false, message: "Verification token has expired" }
    }

    if (tokenData.verified) {
      return { success: true, message: "Email already verified" }
    }

    // Mark token as verified
    await supabaseAdmin
      .from("verification_tokens")
      .update({
        verified: true,
      })
      .eq("token", token)

    // Find and update user
    const { data: userData, error: userError } = await supabaseAdmin
      .from("users")
      .update({
        verified: true,
      })
      .eq("email", tokenData.email)
      .select("user_type, id")
      .single()

    if (userError) {
      return { success: false, message: "Failed to verify user" }
    }

    // Update Supabase Auth user
    const { error: authUpdateError } = await supabaseAdmin.auth.admin.updateUserById(userData.id, {
      email_confirm: true,
    })

    if (authUpdateError) {
      console.error("Auth update error:", authUpdateError)
    }

    return {
      success: true,
      message: "Email verified successfully",
      userType: userData?.user_type || "buyer",
    }
  } catch (error) {
    console.error("Verification error:", error)
    return { success: false, message: "An error occurred during verification" }
  }
}

export async function resendVerificationEmail(email: string) {
  try {
    // Check if user exists
    const { data: userData, error: userError } = await supabaseAdmin
      .from("users")
      .select("verified, user_type")
      .eq("email", email)
      .single()

    if (userError || !userData) {
      return { success: false, message: "User not found" }
    }

    if (userData.verified) {
      return { success: false, message: "Email already verified" }
    }

    // Generate new verification token
    const token = generateToken()
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24) // Token expires in 24 hours

    // Store new token
    await supabaseAdmin.from("verification_tokens").insert({
      token,
      email,
      expires_at: expiresAt.toISOString(),
      verified: false,
    })

    // In a real application, send verification email
    console.log(`
      Resending verification email to ${email}
      Verification link: ${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/verify/${token}
    `)

    return {
      success: true,
      message: "Verification email sent",
      userType: userData.user_type,
    }
  } catch (error) {
    console.error("Resend verification error:", error)
    return { success: false, message: "An error occurred while resending verification email" }
  }
}
