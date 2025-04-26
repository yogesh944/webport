'use client';

import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

interface TextSplitProps {
  text: string;
}

export default function TextSplit({ text }: TextSplitProps) {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!textRef.current) return;
    
    // Split text into characters for animation
    new SplitType(textRef.current, {
      types: 'chars',
      tagName: 'span'
    });
  }, []);

  return <div ref={textRef}>{text}</div>;
}