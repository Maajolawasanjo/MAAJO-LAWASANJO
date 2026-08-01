import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function CustomAccordion({ items, allowMultiple = false, initialOpen = [0], isFaq = false }) {
  const [openIndices, setOpenIndices] = useState(initialOpen);

  const handleToggle = (index) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter(i => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={isFaq ? "faq-list" : "expertise-accordion"}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        
        // CSS matching classes
        const itemClass = isFaq ? "faq-item" : "exp-acc-item";
        const triggerClass = isFaq ? "faq-trigger" : "exp-acc-trigger";
        const bodyClass = isFaq ? "faq-body-inner" : "exp-acc-content";

        return (
          <div key={index} className={`${itemClass} ${isOpen ? 'open' : ''}`}>
            <button 
              className={triggerClass} 
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
            >
              {isFaq ? (
                <>
                  <span className="faq-num">{String(index + 1).padStart(2, '0')}.</span>
                  <span className="faq-trigger-text">{item.title}</span>
                </>
              ) : (
                <span className="exp-acc-trigger-left">
                  {item.icon && <span className="exp-acc-icon">{item.icon}</span>}
                  {item.title}
                </span>
              )}
              <ChevronDown 
                className={isFaq ? "faq-chevron" : "exp-acc-chevron"} 
                style={{ 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
                size={18} 
              />
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className={bodyClass}>
                    {isFaq ? item.content : <p>{item.content}</p>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
