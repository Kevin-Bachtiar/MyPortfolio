import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiZap, FiLayers, FiArrowRight } from 'react-icons/fi';

// --- KOMPONEN PIXEL PEEKER (SI PENGINTIP) ---
const PixelPeeker = ({ isOpen }) => {
  // Variansi animasi untuk badan (naik-turun)
  const bodyVariants = {
    closed: {
      y: 35, // Sembunyi di bawah
      transition: {
        y: {
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.8, 1] // Diam lama di bawah, naik sebentar untuk ngintip
        }
      }
    },
    open: {
      y: 0, // Muncul penuh
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  // Variansi animasi mata (scanning saat membaca)
  const eyeVariants = {
    reading: {
      x: [-2, 2, -2],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "steps(3)" // Style pixelated
      }
    },
    idle: { x: 0 }
  };

  // Variansi animasi tangan (menjangkau card)
  const handVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.3, duration: 0.3 } 
    }
  };

  return (
    <div className="absolute -top-[34px] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
      <motion.div
        variants={bodyVariants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        className="flex flex-col items-center"
      >
        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Antena */}
          <rect x="21" y="0" width="4" height="6" fill="#776B5D" />
          <rect x="21" y="0" width="4" height="2" fill="#B0A695" />

          {/* Kepala Utama */}
          <rect x="6" y="6" width="34" height="28" fill="#776B5D" stroke="#FDFCFB" strokeWidth="2"/>
          <rect x="6" y="6" width="34" height="6" fill="#B0A695" />
          
          {/* Mata Kiri */}
          <rect x="12" y="16" width="8" height="8" fill="white" />
          <motion.rect 
            variants={eyeVariants}
            animate={isOpen ? "reading" : "idle"}
            x="15" y="19" width="3" height="3" fill="#776B5D" 
          />
          
          {/* Mata Kanan */}
          <rect x="26" y="16" width="8" height="8" fill="white" />
          <motion.rect 
            variants={eyeVariants}
            animate={isOpen ? "reading" : "idle"}
            x="29" y="19" width="3" height="3" fill="#776B5D" 
          />
          
          {/* Tangan Pixel (Menjuntai ke Card) */}
          <motion.g
            variants={handVariants}
            animate={isOpen ? "visible" : "hidden"}
          >
            {/* Genggaman Tangan Kiri */}
            <rect x="2" y="32" width="8" height="6" fill="#776B5D" stroke="#FDFCFB" strokeWidth="2" />
            {/* Genggaman Tangan Kanan */}
            <rect x="36" y="32" width="8" height="6" fill="#776B5D" stroke="#FDFCFB" strokeWidth="2" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};

// --- KOMPONEN UTAMA WORK SECTION ---
const WorkSection = ({ t, experiences, expandedExp, setExpandedExp }) => {
  
  const handleToggle = (index) => {
    if (typeof setExpandedExp === 'function') {
      setExpandedExp(expandedExp === index ? null : index);
    }
  };

  const title = t?.work?.title || "Work History";
  const isIndo = t?.language === 'id';

  return (
    <section id="work" className="py-16 md:py-24 px-5 max-w-6xl mx-auto relative bg-transparent">
      
    {/* HEADER SECTION - REFINED RETRO SIZE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6 border-b-[3px] border-[#776B5D] pb-6 md:pb-8">
          <div className="relative w-full md:w-auto">
            {/* Subtitle - Mobile Friendly spacing */}
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <FiZap className="text-[#B0A695] w-4 h-4 md:w-5 md:h-5 fill-[#B0A695]" />
              <span className="text-[9px] md:text-[10px] font-mono font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[#776B5D]">
                {t.work.subtitle}
              </span>
            </div>

            {/* Title - Downsized for better readability */}
            <h3 className="text-4xl md:text-6xl font-serif text-[#776B5D] leading-tight md:leading-[0.8] uppercase tracking-tighter">
              {t.work.title}
            </h3>
          </div>

          {/* Version/Log - Hidden on very small screens or adjusted for mobile */}
          <div className="font-mono text-[9px] md:text-[11px] text-[#776B5D] uppercase tracking-wider md:tracking-tighter border-l-2 md:border-l-0 border-[#776B5D]/20 pl-3 md:pl-0 mt-2 md:mt-0">
            <p className="opacity-70 md:opacity-100">// DEPLOYMENT_LOG_02</p>
          </div>
        </div>



      {/* TIMELINE */}
      <div className="relative">
        {/* Garis Tengah Timeline */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#776B5D]/20 transform md:-translate-x-1/2" />

        <div className="space-y-16 md:space-y-24">
          {experiences && experiences.map((exp, i) => {
            const isOpen = expandedExp === i;
            const isEven = i % 2 === 0;
            const images = Array.isArray(exp.images) ? exp.images.slice(0, 2) : [];
            const hasImages = images.length > 0;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Node Industrial pada Garis */}
                <div className={`absolute left-[13px] md:left-1/2 top-10 w-3 h-3 transform -translate-x-1/2 z-20 border-2 border-white transition-all duration-500 ${isOpen ? 'bg-[#776B5D] rotate-45 scale-150' : 'bg-[#B0A695]'}`} />

                {/* Content Card Wrapper */}
                <div className={`w-full md:w-[47%] pl-10 md:pl-0 relative ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
                  
                  {/* --- PIXEL PEEKER (CENTRALIZED) --- */}
                  <PixelPeeker isOpen={isOpen} />

                  <div className={`relative z-10 transition-all duration-500 border-2 bg-[#FDFCFB] ${isOpen ? 'border-[#776B5D] shadow-[12px_12px_0px_0px_#776B5D]' : 'border-[#776B5D]/10 hover:border-[#776B5D]/40 shadow-[4px_4px_0px_0px_rgba(119,107,93,0.05)]'}`}>
                    
                    <button
                      onClick={() => handleToggle(i)}
                      className="w-full p-6 md:p-8 text-left focus:outline-none group"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-black px-3 py-1 bg-[#776B5D] text-white uppercase shadow-[4px_4px_0px_0px_#B0A695]">
                            {exp.year}
                          </span>
                          <FiLayers className={`transition-all duration-300 ${isOpen ? 'opacity-100 rotate-180' : 'opacity-20 group-hover:opacity-100'}`} />
                        </div>
                        
                        <div className="flex justify-between items-end gap-4">
                          <div className="flex-1">
                            <h4 className="text-3xl md:text-4xl font-serif leading-none uppercase text-[#776B5D] tracking-tighter mb-2 italic font-bold">
                              {exp.title}
                            </h4>
                            <p className="text-[#B0A695] font-mono text-[12px] font-black uppercase tracking-[0.15em] flex items-center gap-2">
                              <FiArrowRight className={`${isOpen ? 'translate-x-1' : ''} transition-transform`} /> {exp.company}
                            </p>
                          </div>
                          <div className={`w-12 h-12 border-2 border-[#776B5D] flex items-center justify-center transition-all ${isOpen ? 'bg-[#776B5D] text-white' : 'text-[#776B5D] group-hover:bg-[#776B5D]/5'}`}>
                            <FiChevronDown className={`text-2xl transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-6 md:px-8 pb-8 space-y-6">
                            
                            {/* ADAPTIVE IMAGE GRID */}
                            {hasImages && (
                              <div className={`grid gap-3 pt-4 border-t-2 border-[#776B5D]/10 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                {images.map((img, imgIdx) => (
                                  <div key={imgIdx} className="relative border-2 border-[#776B5D] p-1 bg-white shadow-[4px_4px_0px_0px_#B0A695] group/img overflow-hidden">
                                    <img 
                                      src={img.url || img} 
                                      className={`w-full object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700 ${images.length === 1 ? 'h-48 md:h-56' : 'h-32 md:h-40'}`} 
                                      alt="Work evidence"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* DESCRIPTION PANEL */}
                            <div className="bg-[#776B5D] text-white p-5 shadow-[6px_6px_0px_0px_#B0A695] relative">
                               <div className="absolute top-0 right-0 p-1 opacity-20">
                                  <FiZap size={10} />
                               </div>
                              <p className="text-[12px] md:text-[13px] leading-relaxed font-mono uppercase tracking-tight">
                                // {exp.description}
                              </p>
                            </div>

                            {/* TECH STACK */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {exp.tech?.map((item, idx) => (
                                <span key={idx} className="px-3 py-1 border-2 border-[#776B5D] text-[9px] font-mono font-black text-[#776B5D] uppercase hover:bg-[#776B5D] hover:text-white transition-all cursor-default">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;