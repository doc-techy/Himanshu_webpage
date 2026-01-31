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
    },
    {
      name: "Meera Reddy",
      role: "Hip Replacement Patient",
      content: "Excellent care from start to finish. Dr. Singh explained everything clearly and the robotic surgery was precise. I'm walking without pain now!",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      role: "Complex Fracture Patient",
      content: "Dr. Singh saved my leg after a severe accident. His expertise in trauma care and the Ilizarov method gave me hope when others said amputation was the only option.",
      rating: 5
    },
    {
      name: "Sunita Desai",
      role: "Arthroscopy Patient",
      content: "Minimal scarring and quick recovery! The arthroscopic procedure was so much better than traditional surgery. Dr. Singh is truly skilled.",
      rating: 5
    },
    {
      name: "Ramesh Iyer",
      role: "Joint Preservation Patient",
      content: "Dr. Singh's approach to preserving my joint function worked wonders. I avoided a major surgery and regained full mobility through his treatment plan.",
      rating: 5
    },
    {
      name: "Kavita Nair",
      role: "Pediatric Orthopaedics Parent",
      content: "Dr. Singh treated my daughter's condition with such care and expertise. He made her feel comfortable throughout the process. We're forever grateful!",
      rating: 5
    },
    {
      name: "Deepak Joshi",
      role: "Spine Care Patient",
      content: "After years of back pain, Dr. Singh's treatment plan finally gave me relief. His comprehensive approach to spine care is outstanding.",
      rating: 5
    },
    {
      name: "Anjali Verma",
      role: "Rehabilitation Patient",
      content: "The rehabilitation program designed by Dr. Singh's team was excellent. They guided me through every step of recovery with patience and expertise.",
      rating: 5
    },
    {
      name: "Suresh Menon",
      role: "Robotic Surgery Patient",
      content: "The precision of robotic surgery is incredible. Dr. Singh's skill with this technology resulted in a perfect outcome. Highly recommend!",
      rating: 5
    },
    {
      name: "Lakshmi Rao",
      role: "Deformity Correction Patient",
      content: "My leg deformity was corrected beautifully using the Ilizarov method. Dr. Singh's expertise in this technique is unmatched. Life-changing treatment!",
      rating: 5
    },
    {
      name: "Rahul Gupta",
      role: "Sports Medicine Patient",
      content: "As an athlete, I needed someone who understood sports injuries. Dr. Singh got me back to competition faster than I imagined possible. Thank you!",
      rating: 5
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative w-full bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] overflow-hidden py-8 md:py-16">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-[#d5a028]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full flex flex-col z-10">
        <div className="text-center mb-4 md:mb-8 px-4">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
            Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Testimonials</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#d5a028] mx-auto"></div>
        </div>
        
        {/* Infinite Scrolling Container */}
        <div className="flex items-center overflow-hidden w-full py-2 md:py-4">
          <div className="w-full relative">
            {/* Scrolling Track */}
            <div className="flex gap-2 md:gap-3 animate-scroll-testimonials">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-[55vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] xl:w-[22vw] max-w-[280px] rounded-lg md:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 md:p-5 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mb-1.5 md:mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#d5a028]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-[11px] leading-relaxed text-white/90 sm:text-xs md:text-sm lg:text-base mb-2 md:mb-3 line-clamp-4 md:line-clamp-none">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="border-t border-white/20 pt-1.5 md:pt-2">
                    <div className="font-bold text-[#d5a028] text-xs md:text-sm lg:text-base">{testimonial.name}</div>
                    <div className="text-[10px] md:text-xs lg:text-sm text-white/70 mt-0.5">{testimonial.role}</div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
