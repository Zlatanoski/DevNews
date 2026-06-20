export const stories = [
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
      'At Build 2026, Microsoft announced Project Solara, an Android-based platform for "agent-driven experiences" on low-power devices. Reference concepts included a desk device and wearable badge that can invoke agents, transcribe conversations, and use camera context.',
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
      'Gemini suffered widespread June 10 errors across web and mobile, including "error 1076" and "error 1099," with Google later saying mitigations were applied while root-cause investigation continued. Reports affected users across multiple regions and account types.',
    source: "TechRadar",
    url: "https://www.techradar.com/news/live/gemini-down-june-2026",
    why:
      "Production apps built on AI services need retries, graceful degradation, provider fallbacks, and clear incident monitoring just like any other critical dependency.",
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
    headline: "Social media declared Cursor dead. Then SpaceX handed the AI startup a $60 billion lifeline.",
    source: "MarketWatch",
    url: "https://www.marketwatch.com/story/social-media-declared-cursor-dead-then-spacex-handed-the-ai-startup-a-60-billion-lifeline-50454e29",
    snippets: [
      "Cursor gets compute lifeline",
      "SpaceX GPU infrastructure",
      "AI coding market pressure",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline:
      "Google DeepMind prepares to protect itself from AI agents going rogue",
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com/technology/tech-news/google-deepmind-prepares-to-protect-itself-from-ai-agents-going-rogue-but-theres-a-problem/articleshow/131859318.cms",
    snippets: [
      "Agent safety roadmap",
      "AI treated like insider risk",
      "Monitoring autonomous systems",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "Good news, vibe coders: OpenAI says Codex is back to normal after experiencing elevated errors",
    source: "Business Insider",
    url: "https://www.businessinsider.com/openai-codex-elevated-errors-at-capacity-2026-6",
    snippets: [
      "Codex capacity incident",
      "AI coding reliability",
      "Status monitoring matters",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline:
      "Microsoft forced to turn to AWS to boost GitHub cloud capacity following AI demand surge",
    source: "TechRadar",
    url: "https://www.techradar.com/pro/microsoft-forced-to-turn-to-aws-to-boost-github-cloud-capacity-following-ai-demand-surge",
    snippets: [
      "GitHub AI usage spike",
      "Temporary AWS capacity",
      "Multi-cloud developer platforms",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "US scientist John Jumper to leave Google DeepMind for Anthropic",
    source: "Reuters",
    url: "https://www.reuters.com/technology/us-scientist-john-jumper-leave-google-deepmind-anthropic-2026-06-19/",
    snippets: [
      "AI research talent move",
      "AlphaFold leader exits",
      "Anthropic science expansion",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "SoftBank launches cybersecurity product based on OpenAI models",
    source: "Reuters",
    url: "https://www.reuters.com/business/media-telecom/softbank-launches-cybersecurity-product-based-openai-models-2026-06-16/",
    snippets: [
      "Patching as a Service",
      "OpenAI cybersecurity product",
      "Critical infrastructure defense",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "Why AI infrastructure planning must happen now",
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com/technology/tech-news/why-ai-infrastructure-planning-must-happen-now/articleshow/131873003.cms",
    snippets: [
      "AI infrastructure planning",
      "Security and scale needs",
      "Always-on workloads",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline:
      "Epic merges Unreal Engine 5 with Unreal Editor for Fortnite to build Unreal Engine 6",
    source: "PC Gamer",
    url: "https://www.pcgamer.com/software/it-is-going-to-change-a-lot-about-how-games-are-made-epic-merges-unreal-engine-5-with-unreal-engine-for-fortnite-to-give-game-devs-around-the-world-unreal-engine-6/",
    snippets: [
      "Unreal Engine 6 direction",
      "UEFN and UE5 convergence",
      "Verse for game development",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "Accenture takes majority stake in cyber company Dragos",
    source: "The Wall Street Journal",
    url: "https://www.wsj.com/pro/cybersecurity/accenture-takes-majority-stake-in-cyber-company-dragos-bb536634",
    snippets: [
      "OT security consolidation",
      "Enterprise cyber services",
      "Industrial infrastructure defense",
    ],
  },
  {
    date: "Jun 20, 2026",
    headline: "AI use in UK hits tipping point as companies scale up, Google exec says",
    source: "Reuters",
    url: "https://www.reuters.com/world/uk/ai-use-uk-hits-tipping-point-companies-scale-up-google-exec-says-2026-06-17/",
    snippets: [
      "Enterprise AI adoption",
      "Scaling beyond pilots",
      "Cloud governance pressure",
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
