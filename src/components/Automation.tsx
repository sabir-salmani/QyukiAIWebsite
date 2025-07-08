import React from 'react';
import { Zap, Workflow, Clock, BarChart3, Shield, Cpu, ArrowRight, CheckCircle, Target, Users, TrendingUp, DollarSign, Globe, Megaphone, Bot, Settings } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Automation = () => {
  const ref = useScrollAnimation();

  const automationServices = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline your content creation pipeline with intelligent automation that handles repetitive tasks.',
      features: ['Batch Processing', 'Smart Scheduling', 'Quality Control', 'Auto-Publishing'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Optimization',
      description: 'AI-powered insights that automatically optimize your content performance and engagement.',
      features: ['Performance Tracking', 'A/B Testing', 'Audience Analysis', 'ROI Optimization'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Brand Consistency',
      description: 'Ensure brand compliance across all generated content with automated style and guideline enforcement.',
      features: ['Style Guidelines', 'Brand Colors', 'Logo Placement', 'Tone Consistency'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Cpu,
      title: 'Custom AI Models',
      description: 'Train personalized AI models that understand your specific business needs and creative style.',
      features: ['Custom Training', 'Domain Expertise', 'Fine-tuning', 'Model Deployment'],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const businessFeatures = [
    {
      icon: Target,
      title: 'Lead Generation Automation',
      description: 'AI-powered lead scoring and nurturing campaigns that convert prospects into customers automatically.',
      benefits: ['300% increase in qualified leads', 'Automated follow-up sequences', 'Personalized content delivery', 'Real-time lead scoring'],
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Users,
      title: 'Customer Support Automation',
      description: 'Intelligent chatbots and support systems that handle customer inquiries 24/7 with human-like responses.',
      benefits: ['90% reduction in response time', '24/7 customer support', 'Multi-language support', 'Escalation to human agents'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Sales Process Optimization',
      description: 'Automate your entire sales funnel from lead capture to deal closure with AI-driven insights.',
      benefits: ['50% faster deal closure', 'Automated proposal generation', 'Pipeline management', 'Revenue forecasting'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: DollarSign,
      title: 'Financial Analytics & Reporting',
      description: 'Automated financial reporting and budget optimization with predictive analytics for better decision making.',
      benefits: ['Real-time financial insights', 'Automated expense tracking', 'Budget optimization', 'Compliance reporting'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Globe,
      title: 'Market Intelligence',
      description: 'Continuous market monitoring and competitor analysis to keep your business ahead of the curve.',
      benefits: ['Competitor tracking', 'Market trend analysis', 'Price optimization', 'Opportunity identification'],
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Megaphone,
      title: 'Marketing Campaign Automation',
      description: 'End-to-end marketing automation from content creation to performance tracking and optimization.',
      benefits: ['Automated campaign creation', 'Multi-channel distribution', 'Performance optimization', 'ROI tracking'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Bot,
      title: 'HR & Recruitment Automation',
      description: 'Streamline hiring processes with AI-powered candidate screening and onboarding automation.',
      benefits: ['Automated resume screening', 'Interview scheduling', 'Candidate matching', 'Onboarding workflows'],
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Settings,
      title: 'Operations Management',
      description: 'Optimize business operations with intelligent resource allocation and process automation.',
      benefits: ['Resource optimization', 'Process automation', 'Quality assurance', 'Performance monitoring'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '90% Time Savings',
      description: 'Reduce content creation time from hours to minutes',
      stat: '90%'
    },
    {
      icon: BarChart3,
      title: '300% Productivity Boost',
      description: 'Generate more content with the same resources',
      stat: '300%'
    },
    {
      icon: CheckCircle,
      title: '99.9% Accuracy',
      description: 'Consistent quality with minimal human intervention',
      stat: '99.9%'
    },
    {
      icon: Zap,
      title: '24/7 Operation',
      description: 'Automated workflows that never sleep',
      stat: '24/7'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Product Management',
      description: 'Automatically generate product descriptions, optimize pricing, manage inventory, and create marketing materials for your entire catalog.',
      features: ['Product Description Generation', 'Dynamic Pricing', 'Inventory Management', 'Marketing Automation']
    },
    {
      title: 'Content Marketing at Scale',
      description: 'Create consistent, on-brand content across all platforms with automated scheduling, optimization, and performance tracking.',
      features: ['Content Calendar Management', 'Multi-platform Publishing', 'Performance Analytics', 'SEO Optimization']
    },
    {
      title: 'Customer Relationship Management',
      description: 'Automate customer interactions, personalize communications, and optimize the entire customer journey for maximum retention.',
      features: ['Automated Email Campaigns', 'Customer Segmentation', 'Personalized Recommendations', 'Churn Prediction']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-animated grid-pattern pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="text-center fade-in force-visible">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
              Business <span className="text-gradient">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business operations with intelligent AI automation. Scale your content creation, 
              optimize workflows, and drive growth with our enterprise-grade solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in force-visible">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Why Choose <span className="text-gradient">Automation</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Measurable results that transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="dark-card dark-card-hover p-6 text-center fade-in force-visible group hover:transform hover:-translate-y-2 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-black mb-4 group-hover:animate-pulse">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {benefit.stat}
                </div>
                <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Automation Services */}
      <section className="section-padding bg-black grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in force-visible">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Core Automation <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Essential automation tools for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationServices.map((service, index) => (
              <div
                key={service.title}
                className="group dark-card dark-card-hover p-8 transition-all duration-500 fade-in force-visible hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${service.color} text-white mr-4`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-poppins font-semibold text-xl text-white">
                    {service.title}
                  </h4>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="group/btn flex items-center text-gradient font-medium hover:neon-text transition-all duration-200">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Features Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in force-visible">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Business <span className="text-gradient">Features</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive automation solutions that help businesses scale and optimize operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="dark-card dark-card-hover p-6 fade-in force-visible group hover:transform hover:-translate-y-2 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${feature.color} text-white mr-3 group-hover:animate-pulse`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-white">
                    {feature.title}
                  </h4>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <Zap className="w-3 h-3 text-gradient mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <button className="group/btn flex items-center text-gradient font-medium hover:neon-text transition-all duration-200 text-sm">
                  Explore Feature
                  <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in force-visible">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Real-World <span className="text-gradient">Applications</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              See how businesses are transforming their operations with our automation solutions
            </p>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="dark-card p-8 fade-in force-visible"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <h3 className="font-poppins font-semibold text-2xl text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {useCase.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="btn-primary">
                  View Case Study
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="dark-card p-12 fade-in force-visible hover:dark-card-hover transition-all duration-300">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to <span className="text-gradient">Automate</span>?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Join hundreds of businesses that have transformed their operations with Qyuki AI automation. 
              Start your free trial today and see the difference intelligent automation can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automation;