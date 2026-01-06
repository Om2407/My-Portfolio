import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const coreLanguages = [
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Java", icon: "☕" },
  ];

  const frontendSkills = [
    { name: "React", icon: "⚛️" },
    { name: "Vite", icon: "⚡" },
    { name: "HTML5", icon: "🌐" },
    { name: "Tailwind CSS", icon: "🎨" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Context API", icon: "🔄" },
  ];

  const specializations = [
    { 
      title: "DSA Expert", 
      icon: "🧠",
      description: "Advanced problem-solving with Data Structures & Algorithms in Java",
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500"
    },
    { 
      title: "Full Stack", 
      icon: "🚀",
      description: "End-to-end development from database to user interface",
      gradient: "from-blue-500 via-indigo-500 to-cyan-500"
    },
    { 
      title: "Modern Stack", 
      icon: "⚡",
      description: "Building with cutting-edge technologies and best practices",
      gradient: "from-green-500 via-teal-500 to-emerald-500"
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Animated Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center animate-pulse">
            About Me
          </h2>

          {/* Main Introduction - Enhanced with bg-gradient-to */}
          <div className="relative rounded-3xl p-10 border border-white/20 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/50 mb-16 overflow-hidden group">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Floating gradient orbs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-pink-500/30 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <p className="text-gray-100 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto relative z-10">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Full Stack Developer</span> passionate about crafting seamless web experiences from database to UI. 
              Specialized in the <span className="font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">MERN stack</span> with expertise in building scalable, high-performance applications using 
              <span className="font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent"> React, Node.js, Express, and MongoDB</span>. 
              Strong foundation in <span className="font-bold bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">Data Structures & Algorithms with Java</span>, enabling optimized solutions for complex problems. 
              Proficient in modern tools like <span className="font-bold bg-gradient-to-r from-orange-300 via-rose-300 to-red-300 bg-clip-text text-transparent">TypeScript, Vite, and Tailwind CSS</span> to deliver fast, responsive, and beautiful applications. 🚀
            </p>
          </div>

          {/* Specializations - Enhanced gradients */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl border border-white/20 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-xl hover:-translate-y-4 hover:scale-105 transition-all duration-500 hover:shadow-2xl group overflow-hidden"
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                
                {/* Border gradient on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700`}></div>
                
                <div className="text-6xl mb-5 text-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{spec.icon}</div>
                <h3 className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r ${spec.gradient} bg-clip-text text-transparent`}>
                  {spec.title}
                </h3>
                <p className="text-gray-300 text-sm text-center leading-relaxed relative z-10">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Programming Languages - Enhanced */}
          <div className="mb-16">
            <div className="relative rounded-2xl p-10 border border-white/20 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden group">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating orbs */}
              <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/40 to-transparent rounded-full blur-3xl opacity-50"></div>
              <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-l from-pink-500/40 to-transparent rounded-full blur-3xl opacity-50"></div>
              
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent flex items-center justify-center gap-4 relative z-10">
                <span className="text-4xl animate-bounce">💻</span>
                Core Programming Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-5 relative z-10">
                {coreLanguages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-fuchsia-500/30 text-purple-50 py-5 px-10 rounded-full text-lg font-bold
                              hover:from-purple-500/50 hover:via-pink-500/50 hover:to-fuchsia-500/50 hover:scale-125
                              hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-300 cursor-pointer
                              border-2 border-purple-400/50 hover:border-pink-400/80 flex items-center gap-3"
                  >
                    <span className="text-2xl">{lang.icon}</span>
                    {lang.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills Grid - Enhanced */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Frontend Skills */}
            <div className="relative rounded-2xl p-10 border border-white/20 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/20 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden group">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-cyan-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating gradient orb */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-500/40 via-cyan-500/40 to-transparent rounded-full blur-3xl opacity-60"></div>
              
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent flex items-center justify-center gap-4 relative z-10">
                <span className="text-4xl">🎨</span>
                Frontend Development
              </h3>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                {frontendSkills.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-sky-500/30 text-blue-50 py-4 px-7 rounded-full text-base font-semibold
                              hover:from-blue-500/50 hover:via-cyan-500/50 hover:to-sky-500/50 hover:scale-110
                              hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer
                              border-2 border-blue-400/40 hover:border-cyan-400/80 flex items-center gap-2"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="relative rounded-2xl p-10 border border-white/20 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-green-600/20 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/50 overflow-hidden group">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-green-500/0 via-emerald-500/20 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating gradient orb */}
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-green-500/40 via-emerald-500/40 to-transparent rounded-full blur-3xl opacity-60"></div>
              
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent flex items-center justify-center gap-4 relative z-10">
                <span className="text-4xl">⚙️</span>
                Backend Development
              </h3>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                {backendSkills.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-teal-500/30 text-green-50 py-4 px-7 rounded-full text-base font-semibold
                              hover:from-green-500/50 hover:via-emerald-500/50 hover:to-teal-500/50 hover:scale-110
                              hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 cursor-pointer
                              border-2 border-green-400/40 hover:border-emerald-400/80 flex items-center gap-2"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience - Enhanced */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="relative p-10 rounded-2xl border border-white/20 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-orange-600/20 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden group">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-red-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating orb */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/40 via-red-500/40 to-transparent rounded-full blur-3xl opacity-60"></div>
              
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-red-400 to-rose-500 bg-clip-text text-transparent flex items-center gap-4 relative z-10">
                <span className="text-4xl">🎓</span>
                Education
              </h3>
              <ul className="space-y-6 text-gray-300 relative z-10">
                <li className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <span className="w-3 h-3 bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                  <div>
                    <strong className="text-lg bg-gradient-to-r from-orange-300 via-red-300 to-rose-300 bg-clip-text text-transparent">Oriental Institute of Science and Technology</strong>
                    <p className="text-green-300 text-sm font-semibold mt-1">Bachelor of Technology (2022-2026)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <span className="w-3 h-3 bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                  <div>
                    <strong className="text-lg bg-gradient-to-r from-orange-300 via-red-300 to-rose-300 bg-clip-text text-transparent">Maharishi Vidya Mandir</strong>
                    <p className="text-green-300 text-sm font-semibold mt-1">Higher Secondary (2019-2021)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <span className="w-3 h-3 bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                  <span className="text-sm leading-relaxed">
                    <strong className="bg-gradient-to-r from-orange-300 via-red-300 to-rose-300 bg-clip-text text-transparent">Relevant Coursework:</strong> Data Structures & Algorithms, Web Development, Database Management Systems, Object-Oriented Programming
                  </span>
                </li>
              </ul>
            </div>

            {/* Work Experience & Expertise */}
            <div className="relative p-10 rounded-2xl border border-white/20 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-indigo-600/20 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/50 overflow-hidden group">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-indigo-500/0 via-purple-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating orb */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-500/40 via-purple-500/40 to-transparent rounded-full blur-3xl opacity-60"></div>
              
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-500 bg-clip-text text-transparent flex items-center gap-4 relative z-10">
                <span className="text-4xl">💼</span>
                Expertise & Experience
              </h3>
              <div className="space-y-6 text-gray-300 relative z-10">
                <div className="border-l-4 border-indigo-400 pl-6 hover:border-indigo-300 hover:translate-x-2 transition-all duration-300 group/item">
                  <h4 className="font-bold text-lg bg-gradient-to-r from-indigo-300 via-blue-300 to-sky-300 bg-clip-text text-transparent mb-2 flex items-center gap-3">
                    <span className="text-2xl group-hover/item:scale-125 transition-transform duration-300">🚀</span> Full Stack Development
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Built production-ready applications using MERN stack with TypeScript, implementing scalable architectures and RESTful APIs.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6 hover:border-purple-300 hover:translate-x-2 transition-all duration-300 group/item">
                  <h4 className="font-bold text-lg bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent mb-2 flex items-center gap-3">
                    <span className="text-2xl group-hover/item:scale-125 transition-transform duration-300">🧠</span> DSA Mastery in Java
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Strong command over Data Structures and Algorithms, solving complex problems with optimized solutions using Java.
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-6 hover:border-pink-300 hover:translate-x-2 transition-all duration-300 group/item">
                  <h4 className="font-bold text-lg bg-gradient-to-r from-pink-300 via-rose-300 to-red-300 bg-clip-text text-transparent mb-2 flex items-center gap-3">
                    <span className="text-2xl group-hover/item:scale-125 transition-transform duration-300">🔐</span> Authentication & State Management
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Implemented secure authentication systems with JWT, cookies, and Context API for seamless user experiences.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-400 pl-6 hover:border-cyan-300 hover:translate-x-2 transition-all duration-300 group/item">
                  <h4 className="font-bold text-lg bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent mb-2 flex items-center gap-3">
                    <span className="text-2xl group-hover/item:scale-125 transition-transform duration-300">⚡</span> Performance Optimization
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Optimized application performance through efficient algorithms, code splitting, and modern build tools like Vite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};