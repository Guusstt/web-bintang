import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Data untuk statistik
const statsData = [
  { number: 20, label: 'Total Pendaftar' },
  { number: 100, label: 'Jumlah Peserta Didik' },
  { number: 760, label: 'Total Lulusan' }
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-blue-900 text-white"> 
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4">
          STATISTIK KAMI
        </h2>
        <div className="h-1 w-16 sm:w-20 lg:w-24 bg-yellow-400 mx-auto mb-8 sm:mb-12 lg:mb-16"></div>

        {/* Grid 3 kolom di semua ukuran layar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-12">
          
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Lingkaran Statistik - Responsif */}
              <div 
                className={`
                  w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56
                  border-4 sm:border-6 lg:border-8 border-yellow-400 rounded-full 
                  flex flex-col justify-center items-center 
                  transform transition-all duration-500 ease-out
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }} 
              >
                <span className="text-xl sm:text-3xl lg:text-5xl font-bold">
                  {inView ? (
                    <CountUp 
                      end={stat.number} 
                      duration={3}
                      separator="."
                    />
                  ) : (
                    '0'
                  )}
                </span>
                <p className="text-[0.5rem] sm:text-sm lg:text-xl mt-1 sm:mt-2 px-1 leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;