import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Hasnain Garwan',
      rating: 5,
      text: 'Excellent service 🥰🥰with good work and low price in all over city brilliant work by waqas',
      location: 'Local Customer'
    },
    {
      id: 2,
      name: 'Ali Khan',
      rating: 5,
      text: 'Good service good work brother for furniture 🤏🏻 Media wall designs is excellent 👍🏻',
      location: 'Local Customer'
    },
    {
      id: 3,
      name: 'Ahsan ShehZad',
      rating: 5,
      text: 'They provide good quality products i love your quality with free and fast delivery',
      location: 'Local Customer'
    },
    {
      id: 4,
      name: 'Ishak Khan',
      rating: 5,
      text: 'Good work sir😍😍 ur picked design is wonderful boss🤩🤩',
      location: 'Local Customer'
    },
    {
      id: 5,
      name: 'Sanwal Gutt',
      rating: 5,
      text: 'Waqas Bhai, master mind work 👍🏻 I have bought furniture... the walls are made of majlis etc.',
      location: 'Local Customer'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-mh-primary font-bold tracking-wider uppercase text-sm bg-orange-50 px-3 py-1 rounded-full">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-mh-secondary mt-4 mb-4">Real Client Feedback 🌟</h2>
          <div className="flex items-center justify-center mt-4 space-x-3 bg-white shadow-sm inline-flex px-6 py-2 rounded-full border border-gray-100">
            <span className="text-3xl font-bold text-mh-secondary">4.6</span>
            <div className="flex text-yellow-500">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} size={24} fill={i < 4 ? "currentColor" : i === 4 ? "currentColor" : "none"} className={i === 4 ? "opacity-40" : ""} />
               ))}
            </div>
            <span className="text-gray-500 text-sm font-medium border-l pl-3 ml-1 border-gray-200">Based on 10 Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
              <Quote className="absolute top-6 right-6 text-mh-primary/20 group-hover:text-mh-primary/40 transition-colors" size={48} />
              
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic leading-relaxed text-lg">"{review.text}"</p>
              
              <div className="flex items-center pt-6 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mh-primary to-orange-400 flex items-center justify-center text-white font-bold text-lg mr-3 shadow-md">
                    {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-mh-secondary">{review.name}</h4>
                   <div className="flex items-center text-xs text-mh-primary/80 font-medium mt-0.5">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-3 h-3 mr-1" />
                      <span>Verified Review</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://maps.app.goo.gl/JDZiaYVDjzbDkS8U6" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-mh-secondary font-bold rounded-full border border-gray-200 hover:border-mh-primary hover:text-mh-primary transition-all shadow-sm hover:shadow-md group"
          >
            <span>Read All Reviews on Google Maps</span>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
