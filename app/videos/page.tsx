import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

export default function VideosPage() {
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
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a028] to-[#f4c430]">Videos</span>
          </h1>
          <div className="w-20 md:w-24 h-1 bg-[#d5a028] mx-auto mb-4"></div>
          <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Watch our educational videos to learn about orthopaedic procedures, recovery tips, and patient success stories.
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
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#0b6f66]/30 transition-all duration-300 cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${index + 10}/400/225`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0b6f66] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white font-medium">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-[#0b6f66] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {video.views} views
                  </div>
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
