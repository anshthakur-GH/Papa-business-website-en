
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Award, FileText } from 'lucide-react';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;
    
    gsap.fromTo(heading, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    );
    
    gsap.fromTo(content, 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        }
      }
    );
    
    gsap.fromTo(stats, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    );
    
    return () => {
      // Clean up ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={headingRef} className="mb-12 text-center">
            <h2 className="section-heading inline-flex flex-col items-center">
              About Us
              <span className="h-1 w-24 bg-dark-gold mt-3"></span>
            </h2>
          </div>
          
          <div ref={contentRef} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-full bg-dark/50 flex items-center justify-center mb-4">
                  <Shield className="text-dark-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Protection</h3>
                <p className="text-dark-muted">
                  With over 15 years of experience as a National Insurance agent, we provide expert guidance on the best coverage for your needs.
                </p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-full bg-dark/50 flex items-center justify-center mb-4">
                  <Award className="text-dark-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Professional</h3>
                <p className="text-dark-muted">
                  As a certified CSC center owner, we offer authentic and reliable government services with complete legitimacy.
                </p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-full bg-dark/50 flex items-center justify-center mb-4">
                  <FileText className="text-dark-gold w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Services</h3>
                <p className="text-dark-muted">
                  From insurance policies to government documentation, we provide a wide range of services under one roof.
                </p>
              </div>
            </div>
            
            <div className="bg-dark/50 p-6 rounded-lg">
              <p className="text-lg text-center md:text-left">
                Janpero Digital Shield was founded with a mission to provide accessible, affordable insurance solutions and seamless government services to individuals and businesses. With 15+ years of experience as a National Insurance agent and certified CSC center owner, we have helped thousands of clients secure their assets and navigate government documentation processes with ease.
              </p>
            </div>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="card">
              <h4 className="text-4xl font-bold text-dark-blue mb-2">15+</h4>
              <p className="text-dark-muted">Years Experience</p>
            </div>
            
            <div className="card">
              <h4 className="text-4xl font-bold text-dark-blue mb-2">24/7</h4>
              <p className="text-dark-muted">Claims Support</p>
            </div>
            
            <div className="card">
              <h4 className="text-4xl font-bold text-dark-blue mb-2">10+</h4>
              <p className="text-dark-muted">Government Services</p>
            </div>
            
            <div className="card">
              <h4 className="text-4xl font-bold text-dark-blue mb-2">5000+</h4>
              <p className="text-dark-muted">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
