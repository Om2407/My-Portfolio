import { useEffect, useState } from "react";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  // Simple reveal animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 3
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  // Node.js Icon Component
  const NodeIcon = ({ className }) => (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 40 41 41.616 41 42.325v50.49c0 4.946-5.979 9.62-15.176 5.586L13.231 91.85c-.908-.453-1.231-1.613-1.231-2.259V38.407c0-.646.323-1.806 1.231-2.26L58.95 10.545c.908-.453 2.259-.453 3.167 0l44.674 25.602c.908.453 1.230 1.613 1.230 2.259V89.59c0 .646-.322 1.806-1.23 2.26L62.117 117.41c-.908.453-2.259.453-3.167 0L34.802 101.247c-1.429-.81-2.9-.81-3.167 0-.645.324-1.250 1.129-1.250 1.774 0 .645.429 1.613 1.073 1.774L56.950 120.44c.908.453 2.259.453 3.167 0l44.674-25.602c1.895-1.102 2.96-3.146 2.96-5.334V38.407c-.001-2.188-1.066-4.232-2.98-5.073z"/>
        <path fill="#83CD29" d="M77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.38-.623.335-.991-1.19-14.049-10.55-18.875-22.11-18.875-12.623 0-20.029 5.32-20.029 14.235 0 9.712 7.484 12.4 19.69 13.613 14.487 1.412 15.519 3.506 15.519 6.391 0 4.943-3.945 7.058-10.844 7.058z"/>
      </svg>
    </div>
  );

  // React Icon Component
  const ReactIcon = ({ className }) => (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 128 128" className="w-full h-full">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"/>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 2 59.4 2 69.2 2 79.1 8.2 88.5 21.8 93.3c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3C119.8 88.5 126 79.1 126 69.2c0-9.8-6.2-19.2-18.7-24zM22.2 73.8c9.9-4.5 22.5-7.9 36.8-9.9.4 2.9.9 5.9 1.6 8.8-2.4.4-4.7.9-6.9 1.4-13.1 3.1-24.1 7.4-31.5 12.8v-.1zm36.8-31.6c-14.3-2.1-26.9-5.4-36.8-9.9 7.4-5.4 18.4-9.7 31.5-12.8 2.2-.5 4.5-1 6.9-1.4-.7 2.9-1.2 5.9-1.6 8.8v5.3zm31.6-9.9c-9.9 4.5-22.5 7.9-36.8 9.9-.4-2.9-.9-5.9-1.6-8.8 2.4-.4 4.7-.9 6.9-1.4 13.1-3.1 24.1-7.4 31.5-12.8v.1zm-31.6 31.6c14.3 2.1 26.9 5.4 36.8 9.9-7.4 5.4-18.4 9.7-31.5 12.8-2.2.5-4.5 1-6.9 1.4.7-2.9 1.2-5.9 1.6-8.8v-5.3z"/>
        </g>
      </svg>
    </div>
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive Lighting Effects */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x / 10}% ${50 + mousePosition.y / 10}%, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 20%, transparent 50%)`
        }}
      />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Node.js Icons */}
        <NodeIcon className="absolute top-20 left-16 w-12 h-12 animate-float opacity-70 hover:opacity-100 transition-opacity duration-300" />
        <NodeIcon className="absolute bottom-32 right-24 w-16 h-16 animate-float-delayed opacity-60 hover:opacity-100 transition-opacity duration-300" />
        <NodeIcon className="absolute top-1/3 left-8 w-10 h-10 animate-pulse opacity-50" />

        {/* React Icons */}
        <ReactIcon className="absolute top-32 right-20 w-14 h-14 animate-spin-slow opacity-80 hover:opacity-100 transition-opacity duration-300" />
        <ReactIcon className="absolute bottom-20 left-32 w-12 h-12 animate-spin-slow opacity-70 hover:opacity-100 transition-opacity duration-300" />
        <ReactIcon className="absolute top-2/3 right-12 w-8 h-8 animate-bounce opacity-60" />

        {/* Additional animated particles */}
        <div className="absolute top-24 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-1/2 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-300 opacity-60"></div>
      </div>

      {/* Main Content */}
      <div className={`text-center z-30 px-4 relative transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        {/* Enhanced title with glowing effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight relative">
          <span className="inline-block hover:scale-105 transition-transform duration-300 drop-shadow-2xl">
            Hi, I'm Om Gupta
          </span>
          {/* Glowing text shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
            Hi, I'm Om Gupta
          </div>
        </h1>
        
        {/* Enhanced paragraph with glass morphism */}
        <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 shadow-2xl relative">
          I'm a Mern-stack developer who loves crafting clean, scalable web
          applications.
          
          {/* Animated tech badges */}
          <div className="flex justify-center mt-4 space-x-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 animate-pulse">
              Node.js
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 animate-pulse delay-200">
              React
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 animate-pulse delay-400">
              Java
            </span>
          </div>
        </p>
        
        {/* Enhanced buttons with ripple effects */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 sm:space-y-0">
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(59, 130, 246, 0.4)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          </a>
          
          <a
            href="#contact"
            className="group relative border-2 border-blue-500/70 text-blue-400 py-4 px-8 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(59, 130, 246, 0.2)] hover:border-blue-400 active:scale-95 backdrop-blur-sm overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full mx-auto relative backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
          <p className="text-blue-400/70 text-sm mt-3 font-medium">Scroll to explore my work</p>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};