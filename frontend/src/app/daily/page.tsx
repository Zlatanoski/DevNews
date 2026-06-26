import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, CalendarDays, ExternalLink, Mail } from "lucide-react"

import { SiteNavbar } from "@/components/site-navbar"
import { SubscribeForm } from "@/components/subscribe-form"
import { api, type Article } from "@/lib/api"

async function getArticles(): Promise<Article[]> {
  try {
    const res = await api.articles()
    return res.data?.articles ?? []
  } catch {
    return []
  }
}

function formatDate(timestamp: number | null): string {
  if (!timestamp) return ""
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function parseTags(tags: string | null): string[] {
  if (!tags) return []
  try {
    return JSON.parse(tags) as string[]
  } catch {
    return []
  }
}

export default async function DailyPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteNavbar />
      <main>
        <section className="border-b bg-muted/30 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Daily</span>
            </nav>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
                  <CalendarDays className="size-3.5 text-emerald-700 dark:text-emerald-400" />
                  Daily briefing
                </div>
                <h1 className="text-4xl font-semibold tracking-normal text-balance md:text-6xl">
                  The Daily Brief
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Ten AI, cloud, coding, and platform stories distilled into the
                  signals software teams can scan before the day starts.
                </p>
              </div>
              <Button size="lg" asChild>
                <a href="#subscribe">
                  Subscribe
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="space-y-4">
              {articles.map((article) => {
                const tags = parseTags(article.tags)
                return (
                  <Card key={article.id} className="overflow-hidden">
                    <CardHeader className="gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 space-y-3">
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span>{formatDate(article.publishedAt)}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                          <a
                            href={article.url}
                            className="inline-flex items-center gap-1 rounded-full border bg-muted px-2.5 py-1 text-xs font-medium text-foreground underline-offset-4 hover:underline"
                          >
                            {article.source}
                            <ExternalLink className="size-3" />
                          </a>
                        </div>
                        <CardTitle className="text-xl leading-8 md:text-2xl">
                          <a
                            href={article.url}
                            className="underline-offset-4 hover:underline"
                          >
                            {article.title}
                          </a>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    {(article.description || tags.length > 0) && (
                      <CardContent>
                        {article.description && (
                          <p className="mb-3 text-sm leading-6 text-muted-foreground">
                            {article.description}
                          </p>
                        )}
                        {tags.length > 0 && (
                          <ul className="flex flex-wrap gap-2">
                            {tags.slice(0, 4).map((tag) => (
                              <li
                                key={tag}
                                className="border-l-2 border-emerald-600 pl-3 text-sm leading-6 text-muted-foreground"
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="subscribe" className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="grid gap-8 rounded-lg border bg-background p-6 shadow-xs md:grid-cols-[1fr_auto] md:items-center md:p-8">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  <Mail className="size-4" />
                  Subscribe
                </div>
                <h2 className="text-2xl font-semibold tracking-normal md:text-3xl">
                  Get the daily developer briefing
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                  One concise digest for teams watching AI infrastructure,
                  model access, cloud capacity, and coding-agent shifts.
                </p>
              </div>
              <SubscribeForm id="daily-email" source="daily-page" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
