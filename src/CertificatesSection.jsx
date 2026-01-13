import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX } from 'react-icons/fi';

const CertificatesSection = ({ t, language, selectedCert, setSelectedCert }) => {
  
    const certificatesData = [
  { 
    title: "Informatics Leader Camp",
    issuer: "Informatics Engineering Community",
    date: "2024",
    id: "ILC-01",
    image: "images/certificate/Certificate of Informatics Leader Camp.jpg",
    description: language === 'id'
      ? "Mengikuti kegiatan Informatics Leader Camp yang berfokus pada pengembangan kepemimpinan, kerja tim, dan komunikasi dalam lingkungan teknologi informasi."
      : "Participated in an Informatics Leader Camp focused on leadership development, teamwork, and communication within the IT environment.",
    credentialUrl: "https://github.com/Kevin-Bachtiar/My-Certificates/blob/main/Certificate%20of%20Informatics%20Leader%20Camp.jpg",
  },
  { 
    title: "Forum Web Application (Laravel)",
    issuer: "Online Course",
    date: "2023",
    id: "FW-04",
    image: "images/certificate/Forum Web App.png",
    description: language === 'id'
      ? "Mengikuti kelas online untuk membangun aplikasi forum berbasis Laravel. Mempelajari pengembangan frontend dengan HTML, CSS, dan JavaScript, serta backend meliputi database, logika aplikasi, dan interaksi server."
      : "Completed an online course to build a Laravel-based forum web application, covering frontend development with HTML, CSS, JavaScript, and backend logic with database management.",
    credentialUrl: "https://github.com/Kevin-Bachtiar/My-Certificates/blob/main/Certificate%20of%20Forum%20Web%20App%20Full-Stack%20Laravel.pdf",
  },
  { 
    title: "Web Online Course Platform",
    issuer: "Online Course",
    date: "2023",
    id: "OC-07",
    image: "images/certificate/Web Online Course.png",
    description: language === 'id'
      ? "Mengembangkan website online course modern melalui kelas online. Mempelajari manajemen database, konfigurasi server Nginx, integrasi pembayaran Midtrans, serta fitur CRUD untuk kursus, pengguna, transaksi, dan harga."
      : "Built a modern online course website through an online class, learning database management, Nginx server configuration, Midtrans payment integration, and CRUD features for courses, users, and transactions.",
    credentialUrl: "https://github.com/Kevin-Bachtiar/My-Certificates/blob/main/Certificate%20of%20Web%20Online%20Course.pdf",
  }
];


  return (
    <section id="certificates" className="py-20 md:py-20 px-6 bg-[#FDFCFB] relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[length:20px_20px] bg-[linear-gradient(to_right,#776B5D_1px,transparent_1px),linear-gradient(to_bottom,#776B5D_1px,transparent_1px)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Compact */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
          <div className="border-l-[6px] border-[#776B5D] pl-4 md:pl-6">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-[#B0A695] animate-pulse"></div>
              <span className="text-[#B0A695] text-[9px] md:text-xs font-mono font-black uppercase tracking-[0.3em]">
                CRT_LOG.DAT
              </span>
            </div>
            <h3 className="text-4xl md:text-7xl font-serif text-[#776B5D] leading-none uppercase">
              _<span className="italic font-light text-[#B0A695]">Certificate</span>
            </h3>
          </div>
        </div>

        {/* Dynamic Grid / Stack based on Screen Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-[#776B5D] bg-[#776B5D]">
          {certificatesData.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedCert(cert)} // Set sertifikat yang dipilih saat diklik
              className="group relative bg-white border-b-2 border-[#776B5D] md:border-b-0 md:border-r-2 md:last:border-r-0 border-[#776B5D] p-6 md:p-8 transition-colors duration-300 hover:bg-[#F3EEEA] cursor-pointer"
            >
              {/* Index Pixel Number */}
              <span className="block font-mono text-[10px] text-[#B0A695] mb-4 group-hover:text-[#776B5D]/60">
                [{cert.id}]
              </span>

              <h4 className="text-lg md:text-xl font-bold text-[#776B5D] mb-4 leading-tight uppercase font-mono tracking-tighter">
                {cert.title}
              </h4>
              <div className="space-y-1 text-sm">
                <p className="text-[#776B5D]/60 text-[11px] font-mono leading-none">
                  &gt; ISSUER: <span className="text-[#776B5D] font-bold">{cert.issuer}</span>
                </p>
                <p className="text-[#776B5D]/60 text-[11px] font-mono leading-none">
                  &gt; PERIOD: <span className="text-[#776B5D] font-bold">{cert.date}</span>
                </p>
              </div>

              {/* Pseudo-Button for opening details */}
              <div className="mt-8 py-2 px-4 border-2 border-[#776B5D] text-[#776B5D] font-mono text-[10px] font-black shadow-[3px_3px_0px_0px_#776B5D] group-hover:bg-[#776B5D] group-hover:text-white group-hover:shadow-none transition-all duration-300 inline-block">
                OPEN_FILE.EXE
              </div>

              {/* Background Decor */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <FiAward size={40} className="text-[#B0A695]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info Compact */}
        <div className="mt-4 flex flex-col md:flex-row justify-between gap-2 p-3 border-2 border-[#776B5D] bg-[#776B5D] text-white font-mono text-[8px] md:text-[9px] uppercase tracking-widest">
           <div className="flex justify-between md:gap-4">
             <span className="animate-pulse">● SYSTEM_OK</span>
             <span className="md:hidden">v.2.0.26</span>
           </div>
           <div className="hidden md:block">ENCRYPTION: AES_256_BIT</div>
           <div className="flex justify-between md:gap-4">
             <span>TOTAL: 0{certificatesData.length}_ENTRIES</span>
             <span className="hidden md:inline">|</span>
             <span className="hidden md:inline">KEVIN_B.SYS</span>
           </div>
        </div>
      </div>

      {/* CERTIFICATE DETAIL MODAL / DRAWER */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)} // Tutup saat klik di luar
            className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ y: "100%", opacity: 0 }} // Dari bawah untuk mobile
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Cegah event klik menyebar ke background
              className="relative w-full max-w-sm md:max-w-3xl bg-[#F3EEEA] border-4 border-[#776B5D] shadow-[8px_8px_0px_0px_#B0A695] md:shadow-[16px_16px_0px_0px_#B0A695] overflow-hidden"
            >
              {/* Header Modal - Pixelated */}
              <div className="flex justify-between items-center bg-[#776B5D] text-white p-3 border-b-2 border-[#B0A695]">
                <span className="font-mono text-sm uppercase">[{selectedCert.id}]_DETAIL.TXT</span>
                <button 
                  onClick={() => setSelectedCert(null)} 
                  className="p-1 border border-white/30 hover:bg-white hover:text-[#776B5D] transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              {/* Content Modal */}
              <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative border-2 border-[#776B5D] shadow-[4px_4px_0px_0px_#B0A695] overflow-hidden">
                  <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto object-cover block" />
                  {/* Scanline Effect pada gambar */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
                </div>

                <div>
                  <h4 className="text-xl md:text-2xl font-bold font-mono text-[#776B5D] uppercase mb-4 leading-tight">
                    {selectedCert.title}
                  </h4>
                  <p className="text-[#776B5D]/80 text-sm md:text-base font-mono leading-relaxed mb-6">
                    {selectedCert.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-[#776B5D]/60 text-xs font-mono">
                      &gt; ISSUER_ORG: <span className="text-[#776B5D] font-bold">{selectedCert.issuer}</span>
                    </p>
                    <p className="text-[#776B5D]/60 text-xs font-mono">
                      &gt; DATE_ISSUED: <span className="text-[#776B5D] font-bold">{selectedCert.date}</span>
                    </p>
                  </div>

                  <a 
                    href={selectedCert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full py-3 border-2 border-[#776B5D] text-[#776B5D] font-mono text-[10px] font-black text-center shadow-[4px_4px_0px_0px_#776B5D] hover:bg-[#776B5D] hover:text-white hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                  >
                    VIEW_FULL_CREDENTIAL_&gt;
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;