import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-white py-8 md:py-12 lg:py-16 flex flex-col overflow-hidden scroll-mt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 md:top-20 md:right-20 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-[#0b6f66]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Mobile Full-Width Image - Only visible on mobile/tablet */}
      <div className="lg:hidden relative w-full h-[460px] sm:h-[540px] md:h-[600px]">
        <Image
          src="/images/WhatsApp Image 2026-01-14 at 14.32.58 (2).jpeg"
          alt="Dr. Himanshu Singh Portrait"
          fill
          className="object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10 py-6 md:py-8">
        {/* Mobile Header - Only visible on mobile */}
        <div className="text-center mb-6 md:mb-8 lg:hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b6f66] mb-3">
            Meet Dr. Himanshu Singh
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto"></div>
        </div>

        {/* Main Content Grid - Keep previous design */}
        <div className="grid gap-6 md:gap-8 lg:gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* Desktop Image - Only visible on desktop */}
          <div className="hidden lg:flex flex-col justify-start">
            <div className="relative lg:w-[410px] lg:h-[540px] xl:w-[460px] xl:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/WhatsApp Image 2026-01-14 at 14.32.58 (2).jpeg"
                alt="Dr. Himanshu Singh Portrait"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 rounded-2xl ring-4 ring-[#0b6f66]/20"></div>
            </div>
          </div>

          {/* Content - right on desktop */}
          <div className="space-y-4">
            {/* Desktop Header - Only visible on desktop */}
            <div className="hidden lg:block mb-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0b6f66] mb-3">
                Meet Dr. Himanshu Singh
              </h2>
              <div className="w-20 h-1 bg-[#d5a028]"></div>
            </div>

            {/* Bio */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base md:text-base leading-relaxed text-gray-600">
                Consultant Orthopaedic and Limb Reconstruction Surgeon.
              </p>
              <p className="text-sm sm:text-base md:text-base leading-relaxed text-gray-600">
                With over <span className="font-semibold text-[#0b6f66]">13 years of clinical experience</span>, Dr. Himanshu Singh is a University Rank Holder dedicated to evidence-based orthopaedic care.
              </p>
              <p className="text-sm sm:text-base md:text-base leading-relaxed text-gray-600">
                He specializes in complex trauma, advanced limb reconstruction, and a comprehensive approach to joint health from early preservation to advanced replacements.
              </p>
            </div>

            {/* Core Surgical Expertise */}
            <div className="space-y-2 pt-2">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#0b6f66]">Core Surgical Expertise</h3>
              <ul className="space-y-2 text-xs sm:text-sm md:text-sm lg:text-base text-gray-600 leading-relaxed">
                <li>
                  <span className="font-semibold text-[#0b6f66]">Ilizarov &amp; Limb Reconstruction:</span> Trained at the original Russian Ilizarov Scientific Center in Kurgan, Russia, with expertise in complex limb reconstruction, deformity correction, and non-unions.
                </li>
                <li>
                  <span className="font-semibold text-[#0b6f66]">Joint Preservation &amp; Arthroscopy:</span> Fellowship-trained in Robotic Joint Replacement &amp; Sports Medicine, with advanced knee and shoulder arthroscopy and strong focus on early OA intervention and alignment correction.
                </li>
                <li>
                  <span className="font-semibold text-[#0b6f66]">Advanced Joint Replacement:</span> State-of-the-art robotic and conventional knee replacement surgeries for end-stage arthritis to restore mobility and quality of life.
                </li>
                <li>
                  <span className="font-semibold text-[#0b6f66]">Complex Trauma:</span> Expert management and surgical intervention for severe and complex fractures.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Qualifications below image and text */}
        <div className="rounded-2xl border border-[#0b6f66]/15 bg-[#0b6f66]/5 p-4 md:p-5 mt-6 md:mt-8">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#0b6f66] mb-3">Key Qualifications</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs sm:text-sm md:text-sm lg:text-base text-gray-700 leading-snug">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#d5a028] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Over 13 Years of Clinical Experience</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#d5a028] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>
                Fellowship in Trauma &amp; Limb Reconstruction{" "}
                <span className="whitespace-nowrap">(Russian Ilizarov Scientific Center)</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#d5a028] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fellowship in Robotic Joint Replacement &amp; Sports Medicine</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#d5a028] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Expertise in Complex Trauma and Evidence-Based Care</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
