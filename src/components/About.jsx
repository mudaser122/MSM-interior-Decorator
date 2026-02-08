import React from 'react';
import { Award, Clock, MapPin, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-mh-primary/20 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Waqas working on interior" 
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-5">
                  <div className="bg-mh-primary p-4 rounded-full text-white shadow-lg">
                    <Award size={32} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Experience</p>
                    <p className="text-3xl font-bold text-mh-secondary">10+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-mh-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-3 py-1 rounded-full">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-mh-secondary mt-6 mb-6 leading-tight">
              Making Homes Beautiful <br/> & Cozy Since 2013
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              **M.H Interior Designer by Waqas** has been serving the **Layyah** community with premium wood stoves and exceptional interior design services. 
              Humara maqsad aapke ghar ko na sirf khubsurat banana hai balki sardiyon mein mukammal aaram faraham karna hai.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Based in Faiza Abad, Pull Dobhi, we pride ourselves on blending traditional craftsmanship with modern aesthetics. Whether you need a custom wood stove installation or a complete room makeover, Waqas and his team are here to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                  { icon: <MapPin />, title: "Local Experts", desc: "Serving Layyah & surroundings" },
                  { icon: <Users />, title: "Customer First", desc: "4.6 Rated by community" },
                  { icon: <Clock />, title: "Timely Delivery", desc: "We respect your schedule" },
                  { icon: <Award />, title: "Quality Guarantee", desc: "Premium materials & finishing" }
              ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="text-mh-primary shrink-0 mt-1 bg-white p-2 rounded-full shadow-sm">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-mh-secondary text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
