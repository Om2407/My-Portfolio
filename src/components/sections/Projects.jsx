import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect, useRef } from "react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "AI-Powered LMS Platform",
      subtitle: "Intelligent Learning Ecosystem",
      description:
        "A comprehensive Learning Management System powered by artificial intelligence for personalized education. Features AI-generated course content using Gemini API, secure authentication via Google OAuth 2.0, JWT-based authorization, cloud-based media storage with Cloudinary, and integrated payment processing through Razorpay.",
      image: "/project1.png",
      color: "emerald",
      accentColor: "#10b981",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Gemini API", "OAuth 2.0", "JWT", "Cloudinary", "Razorpay"],
      stats: [
        { label: "AI-Powered", value: "100%" },
        { label: "Courses", value: "500+" },
        { label: "Students", value: "10K+" },
      ],
      github: "https://github.com/Om2407/LMS-Platform",
      live: "https://lms-platform-demo.onrender.com",
    },
    {
      id: 2,
      title: "AI Website Generator",
      subtitle: "Next-Gen Web Creation",
      description:
        "An intelligent website generation platform powered by AI that creates fully functional, responsive websites based on user prompts. Leverages Google Gemini API for natural language processing and content generation, combined with Pexels API for dynamic, high-quality imagery.",
      image: "/project2.png",
      color: "blue",
      accentColor: "#3b82f6",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Gemini API", "Pexels API"],
      stats: [
        { label: "Generation Time", value: "< 30s" },
        { label: "Templates", value: "50+" },
        { label: "Success Rate", value: "98%" },
      ],
      github: "https://github.com/Om2407/ProjectAI",
      live: "https://ai-website-builder-1yj3.onrender.com",
    },
    {
      id: 3,
      title: "Remote Interview Platform",
      subtitle: "Seamless Virtual Hiring",
      description:
        "A comprehensive full-stack video interviewing solution enabling seamless remote technical interviews. Features real-time video communication powered by GetStream, secure authentication via Clerk, and automated workflow orchestration using Inngest.",
      image: "/project3.png",
      color: "purple",
      accentColor: "#a855f7",
      technologies: ["React", "Vite", "JavaScript", "Clerk", "Inngest", "GetStream", "Tailwind CSS", "DaisyUI"],
      stats: [
        { label: "Video Quality", value: "HD" },
        { label: "Latency", value: "< 50ms" },
        { label: "Uptime", value: "99.9%" },
      ],
      github: "https://github.com/Om2407/Interview-Platform",
      live: "https://interview-frontend-r67t.onrender.com",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[selectedProject];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${currentProject.accentColor}15, transparent 50%)`,
      }}
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(${currentProject.accentColor}20 1px, transparent 1px),
            linear-gradient(90deg, ${currentProject.accentColor}20 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }}></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-xl">
              Slide through innovation • {selectedProject + 1} / {projects.length}
            </p>
          </div>

          {/* Main Carousel Container */}
          <div className="relative" ref={carouselRef}>
            {/* Project Card */}
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Top Section - Image & Content Split */}
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                
                {/* Left - Image Section */}
                <div className="relative group">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/800x600/${currentProject.color}/white?text=${currentProject.title}`;
                      }}
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Project Number */}
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-black/70 backdrop-blur-md border-2 flex items-center justify-center text-3xl font-bold"
                         style={{ borderColor: currentProject.accentColor }}>
                      {String(currentProject.id).padStart(2, '0')}
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                      {currentProject.stats.map((stat, idx) => (
                        <div key={idx} className="flex-1 bg-black/70 backdrop-blur-md rounded-xl p-3 border border-white/10">
                          <div className="text-2xl font-bold" style={{ color: currentProject.accentColor }}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Content Section */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4"
                         style={{ 
                           backgroundColor: `${currentProject.accentColor}20`,
                           color: currentProject.accentColor,
                           border: `1px solid ${currentProject.accentColor}40`
                         }}>
                      {currentProject.subtitle}
                    </div>
                    
                    <h3 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: currentProject.accentColor }}>
                      {currentProject.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {currentProject.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-lg text-sm font-medium border transition-all hover:scale-105"
                            style={{
                              backgroundColor: `${currentProject.accentColor}10`,
                              borderColor: `${currentProject.accentColor}30`,
                              color: currentProject.accentColor,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 border-2"
                      style={{
                        borderColor: currentProject.accentColor,
                        color: currentProject.accentColor,
                      }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 text-white"
                      style={{
                        backgroundColor: currentProject.accentColor,
                      }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between px-8 lg:px-12 pb-8">
                <button
                  onClick={prevProject}
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="font-medium">Previous</span>
                </button>

                {/* Project Indicators */}
                <div className="flex gap-2">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedProject(idx)}
                      className="transition-all rounded-full"
                      style={{
                        width: selectedProject === idx ? '40px' : '12px',
                        height: '12px',
                        backgroundColor: selectedProject === idx ? currentProject.accentColor : '#ffffff20',
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={nextProject}
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <span className="font-medium">Next</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Keyboard Navigation Hint */}
            <div className="text-center mt-8 text-gray-500 text-sm">
              Use ← → arrow keys or swipe to navigate
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};