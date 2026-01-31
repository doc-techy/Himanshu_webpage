const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 md:w-96 h-64 md:h-96 bg-[#0b6f66]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 md:w-96 h-64 md:h-96 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-[#0b6f66] sm:text-3xl md:text-4xl lg:text-5xl mb-3">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Us</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto mb-3"></div>
          <p className="text-sm text-gray-600 md:text-base lg:text-lg max-w-xl mx-auto">
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
                className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#0b6f66]/30 transition-all duration-300"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0b6f66]/10 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#0b6f66]/20 group-hover:scale-110 transition-all">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[10px] md:text-xs text-gray-500 mb-0.5">Call Us</span>
                <span className="text-xs md:text-sm font-bold text-[#0b6f66] text-center">+91 72820 29272</span>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:info@clinicrecover.com" 
                className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#0b6f66]/30 transition-all duration-300"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0b6f66]/10 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#0b6f66]/20 group-hover:scale-110 transition-all">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] md:text-xs text-gray-500 mb-0.5">Email Us</span>
                <span className="text-xs md:text-sm font-bold text-[#0b6f66] text-center break-all">info@clinicrecover.com</span>
              </a>
            </div>

            {/* Address Card with Map */}
            <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0b6f66]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-[#0b6f66] mb-1">Visit Our Clinic</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                    Recover Clinic, 34, 50 feet road,<br />
                    NGEF Layout, Postal Colony,<br />
                    Sanjayanagara, Bengaluru,<br />
                    Karnataka 560094
                  </p>
                </div>
              </div>
              {/* Map Tile */}
              <div className="relative rounded-lg overflow-hidden border border-gray-200">
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

            {/* Clinic Hours */}
            <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0b6f66]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-bold text-[#0b6f66] mb-2">Clinic Hours</h3>
                  <div className="space-y-1.5 text-xs md:text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold text-gray-800">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold text-gray-800">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button - Mobile Only */}
            <a 
              href="https://wa.me/917282029272" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex md:hidden items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg hover:bg-[#20BA5C] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-xl bg-[#0b6f66] shadow-xl p-4 md:p-6 lg:p-8">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-white/90 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2.5 md:py-3 text-sm text-white placeholder:text-white/50 focus:border-[#d5a028] focus:outline-none focus:ring-2 focus:ring-[#d5a028]/30 transition-all"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-white/90 mb-1.5">Phone Number</label>
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
                  required
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
                  required
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
