import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowUpRight, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const Contact = ({ t }) => {
  const socials = [
    { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/kevin-marvello-bachtiar-2157282a4/' },
    { name: 'Instagram', icon: <FiInstagram />, url: 'https://www.instagram.com/mrvliar_/' },
    { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/Kevin-Bachtiar' },
  ];

  // Komponen Dekorasi Pixel untuk sudut-sudut
  const PixelCorner = () => (
    <div className="absolute w-2 h-2 bg-[#FDFCFB] z-10">
      <div className="absolute top-0 left-0 w-1 h-1 bg-[#776B5D]"></div>
    </div>
  );

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FDFCFB] relative overflow-hidden">
      {/* Background Pattern - Titik Pixel Halus */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#776B5D 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center relative z-10">
        
        {/* TITLE - Boxy Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-[#B0A695]"></div>
          <span className="text-xs md:text-sm font-mono font-black tracking-[0.3em] text-[#B0A695] uppercase bg-[#776B5D]/5 px-4 py-1 border border-[#B0A695]/30">
            {t.contact.title}
          </span>
          <div className="w-2 h-2 bg-[#B0A695]"></div>
        </motion.div>

        {/* HIGHLIGHT - Typography Jagged Feel */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-serif text-[#776B5D] text-center leading-tight mb-12 tracking-tighter uppercase font-black"
          style={{ textShadow: '4px 4px 0px rgba(176, 166, 149, 0.3)' }}
        >
          {t.contact.highlight}
        </motion.h2>

        {/* SUBTITLE - Mono Font */}
        <motion.p
          className="text-[#776B5D] text-center mb-12 max-w-md text-xs md:text-sm font-mono uppercase tracking-tight leading-relaxed border-l-4 border-[#B0A695] pl-4 italic"
        >
          // {t?.language === 'id' 
            ? 'Sistem siap untuk kolaborasi baru. Kirimkan transmisi pesan Anda.'
            : 'System ready for new collaborations. Send your message transmission.'}
        </motion.p>

        {/* CTA BUTTON - 8-Bit Boxy Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Efek Bayangan Belakang (Hard Shadow) */}
          <div className="absolute inset-0 bg-[#B0A695] translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
          
        <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kevinmarvellobachtiar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-4 px-8 py-5 md:px-12 md:py-6 bg-[#776B5D] text-white border-2 border-[#776B5D] transition-transform active:translate-x-1 active:translate-y-1"
            >
            <FiMail className="text-xl md:text-2xl" />
            <span className="text-lg md:text-2xl font-black tracking-tighter uppercase font-mono">
                {t.contact.cta}
            </span>
            <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform" />

            <div className="absolute top-0 left-0 w-1 h-1 bg-[#FDFCFB]"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#FDFCFB]"></div>
        </a>
        </motion.div>

        {/* SUBTEXT EMAIL */}
        <p className="mt-16 font-mono text-[10px] md:text-xs text-[#B0A695] uppercase tracking-[0.2em] font-bold">
          {'>'} kevinmarvellobachtiar@gmail.com
        </p>

        {/* SOCIAL MEDIA SECTION */}
        <div className="mt-20 flex flex-col items-center gap-8 w-full max-w-xs">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#776B5D]/20 to-transparent"></div>
          
          <div className="flex gap-4 md:gap-6">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, x: 4 }}
                className="relative w-12 h-12 flex items-center justify-center bg-[#FDFCFB] border-2 border-[#776B5D] text-[#776B5D] text-xl group transition-all"
                style={{ boxShadow: '4px 4px 0px 0px #776B5D' }}
              >
                {/* Efek Hover: Ubah Bayangan */}
                <span className="relative z-10 group-hover:scale-110 transition-transform">{social.icon}</span>
                
                {/* Pixelated edges decorative */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FDFCFB]"></div>
              </motion.a>
            ))}
          </div>

          <span className="font-mono text-[9px] text-[#776B5D]/40 uppercase tracking-[0.5em]">
            -- Terminal Connection --
          </span>
        </div>

      </div>
    </section>
  );
};

export default Contact;