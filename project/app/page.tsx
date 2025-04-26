'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import WebGLBackground from '@/components/WebGLBackground';
import TextSplit from '@/components/TextSplit';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize animations when component mounts
    const heroTitle = heroRef.current?.querySelector('.hero__title');
    const heroSubtitle = heroRef.current?.querySelector('.hero__subtitle');
    
    if (heroTitle && heroSubtitle) {
      const tl = gsap.timeline({ delay: 2.5 });
      
      tl.from(heroTitle.querySelectorAll('.char'), {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.03
      });
      
      tl.from(heroSubtitle.querySelectorAll('.char'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.02
      }, '-=0.5');
    }
    
    // ScrollTrigger animations for project cards
    const projectItems = projectsRef.current?.querySelectorAll('.project-card');
    
    if (projectItems) {
      gsap.from(projectItems, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      });
    }
  }, []);

  return (
    <main className="relative">
      <WebGLBackground />
      
      <section 
        ref={heroRef} 
        className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero__title mb-6">
            <TextSplit text="We Create Digital Experiences That Matter" />
          </h1>
          <p className="hero__subtitle">
            <TextSplit text="A creative studio specializing in design, development, and animation" />
          </p>
        </div>
      </section>
      
      <section 
        ref={projectsRef}
        className="py-32 px-6 md:px-20"
      >
        <div className="mb-20">
          <h2 className="section__title mb-6">
            <TextSplit text="Selected Work" />
          </h2>
          <p className="section__subtitle max-w-xl">
            <TextSplit text="Explore our latest projects and creative endeavors" />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      <section className="py-32 px-6 md:px-20">
        <div className="max-w-4xl">
          <h2 className="section__title mb-10">
            <TextSplit text="Let's Create Something Amazing Together" />
          </h2>
          <a 
            href="/contact"
            className="inline-block text-lg border-b border-current pb-1 hover:opacity-70 transition-opacity ease-in-out duration-300"
            data-cursor-text="CONTACT"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}