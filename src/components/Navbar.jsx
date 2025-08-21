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

  // Handle profile image click to cycle through images
  const handleProfileClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Navbar */}
      <nav 
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrollingUp ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-2xl border-b border-white/30 shadow-2xl shadow-blue-500/20' 
            : 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg'
        }`}
        style={{
          background: scrolled 
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%), rgba(0, 0, 0, 0.95)`
            : undefined
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Enhanced Logo */}
            <a 
              href="#home" 
              onClick={handleProfileClick}
              className="flex items-center gap-3 hover:scale-105 transition-all duration-500 group relative cursor-pointer"
              aria-label="Home"
            >
              <div className="relative">
                {/* Profile avatar with placeholder - FIXED: Removed artImage reference */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">OG</span>
                  {/* Rotating border */}
                  <div 
                    ref={logoRef}
                    className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-500 transition-all duration-500"
                    style={{ padding: '2px' }}
                  >
                    <div className="w-full h-full rounded-full bg-black"></div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/30 group-hover:to-cyan-400/30 transition-all duration-500"></div>
                </div>
                
                {/* Online status indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse group-hover:bg-cyan-400 transition-colors duration-300">
                  <div className="absolute inset-1 bg-white rounded-full opacity-80"></div>
                </div>
              </div>
              
              {/* Enhanced logo text */}
              <div className="flex flex-col">
                <span className="font-mono text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                  og<span className="text-blue-500 group-hover:text-cyan-400 transition-colors duration-500">.dev</span>
                </span>
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium tracking-wide">
                  Dev&hearts;per
                </span>
              </div>
            </a>

            {/* Desktop Right Section - Nav + GitHub */}
            <div className="hidden md:flex items-center gap-4">
              {/* Enhanced Desktop Navigation */}
              <nav className="flex items-center space-x-1" role="navigation">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-6 py-3 text-sm font-medium transition-all duration-500 rounded-xl group overflow-hidden ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{ animationDelay: `${item.delay}ms` }}
                    aria-current={activeSection === item.name.toLowerCase() ? 'page' : undefined}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        {item.icon}
                      </span>
                      {item.name}
                    </span>
                    
                    {/* Multi-layer hover effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-700 rounded-xl scale-95 group-hover:scale-100"></div>
                    
                    {/* Animated underline */}
                    <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-700 rounded-full"></div>
                    
                    {/* Side accent lines */}
                    <div className="absolute left-0 top-1/2 w-0 h-0 bg-blue-500/60 group-hover:w-1 group-hover:h-4 transition-all duration-500 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute right-0 top-1/2 w-0 h-0 bg-cyan-500/60 group-hover:w-1 group-hover:h-4 transition-all duration-500 rounded-full transform -translate-y-1/2"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-sm transition-all duration-500"></div>
                  </a>
                ))}
              </nav>

              {/* GitHub Link */}
              <div className="ml-2">
                <a 
                  href="https://github.com/Om2407" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-white/10 group"
                  title="Visit my GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="w-10 h-10 relative cursor-pointer z-50 md:hidden flex flex-col justify-center items-center group p-2 rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              
              {/* Hamburger lines with enhanced animations */}
              <span 
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-500 transform-gpu ${
                  menuOpen 
                    ? 'rotate-45 translate-y-1.5 bg-red-400 shadow-lg shadow-red-400/50' 
                    : 'group-hover:bg-blue-400 group-hover:shadow-sm group-hover:shadow-blue-400/50'
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 mt-1 ${
                  menuOpen 
                    ? 'opacity-0 scale-0' 
                    : 'opacity-100 scale-100 group-hover:bg-blue-400 group-hover:shadow-sm group-hover:shadow-blue-400/50'
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-500 transform-gpu mt-1 ${
                  menuOpen 
                    ? '-rotate-45 -translate-y-1.5 bg-red-400 shadow-lg shadow-red-400/50' 
                    : 'group-hover:bg-blue-400 group-hover:shadow-sm group-hover:shadow-blue-400/50'
                }`}
              ></span>
              
              {/* Button glow effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                menuOpen ? 'bg-red-500/20' : 'bg-blue-500/20'
              } blur-sm`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        {/* Backdrop with blur */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl"></div>
        
        {/* Menu content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-8 px-6">
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-44 h-44 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Navigation items */}
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-4xl text-gray-300 hover:text-white transition-all duration-700 relative group transform font-light tracking-wide ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              } ${
                activeSection === item.name.toLowerCase() ? 'text-white' : ''
              }`}
              style={{ 
                transitionDelay: menuOpen ? `${index * 150 + 200}ms` : '0ms'
              }}
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="text-2xl opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                {item.name}
              </span>
              
              {/* Enhanced hover effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-700 rounded-2xl -m-6 scale-90 group-hover:scale-100"></div>
              
              {/* Glowing underline */}
              <div className="absolute -bottom-3 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-700 rounded-full group-hover:shadow-xl group-hover:shadow-blue-500/50"></div>
              
              {/* Side glow effects */}
              <div className="absolute top-1/2 -left-12 w-0 h-0 bg-blue-500/40 group-hover:w-3 group-hover:h-12 transition-all duration-700 rounded-full blur-md transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 -right-12 w-0 h-0 bg-cyan-500/40 group-hover:w-3 group-hover:h-12 transition-all duration-700 rounded-full blur-md transform -translate-y-1/2"></div>
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
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
              title="Visit my GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-xl font-medium">GitHub</span>
            </a>
          </div>
          
          {/* Enhanced profile section - FIXED: Removed artImage and undefined variables */}
          <div className={`mt-12 transform transition-all duration-700 ${
            menuOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-75'
          }`} style={{ transitionDelay: menuOpen ? '900ms' : '0ms' }}>
            <div className="relative group" onClick={handleProfileClick}>
              {/* Avatar placeholder instead of image */}
              <div className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 p-1 shadow-2xl shadow-blue-500/40 hover:scale-110 transition-all duration-500 group-hover:shadow-cyan-500/40 cursor-pointer flex items-center justify-center">
                <span className="text-white text-2xl font-bold">OG</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse group-hover:bg-cyan-400 transition-colors duration-300">
                <div className="absolute inset-2 bg-white rounded-full opacity-90"></div>
              </div>
            </div>
            
            <p className="mt-6 text-gray-400 text-center font-medium">
              MERN Stack Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};