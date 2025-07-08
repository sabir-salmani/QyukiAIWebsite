import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const ref = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const customerLogos = [
    { name: 'Airtel', src: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/airtel.png' },
    { name: 'Flipkart', src: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/flipkart.png' },
    { name: 'Google', src: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/google.png' },
    { name: 'olx', src: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/olx-logo-removebg-preview.png' },
    { name: 'Coca-Cola', src: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/Coca-Cola.png' },
    { name: 'parle', src: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/Parle_Products_Logo.png' },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "DesignStudio Pro",
      content: "Qyuki AI has transformed our creative workflow. What used to take hours now takes minutes, and the quality is consistently outstanding.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "TechCorp",
      content: "The AI-generated visuals have increased our social media engagement by 300%. Our team can now focus on strategy while AI handles the creative execution.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      company: "Independent",
      content: "As a solo creator, Qyuki AI is like having an entire creative team at my fingertips. The quality and speed are game-changing.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const partners = [];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16 fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join thousands of creators and businesses who trust Qyuki AI
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="dark-card p-8 md:p-12 text-center">
            <Quote className="h-12 w-12 text-gradient mx-auto mb-6" />
            
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                />
                <div className="text-left">
                  <p className="font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gradient-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="text-gray-400 mb-8">Trusted by leading companies worldwide</p>
         
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {customerLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-20 hover:shadow-lg transition-shadow"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} Logo`} 
                className="h-10 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;