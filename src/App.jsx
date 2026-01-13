import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsSection from './ProjectsSection';
import Contact from './Contact';
import WorkSection from './WorkSection';
import CertificatesSection from './CertificatesSection';
import { 
  FiArrowUpRight, FiMail, FiMenu, FiX, FiGithub, FiLinkedin, 
  FiInstagram, FiChevronDown, FiGlobe, FiChevronLeft, 
  FiChevronRight, FiEye, FiArrowRight, FiAward, FiCheckCircle, FiMonitor, FiDatabase,
} from 'react-icons/fi';
import { 
  FaPhp, FaCode, FaGithub, FaHtml5, FaCss3Alt, 
  FaBootstrap, FaDocker, FaPython, FaLaravel, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiJavascript, SiMysql, SiTailwindcss 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';




const skills = [
  "PHP", "Laravel", "JavaScript", "MySQL", "REST API", 
  "Git & GitHub", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Codeigniter", "Docker", "Python"
];

const content = {
  id: {
    nav: {
      work: "Pengalaman",
      projects: "Proyek",
      skills: "Tech Stack",
      hire: "HUBUNGI SAYA",
      language: "EN"
    },
    hero: {
      role: "Fullstack Developer",
      description:
        "Lulusan Teknik Informatika yang berfokus pada pengembangan aplikasi web dengan Laravel, Codeigniter, PHP, MySQL dan lain lain.",
      cta: "Lihat Karya"
    },
    work: {
      title: "Pengalaman Kerja",
      subtitle:
        "Perjalanan profesional saya dalam mengembangkan aplikasi web dan sistem yang digunakan secara nyata."
    },
    projects: {
      title: "Proyek Lainnya",
      subtitle:
        "Berbagai proyek yang pernah saya kerjakan, baik untuk belajar, eksperimen, maupun menyelesaikan kebutuhan nyata."
    },
    skills: {
      title: "Tech Stack",
      subtitle:
        "Teknologi, framework, dan tools yang biasa saya gunakan dalam membangun produk digital."
    },
    contact: {
      title: "Punya proyek",
      highlight: "yang ingin dibahas?",
      cta: "Mari Ngobrol"
    },
    footer: "© 2026 Kevin Marvello Bachtiar"
  },

  en: {
    nav: {
      work: "Experience",
      projects: "Projects",
      skills: "Tech Stack",
      hire: "CONTACT ME",
      language: "ID"
    },
    hero: {
      role: "Fullstack Developer",
      description:
        "An Informatics Engineering graduate focused on building practical web applications with Laravel, PHP, and MySQL.",
      cta: "View Work"
    },
    work: {
      title: "Work Experience",
      subtitle:
        "A snapshot of my professional journey, roles, and the projects I've worked on over time."
    },
    projects: {
      title: "Other Projects",
      subtitle:
        "Side and independent projects that show how I think, build, and experiment with ideas."
    },
    skills: {
      title: "Tech Stack",
      subtitle:
        "The tools, frameworks, and technologies I regularly use to build reliable digital products."
    },
    contact: {
      title: "Have a project",
      highlight: "you want to discuss?",
      cta: "Let’s Talk"
    },
    footer: "© 2026 Kevin Marvello Bachtiar"
  }
};


const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [expandedExp, setExpandedExp] = useState(null);
  const [language, setLanguage] = useState('id');
  const [selectedCert, setSelectedCert] = useState(null);
  const t = content[language];

  const experiences = [
  { 
    title: language === 'id' ? "Fullstack Developer Intern" : "Fullstack Developer Intern", 
    company: "CV. OTV COMPUTER GUSAHA", 
    preview: language === 'id' 
      ? "Mengembangkan website portal berita menggunakan Laravel dengan fitur CRUD untuk pengelolaan artikel." 
      : "Developed a news portal website using Laravel with CRUD features for article management.",
    year: "Agustus 2024 - Oktober 2024",
    description: language === 'id'
      ? "Mengembangkan website portal berita menggunakan Laravel dengan fitur CRUD untuk pengelolaan artikel. Membuat tampilan antarmuka yang interaktif agar informasi mudah diakses oleh pengguna. Berkoordinasi dengan tim internal untuk menyesuaikan kebutuhan sistem dan proses implementasi."
      : "Developed a news portal website using Laravel with CRUD features for article management. Created an interactive user interface to make information easily accessible to users. Coordinated with internal teams to adjust system requirements and implementation processes.",
    // 1 GAMBAR
    images: [
      {
        url: "images/experience/Magang website.png",
        alt: "News Portal Dashboard",
        caption: language === 'id' ? "Halaman Portal Berita" : "News Portal's Page"
      },
      {
        url: "images/experience/Magang.png",
        alt: "Photo with Team",
        caption: language === 'id' ? "Foto Bersama" : "Photo with Team"
      }
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    achievements: language === 'id' 
      ? [
          "Menyelesaikan proyek tepat waktu",
          "Belajar pengembangan web fullstack secara praktis",
          "Menerima feedback positif dari tim"
        ]
      : [
          "Completed project on time",
          "Gained practical fullstack web development experience",
          "Received positive feedback from team"
        ]
  },
  // { 
  //   title: language === 'id' ? "Fullstack Developer" : "Fullstack Developer", 
  //   company: language === 'id' ? "Community Service - Desa Petak" : "Community Service - Petak Village",
  //   preview: language === 'id'
  //     ? "Merancang dan membangun website profile desa sebagai media informasi digital bagi masyarakat." 
  //     : "Designed and built a village profile website as a digital information medium for the community.",
  //   year: "Juli 2024",
  //   description: language === 'id'
  //     ? "Merancang dan membangun website profile desa sebagai media informasi digital bagi masyarakat. Terlibat dalam proses pengumpulan kebutuhan, perancangan alur pengguna, hingga pembuatan prototipe. Website digunakan untuk meningkatkan akses informasi dan mendukung potensi desa."
  //     : "Designed and built a village profile website as a digital information medium for the community. Involved in the process of gathering requirements, designing user flows, and creating prototypes. The website is used to improve information access and support village potential.",
  //   images: [
  //     {
  //       url: "images/experience/KKN website.png",
  //       alt: "Village Website Homepage",
  //       caption: language === 'id' ? "Halaman Utama Website Desa" : "Village Website Homepage"
  //     },
  //     {
  //       url: "images/experience/KKN.png",
  //       alt: "Photo with Kelurahan",
  //       caption: language === 'id' ? "Foto Bersama Kelurahan" : "Photo with Kelurahan"
  //     }
  //   ],
  //   tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
  //   achievements: language === 'id'
  //     ? [
  //         "Meningkatkan transparansi informasi publik",
  //         "Mendapat apresiasi dari kepala desa"
  //       ]
  //     : [
  //         "Improved public information transparency",
  //         "Received appreciation from village head"
  //       ]
  // },
  { 
    title: language === 'id' ? "Backend Developer Freelance" : "Backend Developer Freelance", 
    company: "CV. OTV COMPUTER GUSAHA", 
    preview: language === 'id'
      ? "Mengembangkan sistem backend untuk platform keuangan berbasis Earned Wage Access."
      : "Developed a backend system for an Earned Wage Access-based financial platform.",
    year: "Januari 2025 - Februari 2025",
    description: language === 'id'
      ? "Mengembangkan sistem backend untuk platform keuangan berbasis Earned Wage Access. Membuat dan mengelola dashboard admin untuk pengolahan data keuangan dan penggajian. Menjaga keamanan serta struktur data agar sesuai dengan kebutuhan operasional perusahaan."
      : "Developed a backend system for an Earned Wage Access-based financial platform. Created and managed an admin dashboard for processing financial and payroll data. Maintained security and data structure to meet the company's operational needs.",
    images: [
      {
        url: "images/experience/EWA2.png",
        alt: "Dashboard EWA",
        caption: language === 'id' ? "Dashboard EWA" : "Dashboard EWA"
      },
      {
        url: "images/experience/EWA.jpg",
        alt: "Presentation with Bank BPR",
        caption: language === 'id' ? "Presentasi dengan Bank BPR" : "Presentation with Bank BPR"
      }
    ],
    tech: ["PHP", "CodeIgniter", "MySQL", "REST API", "Github"],
    achievements: language === 'id'
      ? [
          "Mengembangkan API yang mumpuni",
          "Mengurangi waktu proses payroll",
        ]
      : [
          "Developed reliable API services",
          "Reduced payroll processing time",
        ]
  },
  { 
    title: language === 'id' ? "Fullstack Developer Freelance" : "Fullstack Developer Freelance", 
    company: "Puskesmas Menur", 
    preview: language === 'id'
      ? "Mengembangkan backend sistem SIREKA, yaitu sistem rekomendasi artikel berdasarkan riwayat baca pengguna."
      : "Developed the backend for SIREKA, an article recommendation system based on user reading history.",
    year: "Mei 2025 - Juli 2025",
    description: language === 'id'
      ? "Mengembangkan backend sistem SIREKA, yaitu sistem rekomendasi artikel berdasarkan riwayat baca pengguna. Mengatur alur data dan logika sistem agar hasil rekomendasi lebih relevan. Melakukan optimasi performa sistem untuk mendukung penggunaan jangka panjang."
      : "Developed the backend for SIREKA, an article recommendation system based on user reading history. Managed data flow and system logic to make recommendations more relevant. Optimized system performance to support long-term usage.",
    images: [
      {
        url: "images/experience/SIREKA.png",
        alt: "Recommendation System Interface",
        caption: language === 'id' ? "Antarmuka Sistem Rekomendasi" : "Recommendation System Interface"
      },
      {
        url: "images/experience/SIREKA2.png",
        alt: "Article Search Page",
        caption: language === 'id' ? "Halaman Pencarian Artikel" : "Article Search Page"
      }
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Python","REST API"],
    achievements: language === 'id'
      ? [
          "Rekomendasi artikel sesuai dengan riwayat baca pengguna",
          "Lebih mudah di akses oleh pengguna",
        ]
      : [
          "Article recommendations aligned with user reading history",
          "Easier access for users",
        ]
  },
  { 
  title: language === 'id' ? "Fullstack Developer Freelance" : "Fullstack Developer Freelance", 
  company: language === 'id' ? "Kepolisian Resor Jember" : "Jember Police Resort",
  preview: language === 'id'
    ? "Mengembangkan sistem internal berbasis web untuk mendukung pengelolaan data dan proses operasional harian."
    : "Developing an internal web-based system to support data management and daily operational processes.",
  year: language === 'id' ? "Desember 2025 – Sekarang" : "December 2025 – Present",
  description: language === 'id'
    ? "Bekerja sebagai Fullstack Developer freelance di Kepolisian Resor Jember dengan tanggung jawab merancang dan mengembangkan sistem internal berbasis web. Sistem ini digunakan untuk mempermudah pengelolaan data serta mendukung proses operasional harian yang sebelumnya masih dilakukan secara manual. Fokus pengembangan diarahkan pada peningkatan efisiensi, akurasi data, serta kemudahan penggunaan dibandingkan metode konvensional seperti spreadsheet. Dalam prosesnya, saya juga berkoordinasi langsung dengan pihak terkait untuk memastikan sistem yang dibangun sesuai dengan kebutuhan dan alur kerja di lapangan."
    : "Working as a freelance Fullstack Developer at Jember Police Resort, responsible for designing and developing an internal web-based system. The system aims to streamline data management and support daily operational processes that were previously handled manually. The development focuses on improving efficiency, data accuracy, and usability compared to conventional methods such as spreadsheets. I also collaborate closely with stakeholders to ensure the system aligns with real operational needs.",
  images: [
    {
      url: "images/photo/Comingsoon.jpg",
      alt: "System Preview",
      caption: language === 'id' ? "Tampilan sistem (segera tersedia)" : "System preview (coming soon)"
    }
  ],
  tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
  achievements: language === 'id'
    ? [
        "Meningkatkan efisiensi pengelolaan data internal",
        "Mengurangi ketergantungan pada pencatatan manual",
        "Sistem disesuaikan dengan kebutuhan operasional nyata"
      ]
    : [
        "Improved efficiency of internal data management",
        "Reduced reliance on manual record-keeping",
        "System tailored to real operational needs"
      ]
  }
];

const projects = [
  { 
    title: language === 'id' ? "Website Profil Desa Petak" : "Desa Petak Profile Website", 
    category: language === 'id' ? "Proyek Komunitas (KKN)" : "Community Project",
    // Menggunakan array images (maksimal 3)
    images: [
      "images/projects/KKN.png",
      "images/projects/KKN website.png"
    ],
    description: language === 'id' 
      ? "Website profil desa yang dibuat saat KKN untuk memperkenalkan Desa Petak sekaligus mempermudah akses informasi bagi masyarakat dan pihak terkait." 
      : "A village profile website built during a community service program to introduce Desa Petak and provide easier access to public information.",
    tech: ["PHP", "Laravel", "Bootstrap", "JavaScript","MySQL"]
  },
  { 
    title: language === 'id' ? "Forum Web App (Laraccuss)" : "Forum Web App (Laraccuss)", 
    category: language === 'id' ? "Proyek Pembelajaran" : "Learning Project",
    images: [
      "images/projects/Laracuss.png",
      "images/projects/Laracuss2.png"
    ],
    description: language === 'id'
      ? "Web forum berbasis Laravel yang dibangun melalui kelas online, fokus pada pengembangan fitur forum, database, dan interaksi frontend–backend."
      : "A Laravel-based web forum built through an online class, focusing on forum features, database management, and frontend–backend interaction.",
    tech: ["Laravel", "PHP", "MySQL","JavaScript","MySQL"]
  },
  { 
    title: language === 'id' ? "Decentralized File Notary" : "Decentralized File Notary", 
    category: language === 'id' ? "Proyek Web3" : "Web3 Project",
    images: [
     "images/projects/Blocknotary.png",
     "images/projects/Blocknotary2.png",
     "images/projects/Blocknotary3.png",
    ],
    description: language === 'id'
      ? "Aplikasi Web3 untuk notarisasi file dengan mencatat hash file ke blockchain sebagai bukti kepemilikan dan keaslian, dilengkapi verifikasi publik dan sertifikat PDF."
      : "A Web3 application for file notarization by recording file hashes on the blockchain, featuring public verification and PDF certificates.",
    tech: ["Solidity", "React", "Web3", "BuildBear", "JavaScript"]
  },
  { 
    title: language === 'id' ? "Sistem POS & Forecasting Stok" : "POS & Stock Forecasting System", 
    category: language === 'id' ? "Proyek Industri (Tugas Akhir)" : "Industry Project (Final Thesis)",
    images: [
      "images/photo/Comingsoon.jpg",
    ],
    description: language === 'id'
      ? "Sistem Point of Sales berbasis web yang dikembangkan bersama mitra perusahaan, dilengkapi fitur peramalan stok menggunakan data riil untuk mendukung pengambilan keputusan."
      : "A web-based Point of Sales system developed in collaboration with an industry partner, featuring stock forecasting using real business data.",
    tech: ["Laravel", "PHP", "MySQL", "Forecasting", "REST API","Python"]
  },
  { 
    title: language === 'id' ? "Platform Online Course" : "Online Course Platform", 
    category: language === 'id' ? "Aplikasi Web" : "Web Application",
    images: [
     "images/projects/Obito.png",
     "images/projects/Obito2.png"
    ],
    description: language === 'id'
      ? "Website kursus online dengan fitur manajemen kursus, transaksi, dan pembayaran digital menggunakan Midtrans."
      : "An online course website featuring course management, transactions, and digital payments using Midtrans.",
    tech: ["Laravel", "MySQL", "Nginx", "Midtrans", "JavaScript"]
  }
];

  // Data skills bisa tetap di luar atau dipindahkan ke sini
  const skills = [
    "PHP", "Laravel", "JavaScript", "MySQL", "REST API", 
    "Git & GitHub", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Codeigniter", "Docker", "Python"
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3EEEA] to-[#EBE3D5] text-[#776B5D] selection:bg-[#B0A695] selection:text-[#F3EEEA] overflow-x-hidden font-sans">
      
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#B0A695]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#776B5D]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* ENHANCED NAVBAR - PIXELATED STYLE */}
      <motion.nav 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[92%] max-w-5xl"
      >
        <div className="relative">
          {/* Pixelated Background & Border */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm border-2 border-[#776B5D] shadow-[8px_8px_0px_0px_rgba(119,107,93,0.2)]" />
          
          {/* Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-5" 
              style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }} />
          
          <div className="relative px-6 md:px-8 py-4 flex justify-between items-center">
            {/* Logo - Retro Pixelated */}
            <a href="#" className="text-2xl font-mono font-black tracking-tighter bg-gradient-to-r from-[#776B5D] to-[#B0A695] bg-clip-text text-transparent relative group">
              KMB.
              {/* Animated Pixel Underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#776B5D] to-[#B0A695] group-hover:w-full transition-all duration-500" />
              {/* Pixel Corner Accents */}
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#B0A695] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#776B5D] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <ul className="flex gap-10 text-[11px] font-mono font-bold tracking-[0.2em] uppercase">
                {[
                  { id: 'work', label: t.nav.work },
                  { id: 'projects', label: t.nav.projects },
                  { id: 'certificates', label: language === 'id' ? 'Sertifikat' : 'Certificates' }, // Tambahkan ini
                  { id: 'skills', label: t.nav.skills }
                ].map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      className="text-[#776B5D]/80 hover:text-[#B0A695] transition-all duration-300 relative group/pixel"
                    >
                      {item.label}
                      {/* Pixel Border Effect */}
                      <div className="absolute -inset-1 border border-[#B0A695] opacity-0 group-hover/pixel:opacity-30 transition-opacity" />
                      {/* Pixel Dots */}
                      <div className="absolute -top-1 -left-1 w-1 h-1 bg-[#B0A695] opacity-0 group-hover/pixel:opacity-100 transition-opacity" />
                      <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-[#B0A695] opacity-0 group-hover/pixel:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-6">
                {/* LANGUAGE BUTTON - Pixelated */}
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95, y: 1 }}
                  onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                  className="relative group/language"
                >
                  <div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1 group-hover/language:translate-x-0.5 group-hover/language:translate-y-0.5 transition-transform" />
                  <div className="relative flex items-center gap-2 px-4 py-2 bg-[#F3EEEA] border-2 border-[#776B5D] text-sm font-mono font-semibold text-[#776B5D]">
                    <FiGlobe className="text-[#B0A695]" />
                    <span>{t.nav.language}</span>
                  </div>
                </motion.button>
                
                {/* HIRE BUTTON - Pixelated & Glowing */}
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95, y: 1 }}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kevinmarvellobachtiar@gmail.com"
                  className="relative group/hire"
                >
                  <div className="absolute inset-0 bg-black/20 translate-x-1 translate-y-1 group-hover/hire:translate-x-0.5 group-hover/hire:translate-y-0.5 transition-transform" />
                  <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#776B5D] to-[#B0A695] border-2 border-[#776B5D] text-white text-[11px] font-mono font-bold tracking-[0.2em] uppercase group-hover/hire:shadow-[0_0_15px_rgba(176,166,149,0.5)] transition-shadow">
                    <FiMail className="text-white" />
                    {t.nav.hire}
                    {/* Glowing Pixel Indicator */}
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-75" />
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Mobile Language Button */}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="relative group/mobileLang"
              >
                <div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1" />
                <div className="relative flex items-center gap-1 px-3 py-2 bg-[#F3EEEA] border-2 border-[#776B5D] text-xs font-mono font-semibold text-[#776B5D]">
                  <FiGlobe className="text-[#B0A695] text-sm" />
                  <span>{language === 'id' ? 'EN' : 'ID'}</span>
                </div>
              </motion.button>
              
              {/* Hamburger Button - Pixelated */}
              <button 
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="relative group/menu"
              >
                <div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1 group-hover/menu:translate-x-0.5 group-hover/menu:translate-y-0.5 transition-transform" />
                <div className="relative w-10 h-10 flex items-center justify-center bg-[#F3EEEA] border-2 border-[#776B5D]">
                  {isNavOpen ? (
                    <FiX className="text-[#776B5D] text-lg transition-transform" />
                  ) : (
                    <FiMenu className="text-[#776B5D] text-lg transition-transform" />
                  )}
                  {/* Pixel Corners */}
                  <div className="absolute top-1 left-1 w-1 h-1 bg-[#B0A695]" />
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#B0A695]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Navigation Menu - Pixelated */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-28 z-40 md:hidden px-6"
          >
            <div className="relative">
              {/* Pixelated Border */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-2 border-[#776B5D] shadow-[8px_8px_0px_0px_rgba(119,107,93,0.3)]" />
              
              {/* Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10" 
                  style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }} />
              
              <div className="relative p-8">
                <ul className="space-y-4">
                  {[
                    { id: 'work', label: t.nav.work },
                    { id: 'projects', label: t.nav.projects },
                    { id: 'certificates', label: language === 'id' ? 'Sertifikat' : 'Certificates' }, // Tambahkan ini
                    { id: 'skills', label: t.nav.skills }
                  ].map((item) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`} 
                        className="block relative group/mobileItem"
                        onClick={() => setIsNavOpen(false)}
                      >
                        <div className="absolute inset-0 bg-[#F3EEEA] border border-[#776B5D] opacity-0 group-hover/mobileItem:opacity-100 transition-opacity" />
                        <div className="relative px-6 py-4 text-center">
                          <span className="text-lg font-mono font-bold text-[#776B5D] uppercase tracking-wider">
                            {item.label}
                          </span>
                          {/* Pixel Indicators */}
                          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#B0A695] opacity-0 group-hover/mobileItem:opacity-100 transition-opacity" />
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#B0A695] opacity-0 group-hover/mobileItem:opacity-100 transition-opacity" />
                        </div>
                      </a>
                    </li>
                  ))}
                  
                  {/* Mobile Hire Button */}
                  <li className="pt-4">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=kevinmarvellobachtiar@gmail.com"
                      className="block relative group/mobileHire"
                      onClick={() => setIsNavOpen(false)}
                    >
                      <div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1 group-hover/mobileHire:translate-x-0.5 group-hover/mobileHire:translate-y-0.5 transition-transform" />
                      <div className="relative px-8 py-4 bg-gradient-to-r from-[#776B5D] to-[#B0A695] border-2 border-[#776B5D] text-white font-mono font-bold text-center">
                        {t.nav.hire}
                        {/* Glowing Pixel */}
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      </div>
                    </motion.a>
                  </li>
                </ul>
                
                {/* Social Icons for Mobile */}
                <div className="mt-8 pt-6 border-t border-[#776B5D]/20">
                  <div className="flex justify-center gap-6">
                    {[
                      { icon: <FiGithub />, href: "https://github.com/Kevin-Bachtiar", label: "GitHub" },
                      { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/kevin-marvello-bachtiar-2157282a4/", label: "LinkedIn" },
                      { icon: <FiInstagram />, href: "https://www.instagram.com/mrvliar_/", label: "Instagram" }
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="relative group/social"
                      >
                        <div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1 group-hover/social:translate-x-0.5 group-hover/social:translate-y-0.5 transition-transform" />
                        <div className="relative w-10 h-10 flex items-center justify-center bg-[#F3EEEA] border-2 border-[#776B5D] text-[#776B5D]">
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ENHANCED HERO SECTION - RETRO PIXELATED STYLE */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex items-center relative overflow-hidden">
        
        {/* Background Retro Decor */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#B0A695]/5 border-4 border-[#B0A695]/10 hidden md:block" />
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#776B5D]/5 border-2 border-[#776B5D]/10 hidden md:block" />

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Retro Badge */}
            <h2 className="text-[10px] md:text-xs font-mono font-black tracking-[0.4em] uppercase text-[#B0A695] mb-8 flex items-center gap-3 bg-[#B0A695]/5 py-2 px-4 border-l-4 border-[#B0A695]">
              <span className="w-2 h-2 bg-[#B0A695] animate-pulse"></span>
              {t.hero.role}
            </h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-black leading-[0.9] mb-8 tracking-tighter text-[#776B5D] uppercase">
              Kevin<br />
              <span className="text-[#B0A695]">Marvello</span><br />
              <span className="relative inline-block mt-2">
                Bachtiar.
                {/* Underline Pixel */}
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#776B5D]/10 -z-10" />
              </span>
            </h1>
            
            <p className="text-sm md:text-base opacity-80 leading-relaxed mb-10 max-w-lg font-mono uppercase tracking-tight border-l-2 border-[#776B5D]/20 pl-6">
              {'>'} {t.hero.description}
            </p>
            
            {/* Pixelated Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block group"
            >
              <div className="absolute inset-0 bg-black/20 translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              
              <a 
                href="#work"
                className="relative flex items-center gap-4 px-10 py-5 bg-[#776B5D] text-white border-2 border-[#776B5D] font-mono font-black uppercase tracking-widest text-sm md:text-base transition-transform active:translate-x-1 active:translate-y-1"
              >
                {t.hero.cta}
                <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 border-4 border-[#B0A695]/20 z-0 group-hover:inset-0 transition-all duration-500" />
              <div className="absolute -inset-8 border border-[#776B5D]/10 z-0" />
              
              {/* Main Image Container */}
                <div 
                  className="relative w-72 h-96 md:w-96 md:h-[520px] bg-[#F3EEEA] border-4 border-[#776B5D] overflow-hidden"
                  style={{ boxShadow: '12px 12px 0px 0px rgba(119, 107, 93, 0.2)' }}
                >
                  <img 
                    src="images/photo/me.jpg" 
                    alt="Kevin Marvello Bachtiar" 
                    /* MENGGUNAKAN object-[50%_75%] 
                      Ini akan menggeser foto ke atas sehingga bagian bawah/tengah foto (kamu) 
                      terlihat jelas dan langit yang di atas terpotong.
                    */
                    className="w-full h-full object-cover object-[50%_100%] group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Decorative Overlay Pixel (Scanning Line) */}
                  <div className="absolute inset-0 pointer-events-none opacity-20" 
                      style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }}>
                  </div>

                  {/* Pixel Corner Accents inside image */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white/40" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white/40" />
                </div>

              {/* Decorative Labels */}
              <div className="absolute -bottom-6 -left-6 bg-[#B0A695] px-4 py-1 text-[8px] font-mono text-white uppercase tracking-[0.3em] font-black shadow-lg">
                Subject_01
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORK EXPERIENCE SECTION - TAMPILAN MOBILE FRIENDLY */}
      <WorkSection 
        t={t} 
        experiences={experiences} 
        expandedExp={expandedExp} 
        setExpandedExp={setExpandedExp} 
        language={language} 
      />

      {/* PROJECTS HORIZONTAL CAROUSEL */}
      <ProjectsSection t={t} projects={projects} />

      {/* ENHANCED CERTIFICATES SECTION - MOBILE OPTIMIZED RETRO */}
      <CertificatesSection 
        t={t} 
        language={language} 
        selectedCert={selectedCert} 
        setSelectedCert={setSelectedCert} 
      />
  
        {/* ENHANCED SKILLS - RETRO PIXELATED VERSION */}
      <section
        id="skills"
        className="py-12 md:py-16 px-4 bg-[#776B5D] relative overflow-hidden border-y-4 border-black/20"
      >
        {/* Background Decor - Pixel Grid Style */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#F3EEEA 1px, transparent 0)', backgroundSize: '16px 16px' }} />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1 bg-black/20 border-2 border-[#F3EEEA]/30"
            >
              {/* Retro Blinking Indicator */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-[#F3EEEA] opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-[#F3EEEA]" />
              </span>
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#F3EEEA]">
                {t.skills.title}
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-mono font-black text-[#F3EEEA] uppercase tracking-tighter mb-4"
              style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
            >
              Tools & <span className="text-[#B0A695]">Tech</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] md:text-xs text-[#F3EEEA]/70 max-w-sm mx-auto font-mono uppercase tracking-widest"
            >
              {'>'} {t.skills.subtitle}
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { id: 1, name: "PHP", icon: "php" },
              { id: 2, name: "Laravel", icon: "laravel" },
              { id: 3, name: "JavaScript", icon: "javascript" },
              { id: 4, name: "MySQL", icon: "mysql" },
              { id: 5, name: "REST API", icon: "restapi" },
              { id: 6, name: "Git & GitHub", icon: "git" },
              { id: 7, name: "HTML/CSS", icon: "web" },
              { id: 8, name: "Tailwind CSS", icon: "tailwind" },
              { id: 9, name: "Bootstrap", icon: "bootstrap" },
              { id: 10, name: "CodeIgniter", icon: "codeigniter" },
              { id: 11, name: "Docker", icon: "docker" },
              { id: 12, name: "Python", icon: "python" }
            ].map((skill, i) => {
              const getIconComponent = (iconName) => {
                const iconClass = "text-2xl md:text-3xl filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]";
                switch(iconName) {
                  case 'php': return <FaPhp className={`${iconClass} text-[#777BB4]`} />;
                  case 'laravel': return <FaLaravel className={`${iconClass} text-[#FF2D20]`} />;
                  case 'javascript': return <SiJavascript className={`${iconClass} text-[#F7DF1E]`} />;
                  case 'mysql': return <SiMysql className={`${iconClass} text-[#4479A1]`} />;
                  case 'restapi': return <TbApi className={`${iconClass} text-[#B0A695]`} />;
                  case 'git': return (
                    <div className="flex flex-col items-center">
                      <FaGitAlt className="text-xl text-[#F1502F]" />
                      <FaGithub className="text-xl text-white mt-0.5" />
                    </div>
                  );
                  case 'web': return (
                    <div className="flex gap-1">
                      <FaHtml5 className="text-xl text-[#E34F26]" />
                      <FaCss3Alt className="text-xl text-[#1572B6]" />
                    </div>
                  );
                  case 'tailwind': return <SiTailwindcss className={`${iconClass} text-[#06B6D4]`} />;
                  case 'bootstrap': return <FaBootstrap className={`${iconClass} text-[#7952B3]`} />;
                  case 'codeigniter': return <FaCode className={`${iconClass} text-[#DD4814]`} />;
                  case 'docker': return <FaDocker className={`${iconClass} text-[#2496ED]`} />;
                  case 'python': return <FaPython className={`${iconClass} text-[#3776AB]`} />;
                  default: return <FaCode className={`${iconClass} text-[#B0A695]`} />;
                }
              };

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ 
                    y: -4, 
                    x: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  className="group relative p-4 border-2 border-[#B0A695]/30 bg-black/10 flex flex-col items-center justify-center h-32 transition-all"
                  style={{ boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.2)' }}
                >
                  {/* Pixel Corners Accent */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#F3EEEA] opacity-30" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#F3EEEA] opacity-30" />

                  {/* Index Number - Top Left (Mono) */}
                  <div className="absolute top-2 left-2">
                    <span className="text-[9px] font-mono font-bold text-[#B0A695]">
                      #{skill.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="flex-1 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                    {getIconComponent(skill.icon)}
                  </div>

                  {/* Skill Name - Bottom (Retro Bold) */}
                  <h4 className="text-[10px] md:text-xs font-mono font-black text-[#F3EEEA] uppercase tracking-tighter mt-2">
                    {skill.name}
                  </h4>

                  {/* Hover Scanline Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100">
                    <div className="w-full h-[2px] bg-white/10 absolute animate-[scan_2s_linear_infinite]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Footer Decoration */}
          <div className="mt-12 text-center opacity-30">
            <p className="font-mono text-[8px] tracking-[1em] text-[#F3EEEA]">LOADING_COMPLETE</p>
          </div>
        </div>
      </section>

      {/* ENHANCED CONTACT */}
      <Contact t={t} />

      {/* ENHANCED FOOTER */}
      <footer className="py-12 px-6 border-t border-[#B0A695]/20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold tracking-[0.2em] uppercase opacity-70">
              {t.footer}
            </p>
            <p className="text-xs opacity-50 mt-2">
              Crafted with passion • Available for collaborations
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            
            {/* Footer Language Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F3EEEA] to-white border border-[#B0A695]/30 rounded-full text-sm font-semibold text-[#776B5D] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <FiGlobe className="text-[#B0A695]" />
              <span>Switch to {language === 'id' ? 'English' : 'Bahasa'}</span>
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;