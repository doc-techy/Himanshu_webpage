const BlogsVideosSection = () => {
  const blogs = [
    {
      title: "Understanding Robotic Joint Replacement",
      description: "Learn about the benefits and process of robotic-assisted joint replacement surgery.",
      type: "Blog",
      date: "Jan 15, 2026"
    },
    {
      title: "Ilizarov Technique Explained",
      description: "A comprehensive guide to limb reconstruction using the Ilizarov method.",
      type: "Blog",
      date: "Jan 10, 2026"
    },
    {
      title: "Recovery After Orthopaedic Surgery",
      description: "Essential tips and guidelines for optimal recovery post-surgery.",
      type: "Video",
      date: "Jan 5, 2026"
    },
    {
      title: "Sports Injury Prevention",
      description: "Key strategies to prevent sports-related injuries and maintain peak performance.",
      type: "Blog",
      date: "Jan 3, 2026"
    },
    {
      title: "Arthroscopy Benefits",
      description: "Discover the advantages of minimally invasive arthroscopic procedures.",
      type: "Video",
      date: "Dec 28, 2025"
    },
    {
      title: "Pediatric Orthopaedic Care",
      description: "Specialized approaches to treating bone and joint conditions in children.",
      type: "Blog",
      date: "Dec 25, 2025"
    }
  ];

  return (
    <section id="blogs-videos" className="relative w-full h-screen bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] pt-20 md:pt-24 pb-8 md:pb-12 lg:pb-16 overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#d5a028]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col z-10">
        <div className="text-center mb-4 md:mb-6 pt-10 md:pt-12 -mt-8 md:-mt-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-3">
            Blogs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Education Videos</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#d5a028] mx-auto"></div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3 flex-1 items-center">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d5a028]/50 hover:bg-white/15"
            >
              {/* Type Badge */}
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#d5a028]/20 border border-[#d5a028]/30 mb-2">
                <span className="text-[10px] font-semibold text-[#d5a028] uppercase tracking-wide">{item.type}</span>
              </div>

              {/* Content */}
              <h3 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-[#f4c430] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/90 leading-relaxed text-xs md:text-sm lg:text-base mb-3">
                {item.description}
              </p>

              {/* Date and Read More */}
              <div className="flex items-center justify-between border-t border-white/20 pt-2">
                <span className="text-xs text-white/70">{item.date}</span>
                <div className="flex items-center gap-1.5 text-[#d5a028] font-semibold group-hover:gap-2 transition-all">
                  <span className="text-xs">Read More</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
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

export default BlogsVideosSection;
