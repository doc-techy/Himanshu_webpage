import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

export default function ServicesPage() {
  const services = [
    {
      title: "Robotic Joint Replacement",
      description: "Advanced robotic-assisted procedures for hip and knee replacements with precision and faster recovery.",
      icon: "🤖"
    },
    {
      title: "Limb Reconstruction",
      description: "Specialized techniques for complex limb deformities and trauma reconstruction using Ilizarov method.",
      icon: "🦴"
    },
    {
      title: "Sports Medicine",
      description: "Comprehensive care for sports-related injuries and performance optimization for athletes.",
      icon: "⚽"
    },
    {
      title: "Complex Trauma Care",
      description: "Expert management of severe fractures, dislocations, and multi-trauma cases with evidence-based protocols.",
      icon: "🏥"
    },
    {
      title: "Arthroscopy",
      description: "Minimally invasive diagnostic and surgical procedures for joint conditions with minimal scarring.",
      icon: "🔬"
    },
    {
      title: "Pediatric Orthopaedics",
      description: "Specialized care for children's bone and joint conditions with age-appropriate treatment approaches.",
      icon: "👶"
    },
    {
      title: "Joint Preservation",
      description: "Advanced techniques to preserve and restore joint function, delaying or avoiding joint replacement.",
      icon: "🦵"
    },
    {
      title: "Fracture Management",
      description: "Expert treatment of all types of fractures using modern surgical and non-surgical techniques.",
      icon: "🩹"
    },
    {
      title: "Rehabilitation Services",
      description: "Comprehensive post-surgical rehabilitation programs for optimal recovery and mobility restoration.",
      icon: "🏃"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f3f2f0] text-[#18333b] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#0b6f66] to-[#0a5d54] pt-20 md:pt-24 pb-6 md:pb-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white transition"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
          
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-2">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-[#d5a028] mx-auto mb-3"></div>
            <p className="text-base text-white/90 md:text-lg lg:text-xl max-w-3xl mx-auto">
              Comprehensive orthopaedic care with cutting-edge technology and personalized treatment plans
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full bg-white py-6 md:py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-white border border-[#e6e3df] p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl md:text-3xl mb-2 text-center">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-[#0b6f66] mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-[#4a5c63] md:text-lg lg:text-xl text-center">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d5a028] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-[#0b6f66] to-[#0a5d54] py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-6">
            Ready to Begin Your Recovery Journey?
          </h2>
          <p className="text-base text-white/90 md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Himanshu Singh to discuss your treatment options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#d5a028] px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-[#c08f1f] hover:shadow-xl hover:scale-105 md:px-10 md:py-4 md:text-lg"
            >
              Book an Appointment
            </a>
            <a
              href="tel:+917282029272"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 md:px-10 md:py-4 md:text-lg"
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
