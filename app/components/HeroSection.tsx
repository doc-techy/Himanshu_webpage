"use client";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-[100dvh] bg-[#1e2626] overflow-hidden flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#d5a028]/[0.06]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b6f66]/15 via-[#d5a028]/[0.06] to-[#0b6f66]/10"></div>
      </div>

      {/* Mesh grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* Floating orbs - hidden on very small screens */}
      <div className="hidden sm:block absolute top-[15%] right-[10%] w-3 h-3 rounded-full bg-[#d5a028]/60 animate-pulse"></div>
      <div className="hidden sm:block absolute top-[25%] right-[25%] w-2 h-2 rounded-full bg-[#d5a028]/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="hidden sm:block absolute bottom-[30%] left-[15%] w-2 h-2 rounded-full bg-[#0b6f66]/60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="hidden sm:block absolute top-[60%] right-[8%] w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Glowing accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d5a028] to-transparent opacity-60"></div>

      {/* Large decorative text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full overflow-hidden text-center">
        <span className="text-[80px] xs:text-[100px] sm:text-[150px] md:text-[220px] lg:text-[300px] font-black text-white/[0.02] tracking-tighter leading-none">RECOVER</span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 sm:pb-16 flex flex-col justify-center min-h-[100dvh]">
        <div className="flex flex-col items-center text-center">

          {/* Top label */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <div className="h-px w-6 sm:w-8 md:w-14 bg-gradient-to-r from-transparent to-[#d5a028]"></div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d5a028] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#d5a028]"></span>
              </div>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-white/70 uppercase tracking-[0.15em] sm:tracking-[0.2em]">Orthopaedic Excellence</span>
            </div>
            <div className="h-px w-6 sm:w-8 md:w-14 bg-gradient-to-l from-transparent to-[#d5a028]"></div>
          </div>

          {/* Main Title */}
          <div className="relative mb-3 sm:mb-6 md:mb-8 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#0b6f66] via-[#d5a028] to-[#f4c430]">Advanced Orthopaedic</span>
              <span className="block mt-1 md:mt-2 text-[30px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#0b6f66] via-[#d5a028] to-[#f4c430]">&amp;</span>
              <span className="block mt-1 md:mt-2 text-[30px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#0b6f66] via-[#d5a028] to-[#f4c430]">Limb Reconstruction</span>
            </h1>
          </div>

          {/* Location badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-8 md:mb-10">
            <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm sm:text-sm md:text-lg text-white/60 font-medium tracking-wide">Bangalore, India</span>
          </div>

          {/* Doctor info card */}
          <div className="relative mb-6 sm:mb-8 md:mb-12 px-5 py-4 sm:px-6 sm:py-5 md:px-10 md:py-6 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm w-full max-w-md sm:max-w-lg md:max-w-2xl">
            <div className="absolute -top-px left-1/2 -translate-x-1/2 w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#d5a028] to-transparent"></div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430] mb-1 sm:mb-2">Dr. Himanshu Singh</p>
            <p className="text-xs sm:text-sm md:text-base text-white/70 font-semibold mb-1">Consultant Orthopaedic &amp; Limb Reconstruction surgeon</p>
            <p className="text-xs sm:text-sm md:text-base text-white/70 font-semibold mb-2 sm:mb-3">MBBS, D.Ortho, DNB Ortho</p>
            <div className="flex flex-col gap-0.5 sm:gap-1 items-center">
              <span className="text-[10px] sm:text-xs md:text-sm text-white/60 font-medium">Fellowship in Trauma &amp; Ilizarov Limb Reconstruction (Ilizarov Center Russia)</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-white/60 font-medium">Fellowship in Joint Replacement</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-white/60 font-medium">Fellowship in Arthroscopy &amp; Sports Medicine</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-6 sm:gap-6 md:gap-10 mb-8 sm:mb-10 md:mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">{new Date().getFullYear() - 2013}<span className="text-[#d5a028]">+</span></div>
              <div className="text-[9px] sm:text-[9px] md:text-xs text-white/40 font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] mt-0.5 sm:mt-1">Years Exp</div>
            </div>
            <div className="w-px h-10 sm:h-10 md:h-14 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">1000<span className="text-[#d5a028]">+</span></div>
              <div className="text-[9px] sm:text-[9px] md:text-xs text-white/40 font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] mt-0.5 sm:mt-1">Surgeries</div>
            </div>
            <div className="w-px h-10 sm:h-10 md:h-14 bg-white/10"></div>
            <div className="text-center">
              <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-black text-white">9-8<span className="text-[#d5a028]">PM</span></div>
              <div className="text-[9px] sm:text-[9px] md:text-xs text-white/40 font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] mt-0.5 sm:mt-1">Mon-Sat</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4 items-stretch sm:items-center justify-center w-full sm:w-auto">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-6 py-3.5 sm:px-7 sm:py-3.5 md:px-10 md:py-4 text-sm sm:text-sm md:text-base font-bold text-[#0a0a0a] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#d5a028] via-[#f4c430] to-[#d5a028] transition-all"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#f4c430] via-[#d5a028] to-[#f4c430]"></div>
              <span className="relative flex items-center gap-2">
                Book Appointment
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center px-6 py-3.5 sm:px-7 sm:py-3.5 md:px-10 md:py-4 text-sm sm:text-sm md:text-base font-bold text-white border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <div className="relative mr-2 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#d5a028] group-hover:bg-[#d5a028]/10 transition-all flex-shrink-0">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 ml-0.5 text-white group-hover:text-[#d5a028] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              Watch Intro
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-[#1e2626] to-transparent pointer-events-none z-[2]"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/20 flex justify-center pt-1 sm:pt-1.5">
          <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 rounded-full bg-[#d5a028] animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
