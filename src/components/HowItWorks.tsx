// import React from 'react';
// import { MessageSquare, Sparkles, Download, ArrowRight } from '../icons';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';

// const HowItWorks = () => {
//   const ref = useScrollAnimation();

//   const steps = [
//     {
//       icon: MessageSquare,
//       title: 'Describe Your Vision',
//       description: 'Simply describe what you want to create using natural language. Our AI understands your creative intent.',
//       details: ['Natural language input', 'Creative prompts', 'Multiple formats', 'Instant understanding'],
//       color: 'from-blue-400 to-blue-600'
//     },
//     {
//       icon: Sparkles,
//       title: 'AI Magic Happens',
//       description: 'Our advanced AI models process your request and generate high-quality content in seconds.',
//       details: ['Neural networks', 'Machine learning', 'Real-time processing', 'Quality optimization'],
//       color: 'from-purple-400 to-purple-600'
//     },
//     {
//       icon: Download,
//       title: 'Download & Share',
//       description: 'Get your created content instantly and share it with the world or use it in your projects.',
//       details: ['HD/4K quality', 'Multiple formats', 'Instant delivery', 'Easy sharing'],
//       color: 'from-pink-400 to-pink-600'
//     }
//   ];

//   return (
//     <section id="how-it-works" className="section-padding bg-gray-900 grid-pattern">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div ref={ref} className="text-center mb-16 fade-in">
//           <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
//             How It <span className="text-gradient">Works</span>
//           </h2>
//           <p className="text-lg text-gray-400 max-w-3xl mx-auto">
//             Simple three-step process to transform your creative ideas into reality
//           </p>
//         </div>

//         <div className="relative">
//           {/* Animated Timeline Line */}
//           <div className="hidden md:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
//             <div className="timeline-line h-1 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//             {steps.map((step, index) => (
//               <div
//                 key={step.title}
//                 className={`relative text-center fade-in group hover:transform hover:-translate-y-4 transition-all duration-500`}
//                 style={{animationDelay: `${index * 0.3}s`}}
//               >
//                 {/* Animated Step Number */}
//                 <div className="relative inline-block mb-8">
//                   <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`}>
//                     {index + 1}
//                   </div>
//                   {/* Pulsing rings */}
//                   <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-20 animate-ping`}></div>
//                   <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-10 animate-ping`} style={{animationDelay: '1s'}}></div>
//                 </div>
                
//                 {/* Floating Icon */}
//                 <div className="mb-6 relative">
//                   <div className="inline-flex items-center justify-center w-16 h-16 dark-card rounded-full group-hover:neon-glow transition-all duration-300 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
//                     <step.icon className="h-8 w-8 text-gradient group-hover:scale-110 transition-transform duration-300" />
//                   </div>
//                 </div>
                
//                 {/* Content */}
//                 <div className="dark-card p-6 group-hover:dark-card-hover transition-all duration-300">
//                   <h3 className="font-poppins font-semibold text-xl text-white mb-3 group-hover:text-gradient transition-colors duration-300">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     {step.description}
//                   </p>
                  
//                   {/* Feature Pills */}
//                   <div className="grid grid-cols-2 gap-2 mb-4">
//                     {step.details.map((detail, idx) => (
//                       <div key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
//                         <div className={`w-2 h-2 bg-gradient-to-br ${step.color} rounded-full mr-2 animate-pulse`} style={{animationDelay: `${idx * 0.2}s`}}></div>
//                         {detail}
//                       </div>
//                     ))}
//                   </div>

//                   {/* Hover Arrow */}
//                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <ArrowRight className="h-5 w-5 text-gradient mx-auto animate-bounce" />
//                   </div>
//                 </div>

//                 {/* Connection Line for Mobile */}
//                 {index < steps.length - 1 && (
//                   <div className="md:hidden flex justify-center mt-8">
//                     <div className="w-1 h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16 fade-in">
//           <div className="dark-card p-8 max-w-2xl mx-auto hover:dark-card-hover transition-all duration-300">
//             <h3 className="font-poppins font-semibold text-2xl text-white mb-4">
//               Ready to Get <span className="text-gradient">Started</span>?
//             </h3>
//             <p className="text-gray-400 mb-6">
//               Join thousands of creators who are already transforming their ideas into reality
//             </p>
//             <button className="btn-primary hover-glow flex items-center justify-center mx-auto" onClick={() => window.location.href = 'https://n8n.deepsoch.io/form/e377705d-a9dc-40f9-93cd-2be143537f2b'}>
//               Schedule Demo
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;





import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { MessageSquare, Sparkles, Download, ArrowRight } from '../icons';
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
          source: 'website-how-it-works',
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

const HowItWorks = () => {
  const ref = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Describe Your Vision',
      description: 'Simply describe what you want to create using natural language. Our AI understands your creative intent.',
      details: ['Natural language input', 'Creative prompts', 'Multiple formats', 'Instant understanding'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Sparkles,
      title: 'AI Magic Happens',
      description: 'Our advanced AI models process your request and generate high-quality content in seconds.',
      details: ['Neural networks', 'Machine learning', 'Real-time processing', 'Quality optimization'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Download,
      title: 'Download & Share',
      description: 'Get your created content instantly and share it with the world or use it in your projects.',
      details: ['HD/4K quality', 'Multiple formats', 'Instant delivery', 'Easy sharing'],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-900 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16 fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Simple three-step process to transform your creative ideas into reality
          </p>
        </div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
            <div className="timeline-line h-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative text-center fade-in group hover:transform hover:-translate-y-4 transition-all duration-500`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                {/* Animated Step Number */}
                <div className="relative inline-block mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                    {index + 1}
                  </div>
                  {/* Pulsing rings */}
                  <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-20 animate-ping`}></div>
                  <div className={`absolute inset-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-10 animate-ping`} style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Floating Icon */}
                <div className="mb-6 relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 dark-card rounded-full group-hover:neon-glow transition-all duration-300 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    <step.icon className="h-8 w-8 text-gradient group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="dark-card p-6 group-hover:dark-card-hover transition-all duration-300">
                  <h3 className="font-poppins font-semibold text-xl text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                        <div className={`w-2 h-2 bg-gradient-to-br ${step.color} rounded-full mr-2 animate-pulse`} style={{animationDelay: `${idx * 0.2}s`}}></div>
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-gradient mx-auto animate-bounce" />
                  </div>
                </div>

                {/* Connection Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-gray-600 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="dark-card p-8 max-w-2xl mx-auto hover:dark-card-hover transition-all duration-300">
            <h3 className="font-poppins font-semibold text-2xl text-white mb-4">
              Ready to Get <span className="text-gradient">Started</span>?
            </h3>
            <p className="text-gray-400 mb-6">
              Join thousands of creators who are already transforming their ideas into reality
            </p>
            <button
              className="btn-primary hover-glow flex items-center justify-center mx-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal mount */}
      <ScheduleDemoModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HowItWorks;
