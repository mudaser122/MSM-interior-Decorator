import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We will contact you shortly at ${formData.phone}.`);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info & Map */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
                 <span className="text-mh-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-3 py-1 rounded-full">Contact Us</span>
                 <h2 className="text-4xl md:text-5xl font-bold text-mh-secondary mt-6 mb-6">Get In Touch 📞</h2>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   Raabta karein aur aaj hi apna order book karwayen. Free consultation available for all your wood stove and interior needs.
                 </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="bg-mh-primary text-white p-4 rounded-xl mr-5 shrink-0 shadow-lg shadow-orange-500/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mh-secondary text-lg mb-1">Visit Our Shop</h4>
                    <p className="text-gray-600 leading-relaxed">
                      XX62+QQ8 abad, Pull Dobhi ghrd park near M.H sofa Mollah Faiza Abad, Layyah, 31200, Pakistan
                    </p>
                  </div>
                </div>
                
                <a href="tel:+923090477458" className="flex items-center bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group">
                  <div className="bg-mh-secondary text-white p-4 rounded-xl mr-5 shrink-0 group-hover:bg-mh-primary transition-colors duration-300 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mh-secondary text-lg mb-1">Call Us Now</h4>
                    <p className="text-gray-600 text-lg group-hover:text-mh-primary transition-colors">+92 309 0477458</p>
                    <p className="text-sm text-gray-400 mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </a>

                <div className="flex items-start bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="bg-white text-mh-secondary border border-gray-200 p-4 rounded-xl mr-5 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mh-secondary text-lg mb-1">Email Us</h4>
                    <p className="text-gray-600">info@mhinterior.com</p>
                  </div>
                </div>
            </div>
            
            {/* Google Map */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14060.0!2d70.9!3d30.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAwLjAiTiA3MMKwNTQnMDAuMCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
             <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 sticky top-24">
                 <h3 className="text-2xl font-bold text-mh-secondary mb-8 flex items-center gap-2">
                    <MessageSquare className="text-mh-primary" />
                    Send a Message
                 </h3>
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                     <input 
                       type="text" 
                       id="name" 
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                       className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-mh-primary focus:border-transparent outline-none transition-all placeholder-gray-400 font-medium"
                       placeholder="Aapka naam"
                     />
                   </div>
                   
                   <div>
                     <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                     <input 
                       type="tel" 
                       id="phone" 
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange}
                       required
                       className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-mh-primary focus:border-transparent outline-none transition-all placeholder-gray-400 font-medium"
                       placeholder="0300 1234567"
                     />
                   </div>

                   <div>
                     <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                     <textarea 
                       id="message" 
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       rows="5"
                       className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-mh-primary focus:border-transparent outline-none transition-all placeholder-gray-400 font-medium resize-none"
                       placeholder="Kis kisam ka kaam karwana chahte hain?"
                     ></textarea>
                   </div>

                   <button 
                     type="submit"
                     className="w-full bg-mh-secondary text-white font-bold py-4 rounded-xl hover:bg-mh-primary transition-all duration-300 shadow-lg hover:shadow-orange-500/30 flex items-center justify-center space-x-2 transform hover:-translate-y-1"
                   >
                     <span>Send Message</span>
                     <Send size={20} />
                   </button>
                 </form>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
