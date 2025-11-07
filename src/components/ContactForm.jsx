import React, { useState } from 'react';

const ContactForm = () => {
  // State untuk menyimpan data formulir (opsional, tapi disarankan untuk React)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini kamu akan menangani pengiriman data
    // Contoh: Kirim data ke API atau layanan email (misalnya Formspree, Netlify Forms, dll.)
    console.log('Data Formulir Terkirim:', formData);
    alert('Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.');
    
    // Reset formulir
    setFormData({ name: '', email: '', phone: '', childName: '', message: '' });
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Bagian */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Hubungi TK Bintang
          </h2>
          <p className="text-lg text-gray-600">
            Punya pertanyaan atau siap mendaftar? Silakan isi formulir di bawah ini.
          </p>
        </div>

        {/* Kotak Formulir */}
        <div className="bg-pink-50 p-8 md:p-10 rounded-xl shadow-2xl border-t-8 border-pink-600">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Nama dan Email (Dibuat dalam satu baris untuk tampilan desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left mb-1">
                  Nama Anda (Orang Tua) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150"
                  placeholder="alamat@email.com"
                />
              </div>
            </div>

            {/* Input Telepon dan Nama Anak */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-left mb-1">
                        Nomor Telepon <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150"
                        placeholder="08123456789"
                    />
                </div>
                <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700 text-left mb-1">
                        Nama Calon Siswa
                    </label>
                    <input
                        type="text"
                        name="childName"
                        id="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150"
                        placeholder="Nama Anak Anda"
                    />
                </div>
            </div>


            {/* Textarea Pesan */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left mb-1">
                Pesan / Pertanyaan Anda
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150"
                placeholder="Tulis pertanyaan Anda di sini..."
              ></textarea>
            </div>

            {/* Tombol Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-bold text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 transform hover:scale-[1.01]"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;