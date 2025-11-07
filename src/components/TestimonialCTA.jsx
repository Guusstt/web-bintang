import React from 'react';
import { useInView } from 'react-intersection-observer'; 

const testimonials = [
  {
    quote: "Anak saya, Bima, selalu pulang dengan cerita seru dan wajah ceria. Perkembangannya pesat, terutama dalam kemampuan sosialnya. TK Bintang adalah pilihan terbaik!",
    name: "Ibu Rina",
    role: "Orang Tua Bima (Alumni 2024)",
  },
  {
    quote: "Lingkungan yang penuh kasih dan guru-guru yang sangat sabar. Kami merasa tenang menitipkan putri kami di sini. Kurikulumnya juga sangat modern dan menyenangkan.",
    name: "Bapak Hadi",
    role: "Orang Tua Sinta (Kelas B)",
  },
];

// Terima props onRegisterClick
const TestimonialCTA = ({ onRegisterClick }) => {
    // Observer untuk animasi CTA
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Bagian Testimoni */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Apa Kata Orang Tua Kami?
        </h2>

        {/* Grid Testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-b-4 border-yellow-400"
            >
              <p className="italic text-gray-700 mb-4 text-lg">
                "{t.quote}"
              </p>
              <p className="font-bold text-pink-600">
                {t.name}
              </p>
              <p className="text-sm text-gray-500">
                {t.role}
              </p>
            </div>
          ))}
        </div>

        {/* Bagian Call to Action Akhir - Animasi Zoom */}
        <div 
            ref={ref}
            className={`bg-pink-600 p-10 rounded-xl shadow-2xl transition-all duration-700 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Siap Daftarkan Si Kecil ke TK Bintang?
          </h3>
          <p className="text-xl text-pink-100 mb-8">
            Jangan lewatkan kesempatan untuk memberikan awal terbaik bagi masa depan mereka.
          </p>
          {/* PERBAIKAN: Menggunakan <button> dengan onClick handler */}
          <button
            onClick={onRegisterClick} 
            className="inline-block bg-yellow-300 hover:bg-yellow-400 text-pink-700 font-extrabold text-xl py-4 px-12 rounded-full transition duration-300 transform hover:scale-105 shadow-2xl"
          >
            Daftar Sekarang Juga!
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCTA;