'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="block"
      data-cursor-text="VIEW"
    >
      <div ref={cardRef} className="project-card">
        <div className="project-card__img-container">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="project-card__img" 
          />
        </div>
        <div className="project-card__info">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__category">{project.category}</p>
        </div>
      </div>
    </Link>
  );
}