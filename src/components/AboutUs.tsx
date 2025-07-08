import React from 'react';
import { Target, Users, Lightbulb, Award, ArrowRight } from '../icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutUs = () => {
  const ref = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: "We push the boundaries of what's possible with AI technology to create tools that inspire creativity.",
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in AI generation quality and user experience.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Every feature we build is designed with our users in mind, making AI accessible to everyone.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Award,
      title: 'Global Impact',
      description: 'We believe AI creativity should be accessible to creators worldwide, regardless of technical expertise.',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const team = [
    {
      name: 'Ahimanyu R.Krishnan',
      role: 'Managing Director',
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus lectus et lacinia tempus. Etiam tincidunt, elit et semper sollicitudin, tellus dolor condimentum nibh, venenatis suscipit velit nisi sed nibh. Curabitur bibendum volutpat tempus.",
      image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/abhi.jpg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sagar Gokhle',
      role: 'CEO & Co-Founder',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus lectus et lacinia tempus. Etiam tincidunt, elit et semper sollicitudin, tellus dolor condimentum nibh, venenatis suscipit velit nisi sed nibh. Curabitur bibendum volutpat tempus.',
      image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/Sagar.jpg?auto=compress&cs=tinysrgb&w=300'
    }
    
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-animated grid-pattern pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="text-center fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
              About <span className="text-gradient">Qyuki AI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to revolutionize creative media through the power of artificial intelligence. 
              Founded by AI researchers and creative technologists, Qyuki AI is building the future of content creation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Qyuki Digital Media is a dynamic multi-disciplinary digital media powerhouse. We specialize in crafting impactful, result-oriented campaigns that resonate with audiences across platforms. Our full-stack services span the entire content pipeline: Conceptualization → Pre-production → Production → Post-production → Distribution — tailored for influencers, brands, agencies, and production houses. We leverage a vast influencer network and advanced content strategies to tell powerful brand stories and drive authentic engagement. Driven by data. Powered by storytelling. Focused on results.
                </p>
              </div>
            </div>
            <div className="fade-in">
              <img
                src="https://aiwebsite1.s3.us-east-1.amazonaws.com/image1.jpg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-black grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="dark-card dark-card-hover p-8 fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${value.color} text-white mr-4`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The brilliant minds behind Qyuki AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="dark-card dark-card-hover p-8 text-center fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-gray-700"
                />
                <h3 className="font-poppins font-semibold text-xl text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gradient font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="dark-card p-12 fade-in">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
              Join Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We're always looking for talented individuals who share our passion for AI and creativity. 
              Explore opportunities to shape the future of media technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center">
                View Careers
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;