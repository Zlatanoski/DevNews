export const stories = [
  {
    headline:
      "Anthropic's Claude Tag brings a Slack-native AI agent to workspaces",
    summary:
      "The Economic Times reports that Anthropic launched Claude Tag, a Slack-native AI agent that replaces the earlier Claude chatbot inside Salesforce's collaboration platform. The tool is designed to provide context-aware assistance directly in channels and help teams handle workplace workflows without leaving Slack.",
    source: "The Economic Times",
    url: "https://m.economictimes.com/tech/artificial-intelligence/anthropic-launches-claude-tag-everything-you-need-to-know-about-the-slack-native-ai-agent/articleshow/131958086.cms",
    why:
      "Developers should watch this because AI agents are moving from standalone chat surfaces into collaboration systems where engineering decisions, incidents, planning, and handoffs already happen.",
  },
  {
    headline:
      "Zeller says targeted AI adoption cut its product cycle to four weeks",
    summary:
      "The Australian reports that fintech company Zeller shortened its product development cycle by using AI without imposing a broad company-wide mandate. CEO Ben Pfisterer said Claude is used for development, Gemini for business work, and ChatGPT for strategy, while AI has helped increase feature delivery by up to 70%.",
    source: "The Australian",
    url: "https://www.theaustralian.com.au/business/technology/zeller-ceo-reveals-how-rejecting-ai-mandates-cut-product-cycle-to-four-weeks/news-story/8b3d0bba7e94d15e1b4cade06553e6ea",
    why:
      "The story gives software teams a concrete operating lesson: AI rollout strategy, guardrails, and review workflows can matter more than simply forcing every engineer to use the same tools.",
  },
  {
    headline:
      "Anthropic's Mythos finds flaws in classified government systems test",
    summary:
      "AP reports that Anthropic's Mythos model found vulnerabilities in classified U.S. government systems during a security test with intelligence agencies. The model identified weaknesses within hours without exploiting them, intensifying debate over advanced AI tools for cyber defense and access controls.",
    source: "AP",
    url: "https://apnews.com/article/3e8762c0527c4d8ed657cbe48c84a718",
    why:
      "AI-assisted vulnerability discovery is moving quickly from demos into sensitive production-like environments, which raises the stakes for secure coding, patch prioritization, model access, and defensive automation.",
  },
  {
    headline:
      "Super Micro-backed Argentum lands $7.8B in AI infrastructure deals",
    summary:
      "Barron's reports that Argentum AI secured $7.8 billion in cloud-computing agreements tied to Nvidia GB300 deployments in Poland. The plan includes 47,000 Nvidia chips at a 300-megawatt data center, adding to Europe's race to build large-scale AI compute capacity.",
    source: "Barron's",
    url: "https://www.barrons.com/articles/super-micro-ai-argentum-nvidia-chips-895c7460",
    why:
      "Developers building AI products depend on GPU supply, regional cloud capacity, and inference pricing, so new infrastructure deals can affect where teams deploy and how much advanced AI workloads cost.",
  },
  {
    headline:
      "Oracle workforce cuts highlight the cost of its AI and cloud pivot",
    summary:
      "The San Francisco Chronicle reports that Oracle's headcount fell by about 21,000 over the past year as the company expanded AI and cloud infrastructure spending. Oracle disclosed higher restructuring costs and a sharp rise in capital expenditures, largely driven by data-center expansion for AI services.",
    source: "San Francisco Chronicle",
    url: "https://www.sfchronicle.com/tech/article/oracle-ai-workforce-cuts-22317134.php",
    why:
      "Oracle's shift matters to developers because enterprise software vendors are reallocating money and teams toward AI infrastructure, changing platform roadmaps, cloud capacity, pricing pressure, and support priorities.",
  },
]

export const plans = [
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

export const dailyArticles = [
  {
    date: "Jun 20, 2026",
    headline: "Forget prompt engineering: 'Loop engineering' is all the rage now",
    source: "Business Insider",
    url: "https://www.businessinsider.com/what-are-loops-ai-engineering-tips-2026-6",
    snippets: [
      "Agent loops over one-off prompts",
      "Codex and Claude Code workflows",
      "Cost and sub-agent tradeoffs",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline:
      "Social media declared Cursor dead. Then SpaceX handed the AI startup a $60 billion lifeline.",
    source: "MarketWatch",
    url: "https://www.marketwatch.com/story/social-media-declared-cursor-dead-then-spacex-handed-the-ai-startup-a-60-billion-lifeline-50454e29",
    snippets: [
      "Cursor compute bottleneck",
      "SpaceX GPU infrastructure",
      "AI coding tool consolidation",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "US scientist John Jumper to leave Google DeepMind for Anthropic",
    source: "Reuters",
    url: "https://www.reuters.com/technology/us-scientist-john-jumper-leave-google-deepmind-anthropic-2026-06-19/",
    snippets: [
      "AlphaFold co-creator moves",
      "AI talent competition",
      "Anthropic science push",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "Google DeepMind prepares for rogue AI agents",
    source: "Axios",
    url: "https://www.axios.com/2026/06/18/google-deepmind-prepares-for-rogue-ai-agents",
    snippets: [
      "AI Control Roadmap",
      "Agents treated like insider threats",
      "Layered monitoring defenses",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "Why AI infrastructure planning must happen now",
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com/technology/tech-news/why-ai-infrastructure-planning-must-happen-now/articleshow/131873003.cms",
    snippets: [
      "Always-on AI systems",
      "Scale and security planning",
      "Infrastructure as product risk",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline:
      "Epic merges Unreal Engine 5 with Unreal Editor for Fortnite to build Unreal Engine 6",
    source: "PC Gamer",
    url: "https://www.pcgamer.com/software/it-is-going-to-change-a-lot-about-how-games-are-made-epic-merges-unreal-engine-5-with-unreal-engine-for-fortnite-to-give-game-devs-around-the-world-unreal-engine-6/",
    snippets: [
      "UE5 and UEFN merge",
      "Verse scripting direction",
      "Open standards for game devs",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "Accenture takes majority stake in cyber company Dragos",
    source: "The Wall Street Journal",
    url: "https://www.wsj.com/pro/cybersecurity/accenture-takes-majority-stake-in-cyber-company-dragos-bb536634",
    snippets: [
      "OT security consolidation",
      "runZero and NetRise deals",
      "AI-era infrastructure defense",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline:
      "Microsoft turns to Amazon for help with GitHub's AI-driven capacity issues",
    source: "Business Insider",
    url: "https://www.businessinsider.com/microsoft-github-amazon-ai-cloud-capacity-2026-6",
    snippets: [
      "GitHub AI workload spike",
      "Temporary multi-cloud capacity",
      "Developer platform reliability",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "AI use in UK hits 'tipping point' as companies scale up, Google exec says",
    source: "Reuters",
    url: "https://www.reuters.com/world/uk/ai-use-uk-hits-tipping-point-companies-scale-up-google-exec-says-2026-06-17/",
    snippets: [
      "Enterprise AI moving to scale",
      "Security and data governance",
      "Cloud AI adoption pressure",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "SoftBank launches cybersecurity product based on OpenAI models",
    source: "Reuters",
    url: "https://www.reuters.com/business/media-telecom/softbank-launches-cybersecurity-product-based-openai-models-2026-06-16/",
    snippets: [
      "Patching as a Service",
      "OpenAI-backed cyber defense",
      "Critical infrastructure security",
    ],
  },
]

export type TutorialResource = {
  id: string
  title: string
  provider: string
  description: string
  url: string
  category: string
  difficulty?: "Beginner" | "Intermediate" | "Advanced"
  estimatedTime?: string
  sourceType?: "course" | "docs" | "guide" | "article" | "video"
}

export const tutorialResources: TutorialResource[] = [
  {
    id: "openai-platform-docs",
    title: "Build with the OpenAI API",
    provider: "OpenAI",
    description:
      "Official platform documentation for creating LLM-powered apps, tool-calling workflows, and production integrations.",
    url: "https://platform.openai.com/docs",
    category: "LLM apps",
    difficulty: "Beginner",
    estimatedTime: "2-4 hours",
    sourceType: "docs",
  },
  {
    id: "anthropic-claude-docs",
    title: "Claude API documentation",
    provider: "Anthropic",
    description:
      "Guides and API references for prompting Claude, using tool calls, and designing reliable assistant experiences.",
    url: "https://docs.anthropic.com/",
    category: "AI assistants",
    difficulty: "Beginner",
    estimatedTime: "2-3 hours",
    sourceType: "docs",
  },
  {
    id: "claude-courses",
    title: "Claude courses for building with AI assistants",
    provider: "Anthropic / Claude",
    description:
      "Self-paced courses for learning Claude fundamentals, prompting techniques, and practical workflows with AI assistants.",
    url: "https://claude.com/resources/courses",
    category: "Claude",
    difficulty: "Beginner",
    estimatedTime: "2-5 hours",
    sourceType: "course",
  },
  {
    id: "google-ai-gemini-docs",
    title: "Gemini API developer docs",
    provider: "Google AI",
    description:
      "Official Gemini documentation covering multimodal prompts, model selection, structured outputs, and app integration.",
    url: "https://ai.google.dev/gemini-api/docs",
    category: "Multimodal AI",
    difficulty: "Intermediate",
    estimatedTime: "3-5 hours",
    sourceType: "docs",
  },
  {
    id: "microsoft-learn-ai",
    title: "Microsoft Learn AI training",
    provider: "Microsoft Learn",
    description:
      "Free training paths for Azure AI services, responsible AI fundamentals, and building AI-powered cloud applications.",
    url: "https://learn.microsoft.com/training/browse/?terms=AI",
    category: "Cloud AI",
    difficulty: "Beginner",
    estimatedTime: "4-6 hours",
    sourceType: "course",
  },
  {
    id: "hugging-face-course",
    title: "Hugging Face AI course",
    provider: "Hugging Face",
    description:
      "Hands-on lessons for transformers, datasets, tokenizers, and practical model workflows with open-source tooling.",
    url: "https://huggingface.co/learn",
    category: "Open models",
    difficulty: "Intermediate",
    estimatedTime: "6-10 hours",
    sourceType: "course",
  },
  {
    id: "langchain-docs",
    title: "LangChain docs and tutorials",
    provider: "LangChain",
    description:
      "Practical guides for chaining models, connecting tools, retrieval workflows, and building agentic applications.",
    url: "https://docs.langchain.com/",
    category: "Agents",
    difficulty: "Intermediate",
    estimatedTime: "3-6 hours",
    sourceType: "guide",
  },
  {
    id: "deeplearning-ai-short-courses",
    title: "Short courses for generative AI builders",
    provider: "DeepLearning.AI",
    description:
      "Free and low-friction courses on prompting, RAG, agents, evaluations, and building useful LLM applications.",
    url: "https://www.deeplearning.ai/short-courses/",
    category: "Applied AI",
    difficulty: "Beginner",
    estimatedTime: "1-3 hours each",
    sourceType: "course",
  },
  {
    id: "hugging-face-agents-course",
    title: "AI agents learning resources",
    provider: "Hugging Face",
    description:
      "Community learning materials and official resources for understanding modern AI agent patterns and tools.",
    url: "https://huggingface.co/learn",
    category: "AI agents",
    difficulty: "Advanced",
    estimatedTime: "4-8 hours",
    sourceType: "course",
  },
]
