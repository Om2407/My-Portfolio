import { useEffect, useState } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <>
      {/* Backdrop with blur effect */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen
            ? 'backdrop-blur-md bg-black/60 opacity-100'
            : 'backdrop-blur-none bg-black/0 opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu Container */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-96 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50
                   shadow-2xl transition-all duration-500 ease-out ${
          menuOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center
                   text-white hover:text-blue-400 text-3xl
                   transition-all duration-300 hover:rotate-90 hover:scale-110
                   focus:outline-none group z-10"
          aria-label="Close Menu"
        >
          <div className="relative w-8 h-8">
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2 rotate-45 
                           transition-all duration-300 group-hover:bg-blue-400"></span>
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2 -rotate-45
                           transition-all duration-300 group-hover:bg-blue-400"></span>
          </div>
        </button>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-8">
          
          {/* Logo/Brand */}
          <div className={`mb-12 transition-all duration-700 delay-100 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 
                         bg-clip-text text-transparent animate-gradient-x bg-300%">
              Om Gupta
            </h2>
            <p className="text-gray-400 text-sm text-center mt-2">MERN Stack Developer</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 w-full">
            {menuItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`group relative w-full max-w-xs py-4 px-8 
                         text-2xl font-semibold text-white
                         flex items-center justify-center gap-4
                         rounded-2xl overflow-hidden
                         transition-all duration-500 ${
                  menuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                              transition-all duration-300 ${
                  activeSection === item.id
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                }`}></div>
                
                {/* Border effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'border-blue-400 scale-100'
                    : 'border-transparent group-hover:border-blue-400/50 group-hover:scale-100 scale-95'
                }`}></div>

                {/* Icon */}
                <span className={`text-3xl transition-all duration-300 ${
                  activeSection === item.id
                    ? 'scale-110'
                    : 'group-hover:scale-110'
                }`}>
                  {item.icon}
                </span>

                {/* Label */}
                <span className="relative z-10 transition-all duration-300 group-hover:text-blue-400">
                  {item.label}
                </span>

                {/* Active indicator */}
                {activeSection === item.id && (
                  <span className="absolute left-4 w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 
                                 rounded-full animate-pulse"></span>
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-purple-400/0 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className={`mt-12 flex gap-6 transition-all duration-700 delay-500 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: '💼', label: 'LinkedIn', href: '#' },
              { icon: '📱', label: 'GitHub', href: '#' },
              { icon: '✉️', label: 'Email', href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 flex items-center justify-center
                         bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50
                         rounded-xl text-2xl
                         transition-all duration-300 hover:scale-110 hover:-translate-y-1
                         backdrop-blur-sm"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Decorative elements */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-xs text-center
                         transition-all duration-700 delay-700 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <p>© 2024 Om Gupta</p>
            <p className="mt-1">Made with ❤️</p>
          </div>
        </div>

        {/* Floating particles */}
        {menuOpen && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .bg-300% {
          background-size: 300%;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};