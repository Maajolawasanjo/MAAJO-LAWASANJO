import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Mail, MessageSquare, Check } from 'lucide-react';
import { Linkedin, Facebook, Github, Instagram, WhatsApp } from '../components/ui/SocialIcons';
import heroImage from '../assets/hero.png';
import CustomAccordion from '../components/shared/CustomAccordion';
import ScrollFloat from '../components/ui/ScrollFloat';
import SplitText from '../components/ui/SplitText';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const faqs = [
    {
      title: 'What is your current role?',
      content: "I am the Founder & Principal Developer at Inteleva Group, and Creative Director at Ma'ajo Digital. Alongside building digital products, I am currently pursuing my B.Tech at NUTM, Lagos, and running Design & Code — a global community I founded for designers and developers."
    },
    {
      title: 'What services do you offer?',
      content: "I offer end-to-end digital solutions. This includes premium UI/UX design, full-stack web development, AI workflow integrations, brand identity creation, and social media strategy. Whether you need a high-converting landing page or a complex SaaS platform, I've got you covered."
    },
    {
      title: 'How much do your services cost?',
      content: "Every project is unique. The investment depends entirely on the scope, technical complexity, and deliverables required. I pride myself on delivering premium, production-ready quality. Let's schedule a chat to discuss your specific needs, and I'll provide a tailored proposal."
    },
    {
      title: 'Are you available for full-time or contract roles?',
      content: "While I am deeply invested in my agencies and studies, I am always open to high-impact contract roles, exciting freelance projects, and strategic partnerships — especially those involving AI-driven solutions and innovative product building. Feel free to reach out!"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ fullName: '', email: '', message: '' });
      
      // Reset success message after 4 seconds
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nathan-ma-ajo', icon: <Linkedin size={18} /> },
    { name: 'Facebook', url: 'https://www.facebook.com/maajolawasanjo', icon: <Facebook size={18} /> },
    { name: 'GitHub', url: 'https://github.com/Maajolawasanjo', icon: <Github size={18} /> },
    { name: 'Instagram', url: 'https://www.instagram.com/maajolawasanjo/', icon: <Instagram size={18} /> },
    { name: 'Gmail', url: 'mailto:maajolawasanjo@gmail.com', icon: <Mail size={18} /> },
    { name: 'WhatsApp', url: 'https://wa.me/2348105510626', icon: <WhatsApp size={18} /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper grow"
    >
      {/* ==================== CONTACT HERO ==================== */}
      <section className="contact-hero">
        
        {/* LEFT COLUMN: Stateful Form */}
        <div className="contact-form-col">
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            <span className="shimmer">Connect With Me</span>
          </div>
          <SplitText tag="h1" delay={30} duration={1.2} textAlign="left">
          Let's start a project<br />together
        </SplitText>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                placeholder="John Doe" 
                value={formData.fullName}
                onChange={handleInputChange}
                required 
                disabled={submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                disabled={submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell me about your project..." 
                value={formData.message}
                onChange={handleInputChange}
                required 
                disabled={submitting}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" style={{ marginRight: '8px', display: 'inline', animation: 'spin 1s linear infinite' }} />
                  <span>Sending...</span>
                </>
              ) : success ? (
                <>
                  <Check size={16} style={{ marginRight: '8px', display: 'inline' }} />
                  <span>Sent!</span>
                </>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: Profile Photo Card */}
        <motion.div className="contact-card-col" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <motion.div className="profile-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="available-badge-sm"><div className="available-dot"></div>Available for work</div>
            <div className="profile-photo">
              <img 
                src={heroImage} 
                alt="Ma'ajo Lawasanjo" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'var(--bg-600)';
                }}
              />
            </div>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>My inbox is always open. Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.</motion.p>
            <motion.div className="card-socials" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
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
            </motion.div>
          </motion.div>
        </motion.div>

      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-left">
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>
              <span>FAQs</span>
            </div>
            <ScrollFloat elementType="h2">{"Have\nQuestions?"}</ScrollFloat>
          </div>
          <div className="faq-right">
            <CustomAccordion items={faqs} allowMultiple={false} initialOpen={[]} isFaq={true} />
          </div>
        </div>
      </section>

      {/* ==================== CTA BOTTOM ==================== */}
      <div className="cta-bottom">
        <div className="available-badge-sm"><div className="available-dot"></div>Available for work</div>
        <ScrollFloat elementType="h2">{"Let's create your\nnext big idea."}</ScrollFloat>
        <div className="cta-socials">
          {socialLinks.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
