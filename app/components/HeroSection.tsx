import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] flex items-center overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#d5a028]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d5a028]/5 rounded-full blur-3xl"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl h-full px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-0 flex items-end">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-end w-full">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start justify-center space-y-6 z-10 flex-[2] w-full lg:w-auto pb-12 md:pb-16 lg:pb-20">


            {/* Main Heading with enhanced typography */}
            <div className="space-y-3 text-center lg:text-left w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] text-white tracking-tight">
                <span className="whitespace-nowrap">
                  Advanced{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] via-[#f4c430] to-[#d5a028]">
                    Orthopaedic
                  </span>
                </span>
                <br />
                <span className="text-white">&amp; Robotic Surgery</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
                <div className="h-1 w-16 bg-gradient-to-r from-[#d5a028] to-[#f4c430] rounded-full"></div>
                <span className="text-lg md:text-xl text-white/90 font-semibold tracking-wide">in Bangalore</span>
                <div className="h-1 w-1 bg-[#d5a028] rounded-full"></div>
              </div>
            </div>

            {/* Description with enhanced styling */}
            <div className="space-y-2 w-full text-center lg:text-left">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/95 font-medium">
                Restoring Mobility, Reclaiming Life with
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="h-px w-10 bg-[#d5a028]"></div>
                <span className="font-bold text-white text-xl md:text-2xl lg:text-3xl">Dr. Himanshu Singh</span>
                <div className="h-px w-10 bg-[#d5a028]"></div>
              </div>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-3 gap-3 pt-4 w-full max-w-xl mx-auto">
              <div className="group relative rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
                <div className="text-3xl md:text-4xl font-black text-[#d5a028] mb-1 group-hover:scale-110 transition-transform">12+</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wider">Years</div>
              </div>
              <div className="group relative rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
                <div className="text-3xl md:text-4xl font-black text-[#d5a028] mb-1 group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wider">Surgeries</div>
              </div>
              <div className="group relative rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
                <div className="text-3xl md:text-4xl font-black text-[#d5a028] mb-1 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wider">Success</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center items-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-black text-white bg-[#d5a028] rounded-xl shadow-xl transition-all duration-300 hover:bg-[#c08f1f] hover:shadow-[#d5a028]/50 hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book an Appointment
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#d5a028] to-[#f4c430] opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white border-2 border-white/40 bg-white/5 backdrop-blur-md rounded-xl transition-all duration-300 hover:bg-white/15 hover:border-white/60 hover:scale-105 hover:shadow-xl"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-end justify-center lg:justify-end z-10 flex-[1.75] w-full lg:w-auto min-w-0 self-end">
            <div className="relative w-full flex items-end">
              {/* Image container */}
              <div className="relative rounded-t-3xl overflow-hidden group pt-3 md:pt-4 lg:pt-5 px-3 md:px-4 lg:px-5 w-full">
                <div className="relative aspect-[3/4] rounded-t-2xl overflow-hidden w-full">
                  <Image
                    src="/images/hero_image.png"
                    alt="Dr. Himanshu Singh - Expert Orthopaedic & Robotic Surgeon"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
