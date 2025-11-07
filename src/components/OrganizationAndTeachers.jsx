import React from 'react';
import { useInView } from 'react-intersection-observer'; // <-- Import useInView

// Data Pengajar/Guru (Data yang kamu berikan)
const teachers = [
  {
    name: "Yuliana Wahyu Sejati, S.Pd.",
    role: "Ketua Yayasan",
    image: "https://via.placeholder.com/150x150?text=Yayasan",
    expertise: "Spesialis Fun Learning & Literasi",
  },
  {
    name: "Triyanto, S.Pd.",
    role: "Kepala Sekolah",
    image: "https://via.placeholder.com/150x150?text=Kepala+Sekolah", 
    expertise: "Pakar Pendidikan Anak Usia Dini (PAUD)",
  },
  {
    name: "Erlina Inani, S.Pd.",
    role: "Guru Kelas A (4-5 Tahun)",
    image: "https://via.placeholder.com/150x150?text=Guru+Siti",
    expertise: "Ahli Seni & Motorik Halus",
  },
  {
    name: "Kak Bunga Lestari",
    role: "Asisten Guru & Kreativitas",
    image: "https://via.placeholder.com/150x150?text=Guru+Bunga",
    expertise: "Pendidik Muda Ceria",
  },
  // Data guru tambahan
  {
    name: "Dinda Maharani",
    role: "Guru Kelas B (5-6 Tahun)",
    image: "https://via.placeholder.com/150x150?text=Guru+Dinda",
    expertise: "Pakar Bahasa",
  },
  {
    name: "Ahmad Zaki",
    role: "Guru TPA",
    image: "https://via.placeholder.com/150x150?text=Guru+Ahmad",
    expertise: "Pengasuhan Anak",
  },
  {
    name: "Siska Dewi",
    role: "Asisten TPA",
    image: "https://via.placeholder.com/150x150?text=Guru+Siska",
    expertise: "Pengasuhan & Kesehatan",
  },
  {
    name: "Fajar Utama",
    role: "Admin Sekolah",
    image: "https://via.placeholder.com/150x150?text=Admin",
    expertise: "Administrasi Pendidikan",
  },
];

const OrganizationAndTeachers = () => {
    // Observer untuk Judul dan Teks (Fade-in dari atas)
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Observer untuk Struktur Pimpinan (Animasi Fade-in dari Kiri)
    const { ref: pimpinanRef, inView: pimpinanInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });


  return (
    <section id="pengajar" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Judul Utama (Animasi Fade-in dari Atas) */}
        <div 
            ref={titleRef} 
            className={`transition-all duration-1000 ${
                titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
        >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Kenali Pendidik Kami
            </h2>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Tim pengajar di Paud Terpadu Bintang adalah profesional yang berdedikasi, penuh kasih sayang, dan bersemangat dalam mendidik generasi penerus.
            </p>
        </div>

        {/* Bagian 1: Struktur Pimpinan Sederhana (Animasi Fade-in dari Kiri) */}
        <div 
            ref={pimpinanRef} 
            className={`transition-all duration-700 delay-300 ${
                pimpinanInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            } mb-20`}
        >
            <h3 className="text-3xl font-bold text-pink-600 mb-8">
                Struktur Pimpinan
            </h3>
            <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
                <p className="text-xl font-semibold text-gray-800">
                    Ketua Yayasan: <span className="text-pink-700">Yuliana Wahyu Sejati, S.Pd.</span>
                </p>
                <p className="text-lg text-gray-500 mt-2">
                    "Visi kami adalah menjadikan Paud Terpadu Bintang rumah kedua bagi anak-anak."
                </p>
            </div>
        </div>

        {/* Bagian 2: Profil Pengajar */}
        <h3 className="text-3xl font-bold text-pink-600 mb-8">
            Tim Pengajar Profesional
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} index={index} /> // <-- Gunakan Komponen Kartu
          ))}
        </div>
        
      </div>
    </section>
  );
};

// Komponen Kartu Pengajar dengan Animasi Scale-Up
const TeacherCard = ({ teacher, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
        delay: index * 150, // Staggered delay 150ms per kartu
    });

    return (
        <div 
            ref={ref} 
            className={`
                bg-white p-6 rounded-xl shadow-xl transition duration-700 
                hover:shadow-2xl border-t-4 border-yellow-500

                /* Kelas Animasi Scale-Up */
                ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} 
                transition-all ease-out 
            `}
        >
            {/* Foto Pengajar */}
            <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-400"
            />
            
            <h4 className="text-xl font-bold text-gray-900 mb-1">
                {teacher.name}
            </h4>
            <p className="text-pink-600 font-semibold mb-3">
                {teacher.role}
            </p>
            <div className="mt-4">
                 <span className="text-sm bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full">
                    {teacher.expertise}
                 </span>
            </div>
        </div>
    );
};

export default OrganizationAndTeachers;