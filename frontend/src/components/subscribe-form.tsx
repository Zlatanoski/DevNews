"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/api"

import { cn } from "@/lib/utils"

type SubscribeFormProps = {
  id: string
  source: string
  className?: string
}

type SubscribeState = "idle" | "submitting" | "success" | "duplicate" | "error"

export function SubscribeForm({ id, source, className }: SubscribeFormProps) {
  const [state, setState] = React.useState<SubscribeState>("idle")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState("submitting")

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")

    if (typeof email !== "string" || !email.trim()) {
      setState("error")
      return
    }

    try {
      const body = (await api.subscribe({
        email: email.trim(),
        plan: "free",
        source,
      })) as {
        data?: { status?: string }
        error?: string
      }

      if (body.data?.status === "subscribed") {
        event.currentTarget.reset()
        setState("success")
        return
      }

      setState(body.error === "already_subscribed" ? "duplicate" : "error")
    } catch {
      setState("error")
    }
  }

  const message = {
    idle: "",
    submitting: "Subscribing...",
    success: "Subscribed.",
    duplicate: "Already subscribed.",
    error: "Could not subscribe. Try again.",
  }[state]

  return (
    <form
      className={cn(
        "flex w-full flex-col gap-3 sm:flex-row md:w-[28rem]",
        className,
      )}
      onSubmit={onSubmit}
    >
      <label className="sr-only" htmlFor={id}>
        Email address
      </label>
      <input
        id={id}
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        aria-describedby={`${id}-status`}
        className="h-10 min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={state === "submitting"}
      />
      <Button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Subscribing" : "Subscribe"}
      </Button>
      <p
        id={`${id}-status`}
        className={cn(
          "min-h-5 text-sm sm:sr-only",
          state === "error" && "text-destructive",
          state === "success" && "text-emerald-700 dark:text-emerald-400",
        )}
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  )
}
