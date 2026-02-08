import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      image: 'https://www.pexels.com/photo/interior-design-of-living-room-20285350/',
      title: 'Modern Living Room Heating',
      category: 'Wood Stove'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      title: 'Luxury Bedroom Design',
      category: 'Interior'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      title: 'Traditional Majlis Setup',
      category: 'Interior'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1510563800743-aed236490d08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      title: 'Custom Fireplace Installation',
      category: 'Wood Stove'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      title: 'Complete Home Renovation',
      category: 'Renovation'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      title: 'Kitchen Interior & Cabinetry',
      category: 'Kitchen'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-mh-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-mh-primary font-bold tracking-wider uppercase text-sm bg-orange-100 px-3 py-1 rounded-full">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-mh-secondary mt-4 mb-4">Our Recent Work 📸</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">Tasweer bolti hai. Quality work speaks for itself.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-mh-primary text-sm font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 scale-50 group-hover:scale-100">
                    <ZoomIn size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={48} />
          </button>
          
          <div className="max-w-6xl max-h-[90vh] overflow-hidden rounded-lg relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
             <img 
               src={selectedImage.image} 
               alt={selectedImage.title} 
               className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
             />
             <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-white mb-1">{selectedImage.title}</h3>
                <p className="text-mh-primary font-medium">{selectedImage.category}</p>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
