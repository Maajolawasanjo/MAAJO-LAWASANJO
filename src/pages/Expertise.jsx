import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code, Cpu, Share2, MonitorPlay, Brain, Layers, Database, ChevronRight, Check } from 'lucide-react';
import SplitText from '../components/ui/SplitText';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function Expertise() {
  const [activeDomain, setActiveDomain] = useState(0);

  const coreDomains = [
    {
      title: "Frontend Engineering",
      icon: <Palette size={20} />,
      tagline: "Bridging human interaction and backend state with performance, accessibility, and clean architecture.",
      desc: "Frontend engineering is where users interact directly with products. I focus on designing responsive, accessible, and performant applications that communicate information clearly and guide users efficiently.",
      principles: ["Component-driven architecture", "Server-first rendering (Next.js App Router)", "Reusable UI design systems", "Accessibility compliance (a11y)", "Strict type safety"],
      tech: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Radix UI", "Shadcn/UI"],
      projects: ["ReliefGrid", "Prepify AI", "SmartHub AgroChain", "ActionLens AI", "CareMandate AI", "KOPA AI", "TransLexa AI"]
    },
    {
      title: "Backend Engineering",
      icon: <Code size={20} />,
      tagline: "Architecting clean REST APIs, secure authentication flows, and scalable server-side systems.",
      desc: "Backend systems enable products to function reliably at scale. I design backends that prioritize clean APIs, structured business logic, secure session token management, and maintainable data flows.",
      principles: ["Separation of concerns", "Modular backend architecture", "Secure token authentication (JWT / OAuth)", "Rigorous input validation", "Documentation-first (OpenAPI / Swagger)"],
      tech: ["Python", "FastAPI", "Node.js", "REST APIs", "PostgreSQL", "SQL", "Firebase", "Hono (Edge Functions)"],
      projects: ["ReliefGrid", "Prepify AI", "CareMandate AI", "SmartHub AgroChain"]
    },
    {
      title: "AI Engineering",
      icon: <Cpu size={20} />,
      tagline: "Integrating LLM orchestrations, RAG pipelines, and persistent vector databases to automate workflows.",
      desc: "AI is an integral component of modern applications. I build multi-agent architectures and Retrieval-Augmented Generation workflows that solve real problems rather than adding AI for novelty.",
      principles: ["Human-in-the-loop validation", "Responsible AI safety limits", "Context-aware prompt routing", "Reliable API fallback/retry logic", "Semantic vector indexing"],
      tech: ["OpenAI GPT-4o", "Google Gemini", "Anthropic Claude", "AWS Bedrock", "pgvector", "Cohere Embeddings"],
      projects: ["ReliefGrid", "Prepify AI", "ActionLens AI", "KOPA AI", "TransLexa AI"]
    },
    {
      title: "Product Engineering & UI/UX",
      icon: <Brain size={20} />,
      tagline: "Combining business objectives, user discovery, and wireframe assets to guide the full product life cycle.",
      desc: "I approach software through a product lens. I research user pain points, draft interactive prototypes in Figma, and build systems engineered to scale from day one.",
      principles: ["Simplicity and efficiency", "Consistent UI branding", "Visual hierarchy focus", "Minimal cognitive load", "Fast feedback loops"],
      tech: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "CorelDRAW"],
      projects: ["ReliefGrid case studies", "MA'AJO DIGITAL branding systems", "Inteleva SaaS platforms"]
    },
    {
      title: "Databases, Cloud & Operations",
      icon: <Database size={20} />,
      tagline: "Setting up relational schema models, serverless server deployments, and automated pipelines.",
      desc: "Reliable database schemas and server orchestration form the foundation of every production application. I design efficient tables and deploy using automated platforms.",
      principles: ["Relational schema integrity", "Continuous deployment setups", "Secret/ENV management", "System telemetry logging"],
      tech: ["PostgreSQL", "Firebase Firestore", "MySQL", "Vercel", "GitHub Actions", "Microsoft Azure", "AWS (S3 / Bedrock)", "Google Cloud Platform"],
      projects: ["Unified Payments POS systems", "SmartHub AgroChain pipelines", "ReliefGrid database migration"]
    }
  ];

  const matrix = [
    { domain: 'Software Engineering', focus: 'Full-stack web applications & modular desktop client architectures' },
    { domain: 'AI Engineering', focus: 'LLM integration, prompt design, RAG systems, and multi-agent coordination' },
    { domain: 'Product Engineering', focus: 'End-to-end product strategy, prototyping, and validation' },
    { domain: 'UI/UX Design', focus: 'Brand identity, typography, visual systems, and interface accessibility' },
    { domain: 'Automation', focus: 'API connections, AI-assisted scripting, and content workflows' },
    { domain: 'Backend Systems', focus: 'Relational schema design, secure token auth, REST API gateways, and SQL queries' },
    { domain: 'Frontend Systems', focus: 'Modern responsive React & Next.js client-side interfaces' },
    { domain: 'Architecture', focus: 'Modularity, separation of concerns, and clean enterprise software patterns' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper expertise-page"
    >
      {/* ==================== HERO HEADER ==================== */}
      <section className="internal-hero">
        <div className="section-label">
          <span className="shimmer">Technical Blueprint</span>
        </div>
        <SplitText tag="h1" className="internal-title" delay={30} duration={1.2}>
          Engineering &amp; Design
        </SplitText>
        <p className="internal-subtitle">
          An in-depth look at my tech stack, core competencies, architectural patterns, and design philosophies.
        </p>
      </section>

      {/* ==================== EXPERTISE DOMAINS ==================== */}
      <section className="expertise-content-container">
        <div className="expertise-grid-layout">
          
          {/* Left panel: Domain selection */}
          <div className="domain-tabs-list">
            <h3 className="sub-section-title">Core Domains</h3>
            {coreDomains.map((domain, index) => (
              <div 
                key={index}
                className={`domain-tab-item ${activeDomain === index ? 'active' : ''}`}
                onClick={() => setActiveDomain(index)}
              >
                <div className="tab-icon-title">
                  <span className="tab-icon">{domain.icon}</span>
                  <h4>{domain.title}</h4>
                </div>
                <ChevronRight className="tab-arrow" size={16} />
              </div>
            ))}
          </div>

          {/* Right panel: Domain details display */}
          <div className="domain-display-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="domain-details-card"
              >
                <div className="domain-card-header">
                  <span className="header-icon-label">{coreDomains[activeDomain].icon}</span>
                  <h2>{coreDomains[activeDomain].title}</h2>
                </div>
                
                <p className="domain-tagline-text">{coreDomains[activeDomain].tagline}</p>
                <p className="domain-desc-text">{coreDomains[activeDomain].desc}</p>

                <div className="details-split-row">
                  {/* Principles */}
                  <div className="details-col">
                    <span className="col-title">Core Principles</span>
                    <ul className="principles-checklist">
                      {coreDomains[activeDomain].principles.map((pr, idx) => (
                        <li key={idx}>
                          <Check size={14} className="check-icon" />
                          <span>{pr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Associated Tech */}
                  <div className="details-col">
                    <span className="col-title">Technologies</span>
                    <div className="tech-tags-grid">
                      {coreDomains[activeDomain].tech.map((tc, idx) => (
                        <span key={idx} className="tech-pill">{tc}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Projects Row */}
                <div className="domain-projects-footer">
                  <span className="col-title">Applied in Projects</span>
                  <div className="project-tags-row">
                    {coreDomains[activeDomain].projects.map((pr, idx) => (
                      <span key={idx} className="project-badge-pill">{pr}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ==================== SUMMARY MATRIX ==================== */}
      <section className="expertise-matrix-section">
        <div className="matrix-card-wrapper">
          <h3 className="sub-section-title">Technical Summary Matrix</h3>
          <p className="matrix-subtitle">Mapping structural roles and specialization areas across software and system design.</p>
          
          <div className="summary-matrix-grid">
            {matrix.map((row, idx) => (
              <div key={idx} className="matrix-grid-row">
                <span className="matrix-row-title">{row.domain}</span>
                <span className="matrix-row-desc">{row.focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
