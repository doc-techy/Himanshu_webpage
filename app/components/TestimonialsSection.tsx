"use client";

import { useState, useEffect, useCallback } from "react";

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

  // Featured transformation stories
  const transformations = [
    {
      id: 1,
      name: "Vikram Malhotra",
      age: 45,
      procedure: "Limb Reconstruction - Ilizarov Method",
      combinedImage: "/images/pmd_limb_discrepancy_before_after_en.webp",
      story: "After a severe motorcycle accident, doctors told me amputation was inevitable. My leg was shattered with multiple fractures and significant bone loss. Then I met Dr. Himanshu Singh. Using the Ilizarov technique, he meticulously reconstructed my leg over 8 months. Today, I walk without any aid and have returned to my normal life. Dr. Singh didn't just save my leg—he gave me my independence back.",
      duration: "8 months recovery",
      highlight: "Avoided Amputation"
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 32,
      procedure: "Leg Length Correction",
      combinedImage: "/images/1a838fc0426c2486733847c02afa03f0.jpg",
      story: "Born with a significant leg length discrepancy, I spent my entire childhood struggling with a limp and constant back pain. After consulting with Dr. Singh, I underwent limb lengthening surgery. The transformation has been incredible—my legs are now equal in length, and I can walk confidently for the first time in my life. The precision and care throughout my treatment was exceptional.",
      duration: "6 months recovery",
      highlight: "5cm Lengthening"
    },
    {
      id: 3,
      name: "Rajesh Menon",
      age: 38,
      procedure: "Robotic Knee Replacement",
      combinedImage: "/images/e348dd6123243e3df6ff598c7f985b81.jpg",
      story: "Years of arthritis had left my knee severely damaged. Walking even short distances was agonizing. Dr. Singh recommended robotic-assisted knee replacement for maximum precision. The surgery went flawlessly and the recovery was remarkably smooth. Within 3 months, I was walking pain-free and even started light jogging. The robotic precision made all the difference in my outcome.",
      duration: "3 months recovery",
      highlight: "Pain-Free Walking"
    },
    {
      id: 4,
      name: "Anita Kulkarni",
      age: 28,
      procedure: "Deformity Correction - Ilizarov Ring Fixator",
      combinedImage: "/images/images.jpeg",
      story: "I was born with a congenital limb deformity that affected my confidence and mobility my entire life. After years of living with it, I found Dr. Singh who specializes in complex deformity corrections. Using the Ilizarov ring fixator, he gradually corrected the alignment over several months. Today my leg is straight and I walk with confidence. This treatment truly changed my life.",
      duration: "10 months recovery",
      highlight: "Deformity Corrected"
    }
  ];

  const [activeTransformation, setActiveTransformation] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const handlePrev = useCallback(() => {
    setSlideDirection('right');
    setTimeout(() => {
      setActiveTransformation((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
      setSlideDirection(null);
    }, 200);
  }, [transformations.length]);

  const handleNext = useCallback(() => {
    setSlideDirection('left');
    setTimeout(() => {
      setActiveTransformation((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
      setSlideDirection(null);
    }, 200);
  }, [transformations.length]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative w-full bg-white overflow-hidden py-8 md:py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#0b6f66]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full flex flex-col z-10">
        {/* Section Title */}
        <div className="text-center mb-6 md:mb-10 px-4">
          <h2 className="text-2xl font-bold text-[#0b6f66] sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
            Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Transformations</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">Real stories of recovery and renewed hope from our patients</p>
          <div className="w-16 md:w-24 h-1 bg-[#d5a028] mx-auto mt-3 md:mt-4"></div>
        </div>

        {/* Featured Transformation Showcase */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 md:mb-16 relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#0b6f66] hover:text-white hover:border-[#0b6f66] text-gray-600 transition-all duration-300 hover:scale-110"
            aria-label="Previous transformation"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#0b6f66] hover:text-white hover:border-[#0b6f66] text-gray-600 transition-all duration-300 hover:scale-110"
            aria-label="Next transformation"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] p-1 mx-4 sm:mx-8">
            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
              <div 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 transition-all duration-300 ${
                  slideDirection === 'left' ? 'opacity-0 -translate-x-8' : 
                  slideDirection === 'right' ? 'opacity-0 translate-x-8' : 
                  'opacity-100 translate-x-0'
                }`}
              >
                
                {/* Left - Before/After Combined Image */}
                <div className="relative bg-gray-100 p-2 md:p-6 lg:p-8 flex flex-col justify-center items-center">
                  <div className="relative group w-3/4 md:w-full">
                    <div className="relative w-full rounded-lg md:rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={transformations[activeTransformation].combinedImage}
                        alt="Before and After treatment"
                        className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Transformation Selector Dots */}
                  <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-2 md:mt-4">
                    {transformations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTransformation(index)}
                        className={`rounded-full transition-all duration-300 ${
                          activeTransformation === index 
                            ? 'bg-[#0b6f66] w-4 h-2 md:w-8 md:h-3' 
                            : 'bg-gray-300 hover:bg-gray-400 w-2 h-2 md:w-3 md:h-3'
                        }`}
                        aria-label={`View transformation ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right - Patient Story */}
                <div className="p-3 md:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Highlight Badge */}
                  <div className="inline-flex items-center gap-1.5 md:gap-2 mb-2 md:mb-6">
                    <span className="px-2 py-1 md:px-4 md:py-2 bg-gradient-to-r from-[#d5a028] to-[#f4c430] text-white text-[10px] md:text-sm font-bold rounded-full shadow-md">
                      {transformations[activeTransformation].highlight}
                    </span>
                    <span className="px-2 py-1 md:px-4 md:py-2 bg-[#0b6f66]/10 text-[#0b6f66] text-[10px] md:text-sm font-semibold rounded-full">
                      {transformations[activeTransformation].duration}
                    </span>
                  </div>

                  {/* Procedure */}
                  <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-[#0b6f66] mb-1 md:mb-3">
                    {transformations[activeTransformation].procedure}
                  </h3>

                  {/* Patient Story */}
                  <div className="relative mb-2 md:mb-6">
                    <svg className="absolute -top-1 -left-1 w-4 h-4 md:w-8 md:h-8 text-[#d5a028]/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-600 text-[11px] md:text-base lg:text-lg leading-relaxed pl-3 md:pl-6 line-clamp-4 md:line-clamp-none">
                      {transformations[activeTransformation].story}
                    </p>
                  </div>

                  {/* Patient Info */}
                  <div className="flex items-center gap-2 md:gap-4 pt-2 md:pt-6 border-t border-gray-200">
                    <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#0b6f66] to-[#0a5d54] flex items-center justify-center text-white text-sm md:text-xl font-bold shadow-md">
                      {transformations[activeTransformation].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs md:text-lg">{transformations[activeTransformation].name}</div>
                      <div className="text-gray-500 text-[10px] md:text-sm">Age {transformations[activeTransformation].age} • Recovered Patient</div>
                    </div>
                    {/* Rating */}
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 md:w-5 md:h-5 text-[#d5a028]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Counter */}
          <div className="text-center mt-3 text-sm text-gray-500 font-medium">
            {activeTransformation + 1} / {transformations.length}
          </div>
        </div>
        
        {/* Testimonials Title */}
        <div className="text-center mb-4 md:mb-6 px-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
            More Patient <span className="text-[#0b6f66]">Reviews</span>
          </h3>
        </div>
        
        {/* Infinite Scrolling Testimonials - Smaller */}
        <div className="flex items-center overflow-hidden w-full py-2 md:py-4">
          <div className="w-full relative">
            {/* Scrolling Track */}
            <div className="flex gap-2 md:gap-3 animate-scroll-testimonials">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-[50vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] xl:w-[18vw] max-w-[240px] rounded-lg bg-white border border-gray-200 shadow-sm p-2.5 md:p-4 hover:shadow-md hover:border-[#0b6f66]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mb-1 md:mb-1.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-2 h-2 md:w-2.5 md:h-2.5 text-[#d5a028]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-[10px] leading-relaxed text-gray-600 sm:text-[11px] md:text-xs mb-1.5 md:mb-2 line-clamp-3">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="border-t border-gray-100 pt-1.5 md:pt-2">
                    <div className="font-bold text-[#0b6f66] text-[10px] md:text-xs">{testimonial.name}</div>
                    <div className="text-[9px] md:text-[10px] text-gray-500">{testimonial.role}</div>
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
