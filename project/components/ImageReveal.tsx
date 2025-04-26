'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  image: string;
  alt: string;
}

export default function ImageReveal({ image, alt }: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const inner = container.querySelector('.img-reveal__inner');
    
    if (inner) {
      gsap.fromTo(
        inner,
        { y: '100%' },
        {
          y: '0%',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="img-reveal w-full aspect-video">
      <div className="img-reveal__inner w-full h-full">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}