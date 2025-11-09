import React from 'react';
import { useInView } from 'react-intersection-observer';

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
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: pimpinanRef, inView: pimpinanInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

  return (
    <section id="pengajar" className="py-12 sm:py-16 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        
        {/* Judul Utama */}
        <div 
            ref={titleRef} 
            className={`transition-all duration-1000 ${
                titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
        >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Kenali Pendidik Kami
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto px-2">
            Tim pengajar di Paud Terpadu Bintang adalah profesional yang berdedikasi, penuh kasih sayang, dan bersemangat dalam mendidik generasi penerus.
            </p>
        </div>

        {/* Bagian 1: Struktur Pimpinan Sederhana */}
        <div 
            ref={pimpinanRef} 
            className={`transition-all duration-700 delay-300 ${
                pimpinanInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            } mb-12 sm:mb-16 lg:mb-20`}
        >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600 mb-4 sm:mb-6 lg:mb-8">
                Struktur Pimpinan
            </h3>
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg inline-block max-w-full">
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
                    Ketua Yayasan: <span className="text-pink-700">Yuliana Wahyu Sejati, S.Pd.</span>
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2">
                    "Visi kami adalah menjadikan Paud Terpadu Bintang rumah kedua bagi anak-anak."
                </p>
            </div>
        </div>

        {/* Bagian 2: Profil Pengajar */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600 mb-4 sm:mb-6 lg:mb-8">
            Tim Pengajar Profesional
        </h3>

        {/* Grid 3 kolom di mobile, 4 kolom di desktop */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} index={index} />
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
        delay: index * 150,
    });

    return (
        <div 
            ref={ref} 
            className={`
                bg-white p-2 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl transition duration-700 
                hover:shadow-2xl border-t-2 sm:border-t-4 border-yellow-500

                /* Kelas Animasi Scale-Up */
                ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} 
                transition-all ease-out 
            `}
        >
            {/* Foto Pengajar */}
            <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-12 h-12 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full object-cover mx-auto mb-2 sm:mb-3 lg:mb-4 border-2 sm:border-3 lg:border-4 border-pink-400"
            />
            
            <h4 className="text-[0.6rem] sm:text-sm lg:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1 leading-tight">
                {teacher.name}
            </h4>
            <p className="text-[0.5rem] sm:text-xs lg:text-base text-pink-600 font-semibold mb-1 sm:mb-2 lg:mb-3 leading-tight">
                {teacher.role}
            </p>
            <div className="mt-1 sm:mt-2 lg:mt-4">
                 <span className="text-[0.45rem] sm:text-xs lg:text-sm bg-yellow-100 text-yellow-800 py-0.5 sm:py-1 px-1 sm:px-2 lg:px-3 rounded-full inline-block leading-tight">
                    {teacher.expertise}
                 </span>
            </div>
        </div>
    );
};

export default OrganizationAndTeachers;