const SkillsData = {
  frontend: {
    title: "Frontend Development",
    description:
      "Modern frontend technologies and frameworks for building responsive, interactive user interfaces.",
    hasAnimation: true, // This will use the existing Skills.jsx animation
  },

  backend: {
    title: "Backend Development",
    description:
      "Server-side technologies, APIs, and database management for robust application architecture.",
    hasAnimation: true,
  },

  programming: {
    title: "Programming Languages",
    description:
      "Core programming languages and their ecosystems for versatile software development.",
    hasAnimation: true,
  },

  aiml: {
    title: "AI & Machine Learning",
    description:
      "LLMs, agents, voice and visual search, used in real products like KomoChat and KomoVoice.",
    skills: [
      {
        name: "LLM apps",
        description: "Claude, GPT, Gemini and DeepSeek in real products",
      },
      {
        name: "AI agents & tool use",
        description: "Agents that act only through narrow, backend-checked tools",
      },
      {
        name: "RAG",
        description: "Answers grounded in a shop's own products and data",
      },
      {
        name: "LangChain / LangGraph",
        description: "Multi-step AI workflows and orchestration",
      },
      {
        name: "Voice agents",
        description: "Speech-to-speech phone agents on real SIP lines",
      },
      {
        name: "Visual search",
        description: "Finding products from photos with SigLIP 2, DINOv3 and SAM 3",
      },
      {
        name: "Qdrant",
        description: "Vector search for products and knowledge",
      },
      {
        name: "ONNX Runtime",
        description: "Running vision models fast on our own servers",
      },
    ],
  },

  devops: {
    title: "DevOps & Cloud",
    description:
      "Servers, databases and deployments that keep live products running.",
    skills: [
      {
        name: "Linux servers",
        description: "Production app, database and messaging servers I set up and run",
      },
      {
        name: "Docker",
        description: "Containers for every service, the same locally and in production",
      },
      {
        name: "nginx",
        description: "Reverse proxy, TLS and routing for live products",
      },
      {
        name: "PostgreSQL & PgBouncer",
        description: "Production databases with connection pooling and daily backups",
      },
      {
        name: "Vercel",
        description: "Web apps and landing pages with automatic deploys",
      },
      {
        name: "AWS",
        description: "EC2, S3 and RDS for hosting and storage",
      },
      {
        name: "GitHub Actions",
        description: "Automated checks before code goes live",
      },
      {
        name: "Asterisk & SIP",
        description: "Phone lines for KomoVoice on a BTCL SIP trunk",
      },
    ],
  },

  leadership: {
    title: "Architecture & Product",
    description:
      "How I design systems and products, and how I work with the people who use them.",
    skills: [
      {
        name: "Product design",
        description: "Deciding what to build from real shop owners' problems",
      },
      {
        name: "System architecture",
        description: "Multi-tenant SaaS with shop-level data isolation",
      },
      {
        name: "Event-driven design",
        description: "Events, queues and retries between products",
      },
      {
        name: "Provider adapters",
        description: "Couriers, Meta and AI models behind swappable adapters",
      },
      {
        name: "Double-entry accounting",
        description: "A cashbook with real-time profit inside AutoMate",
      },
      {
        name: "AI-native development",
        description: "Building with Claude Code agents across many repositories",
      },
      {
        name: "UI/UX design",
        description: "Product screens and flows in Figma",
      },
      {
        name: "Client relations",
        description: "Working directly with shop owners and local businesses",
      },
    ],
  },
};

export default SkillsData;
