import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import {
  ArrowRight,
  Code2,
  DatabaseZap,
  ExternalLink,
  Mail,
  Newspaper,
  Radio,
  ShieldAlert,
  Zap,
} from "lucide-react"

import { stories } from "@/components/digest-data"
import { SiteNavbar } from "@/components/site-navbar"

const faqs = [
  {
    question: "What is Developer's Digest?",
    answer:
      "Developer's Digest is a focused SaaS briefing for software teams tracking AI platform, infrastructure, pricing, and reliability stories that affect engineering decisions.",
  },
  {
    question: "Where do the stories come from?",
    answer:
      "Stories are sourced from reputable technology and business publications, then summarized with the developer impact called out so teams can decide what needs action.",
  },
  {
    question: "How often is it updated?",
    answer:
      "The digest is updated throughout the workday as relevant AI and developer-platform news breaks, with email delivery available on the Pro plan.",
  },
  {
    question: "Can I cancel Pro at any time?",
    answer:
      "Yes. Pro is month-to-month, and cancellation stops future billing while keeping access through the end of the current billing period.",
  },
  {
    question: "How does Team billing work?",
    answer:
      "Team includes 10 seats for $39/mo, with shared access to the full archive, email digest, and Slack integration for distributing updates.",
  },
  {
    question: "Is API access available?",
    answer:
      "API access is planned for teams that want to route briefings into internal dashboards, incident workflows, or procurement review systems.",
  },
]

export default function Page() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteNavbar />
      <main>
        <section className="border-b">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground">
                <Radio className="size-3.5 text-emerald-700 dark:text-emerald-400" />
                AI briefings for engineering teams
              </div>
              <h1 className="text-4xl font-semibold tracking-normal text-balance md:text-6xl">
                Developer&apos;s Digest
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                A concise developer-focused feed that turns AI industry news
                into API, infrastructure, reliability, and budget signals your
                team can act on.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/pricing">
                    Start reading
                    <ArrowRight data-icon="inline-end" className="size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#top-stories">View top stories</a>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4 shadow-xs">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Newspaper className="size-4 text-emerald-700 dark:text-emerald-400" />
                  Today&apos;s signal
                </div>
                <span className="rounded-full bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                  5 stories
                </span>
              </div>
              <div className="divide-y">
                {stories.slice(0, 3).map((story) => (
                  <div key={story.headline} className="py-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                        {story.source}
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-6">
                      {story.headline}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="top-stories" className="border-b py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-8 flex max-w-3xl flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <DatabaseZap className="size-4" />
                Top Stories
              </div>
              <h2 className="text-3xl font-semibold tracking-normal md:text-4xl">
                AI developments with engineering impact
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {stories.map((story) => (
                <Card key={story.headline} className="min-h-full">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="rounded-full border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {story.source}
                      </span>
                      <ShieldAlert className="size-4 text-stone-500" />
                    </div>
                    <CardTitle className="text-lg leading-7">
                      {story.headline}
                    </CardTitle>
                    <CardDescription className="leading-6">
                      {story.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="border-l-2 border-emerald-600 pl-3 text-sm leading-6 text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Why developers care:
                      </span>{" "}
                      {story.why}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <a
                      href={story.url}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      Read more
                      <ExternalLink className="size-3.5" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-8 rounded-lg border bg-background p-6 shadow-xs md:grid-cols-[1fr_auto] md:items-center md:p-8">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  <Mail className="size-4" />
                  Newsletter
                </div>
                <h2 className="text-2xl font-semibold tracking-normal md:text-3xl">
                  Get the developer briefing in your inbox
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                  Weekly AI platform, pricing, and reliability signals curated
                  for engineering decisions.
                </p>
              </div>
              <form className="flex w-full flex-col gap-3 sm:flex-row md:w-[28rem]">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-10 min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>

        <section className="border-b py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <Code2 className="size-4" />
                FAQ
              </div>
              <h2 className="text-3xl font-semibold tracking-normal md:text-4xl">
                Built for developer news workflows
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`question-${index + 1}`}
                >
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-2 font-medium">
            <Zap className="size-4 text-emerald-700 dark:text-emerald-400" />
            Developer&apos;s Digest
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Product
            </a>
            <Link href="/pricing" className="hover:text-foreground">
              Pricing
            </Link>
            <a href="#" className="hover:text-foreground">
              Blog
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-foreground">
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
