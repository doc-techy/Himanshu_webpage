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
    <section id="testimonials" className="relative w-full h-[70vh] bg-white overflow-hidden">
      <div className="w-full h-full flex flex-col">
        <div className="text-center mb-4 md:mb-6 pt-20 md:pt-24">
          <h2 className="text-4xl font-bold text-[#0b6f66] md:text-5xl lg:text-6xl mb-4">
            Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-[#d5a028] mx-auto"></div>
        </div>
        
        {/* Infinite Scrolling Container */}
        <div className="flex-1 flex items-center overflow-hidden w-full">
          <div className="w-full relative">
            {/* Scrolling Track */}
            <div className="flex gap-3 animate-scroll-testimonials">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] max-w-xs rounded-xl bg-white border-2 border-[#e6e3df] p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-[#d5a028]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xs leading-relaxed text-[#4a5c63] md:text-sm lg:text-base mb-3">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-[#e6e3df] pt-2">
                    <div className="font-bold text-[#0b6f66] text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-[#4a5c63] mt-0.5">{testimonial.role}</div>
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
