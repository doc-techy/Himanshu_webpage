const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 md:w-96 h-64 md:h-96 bg-[#d5a028]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl mb-3">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Us</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto mb-3"></div>
          <p className="text-sm text-white/80 md:text-base lg:text-lg max-w-xl mx-auto">
            Schedule your consultation and take the first step towards recovery
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left Column - Contact Info & Quick Actions */}
          <div className="space-y-4 md:space-y-6">
            {/* Quick Contact Cards - Side by side on mobile */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Phone Card */}
              <a 
                href="tel:+917282029272" 
                className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#d5a028] group-hover:scale-110 transition-all">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[10px] md:text-xs text-white/70 mb-0.5">Call Us</span>
                <span className="text-xs md:text-sm font-bold text-white text-center">+91 72820 29272</span>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:doctorsingh@live.com" 
                className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#d5a028] group-hover:scale-110 transition-all">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] md:text-xs text-white/70 mb-0.5">Email Us</span>
                <span className="text-xs md:text-sm font-bold text-white text-center break-all">doctorsingh@live.com</span>
              </a>
            </div>

            {/* Address Card with Map */}
            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">Visit Our Clinic</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-white/80">
                    Recover Clinic, 34, 50 feet road,<br />
                    NGEF Layout, Postal Colony,<br />
                    Sanjayanagara, Bengaluru,<br />
                    Karnataka 560094
                  </p>
                </div>
              </div>
              {/* Map Tile */}
              <div className="relative rounded-lg overflow-hidden border border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7891234567891!2d77.5876543!3d13.0234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzI0LjQiTiA3N8KwMzUnMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[100px] md:h-[120px] grayscale hover:grayscale-0 transition-all duration-300"
                  title="Recover Clinic Location"
                ></iframe>
                <a 
                  href="https://www.google.com/maps/search/Recover+Clinic+34+50+feet+road+NGEF+Layout+Sanjayanagara+Bengaluru+560094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-[#0b6f66] text-xs font-semibold">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in Maps
                  </span>
                </a>
              </div>
            </div>

            {/* Visit Us - Clinic Timings */}
            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                {/* <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div> */}
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-bold text-white mb-3">Visit Us | Orthopaedics</h3>
                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d5a028]"></div>
                        <span className="font-bold text-[#d5a028] text-xs md:text-sm">SPARSH Hospital, Hennur</span>
                      </div>
                      <div className="flex justify-between text-white/80 pl-3.5">
                        <span>Mon - Sat</span>
                        <span className="font-semibold text-white">9:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d5a028]"></div>
                        <span className="font-bold text-[#d5a028] text-xs md:text-sm">Recover Clinic, Kaggadasapura</span>
                      </div>
                      <div className="flex justify-between text-white/80 pl-3.5">
                        <span>Mon - Sat</span>
                        <span className="font-semibold text-white">5:00 PM - 8:00 PM</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-white/60 pt-1 pl-3.5">
                      <span>Sunday</span>
                      <span className="font-semibold text-red-300">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 lg:p-8">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-white/90 mb-1.5">Your Name <span className="text-[#d5a028]">*</span></label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2.5 md:py-3 text-sm text-white placeholder:text-white/50 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-white/90 mb-1.5">Phone Number <span className="text-[#d5a028]">*</span></label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2.5 md:py-3 text-sm text-white placeholder:text-white/50 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-white/90 mb-1.5">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2.5 md:py-3 text-sm text-white placeholder:text-white/50 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-white/90 mb-1.5">Service Interested In</label>
                <select
                  className="w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2.5 md:py-3 text-sm text-white focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}
                >
                  <option value="" className="bg-[#0b6f66] text-white">Select a service</option>
                  <option value="robotic-surgery" className="bg-[#0b6f66] text-white">Robotic Joint Replacement</option>
                  <option value="limb-reconstruction" className="bg-[#0b6f66] text-white">Limb Reconstruction</option>
                  <option value="sports-medicine" className="bg-[#0b6f66] text-white">Sports Medicine</option>
                  <option value="trauma-care" className="bg-[#0b6f66] text-white">Complex Trauma Care</option>
                  <option value="arthroscopy" className="bg-[#0b6f66] text-white">Arthroscopy</option>
                  <option value="other" className="bg-[#0b6f66] text-white">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-white/90 mb-1.5">Your Message</label>
                <textarea
                  className="w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2.5 md:py-3 text-sm text-white placeholder:text-white/50 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 resize-none transition-all"
                  placeholder="Tell us about your concern..."
                  rows={3}
                />
              </div>
              <button
                type="submit"
                className="group w-full rounded-lg bg-[#d5a028] px-4 py-3 md:py-3.5 text-sm md:text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#c08f1f] hover:shadow-xl hover:shadow-[#d5a028]/30 active:scale-[0.98]"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Appointment
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
