"use client";

import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is robotic joint replacement?",
      answer: "Robotic joint replacement uses robotic assistance for precise alignment and placement of joint implants, leading to better outcomes, faster recovery, and longer-lasting results."
    },
    {
      question: "How long does recovery take?",
      answer: "Recovery varies by surgery type. Generally, light activities resume within 2-6 weeks, with full recovery in 3-6 months. We provide personalized rehabilitation plans."
    },
    {
      question: "What is the Ilizarov technique?",
      answer: "The Ilizarov technique uses an external fixator frame to gradually correct bone deformities, lengthen limbs, or treat complex fractures where traditional methods may not work."
    },
    {
      question: "Do you treat sports injuries?",
      answer: "Yes, we treat sports-related injuries including ligament tears, joint injuries, and fractures using advanced arthroscopic techniques for faster recovery."
    },
    {
      question: "What should I bring to my first visit?",
      answer: "Bring your medical records, X-rays or imaging studies, list of medications, insurance information, and any questions about your condition."
    },
    {
      question: "Is robotic surgery covered by insurance?",
      answer: "Most insurance plans cover robotic joint replacement. Coverage varies by plan, so contact your provider or our office to verify before scheduling."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0b6f66]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-[#0b6f66] sm:text-3xl md:text-4xl lg:text-5xl mb-3">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Questions</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto mb-3"></div>
          <p className="text-sm text-gray-600 md:text-base max-w-xl mx-auto">
            Find answers to common questions about our services and treatments
          </p>
        </div>
        
        {/* FAQ Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                openIndex === index ? "ring-2 ring-[#0b6f66]/20" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-3 md:px-5 md:py-4 flex items-start justify-between text-left focus:outline-none gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    openIndex === index 
                      ? "bg-[#0b6f66] text-white" 
                      : "bg-[#0b6f66]/10 text-[#0b6f66]"
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index 
                    ? "bg-[#d5a028] rotate-180" 
                    : "bg-gray-100 group-hover:bg-[#d5a028]/20"
                }`}>
                  <svg
                    className={`w-3.5 h-3.5 transition-colors ${
                      openIndex === index ? "text-white" : "text-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 md:px-5 pb-4 md:pb-5 pl-[52px] md:pl-[60px]">
                  <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm text-gray-600 mb-3">
            Still have questions?
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0b6f66] text-white text-sm font-semibold rounded-lg hover:bg-[#095c54] transition-colors shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
