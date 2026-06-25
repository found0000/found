import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import About from './components/About';
import MarqueeBanner from './components/MarqueeBanner';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import FAQ from './components/FAQ';
import FooterForm from './components/FooterForm';

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <MapSection />
      <About />
      <MarqueeBanner />
      <HowItWorks />
      <Features />
      <FAQ />
      <FooterForm />
    </div>
  );
}

export default App;
