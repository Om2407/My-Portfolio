import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    to_email: "guptaom203@gmail.com"
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    setIsLoading(true);
    setStatus('');

    try {
      const result = await emailjs.sendForm(
        'service_nsucpf9',
        'template_ezngo04',
        form.current,
        'Sg2ZHkC8zSDZIaHgs'
      );

      console.log('SUCCESS!', result.status, result.text);
      setStatus('success');
      setFormData({ from_name: "", from_email: "", message: "", to_email: "guptaom203@gmail.com" });
      
    } catch (error) {
      console.error('FAILED...', error);
      console.error('Error details:', {
        serviceId: 'service_nsucpf9',
        templateId: 'template_ezngo04',
        publicKey: 'Sg2ZHkC8zSDZIaHgs'
      });
      setStatus('failed');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 w-full">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Let's Connect! 🚀
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Have a project in mind or want to collaborate? I'd love to hear from you. 
                  Send me a message and let's create something amazing together!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1">
                  <span className="text-2xl">📧</span>
                  <a href="mailto:guptaom203@gmail.com" className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300 hover:underline">
                    guptaom203@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1">
                  <span className="text-2xl">📱</span>
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                    +91 XXXXX XXXXX
                  </span>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                    India
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xl">🐙</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <form 
                ref={form} 
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Hidden input for recipient email */}
                <input type="hidden" name="to_email" value="guptaom203@gmail.com" />

                {/* Name Input */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors duration-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 
                             focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 
                             transition-all duration-300 hover:border-white/30 hover:bg-white/10
                             disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors duration-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 
                             focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 
                             transition-all duration-300 hover:border-white/30 hover:bg-white/10
                             disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Input */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors duration-300">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    disabled={isLoading}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 
                             focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 
                             transition-all duration-300 hover:border-white/30 hover:bg-white/10 resize-none
                             disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-500 transform relative overflow-hidden group ${
                    isLoading 
                      ? 'bg-gray-600 cursor-not-allowed opacity-70' 
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                      </>
                    )}
                  </span>
                  
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 transition-all duration-500 rounded-xl"></div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-xl bg-white/0 group-active:bg-white/10 transition-colors duration-150"></div>
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center animate-bounce">
                    <span className="flex items-center justify-center gap-2">
                      <span className="text-xl">✅</span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center animate-pulse">
                    <span className="flex items-center justify-center gap-2">
                      <span className="text-xl">❌</span>
                      Please fill in all fields correctly.
                    </span>
                  </div>
                )}
                
                {status === 'failed' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center animate-pulse">
                    <span className="flex items-center justify-center gap-2">
                      <span className="text-xl">⚠️</span>
                      Failed to send. Please check your EmailJS configuration or try again.
                    </span>
                  </div>
                )}
              </form>

              {/* Floating background elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};