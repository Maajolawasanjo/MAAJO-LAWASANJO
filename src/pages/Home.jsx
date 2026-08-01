import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Layout, Palette, ArrowRight, Cpu, Share2, MonitorPlay, Brain, CheckCircle2 } from 'lucide-react';
import CustomAccordion from '../components/CustomAccordion';
import TestimonialCard from '../components/TestimonialCard';
import ScrollFloat from '../components/ScrollFloat';
import SplitText from '../components/SplitText';
import ScrollReveal from '../components/ScrollReveal';
import DotField from '../components/DotField';
import expertiseImage from '../assets/expertise.jpg';

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
    skills: ['Node.js', 'Supabase (PostgreSQL + KV)', 'Hono (Deno Edge Functions)', 'REST APIs']
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
    skills: ['AI API Integration', 'Workflow Automation', 'Prompt Engineering', 'AI-Assisted Content Production']
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
  const [activeSkillTab, setActiveSkillTab] = React.useState(0);
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

  const skillBadges = [
    '⚡ Cypress', '🐳 Docker', '🔥 Firebase', '☁️ AWS', '🎬 GSAP', 
    '🎭 Framer Motion', '🎨 Figma', '💨 Tailwind CSS', '📦 Git', '🌐 HTML'
  ];

  const featuredProjects = [
    { id: 'SA', name: 'Smarthub Agrochain', tags: ['Agri-tech', 'Full-stack'], year: '2025' },
    { id: 'CM', name: 'CareMandate AI', tags: ['AI & Healthcare', 'SaaS'], year: '2025' },
    { id: 'PA', name: 'Prepify AI', tags: ['AI & Automation', 'Productivity'], year: '2025' },
    { id: 'FE', name: 'Footprints Energy', tags: ['React & Next.js', 'E-commerce'], year: '2024' }
  ];

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

      {/* ==================== ABOUT SNIPPET ==================== */}
      <section className="home-about">
        <div className="home-about-left">
          <div className="section-label">
            <span className="shimmer">About Me</span>
          </div>
        </div>
        <div className="home-about-right">
          <ScrollReveal textClassName="home-about-text" baseOpacity={0.1} enableBlur={true} baseRotation={2} blurStrength={3}>
            I'm <strong>Ma'ajo Lawasanjo</strong>, a <strong>Full-Stack Developer, Graphics Designer, and AI Product Builder</strong> who ships complete, production-ready digital products. I design the experience, build the system, and make it look like a premium, funded product. Currently pursuing my B.Tech at <strong>NUTM, Lagos</strong>.
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FEATURED WORK ==================== */}
      <section className="featured-projects">
        <div className="section-label">
          <span className="shimmer">Featured Work</span>
        </div>
        <ScrollFloat elementType="h2">Creating next level digital products</ScrollFloat>

        <div className="project-grid-home">
          {featuredProjects.map((project, idx) => (
            <Link key={project.name} to="/projects" className="project-card">
              <div 
                className="project-thumb" 
                style={{ 
                  background: '#0a1122', 
                  border: '1px solid var(--border-color)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <div 
                  style={{ 
                    fontFamily: 'var(--font-clash)', 
                    fontSize: '2.5rem', 
                    color: 'var(--highlight-primary)', 
                    fontWeight: 'bold', 
                    letterSpacing: '-0.03em' 
                  }}
                >
                  {project.id}
                </div>
              </div>
              <div className="project-info">
                <h5>{project.name}</h5>
                <div className="project-meta">
                  <div className="project-tags">
                    {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projects">
            <button className="view-all-btn">
              View All Projects
              <ArrowRight size={14} style={{ marginLeft: '4px' }} />
            </button>
          </Link>
        </div>
      </section>

      {/* ==================== AREAS OF EXPERTISE ==================== */}
      <section className="expertise-section">
        <div className="expertise-left">
          <div className="section-label">
            <span className="shimmer">Speciality</span>
          </div>
          <ScrollFloat elementType="h2">Areas of Expertise</ScrollFloat>
          <CustomAccordion items={specialties} />
        </div>

        <div className="expertise-right">
          <img src={expertiseImage} alt="Areas of Expertise" />
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
            <motion.div className="soft-skills-card-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span>Interpersonal Traits</span>
              <h3>Soft Skills</h3>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Valuable professional characteristics that drive project execution, client relations, and team synergy.</motion.p>
            </motion.div>
            
            <div className="home-soft-skills-list">
              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Creativity &amp; Problem-Solving</h4>
                  <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Developing unique visual designs and technical workarounds.</motion.p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Team Collaboration</h4>
                  <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Seamlessly co-ordinating with developers, designers, and managers.</motion.p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Public Speaking</h4>
                  <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Presenting products and pitching corporate strategies confidently.</motion.p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Attention to Detail</h4>
                  <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Ensuring pixel-perfect alignment and highly secure server logic.</motion.p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Customer Orientation</h4>
                  <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Focusing on user-centric layouts that boost customer conversion.</motion.p>
                </div>
              </div>

              <div className="home-soft-skill-item">
                <CheckCircle2 size={16} className="soft-icon" />
                <div className="soft-info">
                  <h4>Adaptability</h4>
                  <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Rapidly acquiring new languages, tools, and industry standards.</motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Dynamic Interactive Tech Stack Explorer */}
          <motion.div className="home-tech-explorer-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="explorer-header">
              <span>Stack Navigator</span>
              <h3>Technical Stack</h3>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Explore my systems toolkit by navigating the categories below.</motion.p>
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
                  <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="canvas-desc">{techCategories[activeSkillTab].desc}</motion.p>
                  
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
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ margin: '1rem 0 1.5rem' }}>
            I've worked with some amazing people over the years, here is what they have to say about me.
          </motion.p>
          <a href="https://www.linkedin.com/in/nathan-ma-ajo" target="_blank" rel="noreferrer" className="linkedin-link">
            Check it out on LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>

        <TestimonialCard />
      </section>

      {/* ==================== CTA BOTTOM ==================== */}
      <div className="cta-bottom">
        <div className="available-badge">
          <div className="available-dot"></div>
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
