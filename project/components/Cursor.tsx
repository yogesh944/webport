'use client';

import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [cursorText, setCursorText] = useState('');
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    // Check for interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if element or its parent has data-cursor-text attribute
      const interactiveEl = target.closest('[data-cursor-text]');
      
      if (interactiveEl) {
        const text = interactiveEl.getAttribute('data-cursor-text') || '';
        setIsActive(true);
        setCursorText(text);
      } else {
        setIsActive(false);
        setCursorText('');
      }
    };
    
    // Animation loop
    const render = () => {
      const friction = 0.15; // Lower = smoother but slower
      
      cursorX += (mouseX - cursorX) * friction;
      cursorY += (mouseY - cursorY) * friction;
      
      if (cursor) {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }
      
      requestAnimationFrame(render);
    };
    
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    requestAnimationFrame(render);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className={`cursor ${isActive ? 'active' : ''}`}
    >
      <span className="cursor__text">{cursorText}</span>
    </div>
  );
}