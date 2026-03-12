
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-lg' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
            <Image src="/img/logo.png" alt="Logo" width={50} height={50} />
            <span>Gyandeep Sharma</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-gray-700 hover:text-gray-900 transition-all duration-300 cursor-pointer relative group transform hover:-translate-y-0.5 ${isScrolled ? 'hover:text-blue-600' : ''}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <button
            className={`md:hidden w-6 h-6 flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 ${isMenuOpen ? 'rotate-90' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`text-xl transition-all duration-300 ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        <nav className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-64 mt-4 pb-4 border-t border-gray-100 pt-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-3">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-gray-700 hover:text-gray-900 transition-all duration-300 cursor-pointer hover:translate-x-2 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
