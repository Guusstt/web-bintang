import React from 'react';
import { motion } from 'framer-motion'; // 1. Import motion

const levels = [
  {
    title: "Kelompok Bermain (KB)",
    age: "Usia 2-4 Tahun",
    description: "Fokus pada stimulasi sensorik, motorik, dan sosialisasi dasar. Anak belajar berinteraksi dalam lingkungan yang aman dan ceria.",
    color: "bg-green-500",
    borderColor: "border-t-green-500", // 2. Tambahkan border color
    icon: "🌱",
  },
  {
    title: "Taman Kanak-Kanak (TK)",
    age: "Usia 4-6 Tahun",
    description: "Persiapan intensif menuju SD melalui Fun Learning, Literasi, dan Kreativitas. Membangun dasar akademik dan karakter yang kuat.",
    color: "bg-pink-500",
    borderColor: "border-t-pink-500", // 2. Tambahkan border color
    icon: "🎓",
  },
  {
    title: "Tempat Penitipan Anak (TPA)",
    age: "Usia 2-6 Tahun",
    description: "Layanan penitipan yang aman dan nyaman sepanjang hari. Dilengkapi program stimulasi usia dini dalam suasana seperti di rumah.",
    color: "bg-yellow-500",
    borderColor: "border-t-yellow-500", // 2. Tambahkan border color
    icon: "🏠",
  },
];

const EducationLevels = () => {
  return (
    <section id="jenjang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Judul Bagian */}
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Jenjang Pendidikan PAUD Terpadu Bintang
        </motion.h2>
        
        {/* Paragraf */}
        <motion.p 
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Kami menyediakan jenjang pendidikan lengkap untuk memastikan setiap tahap tumbuh kembang anak terpenuhi.
        </motion.p>

        {/* Grid Kartu Jenjang */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            // 3. Ganti 'div' menjadi 'motion.div'
            <motion.div 
              key={index} 
              // 4. Hapus 'transition duration-300' dan 'border-transparent'. Tambahkan 'level.borderColor'
              className={`bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl border-t-8 ${level.borderColor}`}
              // 5. Hapus 'style' prop yang kompleks
              
              // 6. Tambahkan properti animasi
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }} // Stagger delay
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
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default EducationLevels;