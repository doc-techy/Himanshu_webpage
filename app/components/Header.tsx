"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0b6f66] via-[#d5a028] to-[#0b6f66]"></div>
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0b6f66] via-[#d5a028] to-[#0b6f66]"></div>
      
      <div className="mx-auto w-full max-w-7xl px-3 py-2 sm:px-4 sm:py-3 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/images/logo.gif"
              alt="Recover Clinic Logo"
              width={80}
              height={80}
              className="h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 flex-shrink-0 object-contain"
              priority
              unoptimized
            />
            <div className="flex flex-col justify-center">
              <h1 
                className="font-[var(--font-oswald)] text-[20px] sm:text-lg md:text-[22px] lg:text-[26px] leading-none uppercase font-bold tracking-wider"
                style={{ color: '#1a9e94' }}
              >
                RECOVER CLINIC
              </h1>
              <p 
                className="font-[var(--font-open-sans)] text-[7px] sm:text-[6px] md:text-[8px] lg:text-[10px] leading-snug mt-0.5 font-semibold"
                style={{ color: '#c9a227' }}
              >
                Orthopaedics | Limb Reconstruction | Joint<br className="md:hidden" />
                <span className="hidden md:inline"> </span>Replacement | Arthroscopy &amp; Sports medicine
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a 
              href="/#home" 
              className="px-4 py-2 text-sm font-semibold text-[#2b4c56] rounded-lg hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
            >
              Home
            </a>
            <a 
              href="/#about" 
              className="px-4 py-2 text-sm font-semibold text-[#2b4c56] rounded-lg hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
            >
              About Dr. Singh
            </a>
            <Link 
              href="/services" 
              className="px-4 py-2 text-sm font-semibold text-[#2b4c56] rounded-lg hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
            >
              Services
            </Link>
            <Link 
              href="/blogs" 
              className="px-4 py-2 text-sm font-semibold text-[#2b4c56] rounded-lg hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
            >
              Blogs
            </Link>
            <Link 
              href="/videos" 
              className="px-4 py-2 text-sm font-semibold text-[#2b4c56] rounded-lg hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
            >
              Videos
            </Link>
            <a 
              href="/#contact" 
              className="ml-2 px-5 py-2.5 text-sm font-bold text-white bg-[#d5a028] rounded-lg hover:bg-[#c08f1f] shadow-md hover:shadow-lg transition-all duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-lg bg-[#0b6f66]/5 hover:bg-[#0b6f66]/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`block h-0.5 w-full bg-[#0b6f66] rounded-full transform transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-full bg-[#0b6f66] rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-full bg-[#0b6f66] rounded-full transform transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '72px' }}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl transform transition-all duration-300 ease-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-1">
          <a 
            href="/#home" 
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-[#2b4c56] rounded-xl hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>
          <a 
            href="/#about" 
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-[#2b4c56] rounded-xl hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            About Dr. Singh
          </a>
          <Link 
            href="/services" 
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-[#2b4c56] rounded-xl hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Services
          </Link>
          <Link 
            href="/blogs" 
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-[#2b4c56] rounded-xl hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Blogs
          </Link>
          <Link 
            href="/videos" 
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-[#2b4c56] rounded-xl hover:text-[#0b6f66] hover:bg-[#0b6f66]/5 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Videos
          </Link>
          <div className="pt-2">
            <a 
              href="/#contact" 
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 px-4 py-3.5 text-base font-bold text-white bg-[#d5a028] rounded-xl hover:bg-[#c08f1f] shadow-md transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
