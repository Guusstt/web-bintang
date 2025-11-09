import React, { useState } from 'react';
// Asumsi kamu memiliki komponen Navbar dan Footer
// import Navbar from '../components/Navbar'; 
// import Footer from '../components/Footer'; 

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childBirthdate: '',
    childGender: 'Laki-laki',
    educationLevel: 'TK',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Pendaftaran Terkirim:', formData);
    alert('Pendaftaran Awal Berhasil! Tim kami akan menghubungi Anda dalam 1x24 jam untuk langkah selanjutnya.');

    setFormData({ 
      parentName: '', 
      parentEmail: '', 
      parentPhone: '', 
      childName: '', 
      childBirthdate: '', 
      childGender: 'Laki-laki', 
      educationLevel: 'TK', 
      address: '',
    });
  };

  return (
   
      <main className="bg-yellow-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-pink-600 mb-2">
              Formulir Pendaftaran Siswa Baru
            </h1>
            <p className="text-xl text-gray-600">
              PAUD Terpadu Bintang Tahun Ajaran 2025/2026
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border-t-8 border-yellow-500">
            <form onSubmit={handleSubmit} className="space-y-8">

              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-pink-100">
                1. Data Orang Tua/Wali
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <InputGroup 
                  label="Nama Lengkap Orang Tua/Wali" 
                  type="text" 
                  name="parentName" 
                  value={formData.parentName} 
                  onChange={handleChange} 
                  required
                />

                <InputGroup 
                  label="Email Aktif" 
                  type="email" 
                  name="parentEmail" 
                  value={formData.parentEmail} 
                  onChange={handleChange} 
                  required
                />

                <InputGroup 
                  label="Nomor Telepon/HP" 
                  type="tel" 
                  name="parentPhone" 
                  value={formData.parentPhone} 
                  onChange={handleChange} 
                  required
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-pink-100 pt-4">
                2. Data Calon Siswa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <InputGroup 
                  label="Nama Lengkap Calon Siswa" 
                  type="text" 
                  name="childName" 
                  value={formData.childName} 
                  onChange={handleChange} 
                  required
                />

                <InputGroup 
                  label="Tanggal Lahir Anak" 
                  type="date" 
                  name="childBirthdate" 
                  value={formData.childBirthdate} 
                  onChange={handleChange} 
                  required
                />

                <SelectGroup 
                  label="Jenis Kelamin" 
                  name="childGender" 
                  value={formData.childGender} 
                  onChange={handleChange}
                  options={['Laki-laki', 'Perempuan']}
                />

                <SelectGroup 
                  label="Jenjang Pendidikan yang Dipilih" 
                  name="educationLevel" 
                  value={formData.educationLevel} 
                  onChange={handleChange}
                  options={['TPA (1-4 Tahun)', 'KB (2-4 Tahun)', 'TK (4-6 Tahun)']}
                  required
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-pink-100 pt-4">
                3. Informasi Lain
              </h2>
              <TextAreaGroup 
                label="Alamat Lengkap" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                rows={3} 
                required
              />

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-xl text-lg font-extrabold text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 transform hover:scale-[1.005]"
                >
                  Kirim Formulir Pendaftaran Awal
                </button>
                <p className="mt-4 text-sm text-gray-500">
                    *Formulir ini adalah pendaftaran awal. Tim kami akan menghubungi Anda untuk melengkapi berkas.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      
    //   <Footer />
    // </div>
  );
};

// --- Komponen Pembantu (Helpers) ---

const InputGroup = ({ label, type, name, value, onChange, required = false }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 text-left mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150 bg-white"
      />
    </div>
);

const SelectGroup = ({ label, name, value, onChange, options, required = false }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 text-left mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150 bg-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
);

const TextAreaGroup = ({ label, name, value, onChange, rows, required = false }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 text-left mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150 bg-white"
      ></textarea>
    </div>
);

export default RegistrationPage;