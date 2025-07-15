import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ImageCarousel from './components/ImageCarousel';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Automation from './components/Automation';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Careers from './components/Careers';

function App() {
  // Simple routing logic - in a real app, you'd use React Router
  const currentPath = window.location.pathname;

  if (currentPath === '/about') {
    return (
      <div className="min-h-screen">
        <Navigation />
        <AboutUs />
        <Footer />
      </div>
    );
  }

  if (currentPath === '/automation') {
    return (
      <div className="min-h-screen">
        <Navigation />
        <Automation />
        <Footer />
      </div>
    );
  }

  if (currentPath === '/contact') {
    return (
      <div className="min-h-screen">
        <Navigation />
        <Contact />
        <Footer />
      </div>
    );
  }

  if (currentPath === '/privacy') {
    return (
      <div className="min-h-screen">
        <Navigation />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  if (currentPath === '/Careers') {
    return (
      <div className="min-h-screen">
        <Navigation />
        <Careers />
        <Footer />
      </div>
    );
  }

  // Default homepage
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ImageCarousel />
      <Services />
      <HowItWorks />
      <UseCases />
      <Demo />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;