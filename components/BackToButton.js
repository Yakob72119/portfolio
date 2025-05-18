'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={() => {
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Back to Top"
        className="
          bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500
          text-white p-3 rounded-full shadow-lg
          transition-transform duration-300
          hover:scale-110
          hover:animate-pulse
          ring-4 ring-purple-400 ring-opacity-60
          drop-shadow-[0_0_10px_rgba(128,0,128,0.7)]
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}
