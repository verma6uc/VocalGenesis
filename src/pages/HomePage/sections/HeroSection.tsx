import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wand2, Sparkles, Globe2 } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-light pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 opacity-20 animate-pulse-slow">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path d="M100 0C156 40 156 160 100 200C44 160 44 40 100 0Z" fill="url(#paint0_radial)" />
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)">
                <stop stopColor="#4B0082" />
                <stop offset="1" stopColor="#00BFFF" stopOpacity="0.5" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 filter blur-3xl"></div>
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary">
                <Wand2 size={14} className="mr-1" /> AI-Powered
              </span>
              <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                <Sparkles size={14} className="mr-1" /> Revolutionary
              </span>
              <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-dark">
                <Globe2 size={14} className="mr-1" /> Multilingual
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">VoiceBox:</span> The AI-Powered Voice Revolution
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-medium mb-8 max-w-xl">
              Transform human communication through advanced machine learning, real-time speech synthesis, and emotional voice intelligence across languages.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/get-started" className="btn-primary">
                Get Started with VoiceBox Today
              </Link>
              
              <Link to="#demo-section" className="btn-secondary">
                Explore Our Interactive Demo
              </Link>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">99.8%</div>
                <div className="text-sm text-neutral-medium">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">100+</div>
                <div className="text-sm text-neutral-medium">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-neutral-medium">Enterprise Clients</div>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Visualization */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
              <div className="relative z-10 w-full max-w-md">
                <svg className="w-full h-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="150" fill="url(#voice-gradient)" fillOpacity="0.2" />
                  <circle cx="200" cy="200" r="100" stroke="url(#voice-gradient)" strokeWidth="4" strokeDasharray="10 5" />
                  
                  {/* Animated sound waves */}
                  <motion.path 
                    d="M150 200 Q 175 150, 200 200 Q 225 250, 250 200" 
                    stroke="url(#voice-gradient)" 
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.path 
                    d="M130 200 Q 165 130, 200 200 Q 235 270, 270 200" 
                    stroke="url(#voice-gradient)" 
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                  />
                  <motion.path 
                    d="M110 200 Q 155 110, 200 200 Q 245 290, 290 200" 
                    stroke="url(#voice-gradient)" 
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                  />
                  
                  <defs>
                    <linearGradient id="voice-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4B0082" />
                      <stop offset="100%" stopColor="#00BFFF" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Floating text elements */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg animate-float">
                  <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">Speech Recognition</div>
                </div>
                <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                  <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">Voice Synthesis</div>
                </div>
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">Emotional Intelligence</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;