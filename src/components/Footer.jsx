import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { Linkedin, Facebook, Github, Instagram, WhatsApp } from './SocialIcons';

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
      <p>© {currentYear} Ma'ajo Lawasanjo. All rights reserved.</p>
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
