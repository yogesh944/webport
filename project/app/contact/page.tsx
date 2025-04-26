'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextSplit from '@/components/TextSplit';
import { cn } from '@/lib/utils';

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize animations
    const contactTitle = contactRef.current?.querySelector('.contact__title');
    const contactForm = contactRef.current?.querySelector('form');
    
    if (contactTitle && contactForm) {
      const tl = gsap.timeline({ delay: 2.5 });
      
      tl.from(contactTitle.querySelectorAll('.char'), {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.03
      });
      
      tl.from(contactForm, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');
    }
  }, []);

  return (
    <main ref={contactRef} className="min-h-screen pt-32 pb-20">
      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h1 className="contact__title text-4xl md:text-6xl font-medium mb-10">
              <TextSplit text="Let's create something amazing together" />
            </h1>
            <div className="mt-20">
              <div className="mb-10">
                <h3 className="text-sm uppercase mb-2 opacity-70">Email</h3>
                <a 
                  href="mailto:hello@vanholtzclone.com" 
                  className="text-lg border-b border-current hover:opacity-70 transition-opacity"
                  data-cursor-text="EMAIL"
                >
                  hello@vanholtzclone.com
                </a>
              </div>
              <div className="mb-10">
                <h3 className="text-sm uppercase mb-2 opacity-70">Phone</h3>
                <a 
                  href="tel:+12345678900" 
                  className="text-lg border-b border-current hover:opacity-70 transition-opacity"
                  data-cursor-text="CALL"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div>
                <h3 className="text-sm uppercase mb-2 opacity-70">Location</h3>
                <p className="text-lg">New York, NY</p>
              </div>
            </div>
          </div>
          
          <div>
            <form className="mt-10 md:mt-0">
              <div className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase opacity-70 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={cn(
                      "block w-full py-4 border-0 border-b bg-transparent focus:outline-none",
                      "transition-all duration-200 ease-in-out",
                      "border-gray-300 focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-100"
                    )}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase opacity-70 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={cn(
                      "block w-full py-4 border-0 border-b bg-transparent focus:outline-none",
                      "transition-all duration-200 ease-in-out",
                      "border-gray-300 focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-100"
                    )}
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase opacity-70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={cn(
                      "block w-full py-4 border-0 border-b bg-transparent focus:outline-none resize-none",
                      "transition-all duration-200 ease-in-out",
                      "border-gray-300 focus:border-gray-900 dark:border-gray-700 dark:focus:border-gray-100"
                    )}
                    placeholder="Tell us about your project"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={cn(
                      "mt-6 inline-flex items-center text-lg",
                      "border-b border-current pb-1 hover:opacity-70",
                      "transition-opacity ease-in-out duration-300"
                    )}
                    data-cursor-text="SEND"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}