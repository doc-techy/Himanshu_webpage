import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="w-full h-screen bg-white pt-20 md:pt-24 pb-8 md:pb-12 lg:pb-16">
      <div className="mx-auto w-full max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl font-bold text-[#0b6f66] md:text-5xl lg:text-6xl mb-4">
            Meet Dr. Himanshu Singh
          </h2>
          <div className="w-24 h-1 bg-[#d5a028] mx-auto"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12 lg:gap-16 flex-1">
          <div className="space-y-4 flex flex-col justify-end">
            <p className="text-base leading-relaxed text-[#4a5c63] md:text-lg lg:text-xl">
              Consultant Orthopaedic and Limb Reconstruction Surgeon with over <span className="font-semibold text-[#0b6f66]">12 years of experience</span>.
              University Rank Holder with specialized fellowships from the prestigious Russian Ilizarov
              Scientific Center and in Robotic Joint Replacement &amp; Sports Medicine.
            </p>
            <p className="text-base leading-relaxed text-[#4a5c63] md:text-lg lg:text-xl">
              Expert in complex trauma and evidence-based care, dedicated to restoring mobility and improving quality of life for patients.
            </p>
            
            {/* Qualifications */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-[#0b6f66] md:text-xl">Key Qualifications</h3>
              <ul className="space-y-2 text-sm md:text-base text-[#4a5c63]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d5a028] mt-1">•</span>
                  <span>Fellowship in Robotic Joint Replacement &amp; Sports Medicine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d5a028] mt-1">•</span>
                  <span>Specialized training from Russian Ilizarov Scientific Center</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d5a028] mt-1">•</span>
                  <span>University Rank Holder in Orthopaedic Surgery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d5a028] mt-1">•</span>
                  <span>Expert in Complex Trauma &amp; Limb Reconstruction</span>
                </li>
              </ul>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#e6e3df]">
              <div>
                <div className="text-3xl font-bold text-[#0b6f66]">12+</div>
                <div className="text-sm text-[#4a5c63] mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0b6f66]">1000+</div>
                <div className="text-sm text-[#4a5c63] mt-1">Successful Surgeries</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end items-end h-full">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-full max-h-[calc(100vh-200px)]">
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#f0f0f0] shadow-2xl">
                <Image
                  src="/images/WhatsApp Image 2026-01-14 at 14.32.58 (2).jpeg"
                  alt="Dr. Himanshu Singh Portrait"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
