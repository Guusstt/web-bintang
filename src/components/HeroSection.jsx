import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import heroImage1 from '../assets/hero1.jpg'; // Sesuaikan path-nya
import heroImage2 from '../assets/hero2.png';
import heroImage3 from '../assets/hero3.jpeg';

// Ganti URL ini dengan tautan gambar resolusi tinggi milik TK Bintang
const heroBackgroundImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  // Tambahkan lebih banyak URL gambar di sini
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fungsi untuk mengubah gambar setiap beberapa detik
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroBackgroundImages.length
      );
    }, 5000); // Ganti 5000 dengan durasi (dalam ms) antar gambar (misal: 5 detik)

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []); // Hanya berjalan sekali saat komponen mount

  const currentImageUrl = heroBackgroundImages[currentImageIndex];

  return (
    <section 
      id="beranda" 
      className="relative pt-20 pb-32 overflow-hidden h-screen flex items-center justify-center" // Tambahkan h-screen dan flex properties
    >
      {/* <section 
      id="beranda" 
      className="relative pt-20 pb-32 overflow-hidden" // h-screen dan flex properties dihapus
    > */}
      
      {/* 2. LAPISAN GAMBAR BACKGROUND DARI URL DENGAN ANIMASI */}
      <AnimatePresence> {/* Untuk animasi keluar masuk komponen */}
        <motion.div 
          key={currentImageIndex} // Kunci unik untuk setiap gambar, penting untuk AnimatePresence
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${currentImageUrl}')` }}
          aria-hidden="true"
          initial={{ opacity: 0 }} // Mulai dari transparan
          animate={{ opacity: 1 }} // Animasi menjadi terlihat
          exit={{ opacity: 0 }} // Animasi kembali transparan saat keluar
          transition={{ duration: 1.5, ease: "easeInOut" }} // Durasi transisi fade
        >
          {/* LAPISAN OVERLAY (bg-purple-900 opacity-60) */}
          <div className="absolute inset-0 bg-purple-900 opacity-60"></div> 
        </motion.div>
      </AnimatePresence>

      {/* 3. KONTEN UTAMA (Di atas overlay, z-10) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 text-white">
        
        {/* Konten Teks */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Selamat Datang di <span className="text-yellow-300">Paud Terpadu Bintang</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Tempat di mana si kecil belajar sambil bermain dan meraih bintang impiannya. Kami menyediakan lingkungan yang aman dan penuh kasih.
          </p>
          <a
            href="#kontak"
            className="inline-block bg-yellow-300 hover:bg-yellow-400 text-pink-700 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Daftar Sekarang!
          </a>
        </div>

        {/* Ilustrasi/Gambar (Kosong sesuai kode awal Anda) */}
        <div className="md:w-1/2 flex justify-center">
        </div>
      </div>
    </section>
  );
};

export default HeroSection;