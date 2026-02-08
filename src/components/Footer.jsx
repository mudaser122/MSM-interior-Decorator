import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div>
            <span className="text-2xl font-bold text-white block mb-4">M.H Interior</span>
            <p className="text-gray-400 mb-6">
              Professional wood stove installation and interior design services in Layyah. We make your space beautiful and comfortable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-mh-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mh-primary transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-mh-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-mh-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-mh-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-mh-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-mh-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
             <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Wood Stove Installation</li>
              <li>Interior Design</li>
              <li>Home Renovation</li>
              <li>Custom Furniture</li>
              <li>Maintenance & Repair</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-mh-primary mt-1 mr-3 shrink-0" size={20} />
                <span className="text-gray-400">
                  XX62+QQ8 abad, Pull Dobhi ghrd park near M.H sofa Mollah Faiza Abad, Layyah, 31200, Pakistan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-mh-primary mr-3 shrink-0" size={20} />
                <a href="tel:+923090477458" className="text-gray-400 hover:text-white transition-colors">
                  +92 309 0477458
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-mh-primary mr-3 shrink-0" size={20} />
                <a href="mailto:info@mhinterior.com" className="text-gray-400 hover:text-white transition-colors">
                  info@mhinterior.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} M.H Interior Designer by Waqas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
