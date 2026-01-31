import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] text-white border-t-4 border-[#d5a028] overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d5a028]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8 md:pt-16 md:pb-8 z-10">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="text-2xl font-extrabold text-[#d5a028] mb-2">RECOVER CLINIC</h3>
              <div className="w-16 h-1 bg-[#d5a028]"></div>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Advanced Orthopaedic & Robotic Surgery Center specializing in limb reconstruction,
              joint replacement, and sports medicine in Bangalore.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="#" className="group h-11 w-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d5a028] transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="group h-11 w-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d5a028] transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="group h-11 w-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d5a028] transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links and Services - side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:contents">
            {/* Quick Links */}
            <div className="space-y-4">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-[#d5a028] mb-2">Quick Links</h3>
                <div className="w-12 h-0.5 bg-[#d5a028]"></div>
              </div>
              <ul className="space-y-3 text-sm text-white/90">
                <li>
                  <a href="/#home" className="flex items-center gap-2 hover:text-[#d5a028] transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#d5a028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Home</span>
                  </a>
                </li>
                <li>
                  <a href="/#about" className="flex items-center gap-2 hover:text-[#d5a028] transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#d5a028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">About Dr. Singh</span>
                  </a>
                </li>
                <li>
                  <Link href="/services" className="flex items-center gap-2 hover:text-[#d5a028] transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#d5a028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Our Services</span>
                  </Link>
                </li>
                <li>
                  <a href="/#contact" className="flex items-center gap-2 hover:text-[#d5a028] transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#d5a028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-[#d5a028] mb-2">Our Services</h3>
                <div className="w-12 h-0.5 bg-[#d5a028]"></div>
              </div>
              <ul className="space-y-3 text-sm text-white/90">
                <li>
                  <Link href="/services" className="flex items-center gap-2 hover:text-[#d5a028] transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#d5a028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Robotic Joint Replacement</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="flex items-center gap-2 hover:text-[#d5a028] transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#d5a028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Limb Reconstruction</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="flex items-center gap-2 hover:text-[#d5a028] transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#d5a028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Sports Medicine</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="flex items-center gap-2 hover:text-[#d5a028] transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#d5a028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Complex Trauma Care</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="flex items-center gap-2 hover:text-[#d5a028] transition-all group">
                    <span className="w-1.5 h-1.5 bg-[#d5a028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">Arthroscopy</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden lg:block space-y-4">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-[#d5a028] mb-2">Contact Information</h3>
              <div className="w-12 h-0.5 bg-[#d5a028]"></div>
            </div>
            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Recover Clinic, 34, 50 feet road,<br />
                  NGEF Layout, Postal Colony,<br />
                  Sanjayanagara, Bengaluru,<br />
                  Karnataka 560094
                </span>
              </div>
              <a href="tel:+917282029272" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group">
                <svg className="h-5 w-5 flex-shrink-0 text-[#d5a028] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">+91 72820 29272</span>
              </a>
              <a href="mailto:info@clinicrecover.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group">
                <svg className="h-5 w-5 flex-shrink-0 text-[#d5a028] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">info@clinicrecover.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Recover Clinic. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
