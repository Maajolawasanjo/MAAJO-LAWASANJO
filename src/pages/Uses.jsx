import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Code, Settings } from 'lucide-react';
import SplitText from '../components/ui/SplitText';

export default function Uses() {
  const categories = [
    {
      title: "Workstation Hardware",
      icon: <Laptop size={20} />,
      items: [
        { name: "Asus AMD Ryzen 5", spec: "Primary development machine for coding, design, and local model inference" },
        { name: "External IPS Monitor", spec: "Secondary screen vertical layout for side-by-side terminal logs & documentation" },
        { name: "Peripheral Inputs", spec: "Ergonomic keyboard and precision mouse for design system vector editing" }
      ]
    },
    {
      title: "Editor & Software environment",
      icon: <Code size={20} />,
      items: [
        { name: "VS Code & Cursor IDE", spec: "Equipped with AI plugins, linting, and custom editor keybindings" },
        { name: "Linux Bash Shell", spec: "Native terminal script execution, Docker automation, and file manipulation" },
        { name: "Figma & Creative Suite", spec: "Vector UI layouts, branding guides, and high-fidelity mockups" }
      ]
    },
    {
      title: "Developer Utilities & Database",
      icon: <Settings size={20} />,
      items: [
        { name: "DBeaver & DataGrip", spec: "Database access tool for PostgreSQL, SQLite, and enterprise SQL query validation" },
        { name: "Postman & Insomnia", spec: "HTTP REST API testing client for FastAPI, Node.js, and external payment webhooks" },
        { name: "Git & Version Control", spec: "Multi-branch deployment flow linked directly to GitHub Actions and Vercel" }
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper uses-page"
    >
      <section className="internal-hero">
        <div className="section-label">
          <span className="shimmer">Developer Rig</span>
        </div>
        <SplitText tag="h1" className="internal-title" delay={30} duration={1.2}>
          Uses &amp; Setup
        </SplitText>
        <p className="internal-subtitle">
          An inventory of my workstation gear, IDE setup, database clients, and creative software.
        </p>
      </section>

      <section className="uses-content-section">
        <div className="uses-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="uses-category-card">
              <div className="category-header">
                <span className="cat-icon-box">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              
              <div className="uses-items-list">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="uses-item">
                    <h4>{item.name}</h4>
                    <p>{item.spec}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
