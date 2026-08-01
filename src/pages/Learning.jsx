import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, Clock, Calendar, CheckCircle2, ChevronRight, Zap, Target } from 'lucide-react';
import { certifications, learningRoadmap, appliedMetrics } from '../data/certifications';
import SplitText from '../components/ui/SplitText';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function Learning() {
  const [activeCategory, setActiveCategory] = useState('aiSystems');

  const roadmapTitles = {
    aiSystems: "AI Systems & Agents",
    cloudInfrastructure: "Cloud & Infrastructure",
    softwareArchitecture: "Software Architecture",
    productBusiness: "Product & Operations"
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper learning-page"
    >
      {/* ==================== HERO HEADER ==================== */}
      <section className="internal-hero">
        <div className="section-label">
          <span className="shimmer">Credentials Ledger</span>
        </div>
        <SplitText tag="h1" className="internal-title" delay={30} duration={1.2}>
          Continuous Learning
        </SplitText>
        <p className="internal-subtitle">
          Acquiring knowledge through rigorous coursework, professional certifications, hackathon projects, and system building.
        </p>
      </section>

      {/* ==================== METRICS ROW ==================== */}
      <section className="learning-metrics-section">
        <div className="learning-metrics-grid">
          <div className="learning-metric-card">
            <span className="metric-number">{appliedMetrics.certifications}</span>
            <span className="metric-lbl">Certifications</span>
          </div>
          <div className="learning-metric-card">
            <span className="metric-number">{appliedMetrics.courses}</span>
            <span className="metric-lbl">Courses Completed</span>
          </div>
          <div className="learning-metric-card">
            <span className="metric-number">{appliedMetrics.appliedHours}</span>
            <span className="metric-lbl">Practical Dev Hours</span>
          </div>
          <div className="learning-metric-card">
            <span className="metric-number">{appliedMetrics.productsBuilt}</span>
            <span className="metric-lbl">AI &amp; Web Products</span>
          </div>
        </div>
      </section>

      {/* ==================== SPLIT CONTENT ==================== */}
      <section className="learning-body-section">
        <div className="learning-split-layout">
          
          {/* Left panel: Certifications Grid */}
          <div className="certs-stream-panel">
            <h3 className="sub-section-title">Verified Credentials</h3>
            <div className="certs-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="cert-item-card">
                  <div className="cert-item-header">
                    <div className="cert-badge-box">
                      <Award size={20} />
                    </div>
                    <div className="cert-meta-info">
                      <h4>{cert.title}</h4>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                    <span className="cert-date-badge">
                      <Calendar size={12} className="meta-icon" />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  <p className="cert-summary-text">{cert.summary}</p>
                  
                  {cert.idCode && (
                    <div className="cert-id-badge">
                      <span>Credential ID:</span> <code>{cert.idCode}</code>
                    </div>
                  )}

                  <div className="cert-skills-row">
                    {cert.skillsGained.map((sk) => (
                      <span key={sk} className="skill-pill-small">{sk}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Active learning roadmap tab layout */}
          <div className="roadmap-sticky-panel">
            <div className="roadmap-tab-box">
              <h3 className="sub-section-title">Knowledge Roadmap</h3>
              <p className="roadmap-p">Topics actively being studied, built, or scheduled for future projects.</p>

              {/* Sidebar Tabs */}
              <div className="roadmap-tabs">
                {Object.keys(learningRoadmap).map((cat) => (
                  <button
                    key={cat}
                    className={`roadmap-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    <span>{roadmapTitles[cat]}</span>
                    <ChevronRight size={14} className="tab-btn-arrow" />
                  </button>
                ))}
              </div>

              {/* Roadmap item list display */}
              <div className="roadmap-active-display">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="roadmap-list-wrap"
                  >
                    <span className="active-cat-title">{roadmapTitles[activeCategory]}</span>
                    <ul className="roadmap-bullets">
                      {learningRoadmap[activeCategory].map((item, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={14} className="bullet-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
