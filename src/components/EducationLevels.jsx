import React from 'react';

const levels = [
  {
    title: "Kelompok Bermain (KB)",
    age: "Usia 2-4 Tahun",
    description: "Fokus pada stimulasi sensorik, motorik, dan sosialisasi dasar. Anak belajar berinteraksi dalam lingkungan yang aman dan ceria.",
    color: "bg-green-500",
    icon: "🌱", // Emoji/Icon pertumbuhan
  },
  {
    title: "Taman Kanak-Kanak (TK)",
    age: "Usia 4-6 Tahun",
    description: "Persiapan intensif menuju SD melalui Fun Learning, Literasi, dan Kreativitas. Membangun dasar akademik dan karakter yang kuat.",
    color: "bg-pink-500",
    icon: "🎓", // Emoji/Icon kelulusan/belajar
  },
  {
    title: "Tempat Penitipan Anak (TPA)",
    age: "Usia 1-4 Tahun",
    description: "Layanan penitipan yang aman dan nyaman sepanjang hari. Dilengkapi program stimulasi usia dini dalam suasana seperti di rumah.",
    color: "bg-yellow-500",
    icon: "🏠", // Emoji/Icon rumah/pengasuhan
  },
];

const EducationLevels = () => {
  return (
    <section id="jenjang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Judul Bagian */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Jenjang Pendidikan PAUD Terpadu Bintang
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Kami menyediakan jenjang pendidikan lengkap untuk memastikan setiap tahap tumbuh kembang anak terpenuhi.
        </p>

        {/* Grid Kartu Jenjang */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-xl transition duration-300 hover:shadow-2xl border-t-8 border-transparent"
              // Tambahkan style border t-8 dengan warna dinamis
              style={{ borderTopColor: level.color.split('-')[1] === '500' ? level.color.replace('bg', '') : level.color.replace('bg', '') }}
            >
              <div 
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-4 ${level.color} text-white shadow-md`}
              >
                {level.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {level.title}
              </h3>
              <p className="text-pink-600 font-semibold mb-3">
                {level.age}
              </p>
              <p className="text-gray-600">
                {level.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default EducationLevels;