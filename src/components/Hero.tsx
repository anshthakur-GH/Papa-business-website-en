
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dark/90 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="hero-reveal text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="gradient-text">Sanjay Singh</span>
              <br />
              <span className="text-white">CSC Centre and Insurance</span>
            </h1>
            
            <p className="hero-reveal text-dark-muted text-lg md:text-xl mb-8 max-w-2xl">
              Affordable Insurance, Seamless Government Services, 24/7 Support.
              We offer the lowest cost automobile insurance with round-the-clock claim assistance.
            </p>
            
            <div className="hero-reveal flex flex-col md:flex-row gap-4">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary"
              >
                Explore Services
              </Link>
              
              <a href="tel:9721883299" className="btn-secondary">
                Get a Quote
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-4 border-dark-gold animate-pulse"></div>
              <img 
                src="/lovable-uploads/40ba7821-640b-4e0d-9b37-53b6f87a7931.png" 
                alt="Sanjay Singh" 
                className="w-full h-full object-cover rounded-full shadow-xl p-1"
              />
            </div>
          </div>
        </div>
        
        <div className="hero-reveal absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <ArrowDown className="text-dark-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
