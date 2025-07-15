import React from 'react';
import { Sparkles, Mail, ArrowRight, Twitter, Github, Linkedin } from '../icons';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Text to Image', href: '#services' },
      { name: 'Image to Video', href: '#services' },
      { name: 'Audio AI', href: '#services' },
      { name: 'API Integration', href: '#services' },
      { name: 'Pricing', href: '#pricing' }
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '/Careers' },
      { name: 'Contact', href: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/')) {
      // For page navigation
      window.location.href = href;
    } else if (href.startsWith('#')) {
      // For anchor links
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external links
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-poppins font-semibold text-2xl mb-2 text-white">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Get the latest news and updates from Qyuki AI
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 w-full sm:w-80"
                />
              </div>
              <button className="btn-primary flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-gradient mr-2" />
              <span className="font-poppins font-bold text-xl text-white">Qyuki AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creative Media, Amplified by AI. Transform your creative workflow with our 
              cutting-edge AI tools for image, video, and audio generation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  onClick={() => handleLinkClick(social.href)}
                  className="p-2 bg-gray-900 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Qyuki AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => handleLinkClick('/privacy')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleLinkClick('#')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleLinkClick('#')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;