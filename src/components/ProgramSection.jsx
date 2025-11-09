import React from 'react';
import { useInView } from 'react-intersection-observer'; 

const programs = [
  {
    icon: '📚', 
    title: 'Fun Learning & Literasi',
    description: 'Mengembangkan minat baca dan menulis melalui metode yang menyenangkan dan interaktif, mempersiapkan anak untuk jenjang sekolah dasar.',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    icon: '🎨',
    title: 'Seni, Musik, & Kreativitas',
    description: 'Ruang ekspresi diri. Anak-anak diajak bereksplorasi dengan melukis, kerajinan tangan, menari, dan bernyanyi untuk merangsang otak kanan.',
    color: 'bg-pink-100 text-pink-800',
  },
  {
    icon: '🌎',
    title: 'Praktek Budi Pekerti',
    description: 'Fokus pada pengembangan karakter, etika, dan nilai-nilai sosial. Anak belajar berbagi, bekerjasama, dan menghargai teman.',
    color: 'bg-green-100 text-green-800',
  },
];

const ProgramSection = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,   
  });

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div 
          ref={titleRef} 
          className={`transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Program Unggulan Kami
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Setiap program dirancang untuk memastikan perkembangan optimal anak dalam suasana yang penuh keceriaan dan rasa ingin tahu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} /> 
          ))}
        </div>
      </div>
    </section>
  );
};


const ProgramCard = ({ program, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
    delay: index * 100, 
  });

  return (
    <div 
      ref={ref} 
      className={`
        bg-white p-8 rounded-xl shadow-lg 
        hover:shadow-2xl transition duration-500 transform 
        hover:-translate-y-1 border-t-4 border-pink-500
        
        /* Kelas Animasi */
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
        transition-all duration-700 ease-out 
      `}
    >
      <div 
        className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-4 ${program.color}`}
      >
        {program.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {program.title}
      </h3>
      <p className="text-gray-600">
        {program.description}
      </p>
    </div>
  );
};

export default ProgramSection;