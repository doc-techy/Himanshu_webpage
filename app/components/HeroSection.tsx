import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full lg:h-screen bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 md:top-20 md:right-20 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-[#d5a028]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl h-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-0 pb-8 lg:pb-0 flex flex-col lg:flex-row lg:items-end">
        
        {/* Desktop: All content on left | Mobile: Title first, Image, then rest */}
        
        {/* Left Content Container - Desktop only shows all together */}
        <div className="hidden lg:flex flex-col items-start justify-end space-y-5 z-10 flex-[1.2] w-full pb-16 xl:pb-20">
          
          {/* Main Heading */}
          <div className="space-y-2 text-left w-full">
            <h1 className="text-5xl xl:text-6xl font-black leading-[1.15] text-white tracking-tight">
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] via-[#f4c430] to-[#d5a028]">
                Orthopaedic
              </span>
              <br />
              <span className="text-white">&amp; Robotic Surgery</span>
            </h1>
            <div className="flex items-center justify-start gap-2 pt-1">
              <div className="h-1 w-14 bg-gradient-to-r from-[#d5a028] to-[#f4c430] rounded-full"></div>
              <span className="text-lg text-white/90 font-semibold">in Bangalore</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-left w-full">
            <p className="text-xl text-white/90 font-medium mb-1">
              Restoring Mobility, Reclaiming Life with
            </p>
            <div className="flex items-center justify-start gap-2">
              <div className="h-px w-8 bg-[#d5a028]"></div>
              <span className="font-bold text-white text-2xl">Dr. Himanshu Singh</span>
              <div className="h-px w-8 bg-[#d5a028]"></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 pt-2 w-full max-w-lg">
            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 text-center hover:bg-white/15 transition-all">
              <div className="text-3xl font-black text-[#d5a028]">12+</div>
              <div className="text-xs text-white/80 font-medium uppercase tracking-wide">Years</div>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 text-center hover:bg-white/15 transition-all">
              <div className="text-3xl font-black text-[#d5a028]">1000+</div>
              <div className="text-xs text-white/80 font-medium uppercase tracking-wide">Surgeries</div>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 text-center hover:bg-white/15 transition-all">
              <div className="text-3xl font-black text-[#d5a028]">98%</div>
              <div className="text-xs text-white/80 font-medium uppercase tracking-wide">Success</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 pt-2 justify-start w-full">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-7 py-3.5 text-lg font-bold text-white bg-[#d5a028] rounded-xl shadow-lg transition-all duration-300 hover:bg-[#c08f1f] hover:scale-105 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                Book Appointment
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#about"
              className="group inline-flex items-center justify-center px-7 py-3.5 text-lg font-bold text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/15 hover:border-white/50"
            >
              Learn More
              <svg className="ml-1.5 w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Layout: Title (order-1), Image (order-2), Rest of content (order-3) */}
        
        {/* Mobile Title Only */}
        <div className="lg:hidden flex flex-col items-center z-10 w-full order-1">
          <div className="space-y-2 text-center w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-[1.15] text-white tracking-tight">
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] via-[#f4c430] to-[#d5a028]">
                Orthopaedic
              </span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-white">&amp; Robotic Surgery</span>
            </h1>
            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="h-0.5 sm:h-1 w-10 sm:w-14 bg-gradient-to-r from-[#d5a028] to-[#f4c430] rounded-full"></div>
              <span className="text-sm sm:text-base md:text-lg text-white/90 font-semibold">in Bangalore</span>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden relative flex items-center justify-center z-10 w-full order-2 mt-4">
          <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] mx-auto">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/hero_image.png"
                alt="Dr. Himanshu Singh - Expert Orthopaedic & Robotic Surgeon"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile Rest of Content */}
        <div className="lg:hidden flex flex-col items-center space-y-4 z-10 w-full order-3 mt-4">
          {/* Description */}
          <div className="text-center w-full">
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium mb-1">
              Restoring Mobility, Reclaiming Life with
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-6 sm:w-8 bg-[#d5a028]"></div>
              <span className="font-bold text-white text-base sm:text-lg md:text-xl">Dr. Himanshu Singh</span>
              <div className="h-px w-6 sm:w-8 bg-[#d5a028]"></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2 w-full max-w-md">
            <div className="rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 sm:p-3 text-center hover:bg-white/15 transition-all">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#d5a028]">12+</div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium uppercase tracking-wide">Years</div>
            </div>
            <div className="rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 sm:p-3 text-center hover:bg-white/15 transition-all">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#d5a028]">1000+</div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium uppercase tracking-wide">Surgeries</div>
            </div>
            <div className="rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 sm:p-3 text-center hover:bg-white/15 transition-all">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#d5a028]">98%</div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium uppercase tracking-wide">Success</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2 sm:gap-3 pt-2 justify-center w-full">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-white bg-[#d5a028] rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 hover:bg-[#c08f1f] hover:scale-105 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                Book Appointment
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#about"
              className="group inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-white border-2 border-white/30 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-white/15 hover:border-white/50"
            >
              Learn More
              <svg className="ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:flex relative items-end justify-center z-10 flex-[0.8] w-full self-end">
          <div className="relative w-full max-w-[380px] xl:max-w-[420px] mx-0">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/hero_image.png"
                alt="Dr. Himanshu Singh - Expert Orthopaedic & Robotic Surgeon"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
