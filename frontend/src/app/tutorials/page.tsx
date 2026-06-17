import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react"

import { tutorialResources } from "@/components/digest-data"
import { SiteNavbar } from "@/components/site-navbar"

export default function TutorialsPage() {
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
              <span className="text-foreground">Tutorials</span>
            </nav>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
                <BookOpen className="size-3.5 text-emerald-700 dark:text-emerald-400" />
                Tutorials
              </div>
              <h1 className="text-4xl font-semibold tracking-normal text-balance md:text-6xl">
                Learn AI from the best sources
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Deep dives into AI agents, coding tools, and building with LLMs
                - curated from trusted, up-to-date resources.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {tutorialResources.map((resource) => (
                <Card
                  key={resource.id}
                  className="h-full overflow-hidden transition-colors hover:border-emerald-600/50"
                >
                  <CardHeader className="gap-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                      <span className="rounded-full border bg-muted px-2.5 py-1 text-foreground">
                        {resource.category}
                      </span>
                      {resource.difficulty ? (
                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                          {resource.difficulty}
                        </span>
                      ) : null}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{resource.provider}</span>
                        {resource.sourceType ? (
                          <>
                            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                            <span className="capitalize">
                              {resource.sourceType}
                            </span>
                          </>
                        ) : null}
                      </div>
                      <CardTitle className="text-xl leading-7">
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-2 underline-offset-4 hover:underline"
                        >
                          {resource.title}
                          <ExternalLink className="mt-1 size-3.5 shrink-0 text-muted-foreground" />
                        </a>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm leading-6 text-muted-foreground">
                      {resource.description}
                    </p>
                    {resource.estimatedTime ? (
                      <p className="mt-5 border-l-2 border-emerald-600 pl-3 text-sm font-medium text-foreground">
                        {resource.estimatedTime}
                      </p>
                    ) : null}
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Start learning
                        <ArrowUpRight
                          data-icon="inline-end"
                          className="size-4"
                        />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
