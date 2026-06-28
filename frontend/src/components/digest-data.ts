export const stories = [
  {
    headline:
      "Z.ai's GLM-5.2 narrows the AI cybersecurity gap with Mythos",
    summary:
      "The Wall Street Journal reports that security researchers say Z.ai's GLM-5.2 can match the latest U.S. models in some software bug-finding and cybersecurity scenarios. The model's open-weight availability and lower operating costs are raising fresh questions about how quickly advanced vulnerability-discovery capabilities can spread outside tightly controlled frontier-model releases.",
    source: "The Wall Street Journal",
    url: "https://www.wsj.com/tech/ai/chinese-ai-anthropic-mythos-cybersecurity-574b02c2",
    why:
      "Developers and security teams may soon face a much broader market of AI tools that can discover vulnerabilities, which changes expectations around secure coding, patch speed, model governance, and defensive automation.",
  },
  {
    headline:
      "Japan and China pitch local Mythos-class cyber AI alternatives",
    summary:
      "The Times of India reports that Japan's Sakana AI and China's 360 are promoting new AI systems aimed at cybersecurity and agent orchestration after U.S. export controls limited access to Anthropic's most advanced models. Sakana's Fugu is described as an orchestration model for autonomous agents, while 360's Tulongfeng and Yitianzhen target vulnerability discovery and automated incident response.",
    source: "The Times of India",
    url: "https://timesofindia.indiatimes.com/technology/tech-news/chinese-and-japanese-companies-launch-ai-models-claim-they-are-as-powerful-as-anthropics-mythos/articleshow/132045152.cms",
    why:
      "Regional AI stacks can affect which models, agent frameworks, and security tools developers can use in production, especially when export controls or local sovereignty requirements make single-provider architectures risky.",
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
