export const stories = [
  {
    headline:
      "Developers are shifting from prompt engineering to loop engineering",
    summary:
      "Business Insider reports that AI builders are increasingly designing recurring agent loops instead of writing one-off prompts. The pattern lets tools such as Claude Code and Codex continue toward a goal, coordinate sub-agents, and split work like coding and review, while raising new cost and token-budget concerns.",
    source: "Business Insider",
    url: "https://www.businessinsider.com/what-are-loops-ai-engineering-tips-2026-6",
    why:
      "This is directly relevant to developers adopting agentic workflows: the next productivity jump may come from orchestrating reliable loops, not from writing better individual prompts.",
  },
  {
    headline:
      "Google DeepMind publishes an AI Control Roadmap for agent security",
    summary:
      "Google DeepMind released a roadmap for securing internal systems against increasingly capable AI agents. The framework treats agents like potential insider threats and proposes layered defenses such as monitoring, access controls, response tiers, and analysis of coding-agent trajectories.",
    source: "Google DeepMind",
    url: "https://deepmind.google/blog/securing-the-future-of-ai-agents/",
    why:
      "As developers connect AI agents to code, files, terminals, and production tools, agent security is becoming a core engineering discipline rather than a research-only concern.",
  },
  {
    headline:
      "Claude Design adds tighter handoff between design systems and Claude Code",
    summary:
      "Anthropic says Claude Design now imports design systems from GitHub repos and other sources, checks generated work against those components, and syncs with Claude Code. Developers can pull design systems into Claude Code with /design-sync or start design work from the terminal with /design.",
    source: "Anthropic",
    url: "https://claude.com/blog/claude-design-stays-on-brand-for-daily-work",
    why:
      "The update points to a faster design-to-code workflow where product teams can keep UI prototypes, brand systems, and implementation work closer together.",
  },
  {
    headline:
      "France mobilises €13 billion for tech sovereignty and deeptech funding",
    summary:
      "Reuters reports that France has mobilised €13 billion in new institutional investor funding under the third phase of its Tibi initiative. The programme aims to back French and European technology companies, with half of the new phase directed toward deeptech companies and a stronger focus on pan-European funds.",
    source: "Reuters",
    url: "https://www.reuters.com/business/media-telecom/france-mobilises-13-billion-tech-sovereignty-funding-push-2026-06-19/",
    why:
      "More European deeptech capital could affect where AI infrastructure, developer platforms, chips, and advanced software startups can scale over the next few years.",
  },
  {
    headline:
      "China tightens indium export checks as AI data center demand rises",
    summary:
      "Reuters reports that China is increasing scrutiny of indium exports, a metal used in indium phosphide for high-speed optical chips. Buyers are watching for tighter controls because those chips are important to next-generation AI data centers and cloud infrastructure.",
    source: "Reuters",
    url: "https://www.reuters.com/world/china/china-tightens-indium-export-checks-ai-demand-increases-2026-06-19/",
    why:
      "AI developer tools depend on huge cloud and data-center supply chains, so materials bottlenecks can eventually shape GPU availability, inference costs, and platform reliability.",
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
