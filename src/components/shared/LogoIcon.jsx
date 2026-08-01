import React from 'react';

export default function LogoIcon({ size = 32, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-icon ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Subtle outer accent frame */}
      <rect 
        x="6" 
        y="6" 
        width="88" 
        height="88" 
        rx="22" 
        stroke="url(#logo-grad)" 
        strokeWidth="3.5" 
        fill="rgba(16, 185, 129, 0.03)" 
      />
      
      {/* Geometric "M" */}
      <path 
        d="M 26 70 L 26 30 L 44 48 L 54 30 L 54 70" 
        stroke="url(#logo-grad)" 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Geometric "L" */}
      <path 
        d="M 68 30 L 68 70 L 84 70" 
        stroke="url(#logo-grad)" 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" /> {/* Emerald */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
        </linearGradient>
      </defs>
    </svg>
  );
}
