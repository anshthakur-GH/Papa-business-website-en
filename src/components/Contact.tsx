
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const info = infoRef.current;
    const form = formRef.current;
    
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
    
    gsap.fromTo(info, 
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        }
      }
    );
    
    gsap.fromTo(form, 
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        }
      }
    );
    
    return () => {
      // Clean up ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="mb-12 text-center">
          <h2 className="section-heading inline-flex flex-col items-center">
            Contact Us
            <span className="h-1 w-24 bg-dark-gold mt-3"></span>
          </h2>
          <p className="text-dark-muted text-lg mt-4">
            Reach out to us for any inquiries or to get started with our services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div ref={infoRef} className="bg-dark-secondary rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-dark-blue/20 flex items-center justify-center mr-4">
                  <Phone className="text-dark-blue w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:9721883299" className="text-dark-muted hover:text-dark-blue transition-colors">
                    +91 9721 883 299
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-dark-blue/20 flex items-center justify-center mr-4">
                  <Mail className="text-dark-blue w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:janpero15@gmail.com" className="text-dark-muted hover:text-dark-blue transition-colors">
                    janpero15@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-dark-blue/20 flex items-center justify-center mr-4">
                  <MapPin className="text-dark-blue w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Our Office</h4>
                  <p className="text-dark-muted">
                    JAN SEVA KENDRA PIRO SARAIYA & VEHICLE INSURANCE #Sanjay Singh, <br />
                    Piro saraiya, Uttar Pradesh 227814
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Office Hours</h4>
              <div className="bg-dark/50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-dark-muted">Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div className="text-dark-muted">Saturday</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div className="text-dark-muted">Sunday</div>
                  <div>10:00 AM - 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={formRef} className="bg-dark-secondary rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://maps.app.goo.gl/sJpQecRq6bos3Ug28"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
