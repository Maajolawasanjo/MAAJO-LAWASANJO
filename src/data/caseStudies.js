export const caseStudies = {
  reliefgrid: {
    title: "ReliefGrid",
    heroSubtitle: "Persistent Collective Intelligence for Disaster Response",
    roles: [
      "Founder & Product Strategist",
      "AI Product Engineer & Software Architect",
      "UI/UX Designer",
      "Full-Stack Engineer (Frontend & Backend)"
    ],
    executiveSummary: "ReliefGrid is an AI-powered disaster response coordination platform designed to improve how emergency organizations collect information, coordinate responders, allocate resources, and preserve operational knowledge during crises. Unlike traditional emergency management systems that depend heavily on manual coordination, ReliefGrid introduces a persistent collective memory layer where specialized AI agents continuously collaborate, share context, and retain institutional knowledge across incidents.",
    problemStatement: "Emergency response organizations frequently face fragmented communication, duplicated efforts, delayed resource allocation, inconsistent situational awareness, information overload, and loss of operational knowledge. These issues become increasingly severe during large-scale emergencies involving multiple organizations and hundreds of responders.",
    goals: [
      "Reduce response delays and improve situational awareness.",
      "Preserve institutional knowledge across teams and shifts.",
      "Coordinate multiple responders dynamically.",
      "Support intelligent decision-making and enable scalable disaster management."
    ],
    targetUsers: [
      "Government agencies & Operations centers",
      "Emergency responders & Incident commanders",
      "NGOs & Volunteer organizations",
      "Hospitals and medical coordinators"
    ],
    features: [
      { title: "Incident Management", desc: "Create, update, track, monitor, and prioritize incidents dynamically." },
      { title: "AI Coordinator Agent", desc: "Coordinates specialist agents (Medical, Logistics, Infrastructure, Weather, Shelter, Communication)." },
      { title: "Persistent Memory System", desc: "Utilizes embeddings and semantic searches to achieve historical incident recall and reuse." },
      { title: "GIS Location Intelligence", desc: "Interactive maps, route calculations, and geospatial threat awareness." }
    ],
    architecture: {
      frontend: "Next.js, React, TypeScript, Tailwind CSS, Leaflet.js, Framer Motion",
      backend: "FastAPI (Python), JWT security, Async Background Tasks",
      database: "CockroachDB Serverless, pgvector HNSW cosine similarity indices, Alembic migrations",
      aiEngineering: "AWS Bedrock (Claude 3), Embedding Services, Memory Engine, Multi-Agent Orchestration, Prompt Management templates"
    },
    challenges: [
      {
        title: "Ensuring persistent memory sync and agent orchestration",
        solution: "Implemented pgvector semantic lookups with CockroachDB Serverless to recall previous incident profiles, feeding them directly into current agent prompts."
      },
      {
        title: "Low Latency Multi-Agent Coordination",
        solution: "Leveraged async FastAPI background tasks to trigger specialist evaluations concurrently rather than sequentially."
      }
    ],
    lessonsLearned: [
      "Enterprise AI systems require robust architecture before intelligence.",
      "Memory is as important as reasoning.",
      "Reliable infrastructure matters more than flashy AI features.",
      "Human-centered interfaces remain critical even in AI-first systems."
    ]
  },
  "actionlens-ai": {
    title: "ActionLens AI",
    heroSubtitle: "Transforming Community Reports into Actionable Intelligence",
    roles: [
      "Founder & Product Builder",
      "Full-Stack Software Engineer"
    ],
    executiveSummary: "ActionLens AI is an intelligent civic reporting platform that enables communities, organizations, and decision-makers to collect, analyze, prioritize, and respond to public issues using artificial intelligence. The platform combines structured reporting, geospatial intelligence, AI-powered classification, and decision support to transform scattered reports into organized, actionable insights.",
    problemStatement: "Communities generate thousands of reports regarding infrastructure, safety, sanitation, transportation, healthcare, and environmental concerns. Unfortunately, these reports are often scattered, duplicated, unstructured, or difficult to prioritize.",
    goals: [
      "Provide a unified platform for structured community reporting.",
      "Automate categorization and prioritization of reports using AI.",
      "Provide actionable solutions and emergency escalations automatically."
    ],
    targetUsers: [
      "Local community residents",
      "City administrators and government agencies",
      "Anticipatory action and NGO coordinators"
    ],
    features: [
      { title: "Civic NLP Engine", desc: "Automated issue classification, summary generation, and priority scoring." },
      { title: "Geospatial Grounding", desc: "Locates incidents on interactive map overlays and verfies nearest responders." },
      { title: "Recommendation Flow", desc: "AI suggestions for local responders based on report severity." }
    ],
    architecture: {
      frontend: "Next.js 16, React, Tailwind CSS",
      backend: "FastAPI (Python)",
      database: "Supabase (PostgreSQL + Key-Value + Realtime)",
      aiEngineering: "OpenAI GPT-4o, pgvector embeddings"
    },
    challenges: [
      {
        title: "Tackling Unstructured Incident Reports",
        solution: "Engineered customized JSON schema templates via OpenAI structured outputs, ensuring clean, typed objects map straight to the database."
      }
    ],
    lessonsLearned: [
      "Structuring unstructured user inputs early simplifies downstream data reporting.",
      "Real-time UI updates via websockets significantly improve administrator efficiency."
    ]
  },
  "prepify-ai": {
    title: "Prepify AI",
    heroSubtitle: "Reimagining Academic Productivity Through Generative AI",
    roles: [
      "Co-Founder & Lead Designer",
      "Frontend Developer"
    ],
    executiveSummary: "Prepify AI is an intelligent academic productivity platform designed to centralize learning workflows into a single AI-powered workspace. Students often rely on fragmented tools for note-taking, flashcards, document analysis, quizzes, summaries, podcasts, and study planning. Prepify AI consolidates these capabilities into one integrated ecosystem.",
    problemStatement: "Learning resources are scattered across multiple applications. Students switch between note-taking tools, flashcard apps, PDF readers, quiz platforms, AI assistants, and media players, creating friction and reducing study efficiency.",
    goals: [
      "Unify student note-taking, file study, and scheduling tools.",
      "Automate flashcard and study quiz generation from lecture slides.",
      "Incorporate audio-centric learning models (study podcasts)."
    ],
    targetUsers: [
      "High school & University students",
      "Independent scholars & professional learners"
    ],
    features: [
      { title: "AI Document Analysis", desc: "Upload PDFs and slides to extract summaries and highlights instantly." },
      { title: "Audio Studio", desc: "Notes-to-podcast generator, transcript voice reader, and audio exports." },
      { title: "Spaced Repetition Generator", desc: "Automatic card decks generation with timed retention test notifications." }
    ],
    architecture: {
      frontend: "Next.js, React, Tailwind CSS, TypeScript",
      backend: "FastAPI",
      database: "Firebase Firestore",
      aiEngineering: "Google Gemini API, custom prompt parsing"
    },
    challenges: [
      {
        title: "Context window size constraints on long study guides",
        solution: "Implemented recursive chunking strategies, extracting localized summaries before assembling them into study blocks."
      }
    ],
    lessonsLearned: [
      "Active recall and spaced repetition are highly compatible with generative AI.",
      "UX simplicity must drive feature density in education tools."
    ]
  },
  "orderflow-nexus": {
    title: "OrderFlow Nexus",
    heroSubtitle: "Unified Commerce & Logistics Operating System",
    roles: [
      "Lead Developer",
      "Software Architect"
    ],
    executiveSummary: "OrderFlow Nexus is an enterprise-grade commerce and logistics platform designed to unify inventory management, customer orders, merchant operations, logistics coordination, payment workflows, and business analytics into a single desktop application.",
    problemStatement: "Small and medium-sized businesses frequently rely on disconnected software for inventory, customer records, accounting, logistics, and reporting. This fragmentation creates duplicate data, operational delays, inconsistent reporting, poor inventory visibility, and communication bottlenecks.",
    goals: [
      "Centralize commerce and order tracking in a single desktop system.",
      "Implement double-sided transaction escrow guarantees.",
      "Ensure low-latency local database performance."
    ],
    targetUsers: [
      "Wholesale merchants & Retail business owners",
      "Warehouse managers & logistics dispatch teams"
    ],
    features: [
      { title: "Merchant Dashboard", desc: "Real-time stock monitoring, sales velocities, and revenue forecasts." },
      { title: "Logistics Control", desc: "Automatic driver assignment, routing simulations, and delivery confirmations." },
      { title: "Secured Escrow", desc: "Protected payment settlement pipelines guarding transaction records." }
    ],
    architecture: {
      frontend: "JavaFX desktop components",
      backend: "Core Java (JDK 21)",
      database: "MySQL / Relational local database",
      aiEngineering: "Statistical forecasting formulas"
    },
    challenges: [
      {
        title: "Managing concurrent inventory updates in a multi-user environment",
        solution: "Leveraged database transaction isolation levels (Serializable) and row locks to ensure consistency under heavy dispatch volumes."
      }
    ],
    lessonsLearned: [
      "Desktop software remains superior for raw operational speed and hotkey-driven warehouse entry.",
      "Separating concerns via strict MVC architecture ensures maintainability."
    ]
  }
};
