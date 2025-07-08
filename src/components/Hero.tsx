import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const element = document.querySelector('#demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animated grid-pattern pt-16">
      {/* Animated Background */}
      <div className="particles"></div>
      
      {/* Geometric shapes */}
      <div className="geometric-shape w-32 h-32 top-1/4 left-1/4 animate-float"></div>
      <div className="geometric-shape w-24 h-24 bottom-1/4 right-1/4 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="geometric-shape w-16 h-16 top-1/3 right-1/3 animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              🚀 Next-Gen AI Media Platform
            </span>
          </div>
          
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Imagine. Create.
            <br />
            <span className="text-gradient">Automate.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered media tools that transform your creative workflow: 
            <br />
            <span className="neon-text font-medium">Text→Image, Image→Video, Audio AI & more</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToServices}
              className="group btn-primary flex items-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={scrollToDemo}
              className="group btn-secondary flex items-center"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Get a Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">10M+</div>
              <div className="text-sm text-gray-400">AI Generations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/20 rounded-full relative">
          <div className="w-1 h-8 bg-gradient-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;