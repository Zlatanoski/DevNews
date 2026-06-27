export const stories = [
  {
    headline:
      "US clears Anthropic's Mythos 5 for trusted organizations",
    summary:
      "Reuters reports that the U.S. government released Anthropic's powerful Mythos 5 model for use by some companies, government agencies, and research institutions after previously limiting access. The report says officials are moving toward a framework where advanced AI models can be shared with trusted U.S. organizations while tighter controls remain in place for broader releases.",
    source: "Reuters",
    url: "https://www.reuters.com/technology/us-releases-anthropic-model-mythos-some-us-companies-semafor-reports-2026-06-26/",
    why:
      "Model access is becoming part of the developer platform stack: teams may need to design products around gated model availability, enterprise trust checks, and new national-security review processes for frontier AI.",
  },
  {
    headline:
      "OpenAI previews GPT-5.6 Sol, Terra, and Luna for API builders",
    summary:
      "OpenAI previewed GPT-5.6 Sol, Terra, and Luna as limited-access frontier models for ChatGPT, the API, and Codex users. The announcement positions Sol as the strongest reasoning model, describes new agentic capabilities such as ultra sub-agents, and notes that availability is initially restricted while rollout decisions are coordinated with government review.",
    source: "OpenAI",
    url: "https://openai.com/index/previewing-gpt-5-6-sol/",
    why:
      "Developers building with AI agents need to track model tiers, pricing, context limits, caching, and access restrictions because these choices directly affect coding workflows, automation reliability, and product rollout plans.",
  },
  {
    headline: "Ukraine plans domestic AI compute capacity with Kyivstar",
    summary:
      "Reuters reports that Ukraine is working with telecom operator Kyivstar to build domestic AI computing capacity for government, public-service, and security use cases. Officials described the effort as a way to reduce dependence on foreign cloud resources while supporting AI systems that handle sensitive national data.",
    source: "Reuters",
    url: "https://www.reuters.com/business/media-telecom/ukraine-plans-domestic-ai-computing-capacity-with-kyivstar-2026-06-26/",
    why:
      "For developers working on public-sector, defense, or regulated AI systems, local compute and data-sovereignty requirements can shape architecture decisions as much as model quality or cloud pricing.",
  },
  {
    headline:
      "Malaysia seizes AI chip servers amid tighter export-control pressure",
    summary:
      "Reuters reports that Malaysian customs seized 72 servers containing advanced AI chips worth about $12.9 million after officials said the equipment was believed to be headed for re-export. The case comes as governments scrutinize AI chip flows and attempt to prevent restricted hardware from reaching sanctioned destinations.",
    source: "Reuters",
    url: "https://www.reuters.com/world/china/malaysia-customs-seizes-ai-chips-worth-13-million-amid-us-export-concerns-2026-06-26/",
    why:
      "AI hardware supply chains affect developers indirectly through cloud capacity, inference cost, regional availability, and whether teams can rely on stable access to accelerators for training and production workloads.",
  },
  {
    headline:
      "Financial regulators build AI tools to keep pace with AI-driven cyber risk",
    summary:
      "Reuters reports that financial regulators are racing to develop their own AI tools as the technology raises the speed and scale of cyber threats, fraud, and market-abuse risks. Supervisors are using experiments such as hackathons and internal tooling projects to improve monitoring while balancing privacy and governance concerns.",
    source: "Reuters",
    url: "https://www.reuters.com/business/finance/financial-regulators-scramble-counter-ai-rise-with-own-tools-2026-06-26/",
    why:
      "Developers in fintech and enterprise software should expect more AI-aware compliance, auditability, and security expectations, especially for systems that touch trading, customer data, or automated decision-making.",
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
