import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

export default function BlogsPage() {
  const blogs = [
    {
      title: "Understanding Robotic Joint Replacement",
      description: "Learn about the benefits and process of robotic-assisted joint replacement surgery.",
      date: "Jan 15, 2026",
      readTime: "5 min read"
    },
    {
      title: "Ilizarov Technique Explained",
      description: "A comprehensive guide to limb reconstruction using the Ilizarov method.",
      date: "Jan 10, 2026",
      readTime: "7 min read"
    },
    {
      title: "Sports Injury Prevention",
      description: "Key strategies to prevent sports-related injuries and maintain peak performance.",
      date: "Jan 3, 2026",
      readTime: "4 min read"
    },
    {
      title: "Pediatric Orthopaedic Care",
      description: "Specialized approaches to treating bone and joint conditions in children.",
      date: "Dec 25, 2025",
      readTime: "6 min read"
    },
    {
      title: "Post-Surgery Rehabilitation Guide",
      description: "Essential tips for faster recovery and optimal outcomes after orthopaedic surgery.",
      date: "Dec 20, 2025",
      readTime: "8 min read"
    },
    {
      title: "Joint Health & Nutrition",
      description: "How diet and lifestyle choices impact your bone and joint health.",
      date: "Dec 15, 2025",
      readTime: "5 min read"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f3f2f0] text-[#18333b] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#d5a028]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Blogs</span>
          </h1>
          <div className="w-20 md:w-24 h-1 bg-[#d5a028] mx-auto mb-4"></div>
          <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Stay informed with our latest articles on orthopaedic care, treatments, and recovery tips.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full bg-white py-8 md:py-12 lg:py-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#0b6f66]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          {/* Content Grid */}
          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-white border border-gray-200 shadow-sm p-4 md:p-5 lg:p-6 hover:shadow-lg hover:border-[#0b6f66]/30 transition-all duration-300 cursor-pointer"
              >
                {/* Blog Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#0b6f66]/10 flex items-center justify-center mb-4 group-hover:bg-[#0b6f66]/20 transition-colors">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-[#0b6f66] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  {blog.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {blog.readTime}
                  </span>
                </div>

                {/* Read More Arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0b6f66]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
