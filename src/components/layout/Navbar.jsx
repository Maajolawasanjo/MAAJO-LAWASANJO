import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Home as HomeIcon, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import LogoIcon from '../shared/LogoIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize and listen to theme state
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-mode');
      setIsLight(true);
    } else if (savedTheme === 'dark') {
      document.documentElement.classList.remove('light-mode');
      setIsLight(false);
    } else {
      // Fallback if no saved preference
      const isLightMode = document.documentElement.classList.contains('light-mode');
      setIsLight(isLightMode);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('light-mode');
    const currentlyLight = root.classList.contains('light-mode');
    setIsLight(currentlyLight);
    localStorage.setItem('portfolio-theme', currentlyLight ? 'light' : 'dark');
  };
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/expertise', label: 'Expertise' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/learning', label: 'Learning' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* ==================== DESKTOP NAVIGATION ==================== */}
      <header>
        <nav className={`main-nav ${scrolled ? 'nav-scrolled' : ''}`}>
          <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <LogoIcon size={30} />
            <span>Ma'ajo</span>
          </Link>
          
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                  <span className="nav-link-inner">
                    <span className="nav-link-text">{item.label}</span>
                    <span className="nav-link-hover">{item.label}</span>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', pointerEvents: 'auto' }}>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isLight ? (
                <Sun size={16} strokeWidth={2} />
              ) : (
                <Moon size={16} strokeWidth={2} />
              )}
            </button>

            <button 
              className="hamburger-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu" style={{ pointerEvents: 'auto' }}>
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => isActive ? 'active-mobile-item' : ''}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* ==================== MOBILE NAVIGATION ==================== */}
      <nav className="mobile-nav">
        <ul>
          <li>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
              <HomeIcon size={18} strokeWidth={2} />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              <User size={18} strokeWidth={2} />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              <Briefcase size={18} strokeWidth={2} />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              <Mail size={18} strokeWidth={2} />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
