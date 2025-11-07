import React from 'react';

const AboutUs = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid 2 Kolom: Ilustrasi di kiri, Teks di kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Ilustrasi */}
          <div className="relative p-6 bg-pink-50 rounded-xl shadow-lg">
            
            <div className="absolute top-4 left-4 text-4xl p-2 bg-pink-200 rounded-full">⭐</div>
          </div>

          {/* Kolom Kanan: Teks Visi & Misi */}
          <div>
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
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;