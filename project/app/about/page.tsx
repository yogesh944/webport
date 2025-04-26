'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextSplit from '@/components/TextSplit';
import ImageReveal from '@/components/ImageReveal';
import { team } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize animations
    const aboutTitle = aboutRef.current?.querySelector('.about__title');
    const aboutDescription = aboutRef.current?.querySelector('.about__description');
    
    if (aboutTitle && aboutDescription) {
      const tl = gsap.timeline({ delay: 2.5 });
      
      tl.from(aboutTitle.querySelectorAll('.char'), {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.03
      });
      
      tl.from(aboutDescription.querySelectorAll('p'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2
      }, '-=0.5');
    }
    
    // ScrollTrigger for team members
    const teamItems = teamRef.current?.querySelectorAll('.team-member');
    
    if (teamItems) {
      gsap.from(teamItems, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      });
    }
  }, []);

  return (
    <main className="pt-32 pb-20">
      <div ref={aboutRef} className="px-6 md:px-20 max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <h1 className="about__title text-4xl md:text-6xl font-medium mb-16">
            <TextSplit text="We are a creative studio focused on crafting memorable digital experiences" />
          </h1>
          <div className="about__description grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-lg md:text-xl">
              Founded in 2020, our studio brings together a talented team of designers, developers, and creative thinkers. 
              We believe in the power of thoughtful design and innovative technology to solve complex problems and create 
              impactful digital solutions.
            </p>
            <p className="text-lg md:text-xl">
              Our approach combines strategic thinking with meticulous attention to detail. We work closely with our clients 
              to understand their needs and create custom solutions that exceed expectations. From concept to launch, we're 
              committed to excellence at every step of the process.
            </p>
          </div>
        </div>
        
        <ImageReveal 
          image="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Our studio" 
        />
        
        <div className="my-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div>
              <h3 className="text-xl font-medium mb-4">Our Vision</h3>
              <p>To create digital experiences that inspire, engage, and deliver meaningful results for our clients.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Our Mission</h3>
              <p>To blend creativity and technology in innovative ways that help brands tell their stories and connect with their audiences.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Our Values</h3>
              <p>Creativity, collaboration, excellence, and a relentless pursuit of quality in everything we do.</p>
            </div>
          </div>
        </div>
        
        <div ref={teamRef} className="mt-32">
          <h2 className="text-3xl md:text-4xl font-medium mb-16">
            <TextSplit text="Meet Our Team" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.id} className="team-member">
                <div className="aspect-w-4 aspect-h-5 mb-6 overflow-hidden">
                  <div className="img-reveal">
                    <div className="img-reveal__inner">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-sm opacity-70 mb-2">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}