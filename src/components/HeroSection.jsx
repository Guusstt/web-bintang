import React from 'react';

const HeroSection = () => {
  // Ganti placeholder URL ini dengan tautan gambar resolusi tinggi milik TK Bintang
  const backgroundImageUrl = 'https://imgs.search.brave.com/ZPT1rVPrBAiLazgqAQWdhBDnGC5yfr3fobP0grd4l54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2VtZGlrYnVkLmNv/LmlkL2RhdGEvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMTEv/Zm90by1kYW4tYWt0/aXZpdGFzLXRrLWRp/LWplcGFyYS0xNjY3/NTM0ODk0LmpwZWc'; 

  return (
    <section 
      id="beranda" 
      className="relative pt-20 pb-32 overflow-hidden" 
    >
      
      {/* 2. LAPISAN GAMBAR BACKGROUND DARI URL */}
      <div 
        className="absolute inset-0 bg-cover bg-center" // Kelas Tailwind
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }} // Menggunakan URL eksternal
        aria-hidden="true" // Untuk aksesibilitas
      >
        {/* LAPISAN OVERLAY (bg-purple-900 opacity-60) untuk meningkatkan kontras teks */}
        <div className="absolute inset-0 bg-purple-900 opacity-60"></div> 
      </div>

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

        {/* Ilustrasi/Gambar */}
        <div className="md:w-1/2 flex justify-center">
        </div>
      </div>
    </section>
  );
};

export default HeroSection;