import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Discover from './components/Discover';
import FAQ from './components/FAQ';
import FooterForm from './components/FooterForm';

function App() {
  return (
    <div className="page w-full min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Discover />
      <FAQ />
      <FooterForm />
    </div>
  );
}

export default App;
