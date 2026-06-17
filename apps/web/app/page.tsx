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
import { cn } from "@workspace/ui/lib/utils"
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Code2,
  DatabaseZap,
  ExternalLink,
  Mail,
  Newspaper,
  Radio,
  ShieldAlert,
  Zap,
} from "lucide-react"

const stories = [
  {
    headline: "U.S. export controls restrict Anthropic's latest frontier model",
    summary:
      "The White House restricted access to Anthropic's newest AI model using export controls, raising concerns that advanced U.S. models could become geopolitically gated. Axios reports this could make enterprises wary of long-term dependency on any single AI lab.",
    source: "Axios",
    url: "https://www.axios.com/2026/06/16/ai-anthropic-export-controls",
    why:
      "API access, model availability, and enterprise procurement now carry regulatory risk; teams may need fallback providers or open-model strategies.",
  },
  {
    headline:
      "Microsoft moves Copilot Cowork to usage-based pricing and explores DeepSeek on Azure",
    summary:
      "Microsoft is shifting Copilot Cowork to compute-based pricing and considering a lower-cost DeepSeek V4 or open-source model option hosted on Azure. The move reflects rising costs from agentic tools that can call models repeatedly while completing tasks.",
    source: "Axios",
    url: "https://www.axios.com/2026/06/16/microsoft-copilot-cowork-tokenmaxxing-cowork",
    why:
      "Agent pricing is becoming part of engineering budgeting; model routing, cost controls, and provider selection will matter more in dev workflows.",
  },
  {
    headline: "Microsoft unveils Project Solara, an OS for AI-agent devices",
    summary:
      "At Build 2026, Microsoft announced Project Solara, an Android-based platform for \"agent-driven experiences\" on low-power devices. Reference concepts included a desk device and wearable badge that can invoke agents, transcribe conversations, and use camera context.",
    source: "The Verge",
    url: "https://www.theverge.com/news/941830/microsoft-project-solara-os-ai-agent-gadgets",
    why:
      "It signals a new platform surface for agent apps beyond web, desktop, and mobile, with enterprise security and device-management constraints baked in.",
  },
  {
    headline:
      "Nvidia's $20B bond sale shows AI infrastructure buildout is entering a debt-funded phase",
    summary:
      "Nvidia reportedly moved to sell $20 billion in corporate bonds as AI infrastructure spending accelerates. Axios cites Goldman estimates that hyperscalers may spend $770 billion on capex in 2026, roughly equal to operating cash flows.",
    source: "Axios",
    url: "https://www.axios.com/2026/06/16/ai-nvidia-bonds-debt",
    why:
      "Compute availability, GPU pricing, inference costs, and cloud capacity are increasingly tied to capital-market dynamics, not just technical progress.",
  },
  {
    headline:
      "Google Gemini outage highlights reliability risk of AI platform dependencies",
    summary:
      "Gemini suffered widespread June 10 errors across web and mobile, including \"error 1076\" and \"error 1099,\" with Google later saying mitigations were applied while root-cause investigation continued. Reports affected users across multiple regions and account types.",
    source: "TechRadar",
    url: "https://www.techradar.com/news/live/gemini-down-june-2026",
    why:
      "Production apps built on AI services need retries, graceful degradation, provider fallbacks, and clear incident monitoring just like any other critical dependency.",
  },
]

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "A daily skim for individual developers.",
    features: ["5 stories/day", "No archive"],
  },
  {
    name: "Pro",
    price: "$12",
    cadence: "/mo",
    description: "For engineers who track AI shifts continuously.",
    features: ["Unlimited stories", "Full archive", "Email digest"],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$39",
    cadence: "/mo",
    description: "Shared context for product and platform teams.",
    features: ["Everything in Pro", "10 seats", "Slack integration"],
  },
]

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
                  <a href="#pricing">
                    Start reading
                    <ArrowRight data-icon="inline-end" className="size-4" />
                  </a>
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

        <section id="pricing" className="border-b bg-muted/40 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-8 max-w-3xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <CircleDollarSign className="size-4" />
                Pricing
              </div>
              <h2 className="text-3xl font-semibold tracking-normal md:text-4xl">
                Choose the briefing depth your team needs
              </h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={cn(
                    "relative flex min-h-full flex-col",
                    plan.highlighted &&
                      "border-emerald-700 shadow-md dark:border-emerald-500"
                  )}
                >
                  {plan.highlighted ? (
                    <div className="absolute right-4 top-4 rounded-full bg-emerald-700 px-2.5 py-1 text-xs font-medium text-white dark:bg-emerald-500 dark:text-emerald-950">
                      Recommended
                    </div>
                  ) : null}
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="pt-5">
                      <span className="text-4xl font-semibold">
                        {plan.price}
                      </span>
                      {plan.cadence ? (
                        <span className="text-muted-foreground">
                          {plan.cadence}
                        </span>
                      ) : null}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check className="size-4 text-emerald-700 dark:text-emerald-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button className="w-full">
                      {plan.name === "Free" ? "Start Free Trial" : "Get Started"}
                    </Button>
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
            <a href="#pricing" className="hover:text-foreground">
              Pricing
            </a>
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
