import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('ur'); // 'ur' or 'en'
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'ur' ? 'en' : 'ur');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' }, // Added Reviews Link
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-mh-primary text-white font-bold text-xl p-2 rounded-lg mr-2 group-hover:scale-110 transition-transform">
              MH
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-none ${scrolled ? 'text-mh-secondary' : 'text-mh-secondary lg:text-white'}`}>M.H Interior</span>
              <span className={`text-xs font-medium tracking-wider ${scrolled ? 'text-mh-primary' : 'text-mh-primary lg:text-gray-200'}`}>Designer by Waqas</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-mh-primary transition-colors duration-200 uppercase tracking-wide ${scrolled ? 'text-mh-text' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200/20">
               <button 
                onClick={toggleLang}
                className={`px-3 py-1 text-sm border rounded-full transition-colors ${scrolled ? 'border-mh-primary text-mh-primary hover:bg-mh-primary hover:text-white' : 'border-white/50 text-white hover:bg-white hover:text-mh-secondary'}`}
               >
                 {lang === 'ur' ? 'ENG' : 'URD'}
               </button>
               <a 
                 href="tel:+923090477458"
                 className="flex items-center space-x-2 bg-mh-primary text-white px-5 py-2.5 rounded-full hover:bg-mh-accent transition-all hover:shadow-lg hover:-translate-y-0.5"
               >
                 <Phone size={16} fill="currentColor" />
                 <span className="font-bold text-sm">Call Now</span>
               </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-mh-secondary' : 'text-white'} hover:text-mh-primary focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-mh-secondary/95 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
         <div className="flex justify-end p-6">
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={32} />
            </button>
         </div>
         <div className="flex flex-col items-center space-y-6 pt-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-white hover:text-mh-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <button 
                  onClick={toggleLang}
                  className="mt-8 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-mh-secondary transition-colors"
                >
                   Switch to {lang === 'ur' ? 'English' : 'Urdu'}
             </button>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
