import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Activity, Share2, Compass, Award, ExternalLink } from 'lucide-react';
import SplitText from '../components/ui/SplitText';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function Leadership() {
  const ventures = [
    {
      role: "Founder & Principal Developer",
      organization: "Inteleva Group",
      duration: "2025 – Present",
      description: "Directing product strategy, modular software architecture, and full-stack AI integration for a suite of modern software solutions across healthcare, finance, and agriculture.",
      outcomes: ["Led development of ReliefGrid from concept to operational alpha", "Orchestrated collaborative multi-disciplinary design-to-code pipelines"],
      icon: <Target size={24} />
    },
    {
      role: "Founder & Creative Director",
      organization: "MA'AJO DIGITAL",
      duration: "2024 – Present",
      description: "Managing creative branding briefs, layout guides, and marketing assets for client portfolios and growing startups, helping them establish clear, cohesive visual strategies.",
      outcomes: ["Built custom identity packages for 10+ early-stage businesses", "Standardized design-thinking frameworks to expedite client revisions"],
      icon: <Compass size={24} />
    },
    {
      role: "Co-founder",
      organization: "Design & Code",
      duration: "2025 – Present",
      description: "Co-created a platform dedicated to bridging the divide between visual designers and developers by hosting collaborative sprints, workshops, and UI templates.",
      outcomes: ["Organized multiple code prototyping sprints and system reviews", "Built custom UI packages shared across academic student networks"],
      icon: <Users size={24} />
    }
  ];

  const activities = [
    {
      role: "Volunteer Assistant",
      org: "STEMise",
      duration: "2024 – Present",
      summary: "Supported logic-building curriculum planning, student outreach, and educational platform coordination."
    },
    {
      role: "Student IT Advisor",
      org: "NUTM Support Network",
      duration: "2024 – Present",
      summary: "Diagnosed network infrastructure challenges, configured campus OS deployments, and mentored peers."
    }
  ];

  const traits = [
    { title: "Product Management", desc: "Overseeing products from prompt ideation to full production builds." },
    { title: "Strategic Positioning", desc: "Translating abstract user feedback into clear technical requirements." },
    { title: "Collaborative Sprints", desc: "Coordinating cross-functional designer and developer workflows." },
    { title: "Open Source Advocate", desc: "Publishing accessible code templates and educational resources." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper leadership-page"
    >
      {/* ==================== HERO HEADER ==================== */}
      <section className="internal-hero">
        <div className="section-label">
          <span className="shimmer">Governance &amp; Strategy</span>
        </div>
        <SplitText tag="h1" className="internal-title" delay={30} duration={1.2}>
          Product Leadership
        </SplitText>
        <p className="internal-subtitle">
          Guiding technical execution, brand positioning, collaborative product development, and academic outreach.
        </p>
      </section>

      {/* ==================== VENTURES SECTION ==================== */}
      <section className="leadership-content-section">
        <div className="leadership-grid-layout">
          
          {/* Main ventures stream */}
          <div className="ventures-stream-col">
            <h3 className="sub-section-title">Founding Ventures</h3>
            <div className="ventures-list">
              {ventures.map((vt, idx) => (
                <div key={idx} className="venture-card">
                  <div className="venture-card-header">
                    <div className="venture-icon-box">{vt.icon}</div>
                    <div className="venture-meta">
                      <h4>{vt.organization}</h4>
                      <span className="venture-role">{vt.role}</span>
                    </div>
                    <span className="venture-duration">{vt.duration}</span>
                  </div>
                  
                  <p className="venture-desc">{vt.description}</p>
                  
                  <div className="venture-outcomes-box">
                    <span className="outcomes-title">Key Milestones:</span>
                    <ul className="outcomes-list">
                      {vt.outcomes.map((ot, oIdx) => (
                        <li key={oIdx}>
                          <span className="bullet-dash">&mdash;</span>
                          <span>{ot}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar panel */}
          <div className="leadership-sidebar-col">
            
            {/* Traits */}
            <div className="traits-card-box">
              <h3 className="sub-section-title">Leadership Core</h3>
              <div className="traits-list">
                {traits.map((tr, idx) => (
                  <div key={idx} className="trait-item">
                    <div className="trait-num">0{idx + 1}</div>
                    <div className="trait-info">
                      <h5>{tr.title}</h5>
                      <p>{tr.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Volunteering */}
            <div className="activities-card-box">
              <h3 className="sub-section-title">Advocacy &amp; Advisory</h3>
              <div className="activities-list">
                {activities.map((ac, idx) => (
                  <div key={idx} className="activity-item-card">
                    <div className="activity-card-header">
                      <h5>{ac.role}</h5>
                      <span className="duration-pill">{ac.duration}</span>
                    </div>
                    <span className="activity-org">{ac.org}</span>
                    <p className="activity-summary">{ac.summary}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </motion.div>
  );
}
