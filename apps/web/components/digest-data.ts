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
    date: "Jun 17, 2026",
    headline: "Who's in charge of Anthropic's AI models?",
    source: "Axios",
    url: "https://www.axios.com/2026/06/17/anthropic-fable-mythos-ai-model-government-oversight",
    snippets: [
      "Frontier model takedown",
      "Fable/Mythos oversight",
      "Audits and deployment controls",
    ],
  },
  {
    date: "Jun 17, 2026",
    headline:
      "AI takes center stage at the G7 amid tensions over American tech dominance",
    source: "AP News",
    url: "https://apnews.com/article/g7-france-ai-sovereignty-7d783c6de4356962e338b8b8563d48ea",
    snippets: [
      "AI sovereignty push",
      "OpenAI/DeepMind/Anthropic at G7",
      "Model-access geopolitics",
    ],
  },
  {
    date: "Jun 17, 2026",
    headline:
      "States forge ahead with AI regulations despite Trump's insistence he lead the way",
    source: "AP News",
    url: "https://apnews.com/article/trump-artificial-intelligence-chatbots-ai-23a0e44ab05402ddfe9cdfd0bffa0ade",
    snippets: [
      "State AI laws",
      "Developer audit duties",
      "Chatbot and decision-system rules",
    ],
  },
  {
    date: "Jun 17, 2026",
    headline:
      "Microsoft Was in Talks to Lease $3 Billion in Oracle Compute Capacity",
    source: "Business Insider",
    url: "https://www.businessinsider.com/microsoft-was-in-talks-to-lease-oracle-compute-capacity-2026-6",
    snippets: [
      "AI compute crunch",
      "FedRAMP blockers",
      "Cloud capacity scramble",
    ],
  },
  {
    date: "Jun 16, 2026",
    headline: "Microsoft explores DeepSeek for Copilot Cowork",
    source: "Axios",
    url: "https://www.axios.com/2026/06/16/microsoft-copilot-cowork-tokenmaxxing-cowork",
    snippets: [
      "Usage-based Copilot pricing",
      "Optional Azure-hosted DeepSeek",
      "Multi-model enterprise AI",
    ],
  },
  {
    date: "Jun 16, 2026",
    headline: "GitHub's AI Surge Pushes Microsoft Into Amazon's Arms",
    source: "Business Insider",
    url: "https://www.businessinsider.com/microsoft-github-amazon-ai-cloud-capacity-2026-6",
    snippets: [
      "GitHub capacity strain",
      "AWS support for Microsoft",
      "AI coding workload spike",
    ],
  },
  {
    date: "Jun 16, 2026",
    headline:
      "SpaceX overtakes Amazon to become world's fifth most valuable company",
    source: "The Guardian",
    url: "https://www.theguardian.com/science/2026/jun/16/spacex-ai-coding-anysphere-cursor-amazon-market-valuation-xai",
    snippets: [
      "Cursor acquisition",
      "AI coding consolidation",
      "xAI developer-tool ambitions",
    ],
  },
  {
    date: "Jun 14, 2026",
    headline:
      "Microsoft is reportedly testing Copilot+ AI features with discrete GPUs instead of NPUs",
    source: "Tom's Hardware",
    url: "https://www.tomshardware.com/software/windows/microsoft-is-reportedly-testing-copilot-ai-features-with-discrete-gpus-instead-of-npus-a-feature-available-on-windows-app-sdk-with-a-windows-insider-experimental-channel-build-and-developer-mode-turned-on",
    snippets: [
      "Local AI APIs",
      "Nvidia GPU support",
      "Windows App SDK experiment",
    ],
  },
  {
    date: "Jun 12, 2026",
    headline:
      "OpenAI's latest acquisition could see big changes on the way for its Codex coding assistant",
    source: "TechRadar",
    url: "https://www.techradar.com/pro/openais-latest-acquisition-could-see-big-changes-on-the-way-for-its-codex-coding-assistant",
    snippets: [
      "Ona acquisition",
      "Persistent agent environments",
      "Codex long-running tasks",
    ],
  },
  {
    date: "Jun 4, 2026",
    headline: "Windows is back on the Microsoft menu",
    source: "The Verge",
    url: "https://www.theverge.com/tech/943108/microsoft-build-2026-windows-love-notepad",
    snippets: [
      "Microsoft Build 2026",
      "Hybrid local/cloud AI",
      "Windows agent platform push",
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
