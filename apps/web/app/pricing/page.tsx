import { Button } from "@workspace/ui/components/button"
import { CircleDollarSign, Mail } from "lucide-react"

import { PricingPlans } from "@/components/pricing-plans"
import { SiteNavbar } from "@/components/site-navbar"

export default function PricingPage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteNavbar />
      <main>
        <section className="border-b bg-muted/30 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
                <CircleDollarSign className="size-3.5 text-emerald-700 dark:text-emerald-400" />
                Pricing
              </div>
              <h1 className="text-4xl font-semibold tracking-normal text-balance md:text-6xl">
                Choose the briefing depth your team needs
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Start with the daily skim, then expand into archive access,
                email delivery, and team distribution as Developer&apos;s Digest
                becomes part of your planning workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <PricingPlans />
          </div>
        </section>

        <section className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-8 rounded-lg border bg-background p-6 shadow-xs md:grid-cols-[1fr_auto] md:items-center md:p-8">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  <Mail className="size-4" />
                  Team briefing
                </div>
                <h2 className="text-2xl font-semibold tracking-normal md:text-3xl">
                  Need a shared rollout?
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                  Bring Developer&apos;s Digest into your team&apos;s AI platform,
                  infrastructure, and procurement review loops.
                </p>
              </div>
              <Button size="lg">Contact sales</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
