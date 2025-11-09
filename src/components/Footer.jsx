import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
          <div>
            <h4 className="text-xl font-bold mb-4">TK Bintang 🌟</h4>
            <p className="text-pink-100 text-sm">
              Mendidik generasi masa depan dengan hati dan keceriaan.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Tautan</h4>
            <ul className="space-y-2">
              <li><a href="#tentang" className="hover:text-pink-200 transition duration-150 text-sm">Tentang Kami</a></li>
              <li><a href="#program" className="hover:text-pink-200 transition duration-150 text-sm">Program Kami</a></li>
              <li><a href="#galeri" className="hover:text-pink-200 transition duration-150 text-sm">Galeri</a></li>
            </ul>
          </div>

          <div>
            <h4 id="kontak" className="text-xl font-bold mb-4">Hubungi Kami</h4>
            <p className="text-pink-100 text-sm">
              Alamat: Desa Kedungcino, Kec. Jepara, Kab. Jepara Prov. Jawa Tengah, 59432
            </p>
            <p className="text-pink-100 text-sm">
              Telepon: 0823-1136-1011
            </p>
            <p className="text-pink-100 text-sm">
              Email: bintanggroup_jepara@yahoo.com
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-pink-500 text-center">
          <p className="text-sm text-pink-200">
            &copy; {new Date().getFullYear()} TK Bintang. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;