import React from 'react';
import { Flame, PenTool, Wrench, ShieldCheck, Ruler, Home, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Flame size={28} />,
      title: 'Wood Stove Installation 🔥',
      description: 'Expert installation of traditional and modern wood stoves to keep your home warm and efficient.',
    },
    {
      icon: <PenTool size={28} />,
      title: 'Interior Design 🎨',
      description: 'Custom interior design plans tailored to your style and space requirements.',
    },
    {
      icon: <Home size={28} />,
      title: 'Home Renovation 🏠',
      description: 'Complete home makeovers including flooring, ceiling, and wall treatments.',
    },
    {
      icon: <Wrench size={28} />,
      title: 'Maintenance & Repair 🛠️',
      description: 'Reliable repair services for your existing heating systems and interior fittings.',
    },
    {
      icon: <Ruler size={28} />,
      title: 'Custom Furniture 🪑',
      description: 'Bespoke furniture design and manufacturing to match your unique interior theme.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Consultation ✅',
      description: 'Free site analysis and consultation to help you choose the best solutions.',
    }
  ];

  return (
    <section id="services" className="py-24 bg-mh-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mh-primary font-bold tracking-wider uppercase text-sm bg-orange-100 px-3 py-1 rounded-full">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-mh-secondary mt-4 mb-4">Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From heating solutions to aesthetic transformations, hum aapko provide karte hain comprehensive services with a touch of luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-mh-primary to-mh-accent rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-mh-secondary mb-3 flex items-center gap-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-mh-primary font-semibold hover:text-mh-accent transition-colors text-sm">
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
