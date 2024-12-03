'use server'

import { signIn, signOut } from "../auth"

export async function SignIn() {
  return await signIn('google', { callbackUrl: "/api/user/dashboard" })
}

export async function SignOut() {
  return await signOut()
}