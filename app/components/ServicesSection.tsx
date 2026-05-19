import Link from "next/link";
import ServiceIcon, { ILIZAROV_IMAGE_SCALE } from "./ServiceIcon";

const ServicesSection = () => {
  // Icon positions in the 3x3 grid (row, col) - each icon takes 33.33% of the image
  const services = [
    {
      id: "orthopaedics",
      title: "Orthopaedics",
      description: "Comprehensive care for all bone, joint, and musculoskeletal conditions with advanced diagnostics and treatment.",
      iconPosition: "0% 0%", // top-left: hip joint
    },
    {
      id: "limb-reconstruction",
      title: "Limb Reconstruction",
      description: "Advanced surgical techniques for restoring limb function, treating deformities, and complex trauma cases.",
      iconSrc: "/images/limb-reconstruction-icon.png",
    },
    {
      id: "ilizarov",
      title: "Ilizarov Technique",
      description: "Specialized external fixation method for bone lengthening, deformity correction, and complex fractures.",
      iconSrc: "/images/ilizarov-technique-icon.png",
      imageScale: ILIZAROV_IMAGE_SCALE,
    },
    {
      id: "robotic-surgery",
      title: "Robotic Joint Replacement",
      description: "Precision robotic-assisted surgery for hip and knee replacements with optimal alignment and faster recovery.",
      iconSrc: "/images/robotic-joint-replacement-icon.png",
    },
    {
      id: "arthroscopy",
      title: "Arthroscopy & Sports Medicine",
      description: "Minimally invasive joint surgery and comprehensive sports injury treatment for faster return to activity.",
      iconSrc: "/images/arthroscopy-sports-medicine-icon.png",
    },
    {
      id: "fracture-spine",
      title: "Fracture & Spine Care",
      description: "Expert management of all fracture types and comprehensive spine care with modern surgical techniques.",
      iconPosition: "100% 50%", // middle-right: spine fixation
    }
  ];

  return (
    <section id="services" className="relative w-full bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] py-12 md:py-16 lg:py-20 overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#d5a028]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl mb-3">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Key Services</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-medium">
            Comprehensive orthopaedic care with cutting-edge technology and personalized treatment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services#${service.id}`}
              className="group relative rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 p-4 sm:p-4 md:p-5 hover:bg-white/20 hover:border-[#d5a028]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center shadow-sm"
            >
              {/* Icon */}
              <ServiceIcon
                title={service.title}
                iconSrc={"iconSrc" in service ? service.iconSrc : undefined}
                iconPosition={"iconPosition" in service ? service.iconPosition : undefined}
                imageScale={"imageScale" in service ? service.imageScale : undefined}
                className="mb-3 mx-auto group-hover:scale-110 transition-transform"
              />

              {/* Title */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#f4c430] transition-colors [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]">
                {service.description}
              </p>

              {/* Learn More */}
              <div className="mt-3 flex items-center justify-center gap-1 text-[#d5a028] text-[10px] sm:text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
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
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#d5a028] text-white text-base md:text-lg font-bold rounded-lg hover:bg-[#c08f1f] shadow-lg hover:shadow-xl transition-all"
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
