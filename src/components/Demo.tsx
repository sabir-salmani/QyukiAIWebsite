import React, { useState } from 'react';
import { Wand2, Loader2, CheckCircle } from '../icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Demo = () => {
  const ref = useScrollAnimation();
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setGeneratedImage('https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=600');
      setIsGenerating(false);
    }, 2000);
  };

  const samplePrompts = [
    "A futuristic cityscape with flying cars at sunset",
    "A cute robot painting on a canvas in an art studio",
    "A magical forest with glowing mushrooms and fireflies",
    "A vintage coffee shop with steampunk decorations"
  ];

  return (
    <section id="demo" className="section-padding bg-gray-900 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16 fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Live <span className="text-gradient">Demo</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Try our AI image generation tool right here — no credit card required
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="dark-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Enter your prompt
                  </label>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Describe what you want to create..."
                    className="w-full h-32 p-4 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-white placeholder-gray-500"
                    disabled={isGenerating}
                  />
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-3">Try these examples:</p>
                  <div className="space-y-2">
                    {samplePrompts.map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => setInputText(prompt)}
                        className="block w-full text-left p-3 text-sm bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-700 text-gray-300"
                        disabled={isGenerating}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={handleGenerate}
                  disabled={!inputText.trim() || isGenerating}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-5 w-5 mr-2" />
                      Generate Image
                    </>
                  )}
                </button>
              </div>
              
              {/* Output Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Generated Result
                  </label>
                  <div className="w-full h-64 bg-gray-800 rounded-xl border-2 border-dashed border-gray-700 flex items-center justify-center overflow-hidden">
                    {isGenerating ? (
                      <div className="text-center">
                        <Loader2 className="h-12 w-12 text-gradient animate-spin mx-auto mb-4" />
                        <p className="text-gray-400">AI is working its magic...</p>
                      </div>
                    ) : generatedImage ? (
                      <img
                        src={generatedImage}
                        alt="Generated content"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center text-gray-500">
                        <Wand2 className="h-12 w-12 mx-auto mb-4" />
                        <p>Your generated image will appear here</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {generatedImage && (
                  <div className="flex items-center justify-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-green-400 font-medium">
                      Image generated successfully!
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              This is just a preview. Sign up to unlock the full potential of our AI tools.
            </p>
            <button className="btn-primary">
              Get Full Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;