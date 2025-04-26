'use client';

import { useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextSplit from '@/components/TextSplit';
import ImageReveal from '@/components/ImageReveal';
import { projects } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const projectRef = useRef<HTMLDivElement>(null);
  
  const project = projects.find(p => p.slug === slug);
  
  useEffect(() => {
    if (!project) {
      router.push('/');
      return;
    }
    
    // Initialize animations
    const projectTitle = projectRef.current?.querySelector('.project__title');
    const projectDescription = projectRef.current?.querySelector('.project__description');
    
    if (projectTitle && projectDescription) {
      const tl = gsap.timeline({ delay: 2.5 });
      
      tl.from(projectTitle.querySelectorAll('.char'), {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.03
      });
      
      tl.from(projectDescription.querySelectorAll('p'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2
      }, '-=0.5');
    }
    
    // ScrollTrigger for image reveals
    const imageContainers = projectRef.current?.querySelectorAll('.img-reveal');
    
    if (imageContainers) {
      imageContainers.forEach((container) => {
        const inner = container.querySelector('.img-reveal__inner');
        
        if (inner) {
          gsap.to(inner, {
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          });
        }
      });
    }
  }, [project, router, slug]);
  
  if (!project) return null;

  return (
    <main ref={projectRef} className="pt-32 pb-20">
      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h1 className="project__title text-4xl md:text-6xl font-medium mb-10">
            <TextSplit text={project.title} />
          </h1>
          <div className="project__description grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg md:text-xl">{project.description}</p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm uppercase mb-2 opacity-70">Client</h3>
                  <p>{project.client}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase mb-2 opacity-70">Year</h3>
                  <p>{project.year}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase mb-2 opacity-70">Services</h3>
                  <p>{project.services}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase mb-2 opacity-70">Website</h3>
                  <p>
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border-b border-current"
                    >
                      View site
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-20 md:space-y-32">
          <ImageReveal image={project.heroImage} alt={project.title} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                <TextSplit text="The Challenge" />
              </h2>
              <p className="text-lg">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                <TextSplit text="The Solution" />
              </h2>
              <p className="text-lg">{project.solution}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {project.images.slice(0, 2).map((image, index) => (
              <ImageReveal key={index} image={image} alt={`${project.title} detail ${index + 1}`} />
            ))}
          </div>
          
          {project.images.slice(2).map((image, index) => (
            <ImageReveal key={index + 2} image={image} alt={`${project.title} detail ${index + 3}`} />
          ))}
        </div>
        
        <div className="mt-32">
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            <TextSplit text="Next Project" />
          </h2>
          <a 
            href={`/projects/${project.nextProject}`}
            className="inline-block text-lg border-b border-current pb-1 hover:opacity-70 transition-opacity ease-in-out duration-300"
            data-cursor-text="VIEW"
          >
            View next project
          </a>
        </div>
      </div>
    </main>
  );
}