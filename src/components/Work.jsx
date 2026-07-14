import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from "react-icons/fa";

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Sistem Informasi Pemetaan Proyek",
      desc: "Sistem informasi untuk pemetaan dan monitoring proyek infrastruktur. Dikembangkan saat magang di BPPW Sulawesi Tenggara.",
      tech: ["Laravel", "JavaScript", "CSS", "MySQL"],
      link: "https://github.com/SalehMall",
      repo: "https://github.com/SalehMall",
      image: "/project/Sistem Informasi Kegiatan Proyek.png",
      category: "Web App",
      color: "from-accent to-blue-600",
    },
    {
      id: 2,
      title: "Sistem Manajemen Data Obat Apotek",
      desc: "Aplikasi untuk mengelola data obat di apotek, mencakup stok, harga, dan informasi obat secara terstruktur.",
      tech: ["Laravel", "JavaScript", "CSS", "MySQL"],
      link: "https://github.com/SalehMall",
      repo: "https://github.com/SalehMall",
      image: "/project/Sistem Manajemen Data Obat Apotek.png",
      category: "Web App",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      title: "Sistem Informasi Kegiatan Proyek",
      desc: "Sistem untuk mengelola dan memonitor kegiatan proyek, termasuk timeline, progress, dan dokumentasi proyek.",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"],
      link: "https://github.com/SalehMall",
      repo: "https://github.com/SalehMall",
      image: "/project/Sistem Informasi Kegiatan Proyek (welcome).png",
      category: "Web App",
      color: "from-purple to-pink",
    },
    {
      id: 4,
      title: "Sistem Pencarian Coffee Shop",
      desc: "Aplikasi pencarian coffee shop terdekat, termurah, dan terpopuler berdasarkan lokasi pengguna.",
      tech: ["React.js", "Laravel", "MySQL", "API"],
      link: "https://github.com/SalehMall/rekomendasi-coffeeshop.git",
      repo: "https://github.com/SalehMall/rekomendasi-coffeeshop.git",
      image: "/project/Sistem Pencarian Coffee Shop.png",
      category: "Web App",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 5,
      title: "Sistem Arsiparis",
      desc: "Sistem platform digital yang digunakan untuk manajemen kearsipan yang aman dan terorganisir.",
      tech: ["Laravel", "MySQL", "JavaScript", "tailwindcss"],
      link: "https://github.com/SalehMall",
      repo: "https://github.com/SalehMall",
      image: "/project/arsip.png",
      category: "Web App",
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: 6,
      title: "Sistem Monitoring Aktifitas Peserta Pelatihan",
      desc:  "Sistem monitoring berbasis web yang menyajikan data kehadiran, tugas, dan perkembangan peserta pelatihan secara real-time guna memastikan efektivitas evaluasi.",
      tech: ["Laravel", "MySQL", "JavaScript", "tailwindcss"],
      link: "https://github.com/SalehMall",
      repo: "https://github.com/SalehMall",
      image: "/project/aktifitas-magang.png",
      category: "Web App",
      color: "from-emerald-500 to-teal-600",
    },
    // ==========================================
    // PROYEK BARU YANG DITAMBAHKAN
    // ==========================================
    {
      id: 7,
      title: "SITANGKAS (Sistem Perjalanan Dinas)",
      desc: "Sistem informasi manajemen perjalanan dinas untuk mempermudah pengajuan, persetujuan, dan pelaporan kegiatan dinas pegawai.",
      tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
      link: "https://github.com/SalehMall",
      repo: "https://github.com/SalehMall",
      image: "/project/sitangkas.png", // Ganti dengan nama file gambar yang sesuai
      category: "Web App",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 8,
      title: "Sistem E-Cuti",
      desc: "Aplikasi pengelolaan cuti pegawai secara digital, mencakup alur persetujuan atasan dan rekapitulasi sisa cuti secara real-time.",
      tech: ["Laravel", "MySQL", "TailwindCSS", "JavaScript"],
      link: "https://github.com/SalehMall",
      repo: "https://github.com/SalehMall",
      image: "/project/e-cuti.png", // Ganti dengan nama file gambar yang sesuai
      category: "Web App",
      color: "from-rose-500 to-red-600",
    },
    {
      id: 9,
      title: "Sistem Inventaris Gudang",
      desc: "Sistem manajemen stok barang di gudang dengan fitur pencatatan barang masuk, barang keluar, dan laporan ketersediaan inventaris.",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"],
      link: "https://github.com/SalehMall",
      repo: "https://github.com/SalehMall",
      image: "/project/inventaris.png", // Ganti dengan nama file gambar yang sesuai
      category: "Web App",
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: 10,
      title: "Mengembangkan fitur-fitur Website BPVP Kendari",
      desc: "Mengoptimalkan antarmuka pengguna (UI/UX) dan mengembangkan fitur-fitur tambahan pada website resmi BPVP Kendari",
      tech: ["Laravel", "TailwindCSS", "JavaScript", "MySQL"],
      link: "https://github.com/SalehMall",
      repo: "https://github.com/SalehMall",
      image: "/project/bpvp-kendari.png", // Ganti dengan nama file gambar yang sesuai
      category: "Website",
      color: "from-indigo-500 to-violet-600",
    },
  ];

  return (
    <div name="work" className="relative w-full py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, staggerChildren: 0.08, delayChildren: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="inline-block px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-accent text-sm font-semibold mb-4"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-[var(--text-main)]">Selected </span>
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="text-secondary max-w-2xl mx-auto"
          >
            Beberapa proyek terpilih yang telah saya kerjakan
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative flex flex-col h-full"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
              />

              <div className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm dark:shadow-none transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white shadow-lg`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-0 flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-colors"
                        >
                          <FaEye size={18} />
                        </motion.a>
                        <motion.a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-colors"
                        >
                          <FaGithub size={18} />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-purple transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm mb-4 line-clamp-3 flex-grow">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded text-xs bg-[var(--bg-main)] border border-[var(--border-color)] text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-[var(--border-color)] mt-auto">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-secondary hover:text-[var(--text-main)] transition-colors"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/SalehMall"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all duration-300 group"
          >
            <FaGithub className="text-xl" />
            <span>View More on GitHub</span>
            <FaExternalLinkAlt
              size={12}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </motion.div>

        {/* Bottom Divider */}
        <div className="mt-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default Work;