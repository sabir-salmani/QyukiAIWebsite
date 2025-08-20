import React, { useState } from 'react';
import { Briefcase, GraduationCap, Film, Building } from '../icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const UseCases = () => {
  const ref = useScrollAnimation();
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      icon: Briefcase,
      title: 'Marketing',
      description: 'Transform your marketing campaigns with AI-generated visuals and videos',
      features: [
        'Social media content creation',
        'Product visualization',
        'Campaign automation',
        'A/B testing with AI variants'
      ],
      image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/marketing.jpeg'
    },
    {
      icon: GraduationCap,
      title: 'E-Learning',
      description: 'Create engaging educational content with interactive AI-generated media',
      features: [
        'Interactive course materials',
        'Personalized learning paths',
        'Automated content generation',
        'Multi-language support'
      ],
      image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/elearning.jpeg'
        
    },
    {
      icon: Film,
      title: 'Entertainment',
      description: 'Enhance your creative projects with AI-powered content generation',
      features: [
        'Video content creation',
        'Character design',
        'Story visualization',
        'Audio production'
      ],
      image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/entertainment.jpeg'
        
        
    },
    {
      icon: Building,
      title: 'Corporate',
      description: 'Streamline your business communications with professional AI content',
      features: [
        'Presentation materials',
        'Training content',
        'Internal communications',
        'Brand consistency'
      ],
      image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/learning.jpeg'
        
    }
  ];

  return (
    <section id="use-cases" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16 fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Use Cases & <span className="text-gradient">Industries</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how Qyuki AI transforms workflows across different industries
          </p>
        </div>

        <div className="dark-card overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-800">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.title}
                onClick={() => setActiveTab(index)}
                className={`flex-1 min-w-0 p-4 md:p-6 flex items-center justify-center transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-primary text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <useCase.icon className="h-5 w-5 mr-2" />
                <span className="font-medium text-sm md:text-base">{useCase.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-primary rounded-full text-black mr-4">
                    {React.createElement(useCases[activeTab].icon, { className: "h-6 w-6" })}
                  </div>
                  <h3 className="font-poppins font-semibold text-2xl text-white">
                    {useCases[activeTab].title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-400 leading-relaxed">
                  {useCases[activeTab].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {useCases[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="btn-primary" onClick={() => window.location.href = 'https://n8n.deepsoch.io/form/e377705d-a9dc-40f9-93cd-2be143537f2b'}>
                  Explore Solutions
                </button>
              </div>
              
              <div className="relative">
                <img
                  src={useCases[activeTab].image}
                  alt={useCases[activeTab].title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 border border-gray-700 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;