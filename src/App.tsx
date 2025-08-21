// import React from 'react';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import ImageCarousel from './components/ImageCarousel';
// import HowItWorks from './components/HowItWorks';
// import UseCases from './components/UseCases';
// //import Demo from './components/Demo';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AboutUs from './components/AboutUs';
// import Automation from './components/Automation';
// import Contact from './components/Contact';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import Careers from './components/Careers';

// function App() {
//   // Simple routing logic - in a real app, you'd use React Router
//   const currentPath = window.location.pathname;

//   if (currentPath === '/about') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <AboutUs />
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPath === '/automation') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <Automation />
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPath === '/contact') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <Contact />
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPath === '/privacy') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <PrivacyPolicy />
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPath === '/Careers') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <Careers />
//         <Footer />
//       </div>
//     );
//   }

//   // Default homepage
//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <Hero />
//       <ImageCarousel />
//       <Services />
//       <HowItWorks />
//       <UseCases />
//       {/* <Demo /> */}
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import ImageCarousel from './components/ImageCarousel';
// import HowItWorks from './components/HowItWorks';
// import UseCases from './components/UseCases';
// //import Demo from './components/Demo';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AboutUs from './components/AboutUs';
// import Automation from './components/Automation';
// import Contact from './components/Contact';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import Careers from './components/Careers';

// function App() {
//   // Simple routing logic - in a real app, you'd use React Router
//   const currentPath = window.location.pathname;

//   if (currentPath === '/about') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <AboutUs />
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPath === '/automation') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <Automation />
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPath === '/contact') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <Contact />
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPath === '/privacy') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <PrivacyPolicy />
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPath === '/Careers') {
//     return (
//       <div className="min-h-screen">
//         <Navigation />
//         <Careers />
//         <Footer />
//       </div>
//     );
//   }

//   // Default homepage
//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <Hero />
//       <ImageCarousel />
//       <Services />
//       <HowItWorks />
//       <UseCases />
//       {/* <Demo /> */}
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import { Routes, Route, Outlet } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import ImageCarousel from './components/ImageCarousel';
// import HowItWorks from './components/HowItWorks';
// import UseCases from './components/UseCases';
// // import Demo from './components/Demo';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AboutUs from './components/AboutUs';
// import Automation from './components/Automation';
// import Contact from './components/Contact';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import Careers from './components/Careers';

// function Home() {
//   return (
//     <>
//       <Navigation />
//       <Hero />
//       <ImageCarousel />
//       <Services />
//       <HowItWorks />
//       <UseCases />
//       {/* <Demo /> */}
//       <Testimonials />
//     </>
//   );
// }

// function PageLayout() {
//   return (
//     <div className="min-h-screen">
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route element={<PageLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<><Navigation /><AboutUs /></>} />
//         <Route path="/automation" element={<><Navigation /><Automation /></>} />
//         <Route path="/contact" element={<><Navigation /><Contact /></>} />
//         <Route path="/privacy" element={<><Navigation /><PrivacyPolicy /></>} />
//         {/* normalize to lowercase to avoid mismatch */}
//         <Route path="/careers" element={<><Navigation /><Careers /></>} />
//       </Route>
//     </Routes>
//   );
// }




import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ImageCarousel from './components/ImageCarousel';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
// import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Automation from './components/Automation';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Careers from './components/Careers';
import Pricing from './components/Pricing'; // <-- added

import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <ImageCarousel />
      <Services />
      <HowItWorks />
      <UseCases />
      {/* <Demo /> */}
      <Testimonials />
    </>
  );
}

function PageLayout() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  // disable native scroll restoration so we control it
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<><Navigation /><AboutUs /></>} />
        <Route path="/automation" element={<><Navigation /><Automation /></>} />
        <Route path="/pricing" element={<><Navigation /><Pricing /></>} /> {/* <-- added */}
        <Route path="/contact" element={<><Navigation /><Contact /></>} />
        <Route path="/privacy" element={<><Navigation /><PrivacyPolicy /></>} />
        <Route path="/careers" element={<><Navigation /><Careers /></>} />
        {/* add /terms and /cookies routes if you have pages for them */}
        {/* <Route path="/terms" element={<><Navigation /><Terms /></>} /> */}
        {/* <Route path="/cookies" element={<><Navigation /><Cookies /></>} /> */}
      </Route>
    </Routes>
  );
}
