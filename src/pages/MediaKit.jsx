import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDownRight, Award, Megaphone } from 'lucide-react';
import SplitText from '../components/ui/SplitText';

export default function MediaKit() {
  const speakingTopics = [
    { title: "AI Product Engineering", desc: "How to design multi-agent workflows, prompt routing, and RAG pipelines for real-world user utility." },
    { title: "Bridge Design & Code", desc: "Tactical workflows for reducing latency between design ideas (Figma) and front-end rendering." },
    { title: "Hackathon Winning Strategy", desc: "Applying intense focus, modular boilerplate architectures, and rapid presentation design to win global hackathons." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper mediakit-page"
    >
      <section className="internal-hero">
        <div className="section-label">
          <span className="shimmer">Public Relations</span>
        </div>
        <SplitText tag="h1" className="internal-title" delay={30} duration={1.2}>
          Media Kit
        </SplitText>
        <p className="internal-subtitle">
          Speaker biographies, high-resolution media resources, speaking topics, and press details.
        </p>
      </section>

      <section className="mediakit-content-section">
        <div className="mediakit-split-grid">
          
          {/* Bio & Details Column */}
          <div className="mediakit-main-col">
            <h3 className="sub-section-title">Speaker Profile</h3>
            
            <div className="bio-block-card">
              <h4>Ma'ajo Lawasanjo Nathan</h4>
              <span className="bio-tagline">AI Product Engineer &amp; Designer</span>
              
              <p className="bio-text">
                Ma'ajo Lawasanjo Nathan is an AI Product Engineer and Designer based in Lagos, Nigeria. He is the founder of Inteleva Group, a startup venture building intelligent software products, and the co-founder of Design &amp; Code, a community initiative dedicated to bridging the workflow gaps between design and development.
              </p>
              <p className="bio-text">
                With a deep background in visual communication and software engineering, Ma'ajo specializes in building high-fidelity client-side user interfaces, deploying scalable cloud databases, and integrating agentic artificial intelligence workflows. He was a core builder of ReliefGrid, the CockroachDB × AWS Hackathon submission focused on Anticipatory Action early warnings.
              </p>
            </div>

            <div className="speaking-section">
              <h3 className="sub-section-title">Speaking &amp; Panel Topics</h3>
              <div className="topics-list">
                {speakingTopics.map((topic, idx) => (
                  <div key={idx} className="topic-card">
                    <h5>{topic.title}</h5>
                    <p>{topic.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resources & Contact Sidebar */}
          <div className="mediakit-sidebar-col">
            
            {/* Press Assets */}
            <div className="assets-card-box">
              <h3 className="sub-section-title">Media Resources</h3>
              <p className="assets-p">Download verified assets for event programs and speaking introductions.</p>
              
              <div className="assets-download-list">
                <a href="#download-headshot" className="asset-download-btn">
                  <span>Speaker Headshot (High-Res)</span>
                  <ArrowDownRight size={16} />
                </a>
                <a href="#download-cv" className="asset-download-btn">
                  <span>Professional CV / PDF Resume</span>
                  <ArrowDownRight size={16} />
                </a>
                <a href="#download-speaker-card" className="asset-download-btn">
                  <span>Speaker Bio Sheet (PDF)</span>
                  <ArrowDownRight size={16} />
                </a>
              </div>
            </div>

            {/* Press Contact */}
            <div className="press-contact-card-box">
              <div className="press-icon-header">
                <Megaphone size={20} className="press-icon" />
                <h4>Press Inquiries</h4>
              </div>
              <p>For podcast bookings, panel speaking, or media interviews, reach out via the email below.</p>
              
              <a href="mailto:maajolawasanjo@gmail.com" className="press-email-link">
                <Mail size={16} />
                <span>maajolawasanjo@gmail.com</span>
              </a>
            </div>

          </div>

        </div>
      </section>
    </motion.div>
  );
}
