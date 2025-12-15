"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit to a newsletter service
    console.log("Subscribing email:", email)
    setSubscribed(true)
  }

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center space-x-2">
        <Mail className="h-5 w-5 text-red-600" />
        <h3 className="text-lg font-bold">Newsletter</h3>
      </div>

      {!subscribed ? (
        <>
          <p className="mt-2 text-sm text-muted-foreground">
            Subscribe to our newsletter to get the latest articles, news, and exclusive content.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700">
              Subscribe
            </Button>
          </form>
        </>
      ) : (
        <div className="mt-4 rounded-lg bg-green-100 p-4 text-center text-green-800 dark:bg-green-900/30 dark:text-green-400">
          <p className="font-medium">Thank you for subscribing!</p>
          <p className="mt-1 text-sm">We've sent a confirmation email to your inbox.</p>
        </div>
      )}
    </div>
  )
}
