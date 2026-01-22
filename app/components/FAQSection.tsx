"use client";

import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is robotic joint replacement?",
      answer: "Robotic joint replacement is an advanced surgical technique that uses robotic assistance to achieve precise alignment and placement of joint implants. This technology allows for more accurate surgery, potentially leading to better outcomes, faster recovery, and longer-lasting results compared to traditional joint replacement."
    },
    {
      question: "How long does recovery take after orthopaedic surgery?",
      answer: "Recovery time varies depending on the type of surgery and individual patient factors. Generally, patients can expect to resume light activities within 2-6 weeks, with full recovery typically taking 3-6 months. Our team provides personalized rehabilitation plans to ensure optimal recovery."
    },
    {
      question: "What is the Ilizarov technique?",
      answer: "The Ilizarov technique is a specialized method for limb reconstruction and deformity correction. It uses an external fixator frame with wires and rings that gradually correct bone deformities, lengthen limbs, or treat complex fractures. This technique is particularly effective for cases where traditional methods may not be suitable."
    },
    {
      question: "Do you treat sports injuries?",
      answer: "Yes, we specialize in sports medicine and treat a wide range of sports-related injuries including ligament tears, joint injuries, fractures, and overuse injuries. We use advanced arthroscopic techniques for minimally invasive treatment, allowing athletes to return to their sport faster."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring your medical records, previous X-rays or imaging studies, a list of current medications, insurance information, and any relevant medical history. It's also helpful to prepare a list of questions about your condition and treatment options."
    },
    {
      question: "Is robotic surgery covered by insurance?",
      answer: "Most insurance plans cover robotic joint replacement surgery as it's considered a standard treatment option. However, coverage may vary depending on your specific insurance plan. We recommend contacting your insurance provider or our office to verify coverage before scheduling your procedure."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full h-screen bg-white pt-20 md:pt-24 pb-8 md:pb-12 lg:pb-16 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="text-center mb-4 md:mb-6 pt-10 md:pt-12 -mt-8 md:-mt-10">
          <h2 className="text-3xl font-bold text-[#0b6f66] md:text-4xl lg:text-5xl mb-3">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Questions</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#d5a028] mx-auto"></div>
        </div>
        
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-3xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white border-2 border-[#e6e3df] shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-3 md:px-5 md:py-3.5 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="text-sm md:text-base font-bold text-[#0b6f66] pr-3">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-4 h-4 text-[#d5a028] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 md:px-5 pb-3 md:pb-4">
                    <p className="text-xs leading-relaxed text-[#4a5c63] md:text-sm lg:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r from-[#d5a028] to-[#f4c430] transition-all duration-300 ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
