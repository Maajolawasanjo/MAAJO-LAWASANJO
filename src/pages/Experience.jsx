import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Award, Zap, Layers, BarChart2 } from 'lucide-react';
import { experiences, experienceTimeline } from '../data/experience';
import SplitText from '../components/ui/SplitText';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function Experience() {
  const [expandedId, setExpandedId] = useState('unified-payments');
  
  const matrixData = [
    { name: 'Unified Payments', eng: 5, des: 1, ai: 1, lead: 2, biz: 5 },
    { name: 'Inteleva Group', eng: 5, des: 5, ai: 5, lead: 5, biz: 5 },
    { name: 'MA\'AJO DIGITAL', eng: 2, des: 5, ai: 1, lead: 5, biz: 4 },
    { name: 'Design & Code', eng: 4, des: 5, ai: 3, lead: 4, biz: 3 },
    { name: 'SmartHub AgroChain', eng: 5, des: 4, ai: 4, lead: 3, biz: 4 },
    { name: 'NUTM IT Support', eng: 3, des: 1, ai: 1, lead: 3, biz: 1 },
    { name: 'STEMise', eng: 2, des: 2, ai: 1, lead: 4, biz: 3 },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span 
        key={i} 
        className={`competence-dot ${i < rating ? 'active' : ''}`}
      />
    ));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper experience-page"
    >
      {/* ==================== HERO HEADER ==================== */}
      <section className="internal-hero">
        <div className="section-label">
          <span className="shimmer">Career Ledger</span>
        </div>
        <SplitText tag="h1" className="internal-title" delay={30} duration={1.2}>
          Professional Journey
        </SplitText>
        <p className="internal-subtitle">
          Mapping my trajectory across design, software engineering, startup leadership, and enterprise fintech systems.
        </p>
      </section>

      {/* ==================== EXPERIENCE MATRICES ==================== */}
      <section className="experience-timeline-container">
        <div className="experience-split-grid">
          
          {/* Left Column: Interactive Timeline List */}
          <div className="experience-list-panel">
            <h3 className="sub-section-title">Roles &amp; Tenures</h3>
            <div className="timeline-cards-wrapper">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className={`experience-card-item ${expandedId === exp.id ? 'active' : ''}`}
                  onClick={() => setExpandedId(exp.id)}
                >
                  <div className="card-top-header">
                    <div className="company-logo-badge">
                      <Briefcase size={16} />
                    </div>
                    <div className="company-info">
                      <h4>{exp.company}</h4>
                      <span className="duration-pill">{exp.duration}</span>
                    </div>
                  </div>
                  
                  <div className="role-headline-row">
                    <span className="role-text">{exp.role}</span>
                    <span className="role-type-badge">{exp.type}</span>
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="expanded-job-details"
                      >
                        <p className="job-summary">{exp.summary}</p>
                        
                        <div className="responsibilities-title">Core Contributions:</div>
                        <ul className="responsibilities-list">
                          {exp.responsibilities.map((resp, index) => (
                            <li key={index}>
                              <CheckCircle2 size={12} className="check-bullet" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="job-tech-stack">
                          {exp.techStack.map((tech) => (
                            <span key={tech} className="tech-pill">{tech}</span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Competency Matrix & Timeline */}
          <div className="experience-sidebar-panel">
            
            {/* Timeline Progress */}
            <div className="sidebar-timeline-box">
              <h3 className="sub-section-title">Evolutionary Roadmap</h3>
              <div className="mini-timeline-track">
                {experienceTimeline.map((item, idx) => (
                  <div key={idx} className="mini-timeline-node">
                    <div className="node-year">{item.year}</div>
                    <div className="node-dot-line">
                      <span className="node-dot"></span>
                      {idx < experienceTimeline.length - 1 && <span className="node-line"></span>}
                    </div>
                    <div className="node-event">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Star-Based Competence Matrix */}
            <div className="sidebar-matrix-box">
              <h3 className="sub-section-title">Competency Ratings</h3>
              <p className="matrix-desc">Verified skill distribution mapping across active platforms and historical roles.</p>
              
              <div className="competency-matrix-table">
                <div className="matrix-table-header">
                  <span>Role</span>
                  <span>Eng</span>
                  <span>Des</span>
                  <span>AI</span>
                  <span>Biz</span>
                </div>
                
                <div className="matrix-table-body">
                  {matrixData.map((row, idx) => (
                    <div key={idx} className="matrix-table-row">
                      <span className="row-company">{row.name}</span>
                      <span className="row-rating">{renderStars(row.eng)}</span>
                      <span className="row-rating">{renderStars(row.des)}</span>
                      <span className="row-rating">{renderStars(row.ai)}</span>
                      <span className="row-rating">{renderStars(row.biz)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </motion.div>
  );
}
