import React from 'react';
import { motion } from 'framer-motion'; 

const galleryImages = [
  'https://via.placeholder.com/600x400?text=Kegiatan+Bermain',
  'https://via.placeholder.com/600x400?text=Kelas+Seni',
  'https://via.placeholder.com/600x400?text=Praktek+Sosial',
  'https://via.placeholder.com/600x400?text=Perayaan+Sekolah',
  'https://via.placeholder.com/600x400?text=Waktu+Makan',
  'https://via.placeholder.com/600x400?text=Belajar+Kelompok',
];

const GallerySection = () => {
  return (
    <section id="galeri" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Galeri Keceriaan
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lihatlah momen-momen kebahagiaan dan pembelajaran anak-anak kami di TK Bintang.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((imageUrl, index) => (

            <motion.div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.02]" 
              
              initial={{ opacity: 0, scale: 0.8, y: 50 }} 
              whileInView={{ opacity: 1, scale: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
            >
              <img 
                src={imageUrl} 
                alt={`Kegiatan TK Bintang ${index + 1}`} 
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;