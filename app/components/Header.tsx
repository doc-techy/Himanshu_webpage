"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSiteVariant } from "../context/SiteVariantContext";
import { isDrSinghSite } from "../lib/site";
import { RECOVER_LOCATION, SPARSH_LOCATION } from "../lib/locations";

const Header = () => {
  const siteVariant = useSiteVariant();
  const showDualBranding = isDrSinghSite(siteVariant);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent random jump to previous scroll position on hard reload.
    // On reload, we intentionally reset to top for the home page.
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const isReload = nav?.type === "reload";
    const isHome = window.location.pathname === "/";
    if (!isReload || !isHome) return;

    // If the user reloads while a hash is present, clear it so reload never re-jumps to a section.
    if (window.location.hash) {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }

    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const forceTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    forceTop();
    requestAnimationFrame(forceTop);
    const timeoutId = window.setTimeout(forceTop, 220);
    const onPageShow = () => forceTop();
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("pageshow", onPageShow);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

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
      
      <div className="mx-auto w-full max-w-7xl px-3 py-0.5 sm:px-4 sm:py-1 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`flex items-center hover:opacity-90 transition-opacity min-w-0 ${
              showDualBranding ? "max-w-[78%] sm:max-w-[70%] md:max-w-none gap-2 sm:gap-3" : "max-w-[62%] sm:max-w-none"
            }`}
          >
            {showDualBranding ? (
              <>
                <Image
                  src={RECOVER_LOCATION.logoSrc}
                  alt={RECOVER_LOCATION.logoAlt}
                  width={280}
                  height={72}
                  className="h-10 w-auto sm:h-12 md:h-14 object-contain object-left"
                  priority
                />
                <span className="h-8 sm:h-10 w-px bg-[#0b6f66]/20 shrink-0" aria-hidden />
                <Image
                  src={SPARSH_LOCATION.logoSrc}
                  alt={SPARSH_LOCATION.logoAlt}
                  width={120}
                  height={48}
                  className="h-9 w-auto sm:h-11 md:h-12 object-contain object-left"
                  priority
                />
              </>
            ) : (
              <Image
                src={RECOVER_LOCATION.logoSrc}
                alt={RECOVER_LOCATION.logoAlt}
                width={360}
                height={90}
                className="h-12 w-auto sm:h-14 md:h-[3.75rem] lg:h-16 object-contain object-left"
                priority
              />
            )}
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
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-[#0b6f66]/5 hover:bg-[#0b6f66]/10 transition-colors shrink-0"
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
        style={{ top: "var(--header-height, 64px)" }}
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
