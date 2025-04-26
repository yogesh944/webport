'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  // Handle menu animations
  useEffect(() => {
    if (!menuRef.current) return;
    
    const menuItems = menuRef.current.querySelectorAll('.menu__item');
    
    if (isMenuOpen) {
      gsap.fromTo(
        menuItems,
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out' 
        }
      );
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-10">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg font-medium z-50" data-cursor-text="HOME">
            Vanholtz.co
          </Link>
          
          <button 
            className="z-50 w-20 h-20 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-cursor-text={isMenuOpen ? 'CLOSE' : 'MENU'}
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute left-0 w-full h-0.5 bg-current transform transition-transform duration-300 ${
                  isMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}
              ></span>
              <span 
                className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`absolute left-0 w-full h-0.5 bg-current transform transition-transform duration-300 ${
                  isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>
      
      <div ref={menuRef} className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="menu__items">
          <Link href="/" className="menu__item" data-cursor-text="VIEW">
            Home
          </Link>
          <Link href="/projects/project-one" className="menu__item" data-cursor-text="VIEW">
            Projects
          </Link>
          <Link href="/about" className="menu__item" data-cursor-text="VIEW">
            About
          </Link>
          <Link href="/contact" className="menu__item" data-cursor-text="VIEW">
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}