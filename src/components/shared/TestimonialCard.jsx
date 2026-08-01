import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialCard() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const testimonials = [
    {
      name: "Reviewer Name",
      role: "Role @ Company",
      text: "This is an amazing professional who delivers high-quality work. Their attention to detail, creative approach, and technical expertise make them stand out. I highly recommend working with them for any web development or design project.",
      extra: " They are dedicated, responsive, and truly passionate about their craft."
    },
    {
      name: "Another Reviewer",
      role: "CEO @ Startup",
      text: "Working with them was an absolute pleasure. They understood our vision immediately and delivered beyond expectations. The final product was polished, responsive, and launched on time.",
      extra: " The engineering quality is state-of-the-art and visually outstanding."
    },
    {
      name: "Third Person",
      role: "Designer @ Agency",
      text: "Incredibly talented developer with a great eye for design. They bridge the gap between design and code perfectly, making collaboration smooth and the results outstanding.",
      extra: " Highly recommend them for anyone seeking visually stunning frontend engineering."
    }
  ];

  const handleNext = () => {
    setExpanded(false);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setExpanded(false);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div className="testimonials-right">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="testimonial-card"
        >
          <div className="testimonial-author">
            <div 
              className="testimonial-avatar" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontWeight: 'bold', 
                fontSize: '1rem',
                backgroundColor: 'var(--bg-700)',
                color: 'var(--highlight-primary)' 
              }}
            >
              {current.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h4>{current.name}</h4>
              <span>{current.role}</span>
            </div>
          </div>
          <p>
            {current.text}
            {!expanded && (
              <strong onClick={() => setExpanded(true)} style={{ color: 'var(--highlight-primary)', cursor: 'pointer' }}> see more</strong>
            )}
            {expanded && (
              <span>{current.extra}</span>
            )}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="testimonial-pagination">
        <button className="t-page-btn" onClick={handlePrev} aria-label="Previous testimonial">
          <ChevronLeft size={16} />
        </button>
        <span className="t-counter">{index + 1} / {testimonials.length}</span>
        <button className="t-page-btn" onClick={handleNext} aria-label="Next testimonial">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
