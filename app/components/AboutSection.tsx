import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full min-h-screen lg:h-screen bg-white py-12 md:py-16 lg:py-0 flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 md:top-20 md:right-20 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-[#0b6f66]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b6f66] mb-3">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Dr. Himanshu Singh</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto"></div>
        </div>
        
        {/* Main Content Grid - Image first on mobile */}
        <div className="grid gap-6 md:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] items-center">
          
          {/* Image - Shows first on mobile, second on desktop */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-72 lg:w-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/WhatsApp Image 2026-01-14 at 14.32.58 (2).jpeg"
                alt="Dr. Himanshu Singh Portrait"
                fill
                className="object-cover object-top"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl ring-4 ring-[#0b6f66]/20"></div>
            </div>
          </div>
          
          {/* Content - Shows second on mobile, first on desktop */}
          <div className="order-2 md:order-1 space-y-4">
            {/* Bio */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                Consultant Orthopaedic and Limb Reconstruction Surgeon with over <span className="font-semibold text-[#0b6f66]">12 years of experience</span>.
                University Rank Holder with specialized fellowships from the prestigious Russian Ilizarov
                Scientific Center and in Robotic Joint Replacement &amp; Sports Medicine.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                Expert in complex trauma and evidence-based care, dedicated to restoring mobility and improving quality of life for patients.
              </p>
            </div>
            
            {/* Qualifications */}
            <div className="space-y-2 pt-2">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#0b6f66]">Key Qualifications</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#d5a028] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fellowship in Robotic Joint Replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#d5a028] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Russian Ilizarov Scientific Center Training</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#d5a028] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>University Rank Holder</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#d5a028] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Complex Trauma Expert</span>
                </li>
              </ul>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 border-t border-gray-200">
              <div className="bg-[#0b6f66]/5 border border-[#0b6f66]/10 rounded-lg p-3 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b6f66]">12+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-[#0b6f66]/5 border border-[#0b6f66]/10 rounded-lg p-3 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b6f66]">1000+</div>
                <div className="text-xs sm:text-sm text-gray-600">Successful Surgeries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
