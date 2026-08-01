import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Tag, Calendar, CheckCircle2 } from 'lucide-react';
import SplitText from '../components/ui/SplitText';

export default function Changelog() {
  const logs = [
    {
      version: "v2.0.0",
      date: "August 2026",
      headline: "Digital Headquarters Redesign",
      commits: [
        "Migrated to modular subfolder components (ui, shared, layout)",
        "Added interactive Specialty Visualizer accordion on homepage",
        "Implemented metrics dashboard with glassmorphic cards row",
        "Added multi-page primary routing (Experience, Expertise, Leadership, Learning)",
        "Created utility pages: uses, changelog, media-kit",
        "Passed full build compilation with Vite, Rolldown, and React Router"
      ]
    },
    {
      version: "v1.2.0",
      date: "July 2026",
      headline: "Case Study & Project Integrations",
      commits: [
        "Created custom social icons and navigation bar overlays",
        "Wrote structured case studies for ReliefGrid and SmartHub AgroChain",
        "Optimized image lazy loading and SVG scaling",
        "Set up dynamic routes for deep case study reading"
      ]
    },
    {
      version: "v1.0.0",
      date: "June 2026",
      headline: "Initial Vite Deployment",
      commits: [
        "Configured Vite config environment and React Router DOM bindings",
        "Implemented dark mode design token framework",
        "Configured basic project data stores and credentials archive"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper changelog-page"
    >
      <section className="internal-hero">
        <div className="section-label">
          <span className="shimmer">Release History</span>
        </div>
        <SplitText tag="h1" className="internal-title" delay={30} duration={1.2}>
          System Changelog
        </SplitText>
        <p className="internal-subtitle">
          An ongoing log of version updates, repository commits, feature deployments, and layout iterations.
        </p>
      </section>

      <section className="changelog-content-section">
        <div className="changelog-timeline">
          {logs.map((log, idx) => (
            <div key={idx} className="changelog-node">
              <div className="changelog-left">
                <div className="version-tag">
                  <Tag size={12} className="tag-icon" />
                  <span>{log.version}</span>
                </div>
                <span className="changelog-date">
                  <Calendar size={12} />
                  <span>{log.date}</span>
                </span>
              </div>

              <div className="changelog-right">
                <div className="changelog-header-row">
                  <h4>{log.headline}</h4>
                </div>
                
                <ul className="changelog-commits-list">
                  {log.commits.map((commit, cIdx) => (
                    <li key={cIdx}>
                      <GitCommit size={14} className="commit-dot" />
                      <span>{commit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
