import React, { useState } from 'react';

// Import Komponen Navigasi & Tata Letak
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Komponen Landing Page (Halaman Utama)
import HeroSection from './components/HeroSection';
import EducationLevels from './components/EducationLevels';
import ProgramSection from './components/ProgramSection'; 
import AboutUs from './components/AboutUs';
import OrganizationAndTeachers from './components/OrganizationAndTeachers';
import GallerySection from './components/GallerySection';
import TestimonialCTA from './components/TestimonialCTA';

// Import Halaman Terpisah
import RegistrationPage from './pages/RegistrationPage'; // <-- Halaman Pendaftaran

const App = () => {
  // State untuk mengontrol tampilan: false = Landing Page, true = Registration Page
  const [isRegistrationMode, setIsRegistrationMode] = useState(false);

  // Fungsi untuk beralih ke halaman pendaftaran
  const navigateToRegistration = (e) => {
    e.preventDefault();
    setIsRegistrationMode(true);
    window.scrollTo(0, 0); // Gulir ke atas halaman baru
  };
  
  // Fungsi untuk kembali ke halaman utama (jika diperlukan di Navbar)
  const navigateToHome = (e) => {
    e.preventDefault();
    setIsRegistrationMode(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navbar: selalu tampil, dan tombolnya mengarahkan ke fungsi navigasi */}
      <Navbar 
        onRegisterClick={navigateToRegistration} 
        onHomeClick={navigateToHome} 
        isRegistrationMode={isRegistrationMode}
      />
      
      <main>
        {isRegistrationMode ? (
          // Jika mode pendaftaran aktif, tampilkan RegistrationPage
          <RegistrationPage />
        ) : (
          // Jika tidak, tampilkan semua komponen Landing Page secara berurutan
          <>
            <HeroSection onRegisterClick={navigateToRegistration} /> {/* Tambahkan props di sini */}
            <EducationLevels />
            <ProgramSection /> 
            <AboutUs />           
            <OrganizationAndTeachers />
            <GallerySection />
            <TestimonialCTA onRegisterClick={navigateToRegistration} /> {/* Tambahkan props di sini */}
            {/* Note: ContactForm tidak perlu ditampilkan jika sudah ada RegistrationPage */}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;