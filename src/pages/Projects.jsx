import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, ExternalLink } from 'lucide-react';
import ScrollFloat from '../components/ui/ScrollFloat';
import SplitText from '../components/ui/SplitText';
import { projects } from '../data/projects';
import { Github } from '../components/ui/SocialIcons';

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
          {leftColProjects.map((project) => (
            <motion.div
              key={project.id}
              className="premium-project-card"
              style={{ marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-media-shell">
                <span className="project-category-badge">{project.category}</span>
                {project.status && (
                  <span className="project-status-badge">{project.status}</span>
                )}
                <div className="card-graphic-layer">
                  <div className="floating-initials">{project.title.substring(0, 2).toUpperCase()}</div>
                </div>
              </div>
              <div className="card-info-shell">
                <div className="info-top">
                  <h3>{project.title}</h3>
                  <span className="info-year">{project.year}</span>
                </div>
                {project.role && (
                  <p className="info-role">
                    <span style={{ color: 'var(--highlight-primary)', fontWeight: 500 }}>Role:</span> {project.role}
                  </p>
                )}
                <p className="info-tagline">{project.tagline}</p>
                <div className="info-tech-stack">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && <span className="tech-pill-more">+{project.techStack.length - 4}</span>}
                </div>
                <div className="card-links-row">
                  <Link to={`/projects/${project.id}`} className="card-action-btn primary-action">
                    Case Study
                  </Link>
                  <div className="card-external-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" title="GitHub" className="card-icon-btn">
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" title="Live Demo" className="card-icon-btn">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column (Stagger Offset) */}
        <div className="proj-col">
          {rightColProjects.map((project) => (
            <motion.div
              key={project.id}
              className="premium-project-card"
              style={{ marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-media-shell">
                <span className="project-category-badge">{project.category}</span>
                {project.status && (
                  <span className="project-status-badge">{project.status}</span>
                )}
                <div className="card-graphic-layer">
                  <div className="floating-initials">{project.title.substring(0, 2).toUpperCase()}</div>
                </div>
              </div>
              <div className="card-info-shell">
                <div className="info-top">
                  <h3>{project.title}</h3>
                  <span className="info-year">{project.year}</span>
                </div>
                {project.role && (
                  <p className="info-role">
                    <span style={{ color: 'var(--highlight-primary)', fontWeight: 500 }}>Role:</span> {project.role}
                  </p>
                )}
                <p className="info-tagline">{project.tagline}</p>
                <div className="info-tech-stack">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && <span className="tech-pill-more">+{project.techStack.length - 4}</span>}
                </div>
                <div className="card-links-row">
                  <Link to={`/projects/${project.id}`} className="card-action-btn primary-action">
                    Case Study
                  </Link>
                  <div className="card-external-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" title="GitHub" className="card-icon-btn">
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" title="Live Demo" className="card-icon-btn">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
