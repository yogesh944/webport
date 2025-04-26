'use client';

import './globals.css';
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';
import Navigation from '@/components/Navigation';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Vanholtz Clone | Creative Studio</title>
        <meta name="description" content="A pixel-perfect clone of Vanholtz.co creative studio website" />
      </head>
      <body className={inter.className}>
        <Preloader isLoading={isLoading} />
        <Cursor />
        <Navigation />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}