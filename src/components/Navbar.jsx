import { useEffect, useState, useRef, useCallback } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);
  const logoRef = useRef(null);

  // Navigation items with icons and enhanced metadata
  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠', delay: 0 },
    { name: 'About', href: '#about', icon: '👨‍💻', delay: 100 },
    { name: 'Projects', href: '#projects', icon: '🚀', delay: 200 },
    { name: 'Contact', href: '#contact', icon: '📫', delay: 300 }
  ];

  // Enhanced scroll handler with direction detection
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 20);
    setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 100);
    setLastScrollY(currentScrollY);

    // Active section detection
    const sections = navItems.map(item => item.href.replace('#', ''));
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    if (current) setActiveSection(current);
  }, [lastScrollY, navItems]);

  // Mouse tracking for interactive effects
  const handleMouseMove = useCallback((e) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll and mouse event listeners
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      nav.addEventListener('mousemove', handleMouseMove);
      return () => nav.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, setMenuOpen]);

  // Logo animation on scroll
  useEffect(() => {
    if (logoRef.current) {
      const rotation = Math.min(lastScrollY / 10, 360);
      logoRef.current.style.transform = `rotate(${rotation}deg)`;
    }
  }, [lastScrollY]);

  return (
    <>
      {/* Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Navbar */}
      <nav 
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrollingUp ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled 
            ? 'bg-gradient-to-r from-black/98 via-gray-900/98 to-black/98 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-blue-500/20' 
            : 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
        }`}
        style={{
          background: scrolled 
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%), linear-gradient(to right, rgba(0, 0, 0, 0.98), rgba(17, 24, 39, 0.98), rgba(0, 0, 0, 0.98))`
            : undefined
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Enhanced Logo with Profile Image */}
            <a 
              href="#home" 
              className="flex items-center gap-4 hover:scale-105 transition-all duration-500 group relative cursor-pointer"
              aria-label="Home"
            >
              <div className="relative">
                {/* Animated gradient ring */}
                <div className="absolute inset-0 rounded-full animate-pulse">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src="https://i.pinimg.com/736x/f9/a0/dd/f9a0dd5d9f7ea2240650722a47b431e3.jpg"
                    alt="OM GUPTA"
                    className="relative w-14 h-14 rounded-full border-3 border-white/30 group-hover:border-white/50 transition-all duration-500 object-cover shadow-2xl shadow-blue-500/30 group-hover:shadow-purple-500/50"
                  />
                  
                  {/* Rotating border effect */}
                  <div 
                    ref={logoRef}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0%, rgba(59, 130, 246, 0.6) 50%, transparent 100%)',
                      padding: '2px',
                      transition: 'all 0.5s ease'
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-transparent"></div>
                  </div>
                </div>
                
                {/* Online status indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-black animate-pulse group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 shadow-lg shadow-green-400/50">
                  <div className="absolute inset-1 bg-white rounded-full opacity-90"></div>
                </div>
              </div>
              
              {/* Enhanced Name Text */}
              <div className="flex flex-col">
                <span 
                  className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-500 transition-all duration-500 tracking-wider"
                  style={{ fontFamily: "'Orbitron', 'Space Grotesk', sans-serif" }}
                >
                  OM GUPTA
                </span>
                <span className="text-xs bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300 font-medium tracking-widest uppercase">
                  Full Stack Developer
                </span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl blur-xl transition-all duration-500 -z-10"></div>
            </a>

            {/* Desktop Right Section - Nav + GitHub */}
            <div className="hidden md:flex items-center gap-4">
              {/* Enhanced Desktop Navigation */}
              <nav className="flex items-center space-x-2" role="navigation">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-6 py-3 text-sm font-semibold transition-all duration-500 rounded-xl group overflow-hidden ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-white bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 border border-blue-400/50 shadow-lg shadow-blue-500/30'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{ animationDelay: `${item.delay}ms` }}
                    aria-current={activeSection === item.name.toLowerCase() ? 'page' : undefined}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-lg opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300">
                        {item.icon}
                      </span>
                      <span className="tracking-wide">{item.name}</span>
                    </span>
                    
                    {/* Multi-layer hover effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-700 rounded-xl scale-95 group-hover:scale-100"></div>
                    
                    {/* Animated underline */}
                    <div className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-700 rounded-full shadow-lg shadow-blue-500/50"></div>
                    
                    {/* Side accent lines */}
                    <div className="absolute left-0 top-1/2 w-0 h-0 bg-gradient-to-r from-blue-500 to-transparent group-hover:w-1.5 group-hover:h-6 transition-all duration-500 rounded-full transform -translate-y-1/2 shadow-md shadow-blue-500/50"></div>
                    <div className="absolute right-0 top-1/2 w-0 h-0 bg-gradient-to-l from-cyan-500 to-transparent group-hover:w-1.5 group-hover:h-6 transition-all duration-500 rounded-full transform -translate-y-1/2 shadow-md shadow-cyan-500/50"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-md transition-all duration-500"></div>
                  </a>
                ))}
              </nav>

              {/* Enhanced GitHub Link */}
              <div className="ml-2">
                <a 
                  href="https://github.com/Om2407" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative w-11 h-11 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-500 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 group border border-transparent hover:border-blue-400/30 overflow-hidden"
                  title="Visit my GitHub"
                >
                  <svg className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/30 group-hover:to-purple-500/30 rounded-xl transition-all duration-500"></div>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg transition-all duration-500"></div>
                </a>
              </div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="w-12 h-12 relative cursor-pointer z-50 md:hidden flex flex-col justify-center items-center group p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-transparent hover:border-blue-400/30 overflow-hidden"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              
              {/* Hamburger lines with enhanced animations */}
              <span 
                className={`block w-7 h-0.5 rounded-full transition-all duration-500 transform-gpu ${
                  menuOpen 
                    ? 'rotate-45 translate-y-2 bg-gradient-to-r from-red-400 to-pink-500 shadow-lg shadow-red-400/50' 
                    : 'bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:shadow-sm group-hover:shadow-blue-400/50 group-hover:from-purple-400 group-hover:to-pink-400'
                }`}
              ></span>
              <span 
                className={`block w-7 h-0.5 rounded-full transition-all duration-300 mt-1.5 ${
                  menuOpen 
                    ? 'opacity-0 scale-0' 
                    : 'bg-gradient-to-r from-blue-400 to-cyan-400 opacity-100 scale-100 group-hover:shadow-sm group-hover:shadow-blue-400/50 group-hover:from-purple-400 group-hover:to-pink-400'
                }`}
              ></span>
              <span 
                className={`block w-7 h-0.5 rounded-full transition-all duration-500 transform-gpu mt-1.5 ${
                  menuOpen 
                    ? '-rotate-45 -translate-y-2 bg-gradient-to-r from-red-400 to-pink-500 shadow-lg shadow-red-400/50' 
                    : 'bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:shadow-sm group-hover:shadow-blue-400/50 group-hover:from-purple-400 group-hover:to-pink-400'
                }`}
              ></span>
              
              {/* Button background glow */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md ${
                menuOpen ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20' : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
              }`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '80px' }}
      >
        {/* Backdrop with enhanced blur and gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/98 via-gray-900/98 to-black/98 backdrop-blur-3xl"></div>
        
        {/* Menu content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-10 px-6">
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-52 h-52 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Navigation items */}
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-5xl text-gray-300 hover:text-white transition-all duration-700 relative group transform font-bold tracking-wide ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              } ${
                activeSection === item.name.toLowerCase() ? 'text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text' : ''
              }`}
              style={{ 
                transitionDelay: menuOpen ? `${index * 150 + 200}ms` : '0ms',
                fontFamily: "'Space Grotesk', 'Poppins', sans-serif"
              }}
            >
              <span className="relative z-10 flex items-center gap-5">
                <span className="text-3xl opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {item.icon}
                </span>
                {item.name}
              </span>
              
              {/* Enhanced hover effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-700 rounded-3xl -m-8 scale-90 group-hover:scale-100"></div>
              
              {/* Glowing underline */}
              <div className="absolute -bottom-4 left-1/2 w-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 group-hover:w-full group-hover:left-0 transition-all duration-700 rounded-full group-hover:shadow-2xl group-hover:shadow-blue-500/50"></div>
              
              {/* Side glow effects */}
              <div className="absolute top-1/2 -left-16 w-0 h-0 bg-gradient-to-r from-blue-500/60 to-transparent group-hover:w-4 group-hover:h-16 transition-all duration-700 rounded-full blur-lg transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 -right-16 w-0 h-0 bg-gradient-to-l from-pink-500/60 to-transparent group-hover:w-4 group-hover:h-16 transition-all duration-700 rounded-full blur-lg transform -translate-y-1/2"></div>
            </a>
          ))}
          
          {/* GitHub Link in Mobile Menu */}
          <div className={`transform transition-all duration-700 ${
            menuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-75'
          }`} style={{ transitionDelay: menuOpen ? '800ms' : '0ms' }}>
            <a 
              href="https://github.com/Om2407" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-500 group px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-transparent hover:border-blue-400/30"
              title="Visit my GitHub"
            >
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-2xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>GitHub</span>
            </a>
          </div>
          
          {/* Enhanced profile section */}
          <div className={`mt-16 transform transition-all duration-700 ${
            menuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-75'
          }`} style={{ transitionDelay: menuOpen ? '900ms' : '0ms' }}>
            <div className="relative group">
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <img
                  src="https://i.pinimg.com/736x/f9/a0/dd/f9a0dd5d9f7ea2240650722a47b431e3.jpg"
                  alt="OM GUPTA"
                  className="relative w-28 h-28 rounded-full border-4 border-white/30 object-cover shadow-2xl shadow-blue-500/50 group-hover:shadow-purple-500/60 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-black animate-pulse group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 shadow-lg shadow-green-400/50">
                <div className="absolute inset-2 bg-white rounded-full opacity-90"></div>
              </div>
            </div>
            
            <p className="mt-6 text-gray-300 text-center font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              OM GUPTA
            </p>
            <p className="text-gray-300 text-center font-medium text-sm tracking-wider uppercase">
              MERN Stack Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};