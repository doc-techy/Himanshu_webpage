import Link from "next/link";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

export default function ServicesPage() {
  const services = [
    {
      id: "orthopaedics",
      title: "Orthopaedics",
      icon: "🦴",
      description: "Comprehensive orthopaedic care for all bone and joint conditions with advanced diagnostic and treatment approaches.",
      offerings: [
        "Complete bone and joint evaluation",
        "Non-surgical treatment options",
        "Surgical interventions when needed",
        "Post-operative care and follow-up",
        "Preventive care and counseling"
      ]
    },
    {
      id: "limb-reconstruction",
      title: "Limb Reconstruction",
      icon: "🔧",
      description: "Advanced techniques for restoring limb function and structure using modern surgical methods.",
      offerings: [
        "Complex limb salvage procedures",
        "Bone lengthening surgery",
        "Malunion and non-union treatment",
        "Post-traumatic reconstruction",
        "Congenital deformity correction"
      ]
    },
    {
      id: "ilizarov",
      title: "Ilizarov Technique",
      icon: "⚙️",
      description: "Specialized Ilizarov external fixation technique for correcting complex limb deformities and bone defects.",
      offerings: [
        "Limb lengthening procedures",
        "Angular deformity correction",
        "Bone transport for defects",
        "Complex fracture management",
        "Infection treatment with reconstruction"
      ]
    },
    {
      id: "robotic-surgery",
      title: "Robotic Joint Replacement",
      icon: "🤖",
      description: "Precision robotic-assisted joint replacement surgery for optimal alignment and faster recovery.",
      offerings: [
        "Robotic knee replacement",
        "Robotic hip replacement",
        "Partial knee replacement",
        "Revision joint surgery",
        "Computer-navigated procedures"
      ]
    },
    {
      id: "arthroscopy",
      title: "Arthroscopy & Sports Medicine",
      icon: "🏃",
      description: "Minimally invasive arthroscopic procedures and comprehensive sports injury management.",
      offerings: [
        "Knee arthroscopy (ACL, meniscus)",
        "Shoulder arthroscopy",
        "Sports injury treatment",
        "Ligament reconstruction",
        "Cartilage restoration"
      ]
    },
    {
      id: "fracture-spine",
      title: "Fracture & Spine Care",
      icon: "🏥",
      description: "Expert management of fractures and comprehensive spine care services with modern techniques.",
      offerings: [
        "Emergency fracture care",
        "Complex fracture fixation",
        "Spine injury management",
        "Degenerative spine treatment",
        "Minimally invasive spine surgery"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] text-white overflow-x-hidden">
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/20 pointer-events-none z-0"></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-24 md:pt-28 pb-8 md:pb-12 z-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl mb-3">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Services</span>
            </h1>
            <div className="w-20 h-1 bg-[#d5a028] mx-auto mb-4"></div>
            <p className="text-sm text-white/90 md:text-base max-w-2xl mx-auto">
              Comprehensive orthopaedic care with cutting-edge technology and personalized treatment
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="relative w-full py-8 md:py-12 z-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 md:space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="scroll-mt-24 group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left - Icon & Title */}
                  <div className="bg-[#d5a028]/20 p-4 md:p-6 md:w-1/3 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl md:text-5xl mb-2">{service.icon}</div>
                    <h2 className="text-lg md:text-xl font-bold text-white">{service.title}</h2>
                  </div>
                  
                  {/* Right - Details */}
                  <div className="p-4 md:p-6 md:w-2/3">
                    <p className="text-sm md:text-base text-white/80 mb-4">
                      {service.description}
                    </p>
                    
                    <h3 className="text-sm font-bold text-[#d5a028] mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      What We Offer
                    </h3>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.offerings.map((offering, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-white/80">
                          <svg className="w-4 h-4 text-[#d5a028] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {offering}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <a 
                        href="/#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#d5a028] hover:text-[#f4c430] transition-colors"
                      >
                        Book Consultation
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-10 md:py-14 z-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-4">
            Ready to Begin Your Recovery?
          </h2>
          <p className="text-sm text-white/90 md:text-base mb-6 max-w-xl mx-auto">
            Schedule a consultation with Dr. Himanshu Singh to discuss your treatment options
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#d5a028] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#c08f1f]"
            >
              Book an Appointment
            </a>
            <a
              href="tel:+917282029272"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20"
            >
              Call: +91 72820 29272
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
