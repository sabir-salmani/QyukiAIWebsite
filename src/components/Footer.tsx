// import React from 'react';
// import { Sparkles, Mail, ArrowRight, Twitter, Github, Linkedin } from '../icons';

// const Footer = () => {
//   const footerLinks = {
//     Product: [
//       { name: 'Text to Image', href: '#services' },
//       { name: 'Image to Video', href: '#services' },
//       { name: 'Audio AI', href: '#services' },
//       { name: 'API Integration', href: '#services' },
//       { name: 'Pricing', href: '#pricing' }
//     ],
//     Company: [
//       { name: 'About Us', href: '/about' },
//       { name: 'Blog', href: '#' },
//       { name: 'Careers', href: '/Careers' },
//       { name: 'Contact', href: '/contact' },
//     ],
//     Legal: [
//       { name: 'Privacy Policy', href: '/privacy' },
//       { name: 'Terms of Service', href: '#' },
//     ]
//   };

//   const socialLinks = [
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Github, href: '#', label: 'GitHub' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' }
//   ];

//   const handleLinkClick = (href: string) => {
//     if (href.startsWith('/')) {
//       // For page navigation
//       window.location.href = href;
//     } else if (href.startsWith('#')) {
//       // For anchor links
//       const element = document.querySelector(href);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       // For external links
//       window.open(href, '_blank');
//     }
//   };

//   return (
//     <footer className="bg-black text-white">
//       {/* Newsletter Section */}
//       <div className="border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="mb-6 md:mb-0">
//               <h3 className="font-poppins font-semibold text-2xl mb-2 text-white">
//                 Stay Updated
//               </h3>
//               <p className="text-gray-400">
//                 Get the latest news and updates from Qyuki AI
//               </p>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 w-full sm:w-80"
//                 />
//               </div>
//               <button className="btn-primary flex items-center justify-center">
//                 Subscribe
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           {/* Logo and Description */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center mb-4">
//               <Sparkles className="h-8 w-8 text-gradient mr-2" />
//               <span className="font-poppins font-bold text-xl text-white">Qyuki AI</span>
//             </div>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Creative Media, Amplified by AI. Transform your creative workflow with our 
//               cutting-edge AI tools for image, video, and audio generation.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <button
//                   key={social.label}
//                   onClick={() => handleLinkClick(social.href)}
//                   className="p-2 bg-gray-900 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Footer Links */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category}>
//               <h4 className="font-semibold text-lg mb-4 text-white">{category}</h4>
//               <ul className="space-y-2">
//                 {links.map((link) => (
//                   <li key={link.name}>
//                     <button
//                       onClick={() => handleLinkClick(link.href)}
//                       className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-left"
//                     >
//                       {link.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <p className="text-gray-400 text-sm">
//               © 2025 Qyuki AI. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-6 mt-4 md:mt-0">
//               <button 
//                 onClick={() => handleLinkClick('/privacy')}
//                 className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
//               >
//                 Privacy Policy
//               </button>
//               <button 
//                 onClick={() => handleLinkClick('#')}
//                 className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
//               >
//                 Terms of Service
//               </button>
//               <button 
//                 onClick={() => handleLinkClick('#')}
//                 className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
//               >
//                 Cookie Settings
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Sparkles, Mail, ArrowRight, Twitter, Github, Linkedin } from "../icons";

// const WEBHOOK_URL =
//   "https://n8n.deepsoch.io/webhook-test/4fffcef1-9051-47db-9a83-7cfc4cbaffff";

// type Status = "idle" | "loading" | "success" | "error";

// const Footer: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState<Status>("idle");
//   const [message, setMessage] = useState("");

//   const footerLinks = {
//     Product: [
//       { name: "Text to Image", href: "#services" },
//       { name: "Image to Video", href: "#services" },
//       { name: "Audio AI", href: "#services" },
//       { name: "API Integration", href: "#services" },
//       { name: "Pricing", href: "#pricing" },
//     ],
//     Company: [
//       { name: "About Us", href: "/about" },
//       { name: "Blog", href: "#" },
//       { name: "Careers", href: "/careers" }, // normalized to lowercase
//       { name: "Contact", href: "/contact" },
//     ],
//     Legal: [
//       { name: "Privacy Policy", href: "/privacy" },
//       { name: "Terms of Service", href: "#" },
//     ],
//   } as const;

//   const socialLinks = [
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Github, href: "#", label: "GitHub" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//   ] as const;

//   const scrollToAnchor = (href: string) => {
//     const el = document.querySelector(href);
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setStatus("error");
//       setMessage("Please enter a valid email address.");
//       return;
//     }

//     setStatus("loading");
//     setMessage("");

//     try {
//       // Send JSON to n8n webhook. If your workflow expects form-data,
//       // swap this block for the commented FormData version below.
//       const res = await fetch(WEBHOOK_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       // --- FormData alternative ---
//       // const formData = new FormData();
//       // formData.append("email", email);
//       // const res = await fetch(WEBHOOK_URL, { method: "POST", body: formData });

//       if (!res.ok) throw new Error(`Request failed: ${res.status}`);

//       setStatus("success");
//       setMessage("Thanks! You’re subscribed.");
//       setEmail("");
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//       setMessage("Couldn’t subscribe right now. Please try again in a bit.");
//     }
//   };

//   const renderFooterLink = (href: string, label: string) => {
//     const isInternal = href.startsWith("/");
//     const isAnchor = href.startsWith("#");

//     if (isInternal) {
//       return (
//         <Link
//           to={href}
//           className="text-gray-400 hover:text-white transition-colors duration-200"
//         >
//           {label}
//         </Link>
//       );
//     }

//     if (isAnchor) {
//       return (
//         <button
//           onClick={() => scrollToAnchor(href)}
//           className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
//         >
//           {label}
//         </button>
//       );
//     }

//     return (
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-400 hover:text-white transition-colors duration-200"
//       >
//         {label}
//       </a>
//     );
//   };

//   return (
//     <footer className="bg-black text-white">
//       {/* Newsletter Section */}
//       <div className="border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="mb-6 md:mb-0">
//               <h3 className="font-poppins font-semibold text-2xl mb-2 text-white">
//                 Stay Updated
//               </h3>
//               <p className="text-gray-400">
//                 Get the latest news and updates from Qyuki AI
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubscribe}
//               className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
//               noValidate
//             >
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 w-full sm:w-80"
//                   required
//                   aria-invalid={status === "error"}
//                   aria-describedby="subscribe-help"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn-primary flex items-center justify-center disabled:opacity-60"
//                 disabled={status === "loading"}
//               >
//                 {status === "loading" ? "Subscribing..." : "Subscribe"}
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </button>

//               <span
//                 id="subscribe-help"
//                 className={`text-sm ${
//                   status === "error"
//                     ? "text-red-400"
//                     : status === "success"
//                     ? "text-green-400"
//                     : "text-gray-400"
//                 }`}
//                 aria-live="polite"
//               >
//                 {message}
//               </span>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           {/* Logo and Description */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center mb-4">
//               <Sparkles className="h-8 w-8 text-gradient mr-2" />
//               <span className="font-poppins font-bold text-xl text-white">
//                 Qyuki AI
//               </span>
//             </div>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Creative Media, Amplified by AI. Transform your creative workflow
//               with our AI tools for image, video, and audio generation.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 bg-gray-900 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-colors duration-200"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Footer Links */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category}>
//               <h4 className="font-semibold text-lg mb-4 text-white">
//                 {category}
//               </h4>
//               <ul className="space-y-2">
//                 {links.map((link) => (
//                   <li key={link.name}>
//                     {renderFooterLink(link.href, link.name)}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <p className="text-gray-400 text-sm">
//               © 2025 Qyuki AI. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-6 mt-4 md:mt-0">
//               <Link
//                 to="/privacy"
//                 className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
//               >
//                 Privacy Policy
//               </Link>
//               <button
//                 onClick={() => scrollToAnchor("#")}
//                 className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
//               >
//                 Terms of Service
//               </button>
//               <button
//                 onClick={() => scrollToAnchor("#")}
//                 className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
//               >
//                 Cookie Settings
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// src/components/Footer.tsx



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Mail, ArrowRight, Twitter, Github, Linkedin } from "../icons";

// Make.com webhook URL
const WEBHOOK_URL =
  "https://hook.eu1.make.com/ar3wh325vtob8l83p5kdu34o734nemvi";

// If you prefer env vars, use: import.meta.env.VITE_MAKE_API_KEY
const MAKE_API_KEY = "9167166088xyz";

type Status = "idle" | "loading" | "success" | "error";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const footerLinks = {
    Product: [
      { name: "Text to Image", href: "#services" },
      { name: "Image to Video", href: "#services" },
      { name: "Audio AI", href: "#services" },
      { name: "API Integration", href: "#services" },
      { name: "Pricing", href: "#pricing" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "#" },
    ],
  } as const;

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ] as const;

  const scrollToAnchor = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      // Send as multipart/form-data (Make.com webhook accepts this by default)
      const formData = new FormData();
      formData.append("email", email);
      // Optional extras you may want:
      // formData.append("source", "footer");
      // formData.append("timestamp", new Date().toISOString());

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "x-make-apikey": MAKE_API_KEY, // <-- required auth header
        },
        body: formData,
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`Request failed: ${res.status} ${txt}`);
      }

      setStatus("success");
      setMessage("Thanks! You’re subscribed.");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Couldn’t subscribe right now. Please try again later.");
    }
  };

  const renderFooterLink = (href: string, label: string) => {
    const isInternal = href.startsWith("/");
    const isAnchor = href.startsWith("#");

    if (isInternal) {
      return (
        <Link
          to={href}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          {label}
        </Link>
      );
    }

    if (isAnchor) {
      return (
        <button
          onClick={() => scrollToAnchor(href)}
          className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
        >
          {label}
        </button>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        {label}
      </a>
    );
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

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
              noValidate
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 w-full sm:w-80"
                  required
                  aria-invalid={status === "error"}
                  aria-describedby="subscribe-help"
                />
              </div>

              <button
                type="submit"
                className="btn-primary flex items-center justify-center disabled:opacity-60"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <span
                id="subscribe-help"
                className={`text-sm ${
                  status === "error"
                    ? "text-red-400"
                    : status === "success"
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
                aria-live="polite"
              >
                {message}
              </span>
            </form>
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
              <span className="font-poppins font-bold text-xl text-white">
                Qyuki AI
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creative Media, Amplified by AI. Transform your creative workflow
              with our AI tools for image, video, and audio generation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-900 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4 text-white">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>{renderFooterLink(link.href, link.name)}</li>
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
              © 2025 Qyuki AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <button
                onClick={() => scrollToAnchor("#")}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button
                onClick={() => scrollToAnchor("#")}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
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
