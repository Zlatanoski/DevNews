export const stories = [
  {
    headline:
      "Samsung rolls out ChatGPT Enterprise and Codex across key teams",
    summary:
      "The Korea Times reports that Samsung Electronics will make ChatGPT Enterprise and OpenAI's Codex coding agent available to all employees in Korea and to Device eXperience division staff worldwide. The deployment covers software development, marketing, product design, manufacturing, knowledge work, and internal workflow creation.",
    source: "The Korea Times",
    url: "https://www.koreatimes.co.kr/business/tech-science/20260622/openai-lands-samsung-as-major-chatgpt-enterprise-customer",
    why:
      "This is a major enterprise signal for developers: coding agents are moving from individual tools into governed, company-wide platforms for engineering and internal software automation.",
  },
  {
    headline:
      "Indian developers prepare apps for Apple's new AI and Xcode tools",
    summary:
      "The Economic Times reports that Indian app teams are planning to adopt Apple's refreshed developer stack after WWDC, including AI-powered Siri, Xcode upgrades, Liquid Glass refinements, and trust-and-safety features. Developers cited automated code writing, app actions through Siri, private compute, and personalization as areas they expect to build into production apps.",
    source: "The Economic Times",
    url: "https://economictimes.indiatimes.com/tech/technology/indian-developers-set-to-incorporate-apples-latest-tools-in-their-app-offerings/articleshow/131896996.cms",
    why:
      "For iOS and macOS teams, the story highlights where Apple platform work is heading next: AI-assisted coding in Xcode, deeper Siri app integration, and privacy-conscious on-device/cloud AI patterns.",
  },
  {
    headline:
      "ET AI Hackathon moves builders from ideas into working AI apps",
    summary:
      "The Economic Times says ET AI Hackathon 2.0 has entered its second phase, shifting shortlisted teams from concept review into implementation. Participants now have to turn AI proposals into functional products that solve real-world problems.",
    source: "The Economic Times",
    url: "https://m.economictimes.com/ai/ai-insights/et-ai-hackathon-2-0-enters-phase-2-challenging-builders-to-turn-ideas-into-ai-powered-solutions/articleshow/131903157.cms",
    why:
      "It is a practical developer signal: AI news is moving from demos and pitches into buildable applications, evaluation, and shipping discipline.",
  },
  {
    headline:
      "China expands export controls on rare earth and dual-use suppliers",
    summary:
      "Reuters reports that China added MP Materials, USA Rare Earth, Aveox, and other U.S. entities to its export-control list, halting Chinese dual-use exports to those companies. The move also bars Chinese buyers from procuring products made by 46 U.S. companies under a separate finance ministry notice.",
    source: "Reuters",
    url: "https://www.reuters.com/world/asia-pacific/china-targets-us-rare-earth-other-firms-with-export-controls-2026-06-22/",
    why:
      "AI and cloud platforms depend on advanced hardware supply chains, so rare-earth and dual-use export controls can affect data-center buildouts, chip-adjacent suppliers, and long-term infrastructure costs.",
  },
  {
    headline:
      "Anthropic's AI-risk messaging draws scrutiny after export-ban fallout",
    summary:
      "Financial Times analysis highlighted in today's tech coverage says Anthropic's 2026 official statements and posts used AI-risk language far more often than OpenAI's, raising questions about whether safety messaging shaped the company's export-control treatment. The debate comes as model access becomes a policy issue, not just a product choice.",
    source: "Financial Times",
    url: "https://www.ft.com/content/16ace46c-aeac-40c9-8598-3c01fa4481cb",
    why:
      "Developers building on hosted frontier models need to watch regulatory and vendor-distribution risk, because access to models can change for policy reasons outside normal API or product roadmaps.",
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
