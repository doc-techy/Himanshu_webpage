import Link from "next/link";

const BlogsPreview = () => {
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
      title: "Post-Surgery Rehabilitation Guide",
      description: "Essential tips for faster recovery and optimal outcomes after orthopaedic surgery.",
      date: "Dec 20, 2025",
      readTime: "8 min read"
    },
    {
      title: "Pediatric Orthopaedic Care",
      description: "Specialized approaches to treating bone and joint conditions in children.",
      date: "Dec 15, 2025",
      readTime: "6 min read"
    },
    {
      title: "Joint Health & Nutrition",
      description: "How diet and lifestyle choices impact your bone and joint health.",
      date: "Dec 10, 2025",
      readTime: "5 min read"
    }
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#0b6f66]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl font-bold text-[#0b6f66] sm:text-3xl md:text-4xl lg:text-5xl mb-3">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Blogs</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto mb-3"></div>
          <p className="text-sm text-gray-600 md:text-base lg:text-lg max-w-xl mx-auto">
            Stay informed with our latest articles on orthopaedic care
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer p-[2px]"
              style={{ background: 'linear-gradient(135deg, #0b6f66, #d5a028, #0b6f66, #d5a028)' }}
            >
              {/* Inner card */}
              <div className="relative rounded-[14px] bg-gradient-to-br from-gray-50 to-white h-full">
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#0b6f66]/5 via-transparent to-[#d5a028]/5 pointer-events-none rounded-[14px]"></div>
                
                <div className="relative p-4 md:p-5">
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-2 group-hover:text-[#0b6f66] transition-colors line-clamp-2 leading-tight">
                    {blog.title}
                  </h4>
                  
                  <p className="text-xs md:text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {blog.description}
                  </p>
                  
                  {/* Footer with meta and arrow */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1 text-[10px] md:text-xs text-gray-400">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {blog.readTime}
                    </span>
                    
                    {/* Arrow indicator */}
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#0b6f66] transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b6f66] text-white text-sm font-semibold rounded-lg hover:bg-[#095c54] transition-colors shadow-md hover:shadow-lg"
          >
            View All Blogs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

const VideosPreview = () => {
  const videos = [
    {
      title: "Recovery After Orthopaedic Surgery",
      description: "Essential tips and guidelines for optimal recovery post-surgery.",
      duration: "12:45",
      views: "2.3K"
    },
    {
      title: "Arthroscopy Benefits Explained",
      description: "Discover the advantages of minimally invasive arthroscopic procedures.",
      duration: "8:30",
      views: "1.8K"
    },
    {
      title: "Understanding Robotic Surgery",
      description: "A visual guide to how robotic-assisted surgery works.",
      duration: "15:20",
      views: "3.1K"
    },
    {
      title: "Physical Therapy Exercises",
      description: "Home exercises to support your orthopaedic recovery.",
      duration: "18:00",
      views: "5.2K"
    },
    {
      title: "Ilizarov Surgery Process",
      description: "Step-by-step walkthrough of the Ilizarov limb reconstruction procedure.",
      duration: "22:10",
      views: "4.7K"
    },
    {
      title: "Joint Replacement Recovery Tips",
      description: "Expert advice on recovering faster after joint replacement surgery.",
      duration: "14:30",
      views: "3.9K"
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0b6f66] via-[#0a5d54] to-[#0b6f66] py-12 md:py-16 lg:py-20 overflow-hidden lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#d5a028]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl mb-3">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Videos</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto mb-3"></div>
          <p className="text-sm text-white/80 md:text-base lg:text-lg max-w-xl mx-auto">
            Watch our educational videos to learn about treatments and recovery
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${index + 20}/400/225`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#d5a028] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/80 rounded text-[10px] text-white font-medium">
                  {video.duration}
                </div>
              </div>
              
              {/* Info */}
              <div className="p-2 md:p-3">
                <h4 className="text-xs md:text-sm font-semibold text-white mb-0.5 group-hover:text-[#d5a028] transition-colors line-clamp-1">
                  {video.title}
                </h4>
                <p className="text-[10px] md:text-xs text-white/70 mb-1.5 line-clamp-1">
                  {video.description}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-white/60">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {video.views} views
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Link 
            href="/videos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#d5a028] text-white text-sm font-semibold rounded-lg hover:bg-[#c08f1f] transition-colors shadow-md hover:shadow-lg"
          >
            View All Videos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

const BlogsVideosPreview = () => {
  return (
    <>
      <BlogsPreview />
      <VideosPreview />
    </>
  );
};

export default BlogsVideosPreview;
