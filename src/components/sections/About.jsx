import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingLanguages = [
    "JavaScript",
    "Python", 
    "Java",
  ];

  const frontendSkills = [
    "React",
    "JavaScript", 
    "HTML",
    "CSS",
    "TailwindCSS",
  ];

  const backendSkills = [
    "Node.js", 
    "Python", 
    "MongoDB", 
    "Express.js",
    "API's"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 mb-8">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
          MERN Stack Developer with expertise in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Proficient in creating responsive, dynamic user interfaces with React and Tailwind CSS, while developing robust backend APIs and database solutions. Experienced in delivering scalable, modern web applications with seamless user experiences and efficient performance across all platforms.🚀&#128522;
            </p>
          </div>

          {/* Programming Languages Section */}
          <div className="mb-8">
            <div className="rounded-xl p-8 border border-white/10 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
                <span className="text-2xl">💻</span>
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {programmingLanguages.map((lang, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 py-3 px-6 rounded-full text-sm font-medium
                              hover:from-purple-500/30 hover:to-pink-500/30 hover:text-purple-200 hover:scale-105
                              hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer
                              border border-purple-500/30 hover:border-purple-400/50"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Frontend & Backend Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="rounded-xl p-8 border border-white/10 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 py-3 px-6 rounded-full text-sm font-medium
                              hover:from-blue-500/30 hover:to-cyan-500/30 hover:text-blue-200 hover:scale-105
                              hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer
                              border border-blue-500/30 hover:border-blue-400/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-8 border border-white/10 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 py-3 px-6 rounded-full text-sm font-medium
                              hover:from-green-500/30 hover:to-emerald-500/30 hover:text-green-200 hover:scale-105
                              hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 cursor-pointer
                              border border-green-500/30 hover:border-green-400/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent flex items-center gap-3">
                <span className="text-2xl">🏫</span>
                Education
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-orange-300">Maharishi Vidya Mandir(2019-2021)</strong>
                    <span className="text-green-200"> & Oriental Institute of Science and Technology (2022-2026)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Relevant Coursework: Data Structures, Web Development, Database Management & Core Subject's &#129300;
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-3">
                <span className="text-2xl">💼</span>
                Work Experience
              </h3>
              <div className="space-y-6 text-gray-300">
                <div className="border-l-2 border-indigo-400 pl-4">
                  <h4 className="font-bold text-indigo-300 mb-2">
                    Gained strong knowledge of Data Structures and Algorithms using Java.
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">2022 - Present</p>
                  <p className="text-sm leading-relaxed">
                    Built and integrated RESTful APIs to enable smooth communication between frontend and backend.

Implemented authentication & authorization systems (JWT, cookies, context API) for secure user access.

Optimized backend logic using Java-based Data Structures & Algorithms (DSA) to improve performance..
                  </p>
                </div>

                {/* <div className="border-l-2 border-indigo-400 pl-4">
                  {/* <h4 className="font-bold text-indigo-300 mb-2">
                    Intern at DEF Startups
                  </h4> */}
                  {/* <p className="text-gray-400 text-sm mb-2">2019</p>
                  <p className="text-sm leading-relaxed">
                    Assisted in building front-end components and integrating REST APIs.
                  </p> */}
                {/* </div>  */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};