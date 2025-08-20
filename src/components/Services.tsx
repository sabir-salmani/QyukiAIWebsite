import React from 'react';
import { Image, Video, Mic, Code, ArrowRight, Zap, Globe, TrendingUp, DollarSign, Users, BarChart3, Megaphone, Box, Volume2 } from '../icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const ref = useScrollAnimation();

  const coreServices = [
    {
      icon: Image,
      title: 'Text to Image',
      description: 'Transform your words into stunning visual art with our advanced AI image generation technology.',
      features: ['High Resolution', 'Multiple Styles', 'Custom Prompts', 'Instant Generation'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Image,
      title: 'Image to Image',
      description: 'Transform and enhance existing images with AI-powered style transfer and modification.',
      features: ['Style Transfer', 'Image Enhancement', 'Creative Filters', 'Quality Upscaling'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Video,
      title: 'Image to Video',
      description: 'Bring your static images to life with AI-powered video generation and animation.',
      features: ['Dynamic Animation', 'Smooth Transitions', 'Custom Duration', 'HD Quality'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Volume2,
      title: 'Text to Audio',
      description: 'Generate natural-sounding speech and audio content from text using advanced AI voice synthesis.',
      features: ['Natural Voices', 'Multiple Languages', 'Custom Tone', 'High Quality'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Mic,
      title: 'Audio to Audio',
      description: 'Transform and enhance audio content with AI-powered voice cloning and audio processing.',
      features: ['Voice Cloning', 'Audio Enhancement', 'Noise Removal', 'Format Conversion'],
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Box,
      title: 'Text to 3D',
      description: 'Create stunning 3D models and objects from simple text descriptions using cutting-edge AI.',
      features: ['3D Modeling', 'Multiple Formats', 'Texture Generation', 'Custom Objects'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Box,
      title: 'Image to 3D',
      description: 'Convert 2D images into detailed 3D models with AI-powered depth estimation and reconstruction.',
      features: ['Depth Mapping', '3D Reconstruction', 'Model Export', 'Texture Mapping'],
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  const businessServices = [
    {
      icon: Globe,
      title: 'Automated Subtitling & Multilingual Translation',
      description: 'Generate, sync and translate captions for video content in 50+ languages—perfect for global reach.',
      features: ['50+ Languages', 'Auto Sync', 'Global Reach', 'Real-time Translation'],
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'AI-Driven Content Strategy',
      description: 'Analyze trending topics, keyword gaps and audience sentiment to recommend high-impact content ideas and optimal posting schedules.',
      features: ['Trend Analysis', 'Keyword Research', 'Audience Insights', 'Optimal Scheduling'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: DollarSign,
      title: 'Smart Monetization Insights',
      description: 'Use predictive AI models to forecast ad revenue, affiliate earnings and sponsorship value—then optimize your content mix accordingly.',
      features: ['Revenue Forecasting', 'Affiliate Optimization', 'Sponsorship Value', 'Content Mix Analysis'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Megaphone,
      title: 'Programmatic PR & Press Release Generation',
      description: 'Auto-draft press releases, pitches and media kits tailored to your brand voice, then distribute them with AI-optimized targeting lists.',
      features: ['Auto-draft PR', 'Brand Voice Matching', 'Media Kits', 'Targeted Distribution'],
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Users,
      title: 'AI Social Media Automation',
      description: 'Generate post copy, design assets, hashtags and posting calendars—plus automated A/B testing of creatives for best performance.',
      features: ['Post Generation', 'Design Assets', 'Hashtag Research', 'A/B Testing'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Users,
      title: 'Influencer & Collaboration Matching',
      description: 'Leverage AI to identify and rank the ideal creator partnerships—based on audience overlap, engagement metrics and brand fit.',
      features: ['Creator Matching', 'Audience Analysis', 'Engagement Metrics', 'Brand Fit Scoring'],
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: Code,
      title: 'Custom AI Integrations & APIs',
      description: 'White-label SDKs and REST APIs so enterprises can embed your AI media tools directly into their own apps and workflows.',
      features: ['White-label SDKs', 'REST APIs', 'Enterprise Integration', 'Custom Workflows'],
      color: 'from-violet-400 to-violet-600'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics Dashboard',
      description: 'Track performance metrics (views, engagement, sentiment) across platforms with AI-powered alerts and optimization suggestions.',
      features: ['Performance Tracking', 'Cross-platform Analytics', 'AI Alerts', 'Optimization Tips'],
      color: 'from-emerald-400 to-emerald-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16 fade-in force-visible">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Powerful AI Tools at <span className="text-gradient">Your Fingertips</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive suite of AI tools designed to revolutionize your creative workflow and business operations
          </p>
        </div>

        {/* Core Creative Services */}
        <div className="mb-20">
          <h3 className="font-poppins font-semibold text-2xl text-white mb-8 text-center">
            Core <span className="text-gradient">Creative Tools</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <div
                key={service.title}
                className="group dark-card dark-card-hover p-6 transition-all duration-300 fade-in force-visible hover:transform hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${service.color} text-white mr-3 group-hover:animate-pulse`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-white">
                    {service.title}
                  </h4>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-2 animate-pulse"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* <button className="group/btn flex items-center text-gradient font-medium hover:neon-text transition-all duration-200 text-sm">
                  Try Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button> */}
              </div>
            ))}
          </div>
        </div>

        {/* Business & Automation Services */}
        <div>
          <h3 className="font-poppins font-semibold text-2xl text-white mb-8 text-center">
            Business <span className="text-gradient">Automation</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service, index) => (
              <div
                key={service.title}
                className="group dark-card dark-card-hover p-6 transition-all duration-300 fade-in force-visible hover:transform hover:-translate-y-2"
                style={{animationDelay: `${(index + 7) * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${service.color} text-white mr-3 group-hover:animate-pulse`}>
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-white">
                    {service.title}
                  </h4>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <Zap className="w-3 h-3 text-gradient mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="group/btn flex items-center text-gradient font-medium hover:neon-text transition-all duration-200 text-sm">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in force-visible">
          <div className="dark-card p-8 max-w-4xl mx-auto">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to Transform Your <span className="text-gradient">Workflow</span>?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Join thousands of creators and businesses who have revolutionized their content creation with our AI-powered tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="btn-primary flex items-center justify-center hover-glow">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button> */}
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;