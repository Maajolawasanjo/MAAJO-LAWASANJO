import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Database, Cpu, Layout, Server } from 'lucide-react';
import { Github } from '../components/ui/SocialIcons';
import { caseStudies } from '../data/caseStudies';
import { projects } from '../data/projects';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function CaseStudyLayout() {
  const { id } = useParams();
  
  // Find case study details and core project metadata
  const caseStudy = caseStudies[id];
  const projectMeta = projects.find(p => p.id === id);

  // If no detailed case study exists, render a clean fallback
  if (!caseStudy) {
    return (
      <div className="page-wrapper grow container flex-center" style={{ minHeight: '80vh', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-clash)' }}>Case Study Not Found</h2>
        <p style={{ color: 'var(--text-secondary)' }}>We are currently building this case study. Stay tuned!</p>
        <Link to="/projects" className="btn btn-outline" style={{ marginTop: '1rem' }}>
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper grow"
      style={{ padding: 'var(--section-py) var(--padding-x)' }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Back Link */}
        <Link to="/projects" className="social-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        {/* Hero Section */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="section-label" style={{ marginBottom: '1rem', justifyContent: 'flex-start' }}>
            <span className="shimmer">{projectMeta?.category || 'Project Case Study'}</span>
          </span>
          
          <h1 style={{ fontFamily: 'var(--font-clash)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            {caseStudy.title}
          </h1>
          
          <p className="lead-text" style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '2rem' }}>
            {caseStudy.heroSubtitle}
          </p>

          {/* Links and Metadata */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            {projectMeta?.live && (
              <a href={projectMeta.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: 'var(--highlight-primary)', color: 'var(--text-primary)' }}>
                View Live App <ExternalLink size={14} />
              </a>
            )}
            {projectMeta?.github && (
              <a href={projectMeta.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Source Code <Github size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Meta Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '2rem', background: 'var(--bg-800)', borderRadius: '20px', border: '1px solid var(--border-color)', marginBottom: '4rem' }}>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Timeline</h4>
            <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{projectMeta?.year || '2026'}</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Key Roles</h4>
            <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {caseStudy.roles.map(role => (
                <div key={role} style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>• {role}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Status</h4>
            <span className="sk-badge" style={{ display: 'inline-flex', marginTop: '0.25rem' }}>{projectMeta?.status || 'Active'}</span>
          </div>
        </div>

        {/* Case Study Narrative Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Executive Summary */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-clash)', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Executive Summary
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {caseStudy.executiveSummary}
            </p>
          </section>

          {/* Problem & Goals */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-clash)', fontSize: '1.75rem', marginBottom: '1.25rem' }}>The Challenge</h2>
              <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>{caseStudy.problemStatement}</p>
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-clash)', fontSize: '1.75rem', marginBottom: '1.25rem' }}>Project Goals</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {caseStudy.goals.map(goal => (
                  <li key={goal} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--highlight-primary)' }}>✓</span> {goal}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-clash)', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Key System Capabilities
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {caseStudy.features.map(f => (
                <div key={f.title} style={{ padding: '1.5rem', background: 'var(--bg-800)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
                  <h3 style={{ fontFamily: 'var(--font-clash)', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Architecture */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-clash)', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Technical Stack & Architecture
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-800)', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--highlight-primary)' }}>
                  <Layout size={18} />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Frontend</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{caseStudy.architecture.frontend}</p>
              </div>

              <div style={{ padding: '1.25rem', background: 'var(--bg-800)', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--highlight-primary)' }}>
                  <Server size={18} />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Backend</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{caseStudy.architecture.backend}</p>
              </div>

              <div style={{ padding: '1.25rem', background: 'var(--bg-800)', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--highlight-primary)' }}>
                  <Database size={18} />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Database</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{caseStudy.architecture.database}</p>
              </div>

              <div style={{ padding: '1.25rem', background: 'var(--bg-800)', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--highlight-primary)' }}>
                  <Cpu size={18} />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>AI Engineering</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{caseStudy.architecture.aiEngineering}</p>
              </div>
            </div>
          </section>

          {/* Engineering Challenges */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-clash)', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Engineering Challenges & Solutions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {caseStudy.challenges.map((c, idx) => (
                <div key={idx} style={{ padding: '1.5rem', background: 'var(--bg-700)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                    <span style={{ color: 'var(--highlight-primary)', marginRight: '0.5rem' }}>⚡ Challenge:</span> {c.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>✔ Solution:</strong> {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Lessons Learned */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-clash)', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              Lessons Learned & Outcomes
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {caseStudy.lessonsLearned.map(l => (
                <li key={l} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <span style={{ color: 'var(--highlight-primary)' }}>•</span> {l}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
