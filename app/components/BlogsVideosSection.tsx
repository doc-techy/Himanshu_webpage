"use client";

import { useState } from "react";

const BlogsVideosSection = () => {
  const [activeTab, setActiveTab] = useState<"blogs" | "videos">("blogs");

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
      title: "Patient Success Stories",
      description: "Real patients share their journey and recovery experiences.",
      duration: "10:15",
      views: "4.5K"
    },
    {
      title: "Physical Therapy Exercises",
      description: "Home exercises to support your orthopaedic recovery.",
      duration: "18:00",
      views: "5.2K"
    },
    {
      title: "Dr. Singh Answers FAQs",
      description: "Common questions about orthopaedic treatments answered.",
      duration: "14:30",
      views: "2.9K"
    }
  ];

  return (
    <section id="blogs-videos" className="relative w-full bg-white py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#0b6f66]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d5a028]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl font-bold text-[#0b6f66] sm:text-3xl md:text-4xl lg:text-5xl mb-2">
            Blogs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Education Videos</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#d5a028] mx-auto"></div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="inline-flex p-1 bg-[#0b6f66]/10 rounded-xl border border-[#0b6f66]/20">
            <button
              onClick={() => setActiveTab("blogs")}
              className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === "blogs"
                  ? "bg-[#0b6f66] text-white shadow-lg"
                  : "text-[#0b6f66] hover:bg-[#0b6f66]/10"
              }`}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Blogs
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-[#0b6f66] text-white shadow-lg"
                  : "text-[#0b6f66] hover:bg-[#0b6f66]/10"
              }`}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Videos
            </button>
          </div>
        </div>

        {/* Content Grid - 2 columns on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-2 lg:grid-cols-3">
          {activeTab === "blogs" ? (
            // Blogs Grid - All 6 items visible
            blogs.map((blog, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-white border border-gray-200 shadow-sm p-3 sm:p-4 md:p-5 hover:shadow-lg hover:border-[#0b6f66]/30 transition-all duration-300 cursor-pointer"
              >
                  {/* Blog Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#0b6f66]/10 flex items-center justify-center mb-3 group-hover:bg-[#0b6f66]/20 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2 group-hover:text-[#0b6f66] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{blog.date}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Read More Arrow */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0b6f66]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-[#0b6f66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
            ))
          ) : (
            // Videos Grid - All 6 items visible
            videos.map((video, index) => (
              <div
                key={index}
                className="group relative rounded-lg bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#0b6f66]/30 transition-all duration-300 cursor-pointer"
              >
                  {/* Video Thumbnail with Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* Placeholder Thumbnail Image */}
                    <img 
                      src={`https://picsum.photos/seed/${index + 10}/400/225`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 rounded-full bg-[#0b6f66] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 px-1 sm:px-1.5 py-0.5 bg-black/80 rounded text-[9px] sm:text-[10px] text-white font-medium">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-2 sm:p-2.5">
                    <h3 className="text-[11px] sm:text-xs font-semibold text-gray-800 mb-0.5 group-hover:text-[#0b6f66] transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-gray-500">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {video.views} views
                    </div>
                  </div>
                </div>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-4 md:mt-6">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-[#0b6f66] text-white text-sm font-semibold rounded-lg hover:bg-[#095c54] shadow-lg hover:shadow-xl transition-all">
            View All {activeTab === "blogs" ? `Blogs (${blogs.length})` : `Videos (${videos.length})`}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsVideosSection;
