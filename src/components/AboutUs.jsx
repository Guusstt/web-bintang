import React from 'react';
import { motion } from 'framer-motion'; 
import illustrationImage from '../assets/Hanan.png';

const AboutUs = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            className="relative pt-20"
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative p-6 bg-pink-50 rounded-xl shadow-lg">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 max-w-xs w-full">
                <img 
                  src={illustrationImage} 
                  alt="Ilustrasi Hanan" 
                />
              </div>
              <div className="mt-101">
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Tentang TK Bintang
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-pink-600 mb-3 flex items-center">
                Visi Kami
              </h3>
              <p className="text-gray-600">
                Menjadi Taman Kanak-Kanak terdepan dalam membentuk generasi emas yang cerdas, kreatif, berakhlak mulia, dan siap meraih potensi tertinggi.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-pink-600 mb-3 flex items-center">
                Misi Kami
              </h3>
              <ul className="space-y-3 text-gray-600 list-inside list-disc ml-4">
                <li>Menyediakan lingkungan belajar yang aman, nyaman, dan penuh kasih sayang.</li>
                <li>Menerapkan kurikulum berbasis bermain yang merangsang seluruh aspek perkembangan anak.</li>
                <li>Membina kerjasama yang erat antara sekolah dan orang tua.</li>
              </ul>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;