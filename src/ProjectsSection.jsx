import React, { useState, useRef } from 'react';
import { FiExternalLink, FiZap, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// --- KOMPONEN PIXEL SPRITE DENGAN ANIMASI JALAN & BALIK ---
const PixelSprite = ({ isWalking = true }) => {
  return (
    <div className="relative w-12 h-14 flex items-center justify-center">
      <style>
        {`
          @keyframes walk-bob {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes blink {
            0%, 90%, 100% { height: 2px; }
            95% { height: 0px; }
          }
          .pixel-body {
            animation: walk-bob 0.4s infinite ease-in-out;
          }
          .pixel-eye {
            animation: blink 3s infinite;
          }
          /* Animasi Patrol: Jalan Kiri ke Kanan lalu Balik */
          @keyframes patrol {
            0% { left: 0%; transform: scaleX(1); }      /* Hadap Kanan */
            45% { transform: scaleX(1); }              /* Masih Hadap Kanan sebelum sampai ujung */
            50% { left: calc(100% - 48px); transform: scaleX(-1); } /* Balik Badan */
            95% { transform: scaleX(-1); }             /* Masih Hadap Kiri sebelum sampai awal */
            100% { left: 0%; transform: scaleX(1); }    /* Balik Badan lagi */
          }
          .patrol-container {
            position: absolute;
            width: 100%;
            height: 100%;
            animation: patrol 12s linear infinite;
          }
        `}
      </style>
      
      <svg viewBox="0 0 20 24" className="w-10 h-12 fill-[#776B5D]">
        <rect x="4" y="22" width="12" height="2" fill="#776B5D" opacity="0.2" />
        <g className="pixel-body">
          <rect x="6" y="2" width="8" height="8" />
          <rect x="11" y="5" width="2" height="2" fill="white" className="pixel-eye" />
          <rect x="6" y="2" width="8" height="2" fill="#B0A695" opacity="0.5" />
          <rect x="5" y="10" width="10" height="8" />
          <rect x="3" y="11" width="2" height="4" opacity="0.8" />
          <rect x="15" y="11" width="2" height="4" opacity="0.8" />
        </g>
        {/* Kaki yang bergerak saat jalan */}
        <rect x="6" y="18" width="3" height="4">
           <animate attributeName="height" values="4;2;4" dur="0.4s" repeatCount="indefinite" />
           <animate attributeName="y" values="18;20;18" dur="0.4s" repeatCount="indefinite" />
        </rect>
        <rect x="11" y="18" width="3" height="4">
           <animate attributeName="height" values="2;4;2" dur="0.4s" repeatCount="indefinite" />
           <animate attributeName="y" values="20;18;20" dur="0.4s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
};

const ProjectsSection = ({ t, projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const [activeImages, setActiveImages] = useState({});

  const handleImageChange = (projectIdx, imgIdx, totalImages) => {
    const nextIdx = (imgIdx + totalImages) % totalImages;
    setActiveImages(prev => ({ ...prev, [projectIdx]: nextIdx }));
  };

  const updateIndex = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const card = scrollRef.current.querySelector('.project-card');
      if (card) {
        const itemWidth = card.offsetWidth + 24;
        setActiveIndex(Math.round(scrollLeft / itemWidth));
      }
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#FDFCFB] overflow-hidden font-sans relative">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-4 border-l-[6px] border-[#776B5D] pl-6 md:pl-8 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FiZap className="text-[#B0A695] w-3 h-3 fill-[#B0A695]" />
              <p className="text-[#B0A695] text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                {t?.projects?.subtitle || "Digital Archive"}
              </p>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif text-[#776B5D] leading-[0.9] tracking-tighter uppercase italic">
              {t.projects.title}_
            </h3>
          </div>
        </div>

        {/* --- AREA PATROL (Antara Header & Carousel) --- */}
        <div className="relative h-16 w-full mb-8 border-b border-[#776B5D]/10 overflow-hidden">
           <div className="patrol-container flex items-end pb-1">
              <PixelSprite />
              <span className="ml-2 mb-4 font-mono text-[9px] text-[#B0A695] opacity-60 hidden md:block uppercase tracking-tighter">
                Scanning_Archive...
              </span>
           </div>
        </div>

        {/* --- CAROUSEL CONTAINER --- */}
        <div 
          ref={scrollRef} 
          onScroll={updateIndex} 
          className="flex overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory no-scrollbar gap-6 pb-12"
        >
          {projects.map((p, i) => {
            const images = Array.isArray(p.images) ? p.images.slice(0, 3) : [p.image];
            const currentImgIdx = activeImages[i] || 0;

            return (
              <div key={i} className="project-card min-w-[85%] md:min-w-[35%] lg:min-w-[32%] snap-start group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F3EEEA] border-2 border-[#776B5D] shadow-[6px_6px_0px_0px_#776B5D]">
                  
                  {/* Image Layer */}
                  <div className="absolute inset-0 w-full h-full z-10">
                    {images.map((img, imgIdx) => (
                      <img 
                        key={imgIdx}
                        src={img} 
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${imgIdx === currentImgIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} 
                        alt={p.title} 
                        style={{ imageRendering: 'pixelated' }} 
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>

                  {/* NAV BUTTONS */}
                  {images.length > 1 && (
                    <div className="absolute top-4 right-4 z-50 flex gap-1">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleImageChange(i, currentImgIdx - 1, images.length); }}
                        className="w-8 h-8 bg-white border-2 border-[#776B5D] text-[#776B5D] flex items-center justify-center hover:bg-[#776B5D] hover:text-white shadow-[2px_2px_0px_0px_#776B5D]"
                      >
                        <FiChevronLeft size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleImageChange(i, currentImgIdx + 1, images.length); }}
                        className="w-8 h-8 bg-white border-2 border-[#776B5D] text-[#776B5D] flex items-center justify-center hover:bg-[#776B5D] hover:text-white shadow-[2px_2px_0px_0px_#776B5D]"
                      >
                        <FiChevronRight size={16} />
                      </button>
                    </div>
                  )}

                  {/* TECH TAGS */}
                  <div className="absolute top-4 left-4 z-40 flex flex-wrap gap-1.5 max-w-[60%]">
                    {p.tech?.slice(0, 8).map((item, idx) => (
                      <span key={idx} className="text-[9px] font-mono px-2 py-0.5 bg-[#776B5D] text-white font-bold border border-white/20 uppercase">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* HOVER PANEL */}
                  <div className="absolute inset-x-0 bottom-0 h-[85%] bg-[#FDFCFB] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30 p-6 flex flex-col border-t-2 border-[#776B5D]">
                    <div className="mb-4">
                      <p className="text-[#B0A695] text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                        {p.category}
                      </p>
                      <h4 className="text-[#776B5D] font-serif text-2xl leading-tight uppercase font-bold border-b border-[#776B5D]/10 pb-2">
                        {p.title}
                      </h4>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto no-scrollbar mb-4">
                      <p className="text-[#776B5D] text-[13px] font-mono leading-relaxed uppercase">
                        &gt; {p.description}
                      </p>
                    </div>

                    <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#776B5D] text-white py-3 text-[10px] font-black tracking-widest hover:bg-[#B0A695] shadow-[4px_4px_0px_0px_#B0A695]">
                      OPEN_PROJECT <FiExternalLink />
                    </a>
                  </div>

                  {/* DEFAULT LABEL */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-20 group-hover:opacity-0 transition-opacity">
                    <p className="text-[#B0A695] text-[10px] font-black uppercase tracking-widest mb-1">
                      {p.category}
                    </p>
                    <h4 className="text-white font-serif text-2xl uppercase leading-tight">
                      {p.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER NAV */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-8 border-t-4 border-[#776B5D] pt-10">
          <div className="flex items-center gap-6 flex-1 max-w-md">
              <div className="font-mono">
                <span className="text-[#B0A695] text-[9px] block uppercase">Current</span>
                <div className="text-[#776B5D] text-2xl font-black">0{(activeIndex + 1)}</div>
              </div>
              <div className="flex-1 h-[6px] bg-[#F3EEEA] border border-[#776B5D]/20 relative">
                 <div 
                   className="absolute h-full top-0 bg-[#776B5D] transition-all duration-500"
                   style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
                 ></div>
              </div>
              <div className="font-mono text-right">
                <span className="text-[#B0A695] text-[9px] block uppercase">Storage</span>
                <div className="text-[#776B5D] text-2xl font-black">0{projects.length}</div>
              </div>
          </div>

          <div className="flex gap-4 items-center">
              <button 
              onClick={() => scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-[#776B5D] text-[#776B5D] font-mono text-xs font-black hover:bg-[#776B5D] hover:text-white shadow-[4px_4px_0px_0px_#776B5D] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                PREV_
              </button>
              <button 
              onClick={() => scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-[#776B5D] text-[#776B5D] font-mono text-xs font-black hover:bg-[#776B5D] hover:text-white shadow-[4px_4px_0px_0px_#776B5D] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                NEXT_
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;