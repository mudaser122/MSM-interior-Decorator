import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like fix */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 animate-pulse-slow"
        style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            // Clean modern interior image
        }} 
      ></div>
      
      {/* Premium Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl animate-fade-in-up">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
               <span className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
               </span>
               <span className="text-gray-200 text-sm font-medium tracking-wide">Rated 4.6/5 on Google 🌟</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              <span className="block text-mh-primary mb-2">Layyah's Premier</span>
              Wood Stove & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Interior Design Studio</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
              Transforming houses into homes since 2013 🏠. 
              We blend traditional warmth with modern luxury aesthetics. 
              Premium quality wood stoves and complete interior solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-mh-primary hover:bg-mh-accent text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:shadow-[0_0_30px_rgba(217,119,6,0.7)] flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#gallery"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 transition-all flex items-center justify-center"
              >
                View Portfolio
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-gray-400 text-sm font-medium">
               <div className="flex items-center space-x-2">
                 <CheckCircle size={16} className="text-mh-primary" />
                 <span>10+ Years Experience</span>
               </div>
               <div className="flex items-center space-x-2">
                 <CheckCircle size={16} className="text-mh-primary" />
                 <span>100% Satisfaction</span>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
