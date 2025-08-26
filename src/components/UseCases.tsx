// import React, { useState } from 'react';
// import { Briefcase, GraduationCap, Film, Building } from '../icons';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';

// const UseCases = () => {
//   const ref = useScrollAnimation();
//   const [activeTab, setActiveTab] = useState(0);

//   const useCases = [
//     {
//       icon: Briefcase,
//       title: 'Marketing',
//       description: 'Transform your marketing campaigns with AI-generated visuals and videos',
//       features: [
//         'Social media content creation',
//         'Product visualization',
//         'Campaign automation',
//         'A/B testing with AI variants'
//       ],
//       image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/marketing.jpeg'
//     },
//     {
//       icon: GraduationCap,
//       title: 'E-Learning',
//       description: 'Create engaging educational content with interactive AI-generated media',
//       features: [
//         'Interactive course materials',
//         'Personalized learning paths',
//         'Automated content generation',
//         'Multi-language support'
//       ],
//       image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/elearning.jpeg'
        
//     },
//     {
//       icon: Film,
//       title: 'Entertainment',
//       description: 'Enhance your creative projects with AI-powered content generation',
//       features: [
//         'Video content creation',
//         'Character design',
//         'Story visualization',
//         'Audio production'
//       ],
//       image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/entertainment.jpeg'
        
        
//     },
//     {
//       icon: Building,
//       title: 'Corporate',
//       description: 'Streamline your business communications with professional AI content',
//       features: [
//         'Presentation materials',
//         'Training content',
//         'Internal communications',
//         'Brand consistency'
//       ],
//       image: 'https://aiwebsite1.s3.us-east-1.amazonaws.com/learning.jpeg'
        
//     }
//   ];

//   return (
//     <section id="use-cases" className="section-padding bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div ref={ref} className="text-center mb-16 fade-in">
//           <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
//             Use Cases & <span className="text-gradient">Industries</span>
//           </h2>
//           <p className="text-lg text-gray-400 max-w-3xl mx-auto">
//             Discover how Qyuki AI transforms workflows across different industries
//           </p>
//         </div>

//         <div className="dark-card overflow-hidden">
//           {/* Tab Navigation */}
//           <div className="flex flex-wrap border-b border-gray-800">
//             {useCases.map((useCase, index) => (
//               <button
//                 key={useCase.title}
//                 onClick={() => setActiveTab(index)}
//                 className={`flex-1 min-w-0 p-4 md:p-6 flex items-center justify-center transition-all duration-300 ${
//                   activeTab === index
//                     ? 'bg-gradient-primary text-black'
//                     : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
//                 }`}
//               >
//                 <useCase.icon className="h-5 w-5 mr-2" />
//                 <span className="font-medium text-sm md:text-base">{useCase.title}</span>
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <div className="p-8 md:p-12">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 bg-gradient-primary rounded-full text-black mr-4">
//                     {React.createElement(useCases[activeTab].icon, { className: "h-6 w-6" })}
//                   </div>
//                   <h3 className="font-poppins font-semibold text-2xl text-white">
//                     {useCases[activeTab].title}
//                   </h3>
//                 </div>
                
//                 <p className="text-lg text-gray-400 leading-relaxed">
//                   {useCases[activeTab].description}
//                 </p>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {useCases[activeTab].features.map((feature, index) => (
//                     <div key={index} className="flex items-center text-gray-300">
//                       <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
//                       {feature}
//                     </div>
//                   ))}
//                 </div>
                
//                 <button className="btn-primary" onClick={() => window.location.href = 'https://n8n.deepsoch.io/form/e377705d-a9dc-40f9-93cd-2be143537f2b'}>
//                   Explore Solutions
//                 </button>
//               </div>
              
//               <div className="relative">
//                 <img
//                   src={useCases[activeTab].image}
//                   alt={useCases[activeTab].title}
//                   className="w-full h-80 object-cover rounded-2xl shadow-lg"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
//                 <div className="absolute inset-0 border border-gray-700 rounded-2xl"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UseCases;



import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Briefcase, GraduationCap, Film, Building } from '../icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Schedule Demo Modal (uncontrolled inputs to avoid focus loss)
 * - Collects: Name, Contact No, Email, Company
 * - POSTs JSON to n8n webhook: https://n8n.deepsoch.io/webhook-test/scheduledemo
 * - Auto-closes after success (AUTO_CLOSE_MS)
 * - Esc to close, initial autofocus, overlay has no click handler (prevents blur issues)
 */
function ScheduleDemoModal({ open, onClose }) {
  const AUTO_CLOSE_MS = 1400;

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);
  const timerRef = useRef(null);

  // Autofocus first field & lock background scroll when opening
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => nameRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
      // reset state when closing
      setErrors({});
      setStatus('idle');
      setMessage('');
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => { if (open && e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  function validate(v) {
    const errs = {};
    if (!v.name.trim()) errs.name = 'Please enter your name';
    if (!v.phone.trim()) errs.phone = 'Please enter a contact number';
    else if (!/^\+?[0-9\-()\s]{7,15}$/.test(v.phone.trim())) errs.phone = 'Enter a valid phone number';
    if (!v.email.trim()) errs.email = 'Please enter an email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) errs.email = 'Enter a valid email address';
    if (!v.company.trim()) errs.company = 'Please enter your company name';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = {
      name: nameRef.current?.value || '',
      phone: phoneRef.current?.value || '',
      email: emailRef.current?.value || '',
      company: companyRef.current?.value || '',
    };

    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setStatus('loading');
      setMessage('');
      const res = await fetch('https://n8n.deepsoch.io/webhook-test/scheduledemo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'website-use-cases',
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus('success');
      setMessage("Thanks! Your request was submitted. We'll reach out shortly.");

      // auto-close after a short delay
      timerRef.current = setTimeout(() => {
        onClose();
      }, AUTO_CLOSE_MS);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('Something went wrong while submitting. Please try again.');
    }
  }

  function Field({ label, id, error, children }) {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-sm text-gray-300 mb-1">{label}</label>
        {children}
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }

  if (!open) return null;

  // Portal keeps the modal out of animated/re-rendering parents so inputs don't remount.
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      aria-labelledby="schedule-demo-title"
      aria-modal="true"
      role="dialog"
    >
      {/* overlay WITHOUT click handler (prevents stray blur after first char) */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Dialog */}
      <div className="relative w-full max-w-lg mx-4">
        <div className="dark-card p-6 rounded-2xl shadow-2xl">
          <div className="flex items-start justify-between mb-4">
            <h3 id="schedule-demo-title" className="font-poppins font-semibold text-xl text-white">
              Schedule a Demo
            </h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-gray-400 hover:text-white transition"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <Field label="Name" id="demo-name" error={errors.name}>
              <input
                id="demo-name"
                type="text"
                ref={nameRef}
                defaultValue=""
                className="w-full rounded-lg bg-zinc-900 border border-zinc-800 focus:border-zinc-600 outline-none text-white px-3 py-2"
                placeholder="Your name"
                required
              />
            </Field>

            <Field label="Contact No" id="demo-phone" error={errors.phone}>
              <input
                id="demo-phone"
                type="tel"
                inputMode="tel"
                ref={phoneRef}
                defaultValue=""
                className="w-full rounded-lg bg-zinc-900 border border-zinc-800 focus:border-zinc-600 outline-none text-white px-3 py-2"
                placeholder="e.g. +91 98765 43210"
                required
              />
            </Field>

            <Field label="Email" id="demo-email" error={errors.email}>
              <input
                id="demo-email"
                type="email"
                ref={emailRef}
                defaultValue=""
                className="w-full rounded-lg bg-zinc-900 border border-zinc-800 focus:border-zinc-600 outline-none text-white px-3 py-2"
                placeholder="you@company.com"
                required
              />
            </Field>

            <Field label="Company Name" id="demo-company" error={errors.company}>
              <input
                id="demo-company"
                type="text"
                ref={companyRef}
                defaultValue=""
                className="w-full rounded-lg bg-zinc-900 border border-zinc-800 focus:border-zinc-600 outline-none text-white px-3 py-2"
                placeholder="Your company"
                required
              />
            </Field>

            {status !== 'idle' && (
              <div
                className={`mb-3 text-sm ${
                  status === 'success' ? 'text-emerald-400'
                  : status === 'error' ? 'text-red-400'
                  : 'text-gray-400'
                }`}
                role="status"
                aria-live="polite"
              >
                {status === 'loading' ? 'Submitting…' : message}
              </div>
            )}

            <div className="flex items-center gap-3 mt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary px-4 py-2 rounded-lg disabled:opacity-60"
              >
                {status === 'loading' ? 'Submitting…' : 'Submit'}
              </button>
              <button type="button" onClick={onClose} className="btn-secondary px-4 py-2 rounded-lg">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}

const UseCases = () => {
  const ref = useScrollAnimation();
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                
                <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
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

      {/* Modal mount */}
      <ScheduleDemoModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default UseCases;
