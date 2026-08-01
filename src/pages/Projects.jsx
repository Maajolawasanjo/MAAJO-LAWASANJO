import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';
import ScrollFloat from '../components/ScrollFloat';
import SplitText from '../components/SplitText';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filteredProjects = projects.filter((project) => {
    // Normalise category tags (e.g. "AI & Civic Tech" -> contains "ai" or "design")
    const projectCategoryLower = project.category.toLowerCase();
    const isDevelopment = projectCategoryLower.includes('tech') || projectCategoryLower.includes('ai') || projectCategoryLower.includes('desktop');
    const isDesign = projectCategoryLower.includes('design') || projectCategoryLower.includes('branding') || projectCategoryLower.includes('ui');
    
    let matchesCategory = false;
    if (filter === 'all') {
      matchesCategory = true;
    } else if (filter === 'development') {
      matchesCategory = isDevelopment;
    } else if (filter === 'design') {
      matchesCategory = isDesign;
    }
    
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Dynamic 50/50 index split guarantees perfectly balanced staggered columns under any active filter!
  const leftColProjects = filteredProjects.filter((_, idx) => idx % 2 === 0);
  const rightColProjects = filteredProjects.filter((_, idx) => idx % 2 === 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper grow"
    >
      {/* ==================== PROJECTS HEADER ==================== */}
      <div className="projects-header">
        <div className="section-label" style={{ marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
          <span className="shimmer">My Work</span>
        </div>
        <SplitText tag="h1" delay={30} duration={1.2} textAlign="left">
          Creating next level<br />digital products
        </SplitText>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lead-text" style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          A selection of projects that showcase my expertise in full-stack development, UI/UX design, and AI integration.
        </motion.p>

        {/* Filter bar and search panel */}
        <div className="filter-bar">
          <button 
            className="filter-search-btn" 
            onClick={() => setShowSearch(!showSearch)} 
            aria-label="Search Projects"
          >
            <Search size={16} />
          </button>
          
          <div className="filter-pills">
            <button 
              className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-pill ${filter === 'development' ? 'active' : ''}`}
              onClick={() => setFilter('development')}
            >
              Development
            </button>
            <button 
              className={`filter-pill ${filter === 'design' ? 'active' : ''}`}
              onClick={() => setFilter('design')}
            >
              Design
            </button>
          </div>
        </div>

        {/* Stateful Search input box */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 50, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="form-group"
              style={{ overflow: 'hidden', maxWidth: '400px' }}
            >
              <input 
                type="text" 
                placeholder="Search by keyword or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: '0.6rem 1rem' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ==================== PROJECTS MASONRY GRID ==================== */}
      <div className="projects-grid">
        {/* Left Column (No Stagger offset) */}
        <div className="proj-col">
          {leftColProjects.map((project) => {
            const initials = project.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
            return (
              <Link 
                key={project.title} 
                className="proj-item" 
                to={`/projects/${project.id}`}
                style={{ display: 'block' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="proj-thumb-wrap">
                    <div 
                      className="proj-thumb" 
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
                          fontSize: '3rem', 
                          color: 'var(--highlight-primary)', 
                          fontWeight: 'bold', 
                          letterSpacing: '-0.03em' 
                        }}
                      >
                        {initials}
                      </div>
                    </div>
                  </div>
                  <h3 className="proj-name">{project.title}</h3>
                  <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  <div className="proj-meta">
                    <div className="proj-tags">
                      {project.techStack.map(t => <span key={t} className="proj-tag">{t}</span>)}
                    </div>
                    <span className="proj-year">{project.year}</span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Right Column (Stagger Offset) */}
        <div className="proj-col">
          {rightColProjects.map((project) => {
            const initials = project.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
            return (
              <Link 
                key={project.title} 
                className="proj-item" 
                to={`/projects/${project.id}`}
                style={{ display: 'block' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="proj-thumb-wrap">
                    <div 
                      className="proj-thumb" 
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
                          fontSize: '3rem', 
                          color: 'var(--highlight-primary)', 
                          fontWeight: 'bold', 
                          letterSpacing: '-0.03em' 
                        }}
                      >
                        {initials}
                      </div>
                    </div>
                  </div>
                  <h3 className="proj-name">{project.title}</h3>
                  <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  <div className="proj-meta">
                    <div className="proj-tags">
                      {project.techStack.map(t => <span key={t} className="proj-tag">{t}</span>)}
                    </div>
                    <span className="proj-year">{project.year}</span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ==================== CTA BOTTOM ==================== */}
      <div className="cta-bottom">
        <div className="available-badge"><div className="available-dot"></div>Available for work</div>
        <ScrollFloat elementType="h2">{"Let's create your\nnext big idea."}</ScrollFloat>
        <Link to="/contact"><button className="cta-btn">Contact Me</button></Link>
      </div>
    </motion.div>
  );
}
