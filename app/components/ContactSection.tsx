import Image from "next/image";
import {
  PHONE_RECOVER_DISPLAY,
  PHONE_RECOVER_TEL,
  PHONE_SPARSH_DISPLAY,
  PHONE_SPARSH_TEL,
  PHONE_WHATSAPP_DISPLAY,
  PHONE_WHATSAPP_WA_ME,
} from "../constants/phones";

const RECOVER_MAP_URL = "https://maps.app.goo.gl/WtyAJ4EMifhPcdvYA";
const RECOVER_ORTHO_LAT = 13.0369337;
const RECOVER_ORTHO_LNG = 77.5749837;
const RECOVER_MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Recover Ortho Clinic | Dr.Himanshu Singh | Joint Replacement | Sports & Arthroscopy | Limb Reconstruction | Ilizarov"
)}&ll=${RECOVER_ORTHO_LAT},${RECOVER_ORTHO_LNG}&z=16&ie=UTF8&iwloc=&output=embed`;
const SPARSH_MAP_URL = "https://maps.app.goo.gl/xVNAE8Edmy77qxnz6";
const SPARSH_LAT = 13.0402215;
const SPARSH_LNG = 77.6407268;
const SPARSH_MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Dr. Himanshu Singh | Orthopaedics @ Sparsh Hospital | Joint Replacement & Arthroscopy | Ilizarov Limb Deformity Correction"
)}&ll=${SPARSH_LAT},${SPARSH_LNG}&z=16&ie=UTF8&iwloc=&output=embed`;

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] py-10 md:py-12 lg:py-14 overflow-x-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 md:w-96 h-64 md:h-96 bg-[#d5a028]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-7">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-[2.7rem] mb-2">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Us</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto mb-2"></div>
          <p className="text-sm text-white/80 md:text-base max-w-xl mx-auto">
            Schedule your consultation and take the first step towards recovery
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-4 lg:grid-cols-1">
          {/* Left Column - Contact Info & Quick Actions */}
          <div className="space-y-3 md:space-y-4">
            {/* Quick Contact Cards - Side by side on mobile */}
            <div className="grid grid-cols-2 gap-3 md:gap-3.5">
              {/* Phone Card */}
              <a 
                href={`https://wa.me/${PHONE_WHATSAPP_WA_ME}`}
                target="_blank"
                rel="noopener noreferrer" 
                className="group flex flex-col items-center justify-center p-4 md:p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-11 w-11 md:h-12 md:w-12 rounded-full bg-white/20 flex items-center justify-center mb-2 md:mb-2.5 group-hover:bg-[#d5a028] group-hover:scale-110 transition-all">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-white/70 mb-1">WhatsApp</span>
                <span className="text-sm md:text-base lg:text-lg font-bold text-white text-center leading-tight">{PHONE_WHATSAPP_DISPLAY}</span>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:doctorsingh@live.com" 
                className="group flex flex-col items-center justify-center p-4 md:p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-11 w-11 md:h-12 md:w-12 rounded-full bg-white/20 flex items-center justify-center mb-2 md:mb-2.5 group-hover:bg-[#d5a028] group-hover:scale-110 transition-all">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm text-white/70 mb-1">Email Us</span>
                <span className="text-sm md:text-base lg:text-lg font-bold text-white text-center leading-tight break-all">doctorsingh@live.com</span>
              </a>
            </div>

            {/* Visit Us - Clinic Timings */}
            <div className="rounded-xl bg-white/15 backdrop-blur-md border border-white/25 p-3.5 md:p-4 shadow-lg shadow-black/10">
              <h3 className="text-base md:text-lg font-bold text-white mb-2.5">Visit Us | Orthopaedics</h3>
              <div className="grid gap-3.5 md:grid-cols-2 text-sm md:text-base">
                <div className="flex flex-col rounded-xl bg-black/10 border border-white/15 p-3 md:p-3.5 shadow-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-11 w-20 rounded-md bg-white p-1 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                      <Image
                        src="/images/logo.png"
                        alt="Recover Clinic logo"
                        width={80}
                        height={28}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-[#f4c430] text-sm md:text-base lg:text-lg leading-tight">
                      Recover Ortho Clinic, Sanjaynagar
                    </span>
                  </div>
                  <div className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3 py-2 text-white/95">
                    <svg className="w-5 h-5 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm md:text-base">Mon - Sat</span>
                    <span className="h-4 w-px bg-white/25"></span>
                    <span className="text-sm md:text-base font-semibold text-white">5:00 PM - 8:00 PM</span>
                  </div>
                  <a
                    href={`tel:${PHONE_RECOVER_TEL}`}
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-sm md:text-base font-semibold text-white hover:bg-white/20 transition-all"
                  >
                    <svg className="w-4 h-4 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Recover: {PHONE_RECOVER_DISPLAY}
                  </a>
                  <a
                    href={RECOVER_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Recover Ortho Clinic in Google Maps"
                    className="relative mt-2.5 block w-full aspect-[16/7] min-h-[140px] rounded-lg overflow-hidden border border-white/25"
                  >
                    <iframe
                      title="Recover Ortho Clinic Sanjaynagar map"
                      src={RECOVER_MAP_EMBED_SRC}
                      className="pointer-events-none absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      tabIndex={-1}
                    />
                  </a>
                  <a
                    href={RECOVER_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mt-2.5 flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-[#d5a028] px-4 py-2.5 text-sm md:text-base font-bold text-[#0b443f] hover:bg-[#f4c430] transition-all"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Open in Maps
                  </a>
                </div>

                <div className="flex flex-col rounded-xl bg-black/10 border border-white/15 p-3 md:p-3.5 shadow-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-11 w-20 rounded-md bg-white p-1 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                      <Image
                        src="/images/sparsh_logo.png"
                        alt="SPARSH logo"
                        width={80}
                        height={28}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-[#f4c430] text-sm md:text-base lg:text-lg leading-tight">
                      Dr. Himanshu Singh @ Sparsh Hospitals, Hennur
                    </span>
                  </div>
                  <div className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3 py-2 text-white/95">
                    <svg className="w-5 h-5 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm md:text-base">Mon - Sat</span>
                    <span className="h-4 w-px bg-white/25"></span>
                    <span className="text-sm md:text-base font-semibold text-white">9:00 AM - 4:00 PM</span>
                  </div>
                  <a
                    href={`tel:${PHONE_SPARSH_TEL}`}
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-sm md:text-base font-semibold text-white hover:bg-white/20 transition-all"
                  >
                    <svg className="w-4 h-4 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    SPARSH: {PHONE_SPARSH_DISPLAY}
                  </a>
                  <a
                    href={SPARSH_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Dr. Himanshu Singh at Sparsh Hospitals, Hennur in Google Maps"
                    className="relative mt-2.5 block w-full aspect-[16/7] min-h-[140px] rounded-lg overflow-hidden border border-white/25"
                  >
                    <iframe
                      title="Dr. Himanshu Singh at Sparsh Hospitals Hennur map"
                      src={SPARSH_MAP_EMBED_SRC}
                      className="pointer-events-none absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      tabIndex={-1}
                    />
                  </a>
                  <a
                    href={SPARSH_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mt-2.5 flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-[#d5a028] px-4 py-2.5 text-sm md:text-base font-bold text-[#0b443f] hover:bg-[#f4c430] transition-all"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Open in Maps
                  </a>
                </div>

                <div className="flex justify-between text-sm md:text-base text-white/60 pt-0.5 md:col-span-2">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-300">Closed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
