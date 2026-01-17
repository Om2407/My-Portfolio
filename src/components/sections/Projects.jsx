import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

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
      technologies: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "Gemini API", "OAuth 2.0", "JWT", "Cloudinary", "Razorpay"],
      stats: [
        { label: "AI-Powered", value: "100%" },
        { label: "Courses", value: "@" },
        { label: "Students", value: "@" },
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
      technologies: ["MongoDB", "Express", "Node.js","React", "Vite", "TypeScript", "Tailwind CSS", "Gemini API", "Pexels API"],
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

  const currentProject = projects[selectedProject];

  // Three.js Animation Setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    sceneRef.current = { scene, camera, renderer };

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: new THREE.Color(currentProject.accentColor),
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create geometric shapes
    const shapes = [];
    const geometries = [
      new THREE.TorusGeometry(0.8, 0.25, 16, 100),
      new THREE.OctahedronGeometry(0.9),
      new THREE.IcosahedronGeometry(0.85),
    ];

    geometries.forEach((geometry, index) => {
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(currentProject.accentColor),
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      );
      scene.add(mesh);
      shapes.push(mesh);
    });

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(currentProject.accentColor, 1.5);
    pointLight.position.set(3, 4, 5);
    scene.add(pointLight);

    // Animation loop
    let mouseX = 0;
    let mouseY = 0;
    let animationId;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.y += 0.0015;
      particlesMesh.rotation.x += 0.0008;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.006 * (index + 1);
        shape.rotation.y += 0.004 * (index + 1);
        shape.position.y = Math.sin(Date.now() * 0.001 + index * 2) * 0.6;
        shape.position.x = Math.cos(Date.now() * 0.0008 + index * 1.5) * 0.4;
      });

      // Mouse interaction
      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.6 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      geometries.forEach(g => g.dispose());
      shapes.forEach(s => {
        if (s.material) s.material.dispose();
      });
    };
  }, []);

  // Update Three.js scene colors when project changes
  useEffect(() => {
    if (sceneRef.current) {
      const { scene } = sceneRef.current;
      const newColor = new THREE.Color(currentProject.accentColor);
      
      scene.children.forEach((child) => {
        if (child instanceof THREE.Points && child.material) {
          child.material.color.copy(newColor);
        }
        if (child instanceof THREE.Mesh && child.material) {
          child.material.color.copy(newColor);
        }
        if (child instanceof THREE.PointLight) {
          child.color.copy(newColor);
        }
      });
    }
  }, [selectedProject, currentProject.accentColor]);

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedProject]);

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-black"
    >
      {/* Three.js Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      {/* Dynamic Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${currentProject.accentColor}20, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Slide through innovation • {selectedProject + 1} / {projects.length}
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative" ref={carouselRef}>
          {/* Project Card */}
          <div className="relative bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
            
            {/* Top Section - Image & Content Split */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8 lg:p-12">
              
              {/* Left - Image Section */}
              <div className="relative group">
                <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600/${currentProject.color}/white?text=${encodeURIComponent(currentProject.title)}`;
                    }}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `linear-gradient(45deg, ${currentProject.accentColor}, transparent, ${currentProject.accentColor})`,
                        backgroundSize: '200% 200%',
                        animation: 'gradient-shift 3s ease infinite',
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    ></div>
                  </div>

                  {/* Project Number */}
                  <div 
                    className="absolute top-4 md:top-6 right-4 md:right-6 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/80 backdrop-blur-md border-2 flex items-center justify-center text-2xl md:text-3xl font-bold transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                    style={{ borderColor: currentProject.accentColor }}
                  >
                    {String(currentProject.id).padStart(2, '0')}
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex gap-2 md:gap-4">
                    {currentProject.stats.map((stat, idx) => (
                      <div 
                        key={idx} 
                        className="flex-1 bg-black/80 backdrop-blur-md rounded-lg md:rounded-xl p-2 md:p-3 border border-white/10 transform transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div className="text-lg md:text-2xl font-bold transition-colors" style={{ color: currentProject.accentColor }}>
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
                  <div 
                    className="inline-block px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-3 md:mb-4 transform transition-all duration-300 hover:scale-110"
                    style={{ 
                      backgroundColor: `${currentProject.accentColor}20`,
                      color: currentProject.accentColor,
                      border: `1px solid ${currentProject.accentColor}40`
                    }}
                  >
                    {currentProject.subtitle}
                  </div>
                  
                  <h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transform transition-all duration-500 hover:scale-105" 
                    style={{ color: currentProject.accentColor }}
                  >
                    {currentProject.title}
                  </h3>
                  
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 transition-all duration-300 hover:text-white">
                    {currentProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-400 mb-3">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium border transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
                          style={{
                            backgroundColor: `${currentProject.accentColor}10`,
                            borderColor: `${currentProject.accentColor}30`,
                            color: currentProject.accentColor,
                            transitionDelay: `${idx * 50}ms`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 md:gap-4">
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 group text-sm md:text-base"
                    style={{
                      borderColor: currentProject.accentColor,
                      color: currentProject.accentColor,
                    }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="hidden sm:inline">View Code</span>
                    <span className="sm:hidden">Code</span>
                  </a>
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-white group relative overflow-hidden text-sm md:text-base"
                    style={{
                      backgroundColor: currentProject.accentColor,
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2 md:gap-3">
                      <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Demo</span>
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between px-6 md:px-8 lg:px-12 pb-6 md:pb-8">
              <button
                onClick={prevProject}
                className="group flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium hidden sm:inline">Previous</span>
              </button>

              {/* Project Indicators */}
              <div className="flex gap-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedProject(idx)}
                    className="transition-all rounded-full hover:scale-110"
                    style={{
                      width: selectedProject === idx ? '40px' : '12px',
                      height: '12px',
                      backgroundColor: selectedProject === idx ? currentProject.accentColor : '#ffffff20',
                    }}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="group flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm md:text-base"
              >
                <span className="font-medium hidden sm:inline">Next</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Keyboard Navigation Hint */}
          <div className="text-center mt-6 md:mt-8 text-gray-500 text-xs md:text-sm">
            Use ← → arrow keys to navigate
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};