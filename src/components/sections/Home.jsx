import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  // Three.js Scene Setup
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

    // Particle System
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1200;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = (Math.random() - 0.5) * 20;
      posArray[i + 2] = (Math.random() - 0.5) * 20;
      
      // Color gradient (blue to purple to cyan)
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6);
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Geometric Shapes
    const shapes = [];
    
    // Wireframe Torus
    const torusGeometry = new THREE.TorusGeometry(1.2, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 2, -2);
    scene.add(torus);
    shapes.push(torus);

    // Wireframe Icosahedron
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
    const icosahedronMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
    icosahedron.position.set(3, -2, -3);
    scene.add(icosahedron);
    shapes.push(icosahedron);

    // Wireframe Octahedron
    const octahedronGeometry = new THREE.OctahedronGeometry(0.9);
    const octahedronMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
    octahedron.position.set(0, 3, -4);
    scene.add(octahedron);
    shapes.push(octahedron);

    // Glowing Spheres
    const sphereGeometry = new THREE.SphereGeometry(0.15, 32, 32);
    for (let i = 0; i < 15; i++) {
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(0.5 + Math.random() * 0.3, 1, 0.5),
        emissive: new THREE.Color().setHSL(0.5 + Math.random() * 0.3, 1, 0.3),
        emissiveIntensity: 0.5,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8
      );
      scene.add(sphere);
      shapes.push(sphere);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 2);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 2);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    let animationId;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      // Animate shapes
      shapes.forEach((shape, index) => {
        if (index < 3) { // Wireframe shapes
          shape.rotation.x += 0.008 * (index + 1);
          shape.rotation.y += 0.006 * (index + 1);
          shape.position.y += Math.sin(elapsedTime + index) * 0.002;
        } else { // Glowing spheres
          shape.position.y = Math.sin(elapsedTime * 0.5 + index) * 2;
          shape.position.x += Math.cos(elapsedTime * 0.3 + index) * 0.005;
        }
      });

      // Lights movement
      pointLight1.position.x = Math.sin(elapsedTime * 0.5) * 5;
      pointLight1.position.z = Math.cos(elapsedTime * 0.5) * 5;
      
      pointLight2.position.x = Math.cos(elapsedTime * 0.3) * 5;
      pointLight2.position.z = Math.sin(elapsedTime * 0.3) * 5;

      // Camera movement based on mouse
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.8 - camera.position.y) * 0.05;
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

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      icosahedronGeometry.dispose();
      icosahedronMaterial.dispose();
      octahedronGeometry.dispose();
      octahedronMaterial.dispose();
      sphereGeometry.dispose();
    };
  }, []);

  // Reveal animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Mouse position tracking for gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"
    >
      {/* Three.js Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Dynamic gradient overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />

      {/* Main Content */}
      <div className={`relative z-20 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        
        {/* Title with staggered animation */}
        <div className="mb-6">
          <span className="inline-block text-blue-400 text-lg md:text-xl font-medium mb-4 animate-fade-in-up">
            Welcome to my portfolio
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Hi, I'm
              </span>
            </span>
            <br />
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-extrabold">
                Om Gupta
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle with glass morphism */}
        <div 
          className="relative max-w-3xl mx-auto mb-12 animate-fade-in-up" 
          style={{ animationDelay: '0.3s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-4">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">"MERN Stack Developer</span> who understands how frontend decisions impact backend performance.”
            </p>
            
            {/* Resume Link */}
            <a
              href="https://drive.google.com/file/d/11XxZe6PjOAbm-aI_Xj8VZE4p3a9-EDaf/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors duration-300 group mb-6"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-xl font-medium border-b border-blue-400/0 group-hover:border-blue-400/100 transition-all">
                View Resume
              </span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
{/*view resume ke neeche */}
<div className="flex flex-wrap justify-center gap-4 mt-6">
  {/* React */}
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
    <div className="relative flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-cyan-500/30 group-hover:border-cyan-500 transition-all duration-300">
      <svg className="w-5 h-5" viewBox="0 0 128 128">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"/>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 2 59.4 2 69.2 2 79.1 8.2 88.5 21.8 93.3c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3C119.8 88.5 126 79.1 126 69.2c0-9.8-6.2-19.2-18.7-24z"/>
        </g>
      </svg>
      <span className="text-cyan-400 font-medium text-sm">React</span>
    </div>
  </div>

  {/* Node.js */}
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
    <div className="relative flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-green-500/30 group-hover:border-green-500 transition-all duration-300">
      <svg className="w-5 h-5" viewBox="0 0 128 128">
        <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 40 41 41.616 41 42.325v50.49c0 4.946-5.979 9.62-15.176 5.586L13.231 91.85c-.908-.453-1.231-1.613-1.231-2.259V38.407c0-.646.323-1.806 1.231-2.26L58.95 10.545c.908-.453 2.259-.453 3.167 0l44.674 25.602c.908.453 1.230 1.613 1.230 2.259V89.59c0 .646-.322 1.806-1.23 2.26L62.117 117.41c-.908.453-2.259.453-3.167 0L34.802 101.247c-1.429-.81-2.9-.81-3.167 0-.645.324-1.250 1.129-1.250 1.774 0 .645.429 1.613 1.073 1.774L56.950 120.44c.908.453 2.259.453 3.167 0l44.674-25.602c1.895-1.102 2.96-3.146 2.96-5.334V38.407c-.001-2.188-1.066-4.232-2.98-5.073z"/>
      </svg>
      <span className="text-green-400 font-medium text-sm">Node.js</span>
    </div>
  </div>

  {/* Express.js */}
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
    <div className="relative flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-gray-500/30 group-hover:border-gray-400 transition-all duration-300">
      <svg className="w-5 h-5" viewBox="0 0 128 128">
        <path fill="#fff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/>
      </svg>
      <span className="text-gray-300 font-medium text-sm">Express.js</span>
    </div>
  </div>

  {/* MongoDB */}
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
    <div className="relative flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg border border-green-600/30 group-hover:border-green-600 transition-all duration-300">
      <svg className="w-5 h-5" viewBox="0 0 128 128">
        <path fill="#47A248" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051c-.057-8.084-.113-16.168-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"/>
        <path fill="#47A248" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"/>
      </svg>
      <span className="text-green-400 font-medium text-sm">MongoDB</span>
    </div>
  </div>
</div>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {['MongoDB', 'Express.js', 'React', 'Node.js'].map((tech, idx) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-medium border border-blue-400/30 hover:scale-110 hover:border-blue-400/60 transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="#projects"
            className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Work
            </span>
          </a>

          <a
            href="#contact"
            className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            
            <span className="relative z-10 flex items-center justify-center gap-2 text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="animate-fade-in-up animate-bounce"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="inline-flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full relative backdrop-blur-sm">
              <div className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-scroll"></div>
            </div>
            <span className="text-blue-300 text-sm font-medium group-hover:text-blue-200 transition-colors">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scroll {
          0%, 100% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, 8px);
            opacity: 0.5;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};