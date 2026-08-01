import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Linkedin, Facebook, Github, Instagram, WhatsApp } from '../ui/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nathan-ma-ajo',
      icon: <Linkedin size={18} />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/maajolawasanjo',
      icon: <Facebook size={18} />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Maajolawasanjo',
      icon: <Github size={18} />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/maajolawasanjo/',
      icon: <Instagram size={18} />,
    },
    {
      name: 'Gmail',
      url: 'mailto:maajolawasanjo@gmail.com',
      icon: <Mail size={18} />,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/2348105510626',
      icon: <WhatsApp size={18} />,
    }
  ];

  return (
    <footer className="page-footer">
      <div className="footer-top-row">
        <p>© {currentYear} Ma'ajo Lawasanjo. All rights reserved.</p>
        
        <div className="footer-utility-links">
          <Link to="/uses">/uses</Link>
          <span className="dot-divider">•</span>
          <Link to="/changelog">/changelog</Link>
          <span className="dot-divider">•</span>
          <Link to="/media-kit">/media-kit</Link>
        </div>
      </div>
      
      <div className="footer-socials">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
