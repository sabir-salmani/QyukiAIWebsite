import React from 'react';
import { MessageSquare, Sparkles, Download, ArrowRight } from '../icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks = () => {
  const ref = useScrollAnimation();

  const steps = [
    {
      icon: MessageSquare,
      title: 'Describe Your Vision',
      description: 'Simply describe what you want to create using natural language. Our AI understands your creative intent.',
      details: ['Natural language input', 'Creative prompts', 'Multiple formats', 'Instant understanding'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Sparkles,
      title: 'AI Magic Happens',
      description: 'Our advanced AI models process your request and generate high-quality content in seconds.',
      details: ['Neural networks', 'Machine learning', 'Real-time processing', 'Quality optimization'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Download,
      title: 'Download & Share',
      description: 'Get your created content instantly and share it with the world or use it in your projects.',
      details: ['HD/4K quality', 'Multiple formats', 'Instant delivery', 'Easy sharing'],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-900 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16 fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Simple three-step process to transform your creative ideas into reality
          </p>
        </div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
            <div className="timeline-line h-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative text-center fade-in group hover:transform hover:-translate-y-4 transition-all duration-500`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                {/* Animated Step Number */}
                <div className="relative inline-block mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                    {index + 1}
                  </div>
                  {/* Pulsing rings */}
                  <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-20 animate-ping`}></div>
                  <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-10 animate-ping`} style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Floating Icon */}
                <div className="mb-6 relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 dark-card rounded-full group-hover:neon-glow transition-all duration-300 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    <step.icon className="h-8 w-8 text-gradient group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="dark-card p-6 group-hover:dark-card-hover transition-all duration-300">
                  <h3 className="font-poppins font-semibold text-xl text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                        <div className={`w-2 h-2 bg-gradient-to-br ${step.color} rounded-full mr-2 animate-pulse`} style={{animationDelay: `${idx * 0.2}s`}}></div>
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-gradient mx-auto animate-bounce" />
                  </div>
                </div>

                {/* Connection Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="dark-card p-8 max-w-2xl mx-auto hover:dark-card-hover transition-all duration-300">
            <h3 className="font-poppins font-semibold text-2xl text-white mb-4">
              Ready to Get <span className="text-gradient">Started</span>?
            </h3>
            <p className="text-gray-400 mb-6">
              Join thousands of creators who are already transforming their ideas into reality
            </p>
            <button className="btn-primary hover-glow flex items-center justify-center mx-auto">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;