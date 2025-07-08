import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from '../icons';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/deepsoch.ai_02130_.png',
      title: 'AI-Generated Artwork',
      description: 'Stunning digital art created with our text-to-image AI'
    },
    {
      url: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/deepsoch.ai_02282_.png',
      title: 'Creative Visualization',
      description: 'Professional-grade visuals generated in seconds'
    },
    {
      url: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/deepsoch.ai_02286_.png',
      title: 'Artistic Innovation',
      description: 'Pushing the boundaries of AI-powered creativity'
    },
    {
      url: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/deepsoch.ai_02628_.png',
      title: 'Artistic Innovation',
      description: 'Stunning digital art created with our text-to-image AI'
    },
    {
      url: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/deepsoch.ai_02658_.png',
      title: 'Artistic Innovation',
      description: 'Professional-grade visuals generated in seconds'
    },
    {
      url: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/deepsoch.ai_02641_.png',
      title: 'Artistic Innovation',
      description: 'Pushing the boundaries of AI-powered creativity'
    },
    {
      url: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/deepsoch.ai_02646_.png',
      title: 'Artistic Innovation',
      description: 'Pushing the boundaries of AI-powered creativity'
    },
    {
      url: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/deepsoch.ai_02652_.png',
      title: 'Artistic Innovation',
      description: 'Pushing the boundaries of AI-powered creativity'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
      
      {/* Title overlay */}
      <div className="absolute top-20 left-0 right-0 z-20 text-center px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          AI-Generated <span className="text-gradient">Showcase</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Witness the power of our AI tools through these stunning creations
        </p>
      </div>

      {/* Full-screen image container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Image info overlay */}
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="max-w-md">
                <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-white mb-2 drop-shadow-lg">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-lg drop-shadow-md">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110 border border-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110 border border-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentIndex 
                ? 'bg-white border-white scale-125' 
                : 'bg-transparent border-white/60 hover:border-white hover:bg-white/20'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Call to Action
      <div className="absolute bottom-8 right-8 z-30">
        <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <div className="flex items-center">
            <Sparkles className="h-5 w-5 text-gradient mr-2" />
            <span className="text-white font-medium">Created with Qyuki AI</span>
          </div>
          <button className="btn-primary text-sm px-4 py-2">
            Create Your Own
          </button>
        </div>
      </div> */}

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-1 h-8 bg-white/40 rounded-full">
          <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;