// import { useEffect, useState } from "react";

// export const LoadingScreen = ({ onComplete }) => {
//   const [text, setText] = useState("");
//   const [showName, setShowName] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [currentQuote, setCurrentQuote] = useState(0);
//   const [isDarkMode, setIsDarkMode] = useState(true);
  
//   const fullText = "<Hello World />";
//   const name = "Om Gupta";
//   const quotes = [
//     "Crafting digital experiences...",
//     "Building the future, one line at a time...",
//     "Where creativity meets code...",
//     "Turning ideas into reality..."
//   ];

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setText(fullText.substring(0, index));
//       index++;

//       if (index > fullText.length) {
//         clearInterval(interval);
//         setShowName(true);
        
//         setTimeout(() => {
//           onComplete();
//         }, 2000);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) return 100;
//         return prev + Math.random() * 3;
//       });
//     }, 150);

//     return () => clearInterval(progressInterval);
//   }, []);

//   useEffect(() => {
//     const quoteInterval = setInterval(() => {
//       setCurrentQuote(prev => (prev + 1) % quotes.length);
//     }, 3000);

//     return () => clearInterval(quoteInterval);
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`fixed inset-0 z-50 transition-all duration-700 ${
//       isDarkMode 
//         ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
//         : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
//     } flex flex-col items-center justify-center overflow-hidden`}>
      
//       {/* Animated Background Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute rounded-full opacity-20 ${
//               isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
//             }`}
//             style={{
//               width: Math.random() * 6 + 2 + 'px',
//               height: Math.random() * 6 + 2 + 'px',
//               left: Math.random() * 100 + '%',
//               top: Math.random() * 100 + '%',
//               animationDuration: Math.random() * 3 + 2 + 's',
//               animationDelay: Math.random() * 2 + 's'
//             }}
//           />
//         ))}
//       </div>

//       {/* Theme Toggle */}
//       <button
//         onClick={toggleTheme}
//         className={`absolute top-6 right-6 p-3 rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-110 ${
//           isDarkMode 
//             ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20' 
//             : 'bg-black/10 border border-black/20 text-black hover:bg-black/20'
//         }`}
//       >
//         <span className="text-xl transition-transform duration-300 hover:rotate-180">
//           {isDarkMode ? '☀️' : '🌙'}
//         </span>
//       </button>

//       {/* Main Content */}
//       <div className="text-center space-y-8">
        
//         {/* Hello World Animation */}
//         <div className={`text-4xl md:text-6xl font-mono font-bold transition-all duration-500 ${
//           showName ? 'opacity-30 scale-75 -translate-y-8' : 'opacity-100'
//         } ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
//           {text}
//           <span className={`ml-1 animate-pulse ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
//             {text.length < fullText.length ? '|' : ''}
//           </span>
//         </div>

//         {/* Name Animation */}
//         {showName && (
//           <div className="space-y-4 animate-fadeInUp">
//             <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${
//               isDarkMode 
//                 ? 'from-blue-400 via-purple-400 to-cyan-400' 
//                 : 'from-blue-600 via-purple-600 to-cyan-600'
//             } bg-clip-text text-transparent animate-gradient-x bg-300% leading-tight`}>
//               {name.split('').map((char, index) => (
//                 <span
//                   key={index}
//                   className="inline-block animate-bounce"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {char === ' ' ? '\u00A0' : char}
//                 </span>
//               ))}
//             </h1>
            
//             <p className={`text-lg md:text-xl font-light transition-all duration-300 ${
//               isDarkMode ? 'text-gray-300' : 'text-gray-600'
//             }`}>
//               MERN Stack Developer &#128521;
//             </p>
//           </div>
//         )}

//         {/* Loading Animation */}
//         <div className="space-y-6">
//           {/* Custom Spinner */}
//           <div className="relative w-20 h-20 mx-auto">
//             <div className={`absolute inset-0 rounded-full border-4 ${
//               isDarkMode ? 'border-gray-600' : 'border-gray-300'
//             }`}></div>
//             <div className={`absolute inset-0 rounded-full border-4 border-transparent ${
//               isDarkMode ? 'border-t-blue-400' : 'border-t-blue-600'
//             } animate-spin`}></div>
//             <div className={`absolute inset-2 rounded-full border-4 border-transparent ${
//               isDarkMode ? 'border-r-purple-400' : 'border-r-purple-600'
//             } animate-spin animate-reverse`} style={{ animationDuration: '1.5s' }}></div>
//           </div>

//           {/* Progress Bar */}
//           <div className="w-80 max-w-full mx-auto">
//             <div className={`h-2 rounded-full overflow-hidden ${
//               isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
//             }`}>
//               <div 
//                 className={`h-full rounded-full bg-gradient-to-r ${
//                   isDarkMode 
//                     ? 'from-blue-400 to-cyan-400' 
//                     : 'from-blue-600 to-cyan-600'
//                 } transition-all duration-300 ease-out shadow-lg ${
//                   isDarkMode ? 'shadow-blue-400/50' : 'shadow-blue-600/50'
//                 }`}
//                 style={{ width: `${Math.min(progress, 100)}%` }}
//               />
//             </div>
//             <div className={`text-sm text-center mt-2 font-medium ${
//               isDarkMode ? 'text-gray-400' : 'text-gray-500'
//             }`}>
//               {Math.round(Math.min(progress, 100))}%
//             </div>
//           </div>

//           {/* Loading Text */}
//           <p className={`text-lg font-medium animate-pulse ${
//             isDarkMode ? 'text-gray-300' : 'text-gray-600'
//           }`}>
//             {quotes[currentQuote]}
//           </p>
//         </div>

//         {/* Floating Code Elements */}
//         {showName && (
//           <div className="absolute inset-0 pointer-events-none overflow-hidden">
//             {['{ }', '< />', '[ ]', '( )', '===', '=>'].map((symbol, index) => (
//               <div
//                 key={index}
//                 className={`absolute text-2xl font-mono opacity-10 animate-float ${
//                   isDarkMode ? 'text-blue-400' : 'text-blue-600'
//                 }`}
//                 style={{
//                   left: Math.random() * 80 + 10 + '%',
//                   top: Math.random() * 80 + 10 + '%',
//                   animationDelay: Math.random() * 3 + 's',
//                   animationDuration: Math.random() * 2 + 3 + 's'
//                 }}
//               >
//                 {symbol}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Bottom Quote */}
//       <div className={`absolute bottom-8 text-center transition-all duration-300 ${
//         isDarkMode ? 'text-gray-500' : 'text-gray-400'
//       }`}>
//         <p className="text-sm italic">
//           "Innovation distinguishes between a leader and a follower"
//         </p>
//       </div>

//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           33% {
//             transform: translateY(-10px) rotate(120deg);
//           }
//           66% {
//             transform: translateY(10px) rotate(240deg);
//           }
//         }
        
//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out;
//         }
        
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
        
//         .animate-reverse {
//           animation-direction: reverse;
//         }
        
//         .bg-300% {
//           background-size: 300%;
//         }
//       `}</style>
//     </div>
//   );
// };
import { useEffect, useState, useCallback } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [showName, setShowName] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  
  const fullText = "<Hello World />";
  const name = "Om Gupta";
  const quotes = [
    "Crafting digital experiences...",
    "Building the future, one line at a time...",
    "Where creativity meets code...",
    "Turning ideas into reality...",
    "Innovating with passion..."
  ];

  // Generate particles once
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  // Mouse tracking for parallax effect
  const handleMouseMove = useCallback((e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setShowName(true);
        
        setTimeout(() => {
          onComplete();
        }, 2500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Progress animation with easing
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const increment = (100 - prev) * 0.05 + Math.random() * 2;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  // Quote rotation
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 3500);

    return () => clearInterval(quoteInterval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    } flex flex-col items-center justify-center overflow-hidden`}>
      
      {/* Enhanced Animated Background with Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Gradient Orbs */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000 ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
        }`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000 ${
          isDarkMode ? 'bg-cyan-500' : 'bg-cyan-400'
        }`}></div>

        {/* Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full transition-all duration-300 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}
            style={{
              width: particle.size + 'px',
              height: particle.size + 'px',
              left: particle.left + '%',
              top: particle.top + '%',
              opacity: 0.3,
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}

        {/* Grid Pattern Overlay */}
        <div className={`absolute inset-0 opacity-5 ${
          isDarkMode ? 'bg-white' : 'bg-black'
        }`} style={{
          backgroundImage: `
            linear-gradient(${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Theme Toggle with Enhanced Design */}
      <button
        onClick={toggleTheme}
        className={`absolute top-6 right-6 p-4 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 group ${
          isDarkMode 
            ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20 shadow-lg shadow-white/5' 
            : 'bg-black/10 border border-black/20 text-black hover:bg-black/20 shadow-lg shadow-black/5'
        }`}
      >
        <span className="text-2xl transition-all duration-500 group-hover:rotate-180 inline-block">
          {isDarkMode ? '☀️' : '🌙'}
        </span>
      </button>

      {/* Main Content with Parallax */}
      <div 
        className="text-center space-y-8 relative z-10"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
        }}
      >
        
        {/* Hello World Animation with Glitch Effect */}
        <div className="relative">
          <div className={`text-4xl md:text-6xl font-mono font-bold transition-all duration-500 ${
            showName ? 'opacity-30 scale-75 -translate-y-8' : 'opacity-100'
          } ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            {text}
            <span className={`ml-1 inline-block w-0.5 h-8 md:h-12 align-middle ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            } ${text.length < fullText.length ? 'animate-pulse' : 'opacity-0'}`}></span>
          </div>
          
          {/* Glitch effect layers */}
          {!showName && (
            <>
              <div className={`absolute inset-0 text-4xl md:text-6xl font-mono font-bold opacity-70 ${
                isDarkMode ? 'text-red-400' : 'text-red-600'
              }`} style={{ 
                clipPath: 'inset(0 0 95% 0)',
                animation: 'glitch-1 2s infinite'
              }}>
                {text}
              </div>
              <div className={`absolute inset-0 text-4xl md:text-6xl font-mono font-bold opacity-70 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`} style={{ 
                clipPath: 'inset(95% 0 0 0)',
                animation: 'glitch-2 2s infinite'
              }}>
                {text}
              </div>
            </>
          )}
        </div>

        {/* Name Animation with Enhanced Gradient */}
        {showName && (
          <div className="space-y-6 animate-fadeInUp">
            <div className="relative">
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-blue-400 via-purple-400 to-cyan-400' 
                  : 'from-blue-600 via-purple-600 to-cyan-600'
              } bg-clip-text text-transparent animate-gradient-x bg-300% leading-tight relative z-10`}>
                {name.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-block hover:scale-125 transition-transform cursor-default"
                    style={{ 
                      animation: `bounce 0.5s ease-out ${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h1>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 blur-2xl opacity-50 ${
                isDarkMode ? 'bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-cyan-400/50' : ''
              }`}></div>
            </div>
            
            <div className="space-y-2">
              <p className={`text-xl md:text-2xl font-light transition-all duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                MERN Stack Developer
              </p>
              
              {/* Animated Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {['React', 'Node.js', 'MongoDB', 'Express'].map((tech, i) => (
                  <span 
                    key={tech}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-lg transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-white/10 text-gray-300 border border-white/20' 
                        : 'bg-black/10 text-gray-700 border border-black/20'
                    }`}
                    style={{ 
                      animation: `fadeInUp 0.5s ease-out ${1 + i * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Loading Animation */}
        <div className="space-y-8">
          {/* Multi-layer Spinner */}
          <div className="relative w-24 h-24 mx-auto">
            <div className={`absolute inset-0 rounded-full border-4 ${
              isDarkMode ? 'border-gray-700' : 'border-gray-300'
            }`}></div>
            
            {/* Outer ring */}
            <div className={`absolute inset-0 rounded-full border-4 border-transparent ${
              isDarkMode ? 'border-t-blue-400 border-r-blue-400' : 'border-t-blue-600 border-r-blue-600'
            } animate-spin`}></div>
            
            {/* Middle ring */}
            <div className={`absolute inset-3 rounded-full border-4 border-transparent ${
              isDarkMode ? 'border-t-purple-400 border-l-purple-400' : 'border-t-purple-600 border-l-purple-600'
            } animate-spin animate-reverse`} style={{ animationDuration: '1.5s' }}></div>
            
            {/* Inner ring */}
            <div className={`absolute inset-6 rounded-full border-4 border-transparent ${
              isDarkMode ? 'border-r-cyan-400 border-b-cyan-400' : 'border-r-cyan-600 border-b-cyan-600'
            } animate-spin`} style={{ animationDuration: '2s' }}></div>
            
            {/* Center dot */}
            <div className={`absolute inset-0 m-auto w-3 h-3 rounded-full ${
              isDarkMode ? 'bg-gradient-to-br from-blue-400 to-purple-400' : 'bg-gradient-to-br from-blue-600 to-purple-600'
            } animate-pulse`}></div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="w-50 max-w-full mx-auto space-y-3">
            <div className={`relative h-3 rounded-full overflow-hidden backdrop-blur-sm ${
              isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-200/50 border border-gray-300'
            }`}>
              <div 
                className={`h-full rounded-full bg-gradient-to-r relative overflow-hidden ${
                  isDarkMode 
                    ? 'from-blue-400 via-purple-400 to-cyan-400' 
                    : 'from-blue-600 via-purple-600 to-cyan-600'
                } transition-all duration-300 ease-out`}
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className={`text-sm font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Loading...
              </span>
              <span className={`text-sm font-bold ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {Math.round(Math.min(progress, 100))}%
              </span>
            </div>
          </div>

          {/* Enhanced Loading Text with Fade Transition */}
          <div className="relative h-8 overflow-hidden">
            {quotes.map((quote, index) => (
              <p 
                key={index}
                className={`absolute inset-0 text-lg font-medium transition-all duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                } ${
                  currentQuote === index 
                    ? 'opacity-100 translate-y-0' 
                    : currentQuote === (index - 1 + quotes.length) % quotes.length
                    ? 'opacity-0 -translate-y-full'
                    : 'opacity-0 translate-y-full'
                }`}
              >
                {quote}
              </p>
            ))}
          </div>
        </div>

        {/* Floating Code Elements with Better Positioning */}
        {showName && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {['{ }', '< />', '[ ]', '( )', '===', '=>', '...', '&&', '||', '!=='].map((symbol, index) => (
              <div
                key={index}
                className={`absolute text-3xl font-mono opacity-10 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
                style={{
                  left: `${(index * 37 + 15) % 85}%`,
                  top: `${(index * 23 + 10) % 85}%`,
                  animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${(index * 0.3) % 2}s`,
                  transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`
                }}
              >
                {symbol}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Bottom Quote */}
      <div className={`absolute bottom-8 text-center transition-all duration-300 px-4 ${
        isDarkMode ? 'text-gray-500' : 'text-gray-400'
      }`}>
        <p className="text-sm md:text-base italic font-light">
          "win with God as your witness."
        </p>
        <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-600' : 'text-gray-500'}`}>
          - &hearts;
        </p>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
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
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 2px); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-reverse {
          animation-direction: reverse;
        }
        
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .bg-300% {
          background-size: 300%;
        }
      `}</style>
    </div>
  );
};