import React from 'react';

// Array URL gambar placeholder (Ganti dengan link gambar kegiatan nyata!)
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
        
        {/* Judul Bagian */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Galeri Keceriaan
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Lihatlah momen-momen kebahagiaan dan pembelajaran anak-anak kami di TK Bintang.
        </p>

        {/* Tata Letak Grid Responsif */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((imageUrl, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md transition duration-300 hover:shadow-xl transform hover:scale-[1.02]"
            >
              {/* Gambar akan menyesuaikan diri dengan wadah grid */}
              <img 
                src={imageUrl} 
                alt={`Kegiatan TK Bintang ${index + 1}`} 
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;