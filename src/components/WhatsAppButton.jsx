import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';

const WhatsAppButton = () => {
  const phoneNumber = '6282311361011'; 
  const message = 'Assalamualaikum bunda, saya tertarik untuk mendaftarkan anak saya di TK Bintang. Bisa bantu saya?';

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank" // Membuka link di tab baru
      rel="noopener noreferrer" // Praktik keamanan standar untuk target="_blank"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full text-white text-3xl shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-600"
      aria-label="Chat di WhatsApp" // Untuk aksesibilitas (pembaca layar)
    >
      <IoLogoWhatsapp />
    </a>
  );
};

export default WhatsAppButton;