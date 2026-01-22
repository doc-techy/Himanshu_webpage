const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full h-screen bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] pt-20 md:pt-24 pb-8 md:pb-12 lg:pb-16 overflow-hidden">
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

      <div className="relative w-full h-full flex flex-col z-10">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6 pt-10 md:pt-12 -mt-8 md:-mt-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-3">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Us</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#d5a028] mx-auto"></div>
          <p className="text-sm text-white/90 md:text-base lg:text-lg max-w-2xl mx-auto mt-3">
            Schedule your consultation and take the first step towards recovery
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8 flex-1 items-start px-4 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div className="space-y-4">
            {/* Address Card */}
            <div className="group relative rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#d5a028]/50 hover:-translate-y-1 hover:bg-white/15">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-[#d5a028]/20 flex items-center justify-center group-hover:bg-[#d5a028]/30 transition-all group-hover:scale-110">
                  <svg className="h-4 w-4 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-sm md:text-base font-bold text-[#d5a028]">Address</h3>
              </div>
              <p className="text-xs leading-relaxed text-white/90 md:text-sm lg:text-base">
                Recover Clinic, <br />
                34, 50 feet road, NGEF Layout, <br />
                Postal Colony, Sanjayanagara, <br />
                Bengaluru, Karnataka 560094
              </p>
            </div>
            
            {/* Contact Details Card */}
            <div className="group relative rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#d5a028]/50 hover:-translate-y-1 hover:bg-white/15">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-[#d5a028]/20 flex items-center justify-center group-hover:bg-[#d5a028]/30 transition-all group-hover:scale-110">
                  <svg className="h-4 w-4 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-sm md:text-base font-bold text-[#d5a028]">Contact Details</h3>
              </div>
              <div className="space-y-2">
                <a href="tel:+917282029272" className="group/item flex items-center gap-2 p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all hover:scale-[1.02] border border-white/20">
                  <div className="h-8 w-8 rounded-md bg-[#d5a028]/20 flex items-center justify-center group-hover/item:bg-[#d5a028]/30 transition-all group-hover/item:scale-110">
                    <svg className="h-4 w-4 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm lg:text-base font-semibold text-white">+91 72820 29272</span>
                  <svg className="w-4 h-4 ml-auto text-white opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="mailto:info@clinicrecover.com" className="group/item flex items-center gap-2 p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all hover:scale-[1.02] border border-white/20">
                  <div className="h-8 w-8 rounded-md bg-[#d5a028]/20 flex items-center justify-center group-hover/item:bg-[#d5a028]/30 transition-all group-hover/item:scale-110">
                    <svg className="h-4 w-4 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm lg:text-base font-semibold text-white">info@clinicrecover.com</span>
                  <svg className="w-4 h-4 ml-auto text-white opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-3 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 md:p-5 shadow-lg">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-white mb-1.5">Your Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm px-3 py-2 text-xs md:text-sm lg:text-base text-white placeholder:text-white/60 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-white mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm px-3 py-2 text-xs md:text-sm lg:text-base text-white placeholder:text-white/60 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-white mb-1.5">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm px-3 py-2 text-xs md:text-sm lg:text-base text-white placeholder:text-white/60 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-white mb-1.5">Your Message</label>
                <textarea
                  className="w-full rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm px-3 py-2 text-xs md:text-sm lg:text-base text-white placeholder:text-white/60 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 resize-none transition-all"
                  placeholder="Tell us about your concern or inquiry..."
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="group relative w-full rounded-lg bg-[#d5a028] px-4 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#c08f1f] hover:shadow-xl hover:shadow-[#d5a028]/50 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#d5a028] to-[#f4c430] opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
