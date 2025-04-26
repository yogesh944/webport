'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isLoading && preloaderRef.current) {
      // Add loaded class for initial animation
      preloaderRef.current.classList.add('loaded');
      
      // Animate preloader out
      gsap.to(preloaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.5,
      });
    }
  }, [isLoading]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader__circle">
        <div className="preloader__inner"></div>
        <div className="preloader__text">0%</div>
      </div>
    </div>
  );
}