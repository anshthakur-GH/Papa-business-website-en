
import React, { useState } from 'react';
import { FileText, Users, List } from 'lucide-react';

const CSCServices = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const cscServices = [
    {
      icon: <FileText className="w-10 h-10 text-dark-gold" />,
      title: "Government Certificates",
      description: "Birth/death certificates, income, caste, domicile & other essential documentation.",
      items: [
        "Birth Certificate", "Death Certificate", "Marriage Certificate", "Divorce Certificate", 
        "Domicile Certificate", "Nationality Certificate", "Caste Certificate", "Tribe Certificate", 
        "Income Certificate", "Employment Certificate", "Unemployment Certificate", 
        "Economically Weaker Section (EWS) Certificate", "Below Poverty Line (BPL) Certificate", 
        "Non-Creamy Layer Certificate", "Disability Certificate", "Medical Fitness Certificate", 
        "PF certificate", "Succession Certificate"
      ]
    },
    {
      icon: <Users className="w-10 h-10 text-dark-gold" />,
      title: "Pension & Welfare Services",
      description: "Assistance with pension applications, social welfare schemes & government benefits.",
      items: [
        "Vridha Pension Certificate", "Viklang Pension Certificate", "Vidhwa Pension Certificate", 
        "Kisan Pension Certificate", "Atal Pension Yojana Certificate", "NSAP Beneficiary Certificate", 
        "IGNOAPS Certificate", "IGNWPS Certificate", "IGNDPS Certificate", "PM-SYM Certificate"
      ]
    },
    {
      icon: <List className="w-10 h-10 text-dark-gold" />,
      title: "Digital Services",
      description: "Aadhaar updates, PAN card services, bill payments & online form submissions.",
      items: [
        "PAN Card", "Bill Payment", "Recharges", "Aadhar Updates", "Plastic Aadhar", 
        "Government Forms Filling", "Passport", "Driving License", "Voter ID", 
        "Ration Card Application", "DigiLocker Access", "e-SHRAM Card", "Ayushman Bharat Card", 
        "FASTag Services", "Mobile Number Linking", "UAN (EPFO) Services", "GST Registration", 
        "COWIN Certificate Download", "Property Tax Payment", "Water/Electricity Connection Application", 
        "Land Record Services (Bhulekh)", "Income Tax Filing", "Birth/Death Certificate Download", 
        "Scholarship Application Submission", "School/College Admission Form Filling", 
        "Employment Exchange Registration"
      ]
    },
  ];

  return (
    <div id="csc-services" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">CSC Services</h2>
          <p className="text-dark-muted max-w-3xl mx-auto">
            Our Common Service Centre offers comprehensive government documentation services to make essential paperwork hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cscServices.map((service, index) => (
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

export default CSCServices;
