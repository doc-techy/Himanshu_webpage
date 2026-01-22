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
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-4">
            Blogs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Education Videos</span>
          </h2>
          <div className="w-24 h-1 bg-[#d5a028] mx-auto"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 flex-1 items-center">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d5a028]/50 hover:bg-white/15"
            >
              {/* Type Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d5a028]/20 border border-[#d5a028]/30 mb-4">
                <span className="text-xs font-semibold text-[#d5a028] uppercase tracking-wide">{item.type}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#f4c430] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/90 leading-relaxed text-base md:text-lg lg:text-xl mb-4">
                {item.description}
              </p>

              {/* Date and Read More */}
              <div className="flex items-center justify-between border-t border-white/20 pt-4">
                <span className="text-sm text-white/70">{item.date}</span>
                <div className="flex items-center gap-2 text-[#d5a028] font-semibold group-hover:gap-3 transition-all">
                  <span className="text-sm">Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
