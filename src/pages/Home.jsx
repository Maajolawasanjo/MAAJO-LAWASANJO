import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, Code, Layout, Palette, ArrowRight, Cpu, Share2, 
  MonitorPlay, Brain, CheckCircle2, ChevronRight, ExternalLink,
  Award, Activity, Hourglass, Zap, Layers, Terminal
} from 'lucide-react';
import { Github } from '../components/ui/SocialIcons';
import TestimonialCard from '../components/shared/TestimonialCard';
import ScrollFloat from '../components/ui/ScrollFloat';
import SplitText from '../components/ui/SplitText';
import ScrollReveal from '../components/ui/ScrollReveal';
import DotField from '../components/ui/DotField';
import { projects } from '../data/projects';
import { brandInfo } from '../data/brand';

const techCategories = [
  {
    id: 'frontend',
    title: 'Front-End Development',
    desc: 'Crafting performant, visually premium, and highly responsive user interfaces using modern reactive frameworks and custom design systems.',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Shadcn/UI', 'Radix UI']
  },
  {
    id: 'backend',
    title: 'Back-End & Databases',
    desc: 'Engineering robust server-side business logic, performant database architectures, and secure, lightweight edge functions.',
    skills: ['Node.js', 'Supabase (PostgreSQL + KV)', 'Hono (Deno Edge Functions)', 'REST APIs', 'SQL']
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    desc: 'Writing clean, typed, and structured algorithms across standard programming systems for automation, management, and scripting.',
    skills: ['Python', 'R', 'C++', 'Java']
  },
  {
    id: 'ai',
    title: 'AI & Workflow Automation',
    desc: 'Integrating cognitive model APIs, prompt engineering, and automated pipelines to optimize business and content production workflows.',
    skills: ['AI API Integration', 'Workflow Automation', 'Prompt Engineering', 'AI-Assisted Content Production', 'pgvector']
  },
  {
    id: 'design',
    title: 'Design & Visual Prototyping',
    desc: 'Developing high-fidelity user flows, corporate identity guidelines, brand vectors, and pixel-perfect interface wireframes.',
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW', 'Canva', 'Figma']
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    desc: 'Configuring continuous deployment, serverless hosting environments, and cloud infrastructure pipelines for seamless product delivery.',
    skills: ['Vercel', 'GitHub', 'Google Cloud Tools']
  },
  {
    id: 'office',
    title: 'Office & Productivity',
    desc: 'Managing enterprise documentation, automated spreadsheets, relational data records, and visual team collaboration spaces.',
    skills: ['Microsoft Word', 'Excel', 'PowerPoint', 'Access', 'Google Workspace']
  },
  {
    id: 'media',
    title: 'Media & Digital Strategy',
    desc: 'Producing dynamic motion graphics, livestream broadcast overlays, social growth visual pipelines, and content calendars.',
    skills: ['Motion Graphics', 'Livestream Visuals', 'Broadcast Asset Management', 'Social Media Strategy']
  }
];

export default function Home() {
  const [activeSkillTab, setActiveSkillTab] = useState(0);
  const [activeSpecialty, setActiveSpecialty] = useState(0);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const marqueeItems = [
    'Websites', 'Designing', 'Graphics', 'Animations', 'Community', 'Development', 'Mentor'
  ];

  const featured = projects.filter(p => p.featured).slice(0, 4);

  const specialties = [
    {
      title: 'Creative Design & Branding',
      icon: <Palette size={18} />,
      content: 'Visual identity, brand guidelines, print & digital assets, UI/UX design. Crafting beautiful visual materials and cohesive systems that elevate brand communication.'
    },
    {
      title: 'Full-Stack Web Development',
      icon: <Code size={18} />,
      content: 'End-to-end product development from wireframe to deployment. Building performant, responsive, and secure web architectures tailored to business goals.'
    },
    {
      title: 'AI-Driven Digital Solutions',
      icon: <Cpu size={18} />,
      content: 'Building AI-integrated tools, SaaS platforms, and automation pipelines. Harnessing cutting-edge LLMs and automation frameworks to streamline operations and create intelligent interfaces.'
    },
    {
      title: 'Social Media & Digital Strategy',
      icon: <Share2 size={18} />,
      content: 'Content calendars, cross-platform management, growth strategy. Designing target-oriented strategic pipelines to boost visual reach and community engagement.'
    },
    {
      title: 'Computer Operations Training',
      icon: <MonitorPlay size={18} />,
      content: 'IT support, staff upskilling, MS Office, safe internet practices. Equipping teams with vital technical workflows, network safety skills, and platform competencies.'
    },
    {
      title: 'Product Thinking',
      icon: <Brain size={18} />,
      content: 'User-centred design, technical problem-solving, scalable architecture. Structuring workflows from both a business and user perspective to build successful, long-term products.'
    }
  ];

  // Dynamic visualizer canvas helper
  const renderVisualizerContent = () => {
    switch (activeSpecialty) {
      case 0: // Creative Design
        return (
          <div className="canvas-split-container">
            <div className="visualizer-role-info">
              <span className="role-tag">Creative Director &amp; UI/UX Designer</span>
              <h4>Brand &amp; Visual Design</h4>
              <ul className="role-deliverables">
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Brand identity guidelines</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>High-fidelity Figma wireframes</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Cohesive typography scales</span></li>
              </ul>
              <div className="role-value">
                <strong>Value:</strong> Establishes visual trust, consistency, and a professional brand identity.
              </div>
            </div>
            <div className="canvas-visual brand-visual visualizer-system-output">
              <div className="brand-header">
                <span className="brand-tag">MA'AJO DIGITAL</span>
                <h4>Brand Design System v1.0</h4>
              </div>
              <div className="brand-palette">
                <div className="color-bubble" style={{ background: '#030917' }}><span>#030917</span></div>
                <div className="color-bubble" style={{ background: '#22C55E' }}><span>#22C55E</span></div>
                <div className="color-bubble" style={{ background: '#94a3b8' }}><span>#94a3b8</span></div>
                <div className="color-bubble" style={{ background: '#ffffff', color: '#111' }}><span>#FFFFFF</span></div>
              </div>
              <div className="brand-fonts">
                <span className="font-title">Clash Display</span>
                <span className="font-body">Satoshi Variable</span>
              </div>
            </div>
          </div>
        );
      case 1: // Full-Stack Web Dev
        return (
          <div className="canvas-split-container">
            <div className="visualizer-role-info">
              <span className="role-tag">Full-Stack Software Engineer</span>
              <h4>Web Architecture</h4>
              <ul className="role-deliverables">
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Responsive React interfaces</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>RESTful API endpoints</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Secure session &amp; DB schemas</span></li>
              </ul>
              <div className="role-value">
                <strong>Value:</strong> Translates product concepts into fully-functional, secure, high-speed applications.
              </div>
            </div>
            <div className="canvas-visual code-visual visualizer-system-output">
              <div className="ide-tab-bar">
                <span className="ide-tab active">App.jsx</span>
                <span className="ide-tab">api.py</span>
                <span className="ide-tab">schema.sql</span>
              </div>
              <pre className="code-block">
                <code>
{`import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pixel-perfect-ui"
    >
      <header className="glass-nav" />
      <main className="grid" />
    </motion.div>
  );
}`}
                </code>
              </pre>
            </div>
          </div>
        );
      case 2: // AI Solutions
        return (
          <div className="canvas-split-container">
            <div className="visualizer-role-info">
              <span className="role-tag">AI Product Engineer</span>
              <h4>Cognitive Systems</h4>
              <ul className="role-deliverables">
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>RAG pipelines &amp; prompt routing</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Vector database queries (pgvector)</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Multi-agent flow orchestration</span></li>
              </ul>
              <div className="role-value">
                <strong>Value:</strong> Automates manual operations and embeds native intelligence directly into software.
              </div>
            </div>
            <div className="canvas-visual ai-visual visualizer-system-output">
              <div className="node-network">
                <div className="main-agent-node pulsing-glow">
                  <Cpu size={16} />
                  <span>Agent Router</span>
                </div>
                <div className="arrow-connection right-pulse"></div>
                <div className="sub-nodes">
                  <div className="sub-node"><Zap size={12} /><span>Vector Memory</span></div>
                  <div className="sub-node"><Layers size={12} /><span>RAG Context</span></div>
                  <div className="sub-node"><CheckCircle2 size={12} /><span>Guardrails</span></div>
                </div>
              </div>
              <div className="status-terminal">
                <span>[SYSTEM]: Orchestrator initialized.</span>
                <span className="highlight-text">[MEMORY]: Context loaded from pgvector db.</span>
              </div>
            </div>
          </div>
        );
      case 3: // Social Media Strategy
        return (
          <div className="canvas-split-container">
            <div className="visualizer-role-info">
              <span className="role-tag">Brand Growth Manager</span>
              <h4>Digital Outreach</h4>
              <ul className="role-deliverables">
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Engagement metrics analysis</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Target audience campaigns</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Automated content planning</span></li>
              </ul>
              <div className="role-value">
                <strong>Value:</strong> Expands digital footprints, boosts page views, and drives client acquisition.
              </div>
            </div>
            <div className="canvas-visual stats-visual visualizer-system-output">
              <div className="analytics-card">
                <div className="card-header">
                  <span>Direct Impressions</span>
                  <span className="trend positive">+48.2%</span>
                </div>
                <h3>12,654</h3>
                <div className="bar-graph">
                  <div className="graph-bar" style={{ height: '30%' }}></div>
                  <div className="graph-bar" style={{ height: '55%' }}></div>
                  <div className="graph-bar" style={{ height: '40%' }}></div>
                  <div className="graph-bar" style={{ height: '85%' }}></div>
                  <div className="graph-bar" style={{ height: '70%' }}></div>
                  <div className="graph-bar" style={{ height: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 4: // Computer Operations Training
        return (
          <div className="canvas-split-container">
            <div className="visualizer-role-info">
              <span className="role-tag">IT Specialist &amp; Advisor</span>
              <h4>Operations Training</h4>
              <ul className="role-deliverables">
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Relational database queries</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>System status monitoring</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Terminal automation scripting</span></li>
              </ul>
              <div className="role-value">
                <strong>Value:</strong> Ensures secure infrastructure, system telemetry transparency, and team upskilling.
              </div>
            </div>
            <div className="canvas-visual terminal-visual visualizer-system-output">
              <div className="terminal-bar">
                <Terminal size={12} />
                <span>bash - maajo@pc</span>
              </div>
              <div className="terminal-body">
                <p className="cmd-prompt">$ ping -c 3 payment.gateway.up</p>
                <p className="cmd-output">64 bytes from UP_PTSA (172.16.8.4): seq=1 time=2.41 ms</p>
                <p className="cmd-output">64 bytes from UP_PTSA (172.16.8.4): seq=2 time=1.89 ms</p>
                <p className="cmd-output">64 bytes from UP_PTSA (172.16.8.4): seq=3 time=2.04 ms</p>
                <p className="cmd-prompt">$ systemctl status postgresql</p>
                <p className="cmd-output green-text">● postgresql.service - Active (Running)</p>
              </div>
            </div>
          </div>
        );
      case 5: // Product Thinking
        return (
          <div className="canvas-split-container">
            <div className="visualizer-role-info">
              <span className="role-tag">Product Engineer</span>
              <h4>Lifecycle Architecture</h4>
              <ul className="role-deliverables">
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>User discovery roadmaps</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Product requirements specs</span></li>
                <li><CheckCircle2 size={12} className="meta-icon" /> <span>Agile development sprints</span></li>
              </ul>
              <div className="role-value">
                <strong>Value:</strong> Directs design and engineering effort to solve high-impact user problems.
              </div>
            </div>
            <div className="canvas-visual product-visual visualizer-system-output">
              <div className="bento-roadmap">
                <div className="roadmap-step active">
                  <span className="step-num">01</span>
                  <span>Discovery &amp; PRD</span>
                </div>
                <div className="roadmap-step">
                  <span className="step-num">02</span>
                  <span>Figma Mockups</span>
                </div>
                <div className="roadmap-step">
                  <span className="step-num">03</span>
                  <span>Agile Build</span>
                </div>
                <div className="roadmap-step">
                  <span className="step-num">04</span>
                  <span>Telemetry</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="grow page-wrapper"
    >
      {/* ==================== HERO SECTION WRAPPER ==================== */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Background Container Layer */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, height: '100%' }}>
          <DotField
            dotRadius={1.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly={true}
            gradientFrom="#A855F7"
            gradientTo="#B497CF"
            glowColor="#120F17"
          />
        </div>

        {/* ==================== HERO SECTION (Structured Layers) ==================== */}
        <motion.section 
          className="hero-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ position: 'relative', zIndex: 10 }}
        >
          {/* Content Container Layer */}
          <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
            <motion.p className="hero-greeting" variants={itemVariants}>
              <span className="wave-icon">👋</span>
              Hey! It's me Ma'ajo,
            </motion.p>

            <SplitText tag="h1" className="hero-headline" delay={30} duration={1.2} textAlign="left">
              Crafting <span className="highlight">purpose driven experiences</span> that inspire &amp; engage.
            </SplitText>

            <motion.div className="hero-divider-row" variants={itemVariants}>
              <div className="divider-line"></div>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="hero-description">
                I work with brands globally to build pixel-perfect, engaging, and accessible digital experiences that drive results and achieve business goals.
              </motion.p>
            </motion.div>

            <motion.div className="hero-actions" variants={itemVariants}>
              <ul className="social-links">
                <li>
                  <a href="https://www.linkedin.com/in/nathan-ma-ajo" target="_blank" rel="noreferrer" className="social-link">
                    LinkedIn <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Maajolawasanjo" target="_blank" rel="noreferrer" className="social-link">
                    GitHub <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/maajolawasanjo/" target="_blank" rel="noreferrer" className="social-link">
                    Instagram <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="mailto:maajolawasanjo@gmail.com" className="social-link">
                    Gmail <ArrowUpRight size={12} />
                  </a>
                </li>
              </ul>
              <Link to="/about">
                <button className="btn btn-outline">
                  <span className="btn-ripple"></span>Know me better
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* ==================== MARQUEE STRIP ==================== */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="marquee-item">
              {item} <span className="marquee-dot">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== METRICS DASHBOARD BOARD ==================== */}
      <section className="metrics-dashboard-section">
        <div className="metrics-container">
          <div className="metric-box">
            <div className="metric-icon"><Award size={20} /></div>
            <div className="metric-text">
              <h3>10+</h3>
              <span>Professional Certifications</span>
            </div>
          </div>
          <div className="metric-box">
            <div className="metric-icon"><Activity size={20} /></div>
            <div className="metric-text">
              <h3>15+</h3>
              <span>Products Built &amp; Deployed</span>
            </div>
          </div>
          <div className="metric-box">
            <div className="metric-icon"><Hourglass size={20} /></div>
            <div className="metric-text">
              <h3>5+</h3>
              <span>Hackathons &amp; Challenges</span>
            </div>
          </div>
          <div className="metric-box">
            <div className="metric-icon"><Zap size={20} /></div>
            <div className="metric-text">
              <h3>1,500+</h3>
              <span>Applied Learning Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SNIPPET ==================== */}
      <section className="home-about-premium">
        <div className="home-about-wrapper">
          <div className="section-label">
            <span className="shimmer">Story Statement</span>
          </div>
          <div className="home-about-content">
            <ScrollReveal textClassName="home-about-text" baseOpacity={0.15} enableBlur={true} baseRotation={1} blurStrength={2}>
              I'm <strong>Ma'ajo Lawasanjo Nathan</strong>, an <strong>AI Product Engineer</strong> bridging the space between software engineering, product strategy, and visual design. I design high-fidelity systems, write clean server-side scripts, orchestrate multi-agent models, and compile user interfaces that look like fully funded commercial products.
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED WORK ==================== */}
      <section className="featured-projects-premium">
        <div className="section-header-row">
          <div className="left-header">
            <div className="section-label">
              <span className="shimmer">Flagship Products</span>
            </div>
            <ScrollFloat elementType="h2">Selected Works</ScrollFloat>
          </div>
          <Link to="/projects" className="header-view-link">
            See all projects <ChevronRight size={14} />
          </Link>
        </div>

        <div className="premium-projects-grid">
          {featured.map((project) => (
            <div key={project.id} className="premium-project-card">
              <div className="card-media-shell">
                <span className="project-category-badge">{project.category}</span>
                <div className="card-graphic-layer">
                  <div className="floating-initials">{project.title.substring(0, 2).toUpperCase()}</div>
                </div>
              </div>
              <div className="card-info-shell">
                <div className="info-top">
                  <h3>{project.title}</h3>
                  <span className="info-year">{project.year}</span>
                </div>
                <p className="info-tagline">{project.tagline}</p>
                <div className="info-tech-stack">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && <span className="tech-pill-more">+{project.techStack.length - 4}</span>}
                </div>
                <div className="card-links-row">
                  <Link to={`/projects/${project.id}`} className="card-action-btn primary-action">
                    Read Case Study
                  </Link>
                  <div className="card-external-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" title="View Code">
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" title="Live Preview">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== AREAS OF EXPERTISE & DYNAMIC VISUALIZER ==================== */}
      <section className="specialty-visualizer-section">
        <div className="specialty-header-col">
          <div className="section-label">
            <span className="shimmer">System Capabilities</span>
          </div>
          <ScrollFloat elementType="h2">Areas of Specialty</ScrollFloat>
        </div>

        <div className="specialty-grid-canvas">
          <div className="specialty-accordion-list">
            {specialties.map((item, idx) => (
              <div 
                key={idx} 
                className={`specialty-accordion-item ${activeSpecialty === idx ? 'active' : ''}`}
                onMouseEnter={() => setActiveSpecialty(idx)}
                onClick={() => setActiveSpecialty(idx)}
              >
                <div className="accordion-header">
                  <div className="accordion-title-row">
                    <span className="accordion-icon">{item.icon}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <ChevronRight className="arrow-indicator" size={16} />
                </div>
                <AnimatePresence initial={false}>
                  {activeSpecialty === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="accordion-content"
                    >
                      <p>{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="visualizer-screen-container">
            <div className="visualizer-screen">
              <div className="screen-header-bar">
                <div className="screen-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="screen-title">visualizer_node.py</span>
              </div>
              <div className="screen-canvas-body">
                {renderVisualizerContent()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOME PREMIUM SKILLS HUB ==================== */}
      <section className="home-skills-section">
        <div className="section-label">
          <span className="shimmer">Toolkit &amp; Trait Explorer</span>
        </div>
        <ScrollFloat elementType="h2">Professional Capabilities</ScrollFloat>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-subtitle">
          An interactive overview of my technical stack, systems competence, and professional traits.
        </motion.p>

        <div className="home-skills-grid">
          {/* Left Block: Soft Skills Card */}
          <motion.div className="home-soft-skills-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="soft-skills-card-header">
              <span>Interpersonal Traits</span>
              <h3>Soft Skills</h3>
              <p>Valuable professional characteristics that drive project execution, client relations, and team synergy.</p>
            </div>
            
            <div className="home-soft-skills-list">
              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Creativity &amp; Problem-Solving</h4>
                  <p>Developing unique visual designs and technical workarounds.</p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Team Collaboration</h4>
                  <p>Seamlessly co-ordinating with developers, designers, and managers.</p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Public Speaking</h4>
                  <p>Presenting products and pitching corporate strategies confidently.</p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Attention to Detail</h4>
                  <p>Ensuring pixel-perfect alignment and highly secure server logic.</p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Customer Orientation</h4>
                  <p>Focusing on user-centric layouts that boost customer conversion.</p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Adaptability</h4>
                  <p>Rapidly acquiring new languages, tools, and industry standards.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Dynamic Interactive Tech Stack Explorer */}
          <motion.div className="home-tech-explorer-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="explorer-header">
              <span>Stack Navigator</span>
              <h3>Technical Stack</h3>
              <p>Explore my systems toolkit by navigating the categories below.</p>
            </div>

            <div className="explorer-body">
              {/* Explorer Tabs (Left Side of Block) */}
              <div className="explorer-tabs">
                {techCategories.map((cat, idx) => (
                  <button 
                    key={cat.id} 
                    className={`explorer-tab ${activeSkillTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveSkillTab(idx)}
                  >
                    <span className="tab-indicator"></span>
                    {cat.title}
                  </button>
                ))}
              </div>

              {/* Explorer Display Canvas (Right Side of Block) */}
              <div className="explorer-canvas">
                <div className="canvas-content">
                  <h4>{techCategories[activeSkillTab].title}</h4>
                  <p className="canvas-desc">{techCategories[activeSkillTab].desc}</p>
                  
                  <div className="canvas-tags-label">Associated Technologies:</div>
                  <div className="canvas-tags">
                    {techCategories[activeSkillTab].skills.map((skill, index) => (
                      <span key={index} className="canvas-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="testimonials-section">
        <div className="testimonials-left">
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            <span className="shimmer">Testimonials</span>
          </div>
          <ScrollFloat elementType="h2">What others say</ScrollFloat>
          <p style={{ margin: '1rem 0 1.5rem', color: 'var(--text-secondary)' }}>
            I've worked with some amazing people over the years, here is what they have to say about me.
          </p>
          <a href="https://www.linkedin.com/in/nathan-ma-ajo" target="_blank" rel="noreferrer" className="linkedin-link">
            Check it out on LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>

        <TestimonialCard />
      </section>

      {/* ==================== CTA BOTTOM ==================== */}
      <div className="cta-bottom">
        <div className="available-badge">
          <div className="available-dot pulsing"></div>
          Available for work
        </div>
        <ScrollFloat elementType="h2">{"Let's create your\nnext big idea."}</ScrollFloat>
        <Link to="/contact">
          <button className="cta-bottom-btn">Contact Me</button>
        </Link>
      </div>
    </motion.div>
  );
}
