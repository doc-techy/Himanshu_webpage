const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Knee Replacement Patient",
      content: "Dr. Singh's expertise in robotic joint replacement gave me a new lease on life. The recovery was faster than I expected, and I'm back to my daily activities with full mobility.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Limb Reconstruction Patient",
      content: "The Ilizarov technique used by Dr. Singh corrected my limb deformity perfectly. The care and attention throughout the treatment was exceptional. Highly recommended!",
      rating: 5
    },
    {
      name: "Anil Patel",
      role: "Sports Injury Patient",
      content: "After my sports injury, Dr. Singh's arthroscopic treatment helped me recover quickly. The minimally invasive procedure meant less pain and faster healing.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative w-full h-screen bg-white pt-20 md:pt-24 pb-8 md:pb-12 lg:pb-16 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl font-bold text-[#0b6f66] md:text-5xl lg:text-6xl mb-4">
            Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-[#d5a028] mx-auto"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 flex-1 items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white border-2 border-[#e6e3df] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d5a028]/50"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#d5a028]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-base leading-relaxed text-[#4a5c63] md:text-lg lg:text-xl mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-[#e6e3df] pt-4">
                <div className="font-bold text-[#0b6f66] text-lg md:text-xl">{testimonial.name}</div>
                <div className="text-sm md:text-base text-[#4a5c63] mt-1">{testimonial.role}</div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d5a028] to-[#f4c430] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
