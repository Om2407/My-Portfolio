import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
        
         <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1 - AI Website Generator */}
            <div className="group rounded-xl border border-white/10 overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden">
                {/* <img 
                  src="C:\Users\Dell\OneDrive\Desktop\My-Portfolio\myself\src\assets\interview.png" 
                  alt="AI Website Generator"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Website Generator
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  An intelligent website generation platform powered by AI that creates fully functional, responsive websites based on user prompts. 
                  Leverages Google Gemini API for natural language processing and content generation, combined with Pexels API for dynamic, 
                  high-quality imagery. Built with modern frontend architecture using React 18, Vite for lightning-fast builds, and TypeScript 
                  for type safety. Features real-time preview, customizable templates, and exports production-ready code.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["React", "Vite", "TypeScript", "Tailwind CSS", "Gemini API", "Pexels API"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-xs font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Om2407/ProjectAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://ai-website-builder-1yj3.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - Remote Interview Platform */}
            <div className="group rounded-xl border border-white/10 overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] transition-all duration-300">
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                {/* <img 
                  src=
                  alt="Remote Interview Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Remote Interview Platform
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  A comprehensive full-stack video interviewing solution enabling seamless remote technical interviews. Features real-time video 
                  communication powered by GetStream, secure authentication via Clerk, and automated workflow orchestration using Inngest. 
                  Includes collaborative code editor, screen sharing, interview scheduling, automated email notifications, and detailed analytics 
                  dashboard. Built with modern React architecture and styled with Tailwind CSS + DaisyUI for a polished, accessible interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["React", "Vite", "JavaScript", "Clerk", "Inngest", "GetStream", "Tailwind CSS", "DaisyUI", "Full Stack"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-400 py-1.5 px-3 rounded-full text-xs font-medium border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Om2407/Interview-Platform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://interview-frontend-r67t.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

          </div>
          </div>
      
      </RevealOnScroll>
    </section>
  );
};
