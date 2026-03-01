'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/90 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,240,255,0.1)]' : 'bg-transparent py-6'
        }`}
      style={{ borderBottom: scrolled ? '1px solid var(--border-color)' : 'none' }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter">
          <span className="text-white">Chandra</span>
          <span className="text-[var(--accent-cyan)] glow-text-cyan">Shekar</span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-purple)] hover:glow-text-purple transition-all duration-300 text-sm font-medium uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
