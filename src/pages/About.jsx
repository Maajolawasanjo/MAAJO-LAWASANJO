import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ArrowUpRight, Award, Compass, MessageCircle, FileText, Palette, Code, Cpu, Share2, MonitorPlay, Brain, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/hero.png';
import LogoLoop from '../components/shared/LogoLoop';
import ScrollFloat from '../components/ui/ScrollFloat';
import SplitText from '../components/ui/SplitText';
import { experiences } from '../data/experience';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRadixui,
  SiNodedotjs, SiSupabase, SiHono,
  SiPython, SiR, SiCplusplus,
  SiOpenai, SiZapier,
  SiCanva, SiFigma,
  SiVercel, SiGithub, SiGooglecloud,
  SiGoogle, SiInstagram
} from 'react-icons/si';
import { FaJava, FaFileWord, FaFileExcel, FaFilePowerpoint, FaDatabase } from 'react-icons/fa6';
import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeAfterEffect, TbVector, TbApi, TbBrandOffice } from 'react-icons/tb';

export default function About() {
  const currentYear = new Date().getFullYear();

  const createLogoNode = (icon, text) => (
    <div className="loop-logo-item">
      <span className="loop-logo-icon">{icon}</span>
      <span className="loop-logo-text">{text}</span>
    </div>
  );

  const techLogos = [
    // Front-End Development
    { node: createLogoNode(<SiHtml5 />, "HTML5"), href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: createLogoNode(<SiCss />, "CSS3"), href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: createLogoNode(<SiJavascript />, "JavaScript"), href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: createLogoNode(<SiTypescript />, "TypeScript"), href: "https://www.typescriptlang.org" },
    { node: createLogoNode(<SiReact />, "React.js"), href: "https://react.dev" },
    { node: createLogoNode(<SiNextdotjs />, "Next.js"), href: "https://nextjs.org" },
    { node: createLogoNode(<SiTailwindcss />, "Tailwind CSS"), href: "https://tailwindcss.com" },
    { node: createLogoNode(<span style={{ fontFamily: 'var(--font-clash)', fontWeight: 'bold', fontSize: '0.85rem' }}>shadcn</span>, "shadcn/ui"), href: "https://ui.shadcn.com" },
    { node: createLogoNode(<SiRadixui />, "Radix UI"), href: "https://www.radix-ui.com" },
    
    // Back-End & Database
    { node: createLogoNode(<SiNodedotjs />, "Node.js"), href: "https://nodejs.org" },
    { node: createLogoNode(<SiSupabase />, "Supabase"), href: "https://supabase.com" },
    { node: createLogoNode(<SiHono />, "Hono"), href: "https://hono.dev" },
    { node: createLogoNode(<TbApi />, "REST API"), href: "https://en.wikipedia.org/wiki/REST" },
    
    // Programming Languages
    { node: createLogoNode(<SiPython />, "Python"), href: "https://www.python.org" },
    { node: createLogoNode(<SiR />, "R"), href: "https://www.r-project.org" },
    { node: createLogoNode(<SiCplusplus />, "C++"), href: "https://isocpp.org" },
    { node: createLogoNode(<FaJava />, "Java"), href: "https://www.oracle.com/java/" },
    
    // AI & Automation
    { node: createLogoNode(<SiOpenai />, "AI API"), href: "https://openai.com" },
    { node: createLogoNode(<SiZapier />, "Zapier"), href: "https://zapier.com" },
    
    // Design Tools
    { node: createLogoNode(<TbBrandAdobePhotoshop />, "Photoshop"), href: "https://www.adobe.com/products/photoshop.html" },
    { node: createLogoNode(<TbBrandAdobeIllustrator />, "Illustrator"), href: "https://www.adobe.com/products/illustrator.html" },
    { node: createLogoNode(<TbVector />, "CorelDRAW"), href: "https://www.coreldraw.com" },
    { node: createLogoNode(<SiCanva />, "Canva"), href: "https://www.canva.com" },
    { node: createLogoNode(<SiFigma />, "Figma"), href: "https://www.figma.com" },
    
    // Cloud & Deployment
    { node: createLogoNode(<SiVercel />, "Vercel"), href: "https://vercel.com" },
    { node: createLogoNode(<SiGithub />, "GitHub"), href: "https://github.com" },
    { node: createLogoNode(<SiGooglecloud />, "Google Cloud"), href: "https://cloud.google.com" },
    
    // Office & Productivity
    { node: createLogoNode(<FaFileWord />, "MS Word"), href: "https://www.microsoft.com/en-us/microsoft-365/word" },
    { node: createLogoNode(<FaFileExcel />, "MS Excel"), href: "https://www.microsoft.com/en-us/microsoft-365/excel" },
    { node: createLogoNode(<FaFilePowerpoint />, "MS PowerPoint"), href: "https://www.microsoft.com/en-us/microsoft-365/powerpoint" },
    { node: createLogoNode(<FaDatabase />, "MS Access"), href: "https://www.microsoft.com/en-us/microsoft-365/access" },
    { node: createLogoNode(<SiGoogle />, "Google Workspace"), href: "https://workspace.google.com" },
    
    // Media Production
    { node: createLogoNode(<TbBrandAdobeAfterEffect />, "After Effects"), href: "https://www.adobe.com/products/aftereffects.html" },
    { node: createLogoNode(<SiInstagram />, "Social Strategy"), href: "https://www.instagram.com" }
  ];

  const getInitials = (name) => {
    return name.replace("MA'AJO", "Maajo").split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  };

  const experience = experiences.map(job => ({
    avatar: getInitials(job.company),
    title: job.role,
    company: job.company,
    date: job.duration
  }));

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      content: "Understanding the client's goals and target audience. Come, one at a time, one detail at a time."
    },
    {
      step: '02',
      title: 'Wireframe',
      content: "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper."
    },
    {
      step: '03',
      title: 'Design',
      content: 'The most fun part of all — adding pizzaz to the wireframes and bring it to life.'
    },
    {
      step: '04',
      title: 'Development',
      content: 'The design may be final but it needs to be functional and practical. Development is key.'
    },
    {
      step: '05',
      title: 'Quality Assurance',
      content: 'Website load times, SEO, file optimization, etc., weigh in to the quality of the site.'
    }
  ];

  const credentials = [
    { title: 'B.Tech in Technology & Management (In Progress)', date: 'NUTM, Lagos (2024 - 2028)' },
    { title: 'Microsoft Azure AI Engineer Associate (AI-102)', date: 'June 2026' },
    { title: 'AWS AI Practitioner Challenge (Udacity)', date: 'May 2026' },
    { title: 'Claude AI Learning (Anthropic)', date: 'June 2026' },
    { title: 'Universal AI & Python (MIT Open Learning)', date: 'June 2026' },
    { title: 'NITDA / 3MTT Software Dev Programme', date: 'CERTIFIED (2025)' },
    { title: 'Professional Graphics Design Certification', date: 'CERTIFIED' }
  ];

  const communityWork = [
    {
      title: 'Mentoring',
      content: 'Get connected with a mentor that will help you pave your career path.'
    },
    {
      title: 'Opportunities',
      content: 'Get Internships and Job opportunities and gain experience while you learn.'
    },
    {
      title: 'Free Resources',
      content: 'Get Free resources related to Designing and Development from the community.'
    },
    {
      title: 'Help & Reviews',
      content: 'Get your portfolio and projects reviewed by Industry experts and mentors.'
    }
  ];

  // Build letters dynamically for the circular rotating text ring
  const ringText = 'LETS TALK • LETS TALK • ';
  const chars = ringText.split('');
  const radius = 40;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper grow"
    >
      {/* ==================== ABOUT HERO ==================== */}
      <section className="about-hero">
        <div className="about-image-col">
          <Tilt 
            tiltMaxAngleX={10} 
            tiltMaxAngleY={10} 
            glareEnable={true} 
            glareMaxOpacity={0.25} 
            glarePosition="all" 
            scale={1.02} 
            transitionSpeed={1500}
            className="about-image-wrap"
            style={{ width: '100%', height: '100%' }}
          >
            <img 
              src={heroImage} 
              alt="Ma'ajo Lawasanjo" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.minHeight = '420px';
              }}
            />
          </Tilt>
          <Link to="/contact" className="lets-talk-badge" aria-label="Let's Talk">
            <div className="badge-text-ring">
              {chars.map((char, index) => {
                const angle = (index / chars.length) * 360;
                const rad = (angle * Math.PI) / 180;
                return (
                  <span
                    key={index}
                    style={{
                      left: `calc(50% + ${radius * Math.sin(rad)}px)`,
                      top: `calc(50% - ${radius * Math.cos(rad)}px)`,
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
            <div className="badge-arrow-icon">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>

        <div className="about-text-col">
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            <span className="shimmer">About Me</span>
          </div>
          <SplitText tag="h1" delay={30} duration={1.2} textAlign="left">
            A <span className="highlight">Full-Stack Developer</span><br className="hidden md:inline" /> &amp; <span className="highlight">AI Product Builder</span>
          </SplitText>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lead-text">I build complete, production-ready digital products — from intelligent SaaS platforms and healthcare systems to agri-tech marketplaces.</motion.p>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>My technical expertise is backed by a sharp graphics design and visual identity instinct that most engineers don't possess. I don't just write code; I design the experience, build the system, and make it look like a premium, funded product.</motion.p>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Currently pursuing a B.Tech at the <strong>Nigerian University of Technology and Management (NUTM)</strong> in Lagos, Nigeria, while certified by Microsoft and NITDA/3MTT.</motion.p>
          
          <div style={{ marginTop: '1.5rem' }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span className="btn-ripple"></span>
                My Resume
                <FileText size={14} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS LOGO LOOP ==================== */}
      <div className="skills-marquee-wrap" style={{ padding: '1.25rem 0', background: 'var(--bg-800)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={34}
          gap={48}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="var(--bg-800)"
          ariaLabel="My Technical Tools"
        />
      </div>

      {/* ==================== CORE COMPETENCIES ==================== */}
      <section className="competencies-section">
        <div className="section-label">
          <span className="shimmer">Core Capabilities</span>
        </div>
        <ScrollFloat elementType="h2">Core Competencies</ScrollFloat>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-subtitle">
          Key strategic domains where I deliver professional-grade, end-to-end expertise.
        </motion.p>

        <div className="competencies-grid">
          {/* Card 1: Creative Design & Branding */}
          <motion.div className="competency-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="comp-icon-wrap">
              <Palette size={22} className="comp-icon" />
            </div>
            <h3>Creative Design &amp; Branding</h3>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Visual identity, brand guidelines, print &amp; digital assets, UI/UX design</motion.p>
          </motion.div>

          {/* Card 2: Full-Stack Web Development */}
          <motion.div className="competency-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="comp-icon-wrap">
              <Code size={22} className="comp-icon" />
            </div>
            <h3>Full-Stack Web Development</h3>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>End-to-end product development from wireframe to deployment</motion.p>
          </motion.div>

          {/* Card 3: AI-Driven Digital Solutions */}
          <motion.div className="competency-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="comp-icon-wrap">
              <Cpu size={22} className="comp-icon" />
            </div>
            <h3>AI-Driven Digital Solutions</h3>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Building AI-integrated tools, SaaS platforms, and automation pipelines</motion.p>
          </motion.div>

          {/* Card 4: Social Media & Digital Strategy */}
          <motion.div className="competency-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="comp-icon-wrap">
              <Share2 size={22} className="comp-icon" />
            </div>
            <h3>Social Media &amp; Digital Strategy</h3>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Content calendars, cross-platform management, growth strategy</motion.p>
          </motion.div>

          {/* Card 5: Computer Operations Training */}
          <motion.div className="competency-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="comp-icon-wrap">
              <MonitorPlay size={22} className="comp-icon" />
            </div>
            <h3>Computer Operations Training</h3>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>IT support, staff upskilling, MS Office, safe internet practices</motion.p>
          </motion.div>

          {/* Card 6: Product Thinking */}
          <motion.div className="competency-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="comp-icon-wrap">
              <Brain size={22} className="comp-icon" />
            </div>
            <h3>Product Thinking</h3>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>User-centred design, technical problem-solving, scalable architecture</motion.p>
          </motion.div>
        </div>
      </section>

      {/* ==================== DETAILED SKILLS HUB ==================== */}
      <section className="skills-hub-section">
        <div className="skills-hub-container">
          
          {/* Left Column: Soft Skills */}
          <div className="soft-skills-col">
            <div className="section-label">
              <span>Personal Strengths</span>
            </div>
            <ScrollFloat elementType="h2">Soft Skills</ScrollFloat>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="skills-sub">Key interpersonal traits and work ethics that drive successful collaboration and execution.</motion.p>
            
            <div className="soft-skills-list">
              <div className="soft-skill-item">
                <CheckCircle2 size={18} className="skill-check-icon" />
                <span>Creativity &amp; Problem-Solving</span>
              </div>
              <div className="soft-skill-item">
                <CheckCircle2 size={18} className="skill-check-icon" />
                <span>Team Collaboration</span>
              </div>
              <div className="soft-skill-item">
                <CheckCircle2 size={18} className="skill-check-icon" />
                <span>Public Speaking</span>
              </div>
              <div className="soft-skill-item">
                <CheckCircle2 size={18} className="skill-check-icon" />
                <span>Attention to Detail</span>
              </div>
              <div className="soft-skill-item">
                <CheckCircle2 size={18} className="skill-check-icon" />
                <span>Customer Orientation</span>
              </div>
              <div className="soft-skill-item">
                <CheckCircle2 size={18} className="skill-check-icon" />
                <span>Adaptability</span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Technical Skills Table */}
          <div className="tech-skills-col">
            <div className="section-label">
              <span className="shimmer">Full Toolkit</span>
            </div>
            <ScrollFloat elementType="h2">Technical Skills</ScrollFloat>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="skills-sub">Structured categorisation of my technical capabilities and systems expertise.</motion.p>

            <div className="tech-skills-matrix">
              {/* Category 1: Front-End */}
              <motion.div className="tech-category-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h4>Front-End Development</h4>
                <div className="tech-tags-list">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript (ES6+)</span>
                  <span>TypeScript</span>
                  <span>React.js</span>
                  <span>Next.js</span>
                  <span>Tailwind CSS</span>
                  <span>Shadcn/UI</span>
                  <span>Radix UI</span>
                </div>
              </motion.div>

              {/* Category 2: Back-End */}
              <motion.div className="tech-category-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h4>Back-End Development</h4>
                <div className="tech-tags-list">
                  <span>Node.js</span>
                  <span>Supabase (PostgreSQL + KV)</span>
                  <span>Hono (Deno Edge Functions)</span>
                  <span>REST APIs</span>
                </div>
              </motion.div>

              {/* Category 3: Programming Languages */}
              <motion.div className="tech-category-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h4>Programming Languages</h4>
                <div className="tech-tags-list">
                  <span>Python</span>
                  <span>R</span>
                  <span>C++</span>
                  <span>Java</span>
                </div>
              </motion.div>

              {/* Category 4: AI & Automation */}
              <motion.div className="tech-category-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h4>AI &amp; Automation</h4>
                <div className="tech-tags-list">
                  <span>AI API Integration</span>
                  <span>Workflow Automation</span>
                  <span>Prompt Engineering</span>
                  <span>AI-Assisted Content Production</span>
                </div>
              </motion.div>

              {/* Category 5: Design Tools */}
              <motion.div className="tech-category-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h4>Design Tools</h4>
                <div className="tech-tags-list">
                  <span>Adobe Illustrator</span>
                  <span>Adobe Photoshop</span>
                  <span>CorelDRAW</span>
                  <span>Canva</span>
                  <span>Figma</span>
                </div>
              </motion.div>

              {/* Category 6: Cloud & Deployment */}
              <motion.div className="tech-category-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h4>Cloud &amp; Deployment</h4>
                <div className="tech-tags-list">
                  <span>Vercel</span>
                  <span>GitHub</span>
                  <span>Google Cloud Tools</span>
                </div>
              </motion.div>

              {/* Category 7: Office & Productivity */}
              <motion.div className="tech-category-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h4>Office &amp; Productivity</h4>
                <div className="tech-tags-list">
                  <span>Microsoft Word</span>
                  <span>Excel</span>
                  <span>PowerPoint</span>
                  <span>Access</span>
                  <span>Google Workspace</span>
                </div>
              </motion.div>

              {/* Category 8: Media Production */}
              <motion.div className="tech-category-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h4>Media Production</h4>
                <div className="tech-tags-list">
                  <span>Motion Graphics</span>
                  <span>Livestream Visuals</span>
                  <span>Broadcast Asset Management</span>
                  <span>Social Media Strategy</span>
                </div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ==================== WORK EXPERIENCE ==================== */}
      <section className="exp-section">
        <div className="exp-left">
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>
            <span>Work History</span>
          </div>
          <ScrollFloat elementType="h2">Experience</ScrollFloat>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>I have built deployed applications across healthcare, agri-tech, education, and civic sectors.</motion.p>
        </div>

        <div className="exp-right">
          {experience.map((job, idx) => (
            <div key={idx} className="exp-row">
              <div 
                className="exp-avatar" 
                style={{ 
                  background: '#0a1122', 
                  color: 'var(--highlight-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}
              >
                {job.avatar}
              </div>
              <div className="exp-info">
                <h4>{job.title}</h4>
                <span>{job.company}</span>
              </div>
              <span className="exp-date">{job.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== DESIGN PROCESS ==================== */}
      <section className="process-section">
        <div className="section-label">
          <span>Steps I Follow</span>
        </div>
        <ScrollFloat elementType="h2">My Design Process</ScrollFloat>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>I have worked with some of the most innovative industry leaders to help build their top-notch products.</motion.p>

        <div className="process-scroll">
          {processSteps.map((step, idx) => (
            <motion.div key={idx} className="proc-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="proc-icon">
                <Compass size={20} />
              </div>
              <h4>{step.step}. {step.title}</h4>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>{step.content}</motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== EDUCATION & CREDENTIALS ==================== */}
      <section className="awards-section">
        <div className="awards-left">
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>
            <span>Credentials</span>
          </div>
          <ScrollFloat elementType="h2">{"Education &\nCertifications"}</ScrollFloat>
        </div>

        <div className="awards-right">
          {credentials.map((cred, idx) => (
            <div key={idx} className="award-row">
              <h4>{cred.title}</h4>
              <span>{cred.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== COMMUNITY WORK ==================== */}
      <section className="community-section">
        <motion.div className="comm-cards" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          {communityWork.map((card, idx) => (
            <motion.div key={idx} className="comm-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="comm-icon">
                <Award size={20} />
              </div>
              <h4>{card.title}</h4>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>{card.content}</motion.p>
            </motion.div>
          ))}
        </motion.div>

        <div className="comm-content">
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>
            <span className="shimmer">Community Work</span>
          </div>
          <ScrollFloat elementType="h2">Building a Tech Community</ScrollFloat>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>I founded Design &amp; Code which is a global community with a mission to connect designers and developers to create a happy community eager to learn, innovate and grow together. We welcome all designers and developers: beginners, intermediates, and experts willing to learn together. We encourage sharing resources and learning experiences, organizing events, and providing feedback for our members to grow as they learn.</motion.p>
          
          <div className="comm-stats">
            <div className="comm-stat"><strong>5k+</strong><span>Community Members</span></div>
            <div className="comm-stat"><strong>25+</strong><span>Events conducted</span></div>
            <div className="comm-stat"><strong>5</strong><span>Years</span></div>
          </div>
          
          <a href="https://www.linkedin.com/in/nathan-ma-ajo" target="_blank" rel="noreferrer">
            <button className="join-btn">Join Community</button>
          </a>
        </div>
      </section>

      {/* ==================== CTA BOTTOM ==================== */}
      <div className="cta-bottom">
        <div className="available-badge"><div className="available-dot"></div>Available for work</div>
        <ScrollFloat elementType="h2">{"Let's create your\nnext big idea."}</ScrollFloat>
        <Link to="/contact"><button className="cta-btn">Contact Me</button></Link>
      </div>
    </motion.div>
  );
}
