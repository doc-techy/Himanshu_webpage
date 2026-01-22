const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full h-screen bg-white pt-20 md:pt-24 pb-8 md:pb-12 lg:pb-16 overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#0b6f66]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0b6f66]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#d5a028]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl font-bold text-[#0b6f66] md:text-5xl lg:text-6xl mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Us</span>
          </h2>
          <div className="w-24 h-1 bg-[#d5a028] mx-auto"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 flex-1 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="group relative rounded-2xl bg-white border-2 border-[#e6e3df] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#d5a028]/50 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-[#d5a028]/20 flex items-center justify-center group-hover:bg-[#d5a028]/30 transition-all group-hover:scale-110">
                  <svg className="h-6 w-6 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#d5a028]">Address</h3>
              </div>
              <p className="text-base leading-relaxed text-[#4a5c63] md:text-lg lg:text-xl">
                Recover Clinic, <br />
                34, 50 feet road, NGEF Layout, <br />
                Postal Colony, Sanjayanagara, <br />
                Bengaluru, Karnataka 560094
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d5a028] to-[#f4c430] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            
            {/* Contact Details Card */}
            <div className="group relative rounded-2xl bg-white border-2 border-[#e6e3df] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#d5a028]/50 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[#d5a028]/20 flex items-center justify-center group-hover:bg-[#d5a028]/30 transition-all group-hover:scale-110">
                  <svg className="h-6 w-6 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#d5a028]">Contact Details</h3>
              </div>
              <div className="space-y-4">
                <a href="tel:+917282029272" className="group/item flex items-center gap-4 p-4 rounded-xl bg-[#f3f2f0] hover:bg-[#e6e3df] transition-all hover:scale-[1.02]">
                  <div className="h-12 w-12 rounded-lg bg-[#d5a028]/20 flex items-center justify-center group-hover/item:bg-[#d5a028]/30 transition-all group-hover/item:scale-110">
                    <svg className="h-6 w-6 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg lg:text-xl font-semibold text-[#0b6f66]">+91 72820 29272</span>
                  <svg className="w-5 h-5 ml-auto text-[#0b6f66] opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="mailto:info@clinicrecover.com" className="group/item flex items-center gap-4 p-4 rounded-xl bg-[#f3f2f0] hover:bg-[#e6e3df] transition-all hover:scale-[1.02]">
                  <div className="h-12 w-12 rounded-lg bg-[#d5a028]/20 flex items-center justify-center group-hover/item:bg-[#d5a028]/30 transition-all group-hover/item:scale-110">
                    <svg className="h-6 w-6 text-[#d5a028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg lg:text-xl font-semibold text-[#0b6f66]">info@clinicrecover.com</span>
                  <svg className="w-5 h-5 ml-auto text-[#0b6f66] opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d5a028] to-[#f4c430] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6 rounded-2xl bg-white border-2 border-[#e6e3df] p-6 md:p-8 shadow-2xl">
              <div>
                <label className="block text-sm md:text-base font-semibold text-[#0b6f66] mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-[#e6e3df] bg-[#f3f2f0] px-4 py-3.5 text-base md:text-lg lg:text-xl text-[#1b2c30] placeholder:text-gray-500 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-semibold text-[#0b6f66] mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-[#e6e3df] bg-[#f3f2f0] px-4 py-3.5 text-base md:text-lg lg:text-xl text-[#1b2c30] placeholder:text-gray-500 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-semibold text-[#0b6f66] mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-[#e6e3df] bg-[#f3f2f0] px-4 py-3.5 text-base md:text-lg lg:text-xl text-[#1b2c30] placeholder:text-gray-500 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-semibold text-[#0b6f66] mb-2">Your Message</label>
                <textarea
                  className="w-full rounded-xl border border-[#e6e3df] bg-[#f3f2f0] px-4 py-3.5 text-base md:text-lg lg:text-xl text-[#1b2c30] placeholder:text-gray-500 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 resize-none transition-all"
                  placeholder="Tell us about your concern or inquiry..."
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="group relative w-full rounded-xl bg-[#d5a028] px-6 py-4 text-base md:text-lg font-bold uppercase tracking-wide text-white shadow-xl transition-all duration-300 hover:bg-[#c08f1f] hover:shadow-2xl hover:shadow-[#d5a028]/50 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#d5a028] to-[#f4c430] opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
