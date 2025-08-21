import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [showName, setShowName] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const fullText = "<Hello World />";
  const name = "Om Gupta";
  const quotes = [
    "Crafting digital experiences...",
    "Building the future, one line at a time...",
    "Where creativity meets code...",
    "Turning ideas into reality..."
  ];

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
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 3;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 3000);

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
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-20 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 3 + 2 + 's',
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`absolute top-6 right-6 p-3 rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-110 ${
          isDarkMode 
            ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20' 
            : 'bg-black/10 border border-black/20 text-black hover:bg-black/20'
        }`}
      >
        <span className="text-xl transition-transform duration-300 hover:rotate-180">
          {isDarkMode ? '☀️' : '🌙'}
        </span>
      </button>

      {/* Main Content */}
      <div className="text-center space-y-8">
        
        {/* Hello World Animation */}
        <div className={`text-4xl md:text-6xl font-mono font-bold transition-all duration-500 ${
          showName ? 'opacity-30 scale-75 -translate-y-8' : 'opacity-100'
        } ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          {text}
          <span className={`ml-1 animate-pulse ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {text.length < fullText.length ? '|' : ''}
          </span>
        </div>

        {/* Name Animation */}
        {showName && (
          <div className="space-y-4 animate-fadeInUp">
            <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 via-purple-400 to-cyan-400' 
                : 'from-blue-600 via-purple-600 to-cyan-600'
            } bg-clip-text text-transparent animate-gradient-x bg-300% leading-tight`}>
              {name.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            
            <p className={`text-lg md:text-xl font-light transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              MERN Stack Developer &#128521;
            </p>
          </div>
        )}

        {/* Loading Animation */}
        <div className="space-y-6">
          {/* Custom Spinner */}
          <div className="relative w-20 h-20 mx-auto">
            <div className={`absolute inset-0 rounded-full border-4 ${
              isDarkMode ? 'border-gray-600' : 'border-gray-300'
            }`}></div>
            <div className={`absolute inset-0 rounded-full border-4 border-transparent ${
              isDarkMode ? 'border-t-blue-400' : 'border-t-blue-600'
            } animate-spin`}></div>
            <div className={`absolute inset-2 rounded-full border-4 border-transparent ${
              isDarkMode ? 'border-r-purple-400' : 'border-r-purple-600'
            } animate-spin animate-reverse`} style={{ animationDuration: '1.5s' }}></div>
          </div>

          {/* Progress Bar */}
          <div className="w-80 max-w-full mx-auto">
            <div className={`h-2 rounded-full overflow-hidden ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-blue-400 to-cyan-400' 
                    : 'from-blue-600 to-cyan-600'
                } transition-all duration-300 ease-out shadow-lg ${
                  isDarkMode ? 'shadow-blue-400/50' : 'shadow-blue-600/50'
                }`}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className={`text-sm text-center mt-2 font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {Math.round(Math.min(progress, 100))}%
            </div>
          </div>

          {/* Loading Text */}
          <p className={`text-lg font-medium animate-pulse ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {quotes[currentQuote]}
          </p>
        </div>

        {/* Floating Code Elements */}
        {showName && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {['{ }', '< />', '[ ]', '( )', '===', '=>'].map((symbol, index) => (
              <div
                key={index}
                className={`absolute text-2xl font-mono opacity-10 animate-float ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
                style={{
                  left: Math.random() * 80 + 10 + '%',
                  top: Math.random() * 80 + 10 + '%',
                  animationDelay: Math.random() * 3 + 's',
                  animationDuration: Math.random() * 2 + 3 + 's'
                }}
              >
                {symbol}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Quote */}
      <div className={`absolute bottom-8 text-center transition-all duration-300 ${
        isDarkMode ? 'text-gray-500' : 'text-gray-400'
      }`}>
        <p className="text-sm italic">
          "Innovation distinguishes between a leader and a follower"
        </p>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
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
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
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
        
        .bg-300% {
          background-size: 300%;
        }
      `}</style>
    </div>
  );
};