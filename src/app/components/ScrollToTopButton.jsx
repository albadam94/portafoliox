"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [angle, setAngle] = useState(45);
  const [proximity, setProximity] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(scrollY > 300);
      setProgress(docHeight > 0 ? scrollY / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = x - cx, dy = y - cy;
    const kx = dx !== 0 ? cx / Math.abs(dx) : Infinity;
    const ky = dy !== 0 ? cy / Math.abs(dy) : Infinity;
    setProximity(Math.min(Math.max(1 / Math.min(kx, ky), 0), 1));
    let deg = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (deg < 0) deg += 360;
    setAngle(deg);
  }, []);

  const size = 52;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);
  const glowOpacity = hovered ? Math.max(0, (proximity * 100 - 20) / 80) : 0;
  const angleDeg = `${angle.toFixed(1)}deg`;

  return (
    <button
      ref={ref}
      onClick={scrollToTop}
      onPointerMove={handleMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => { setHovered(false); setProximity(0); }}
      aria-label="Volver arriba"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: 'rgba(12,12,14,0.85)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        cursor: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9990,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        pointerEvents: isVisible ? 'auto' : 'none',
        isolation: 'isolate',
      }}
    >
      <svg
        width={size}
        height={size}
        style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(76,181,245,0.1)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#4CB5F5"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
      </svg>

      <span
        style={{
          position: 'absolute',
          inset: '-16px',
          borderRadius: '50%',
          maskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          opacity: glowOpacity,
          mixBlendMode: 'plus-lighter',
          transition: hovered ? 'opacity 0.25s ease-out' : 'opacity 0.75s ease-in-out',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            position: 'absolute',
            inset: '16px',
            borderRadius: '50%',
            boxShadow: `
              inset 0 0 0 1px hsl(199deg 89% 63% / 100%),
              inset 0 0 3px 0 hsl(199deg 89% 63% / 50%),
              inset 0 0 6px 0 hsl(199deg 89% 63% / 40%),
              0 0 6px 0 hsl(199deg 89% 63% / 40%),
              0 0 15px 0 hsl(199deg 89% 63% / 30%),
              0 0 25px 2px hsl(199deg 89% 63% / 20%)
            `,
          }}
        />
      </span>

      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={hovered ? '#4CB5F5' : 'rgba(255,255,255,0.7)'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: 'relative',
          zIndex: 2,
          transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
          transition: 'transform 0.2s ease, stroke 0.2s ease',
        }}
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;