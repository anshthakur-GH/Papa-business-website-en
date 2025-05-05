
import React, { useState } from 'react';
import { Car, Shield } from 'lucide-react';

const InsuranceServices = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const insuranceServices = [
    {
      icon: <Car className="w-10 h-10 text-dark-gold" />,
      title: "Auto Insurance",
      description: "Comprehensive and third-party vehicle insurance with competitive premiums and fast claim settlement.",
      items: [
        "Two-Wheeler (Bike/Scooter)", "Private Car", "Commercial Car (Taxi/Cab)", 
        "Auto Rickshaw", "E-Rickshaw", "Bus (Private/Commercial)", 
        "Truck (Light/Heavy)", "Tractor", "School Van", 
        "Ambulance", "Delivery Van", "Pickup Van", 
        "Tanker", "Crane", "Trailer", 
        "Dumper", "Fire Brigade Vehicle", "Police Vehicle", 
        "Garbage Collection Van", "Construction Vehicles (e.g., JCB, Loader)"
      ]
    },
    {
      icon: <Shield className="w-10 h-10 text-dark-gold" />,
      title: "Health Insurance",
      description: "Individual and family health coverage with cashless hospitalization and extensive network support.",
      items: [
        "Individual Health Insurance", "Family Floater Health Insurance", "Senior Citizen Health Insurance", 
        "Critical Illness Insurance", "Maternity Health Insurance", "Group Health Insurance (Corporate)", 
        "Personal Accident Insurance", "Top-Up Health Insurance", "Super Top-Up Health Insurance", 
        "Disease-Specific Insurance (e.g., Cancer, Diabetes)", "AYUSHMAN Treatment Coverage", 
        "Pre-Existing Disease Coverage Plans", "Daily Hospital Cash Plans", "OPD (Outpatient Department) Cover Plans", 
        "Hospitalization Insurance", "Preventive Health Check-up Plans", "Child Health Insurance", 
        "Women's Health Insurance Plans"
      ]
    },
  ];

  return (
    <div id="insurance-services" className="py-16 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Insurance Services</h2>
          <p className="text-dark-muted max-w-3xl mx-auto">
            We offer a wide range of insurance products to protect what matters most to you, with expert guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insuranceServices.map((service, index) => (
            <div
              key={index}
              className="service-card bg-dark-card border border-dark-border rounded-lg p-6 hover:border-dark-gold transition-colors duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-dark-muted mb-4">{service.description}</p>
              
              <button 
                onClick={() => toggleService(index)} 
                className="text-dark-gold hover:underline text-sm font-medium flex items-center"
              >
                {expandedService === index ? 'View Less' : 'View All Services'}
              </button>
              
              {expandedService === index && (
                <div className="mt-4 pl-4 border-l-2 border-dark-gold">
                  <ul className="text-sm space-y-2 text-dark-muted">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceServices;
