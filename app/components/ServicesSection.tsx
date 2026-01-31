import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      id: "orthopaedics",
      title: "Orthopaedics",
      description: "Comprehensive care for all bone, joint, and musculoskeletal conditions with advanced diagnostics and treatment.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: "limb-reconstruction",
      title: "Limb Reconstruction",
      description: "Advanced surgical techniques for restoring limb function, treating deformities, and complex trauma cases.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      id: "ilizarov",
      title: "Ilizarov Technique",
      description: "Specialized external fixation method for bone lengthening, deformity correction, and complex fractures.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: "robotic-surgery",
      title: "Robotic Joint Replacement",
      description: "Precision robotic-assisted surgery for hip and knee replacements with optimal alignment and faster recovery.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "arthroscopy",
      title: "Arthroscopy & Sports Medicine",
      description: "Minimally invasive joint surgery and comprehensive sports injury treatment for faster return to activity.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: "fracture-spine",
      title: "Fracture & Spine Care",
      description: "Expert management of all fracture types and comprehensive spine care with modern surgical techniques.",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative w-full min-h-screen lg:h-screen bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] py-12 md:py-16 lg:py-0 overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#d5a028]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl mb-3">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Key Services</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto mb-4"></div>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Comprehensive orthopaedic care with cutting-edge technology and personalized treatment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services#${service.id}`}
              className="group relative rounded-lg lg:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 md:p-4 hover:bg-white/15 hover:border-[#d5a028]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#d5a028]/20 flex items-center justify-center mb-3 group-hover:bg-[#d5a028]/30 group-hover:scale-110 transition-all text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-1.5 group-hover:text-[#f4c430] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[10px] sm:text-xs text-white/70 leading-relaxed line-clamp-2">
                {service.description}
              </p>

              {/* Learn More */}
              <div className="mt-3 flex items-center gap-1 text-[#d5a028] text-[10px] sm:text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d5a028] to-[#f4c430] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg"></div>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-8 md:mt-10">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#d5a028] text-white text-sm md:text-base font-semibold rounded-lg hover:bg-[#c08f1f] shadow-lg hover:shadow-xl transition-all"
          >
            View All Services
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
