const ServicesSection = () => {
  const services = [
    {
      title: "Orthopaedics",
      description: "Comprehensive orthopaedic care for all bone and joint conditions.",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bone Structure */}
          <rect x="40" y="30" width="20" height="40" fill="white" rx="3" />
          <circle cx="50" cy="30" r="8" fill="white" />
          <ellipse cx="50" cy="75" rx="10" ry="12" fill="white" />
          {/* Medical Cross */}
          <circle cx="50" cy="50" r="12" fill="#d5a028" />
          <rect x="48" y="42" width="4" height="16" fill="white" rx="1" />
          <rect x="42" y="48" width="16" height="4" fill="white" rx="1" />
        </svg>
      )
    },
    {
      title: "Limb Reconstruction",
      description: "Advanced techniques for restoring limb function and structure.",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Leg Bone */}
          <rect x="45" y="15" width="10" height="25" fill="white" rx="2" />
          <rect x="45" y="40" width="10" height="35" fill="white" rx="2" />
          <ellipse cx="50" cy="80" rx="8" ry="12" fill="white" />
          {/* Ilizarov Frame Rings */}
          <circle cx="50" cy="30" r="12" stroke="white" strokeWidth="2.5" fill="none" />
          <circle cx="50" cy="50" r="12" stroke="white" strokeWidth="2.5" fill="none" />
          {/* Connecting Rods */}
          <line x1="38" y1="30" x2="38" y2="50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="62" y1="30" x2="62" y2="50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          {/* Adjustment Screws */}
          <circle cx="38" cy="40" r="2.5" fill="#d5a028" />
          <circle cx="62" cy="40" r="2.5" fill="#d5a028" />
        </svg>
      )
    },
    {
      title: "Deformity correction with Ilizarov",
      description: "Specialized Ilizarov technique for correcting complex limb deformities.",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Curved Bone */}
          <path d="M45 20 Q50 40 45 60 Q40 70 45 80" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Ilizarov Frame */}
          <circle cx="50" cy="30" r="14" stroke="white" strokeWidth="2.5" fill="none" />
          <circle cx="50" cy="55" r="14" stroke="white" strokeWidth="2.5" fill="none" />
          <line x1="36" y1="30" x2="36" y2="55" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="64" y1="30" x2="64" y2="55" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          {/* Correction Arrow */}
          <path d="M50 15 L50 25 M45 20 L50 25 L55 20" stroke="#d5a028" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )
    },
    {
      title: "Robotic Joint replacement",
      description: "Precision robotic-assisted joint replacement for optimal outcomes.",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Robotic Arm */}
          <circle cx="25" cy="25" r="6" fill="white" />
          <rect x="22" y="25" width="6" height="18" fill="white" rx="1" />
          <circle cx="25" cy="48" r="5" fill="white" />
          <rect x="22" y="48" width="6" height="15" fill="white" rx="1" />
          <path d="M25 65 L20 70 L25 75 L30 70 Z" fill="white" />
          {/* Joint/Knee */}
          <circle cx="70" cy="60" r="14" fill="white" />
          <rect x="63" y="60" width="14" height="28" fill="white" rx="2" />
          <rect x="63" y="42" width="14" height="18" fill="white" rx="2" />
          {/* Precision dots */}
          <circle cx="70" cy="50" r="2" fill="#d5a028" />
          <circle cx="65" cy="55" r="1.5" fill="#d5a028" />
          <circle cx="75" cy="55" r="1.5" fill="#d5a028" />
        </svg>
      )
    },
    {
      title: "Arthroscopy & Sports Medicine",
      description: "Minimally invasive arthroscopic procedures and sports injury management.",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Scope/Camera */}
          <rect x="30" y="35" width="20" height="30" fill="white" rx="2" />
          <circle cx="40" cy="50" r="8" fill="#d5a028" />
          <circle cx="40" cy="50" r="4" fill="white" />
          {/* Cable */}
          <path d="M50 40 L70 30 L75 35 L70 40 Z" fill="white" />
          {/* Joint */}
          <circle cx="80" cy="60" r="12" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="80" cy="60" r="6" fill="#d5a028" />
          {/* Sports Activity Lines */}
          <line x1="20" y1="50" x2="25" y2="50" stroke="#d5a028" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Fracture & Spine care",
      description: "Expert management of fractures and comprehensive spine care services.",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Spine */}
          <rect x="48" y="20" width="4" height="50" fill="white" rx="1" />
          {/* Vertebrae */}
          <rect x="42" y="25" width="16" height="8" fill="white" rx="1" />
          <rect x="42" y="38" width="16" height="8" fill="white" rx="1" />
          <rect x="42" y="51" width="16" height="8" fill="white" rx="1" />
          {/* Fracture on Bone */}
          <rect x="30" y="60" width="8" height="20" fill="white" rx="1" />
          <rect x="62" y="60" width="8" height="20" fill="white" rx="1" />
          <circle cx="50" cy="70" r="3" fill="white" />
          <line x1="50" y1="70" x2="45" y2="65" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="70" x2="55" y2="65" stroke="white" strokeWidth="2" strokeLinecap="round" />
          {/* Medical Cross */}
          <circle cx="50" cy="45" r="4" fill="#d5a028" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative w-full h-screen bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden flex flex-col">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#d5a028]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d5a028]/5 rounded-full blur-3xl"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6 -mt-4 md:-mt-6">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl mb-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Key Services</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#d5a028] mx-auto mb-2"></div>
          <p className="text-sm text-white/90 md:text-base lg:text-lg max-w-2xl mx-auto">
            Comprehensive orthopaedic care with cutting-edge technology and personalized treatment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d5a028]/50 hover:bg-white/15 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d5a028]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative mb-3 flex items-center justify-center h-16 md:h-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
                  <div className="relative text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-base md:text-lg font-bold text-[#d5a028] mb-1.5 group-hover:text-[#f4c430] transition-colors text-center">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base lg:text-lg text-center">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d5a028] to-[#f4c430] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              {/* Decorative Corner */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              
              {/* Number Badge */}
              <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-[#d5a028]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-[#d5a028]">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
