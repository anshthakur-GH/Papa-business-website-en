
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ClaimsProcess from '../components/ClaimsProcess';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';

const Index = () => {
  useEffect(() => {
    // Set dark theme on load
    document.body.classList.add('bg-dark');
    document.body.classList.add('text-dark-text');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <ClaimsProcess />
        <Contact />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
