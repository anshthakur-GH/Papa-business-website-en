
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, FileText, Check } from 'lucide-react';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ClaimsProcess = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stepsRef = useRef(null);
  const infoRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const steps = stepsRef.current;
    const info = infoRef.current;
    
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
    
    gsap.fromTo(steps, 
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
    
    gsap.fromTo(info, 
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
  
  const claimSteps = [
    {
      icon: Phone,
      title: "Contact Support",
      description: "Call our support number for guidance on initiating your claim."
    },
    {
      icon: FileText,
      title: "Document Submission",
      description: "Submit required documents for claim assessment. For claims up to ₹50,000, enjoy AI-driven loss assessment."
    },
    {
      icon: Check,
      title: "Claim Settlement",
      description: "Quick processing and settlement of your claim, with transparent updates at each stage."
    }
  ];
  
  return (
    <section id="claims" ref={sectionRef} className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={headingRef} className="mb-12 text-center">
            <h2 className="section-heading inline-flex flex-col items-center">
              Claims Process
              <span className="h-1 w-24 bg-dark-gold mt-3"></span>
            </h2>
            <p className="text-dark-muted text-lg mt-4">
              We make the motor insurance claim process quick and hassle-free with 24/7 support
            </p>
          </div>
          
          <div ref={stepsRef} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {claimSteps.map((step, index) => (
                <div key={index} className="card relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-dark-blue text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex flex-col items-center text-center pt-4">
                    <div className="w-16 h-16 rounded-full bg-dark/50 flex items-center justify-center mb-4">
                      <step.icon className="text-dark-gold w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-dark-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div ref={infoRef} className="bg-dark p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">Important Claim Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-dark-blue">What to Do in Case of an Accident</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-4 h-4 rounded-full bg-dark-blue text-white flex items-center justify-center text-xs mr-2 mt-1">1</span>
                    <span className="text-dark-muted">Stay calm and ensure safety of all involved.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-4 h-4 rounded-full bg-dark-blue text-white flex items-center justify-center text-xs mr-2 mt-1">2</span>
                    <span className="text-dark-muted">Take photographs of the accident scene and damages.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-4 h-4 rounded-full bg-dark-blue text-white flex items-center justify-center text-xs mr-2 mt-1">3</span>
                    <span className="text-dark-muted">Contact us immediately.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-4 h-4 rounded-full bg-dark-blue text-white flex items-center justify-center text-xs mr-2 mt-1">4</span>
                    <span className="text-dark-muted">Note down details of the other vehicle and driver involved.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-dark-blue">Required Documents</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-dark-gold mr-2 mt-2"></span>
                    <span className="text-dark-muted">Duly filled claim form</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-dark-gold mr-2 mt-2"></span>
                    <span className="text-dark-muted">Copy of insurance policy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-dark-gold mr-2 mt-2"></span>
                    <span className="text-dark-muted">Copy of driving license</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-dark-gold mr-2 mt-2"></span>
                    <span className="text-dark-muted">Copy of registration certificate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-dark-gold mr-2 mt-2"></span>
                    <span className="text-dark-muted">FIR copy (in case of theft or third-party involvement)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-dark-gold font-semibold mb-2">24/7 Claim Support</p>
              <div className="flex items-center justify-center">
                <Phone className="text-dark-blue mr-2" />
                <span>Call: +91 9721 883 299</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimsProcess;
