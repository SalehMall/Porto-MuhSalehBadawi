import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCalendar, FaExternalLinkAlt, FaAward } from "react-icons/fa";

const Training = () => {
  const trainings = [
    {
      id: 1,
      title: "Studi Independen Bersertifikat (MSIB) Angkatan 6",
      provider: "Kampus Merdeka (Kemendikbudristek) & Celerates",
      date: "Februari 2024 - Juli 2024",
      credentialId: "8163439",
      description:
        "Program intensif dengan fokus pada Web Development & UI/UX Design. Mendapatkan pemahaman mendalam tentang alur profesional mulai dari riset pengguna, wireframe, desain UI, hingga development dan deployment.",
      skills: ["Web Development", "UI/UX Design", "Wireframe", "Prototyping", "Development"],
      link: "/Sertifikat/Sertifikat Studi Independent.pdf",
      color: "from-purple to-pink",
      icon: "🎓",
    },
    {
      id: 2,
      title: "Big Data Using Python (FGA Digital Talent Scholarship)",
      provider: "Kementerian Kominfo",
      date: "Juli 2023 - September 2023",
      credentialId: "1956670106018/FGA/BLSDM.Kominfo/2023",
      description:
        "Pelatihan intensif Fresh Graduate Academy selama 130 jam dengan spesialisasi Analisis Data menggunakan Python. Menguasai teknik pengolahan, analisis, visualisasi data, SQL, dan OOP Python.",
      skills: ["Python", "Data Analysis", "SQL", "Data Visualization", "OOP"],
      link: "/Sertifikat/Fga big data.pdf",
      color: "from-accent to-blue-500",
      icon: "📊",
    },
    {
      id: 3,
      title: "Oracle Academy - Database Foundations",
      provider: "Oracle Academy",
      date: "2023",
      credentialId: "Award Of Final Exam Completion",
      description:
        "Sertifikasi dari Oracle Academy yang mencakup dasar-dasar database, SQL, dan manajemen data dalam sistem database Oracle.",
      skills: ["SQL", "Database", "Oracle", "Data Management"],
      link: "/Sertifikat/clmsCertificate(oracle).pdf",
      color: "from-red-500 to-orange-500",
      icon: "🗄️",
    },
    {
      id: 4,
      title: "Google Play Academy",
      provider: "Google",
      date: "2023",
      credentialId: "Google Play Academy Certificate",
      description:
        "Program pelatihan dari Google untuk pengembangan dan publikasi aplikasi di Google Play Store.",
      skills: ["Android", "App Development", "Play Store", "App Publishing"],
      link: "/Sertifikat/Google Play Academy_Muh saleh badawi.pdf",
      color: "from-green-500 to-emerald-500",
      icon: "📱",
    },
    {
      id: 5,
      title: "SkillFest 2025: Transformasi Digital",
      provider: "UNDP, Microsoft & Biji-Biji Initiative",
      date: "Mei 2025",
      credentialId: "059/SERT-TALKSHOW/DGS/V/2025",
      description:
        "Berpartisipasi dalam talkshow SkillFest 2025 mengenai peluang & tantangan transformasi digital serta strategi menyusun peta jalan karier bagi mahasiswa.",
      skills: ["Digital Transformation", "Career Roadmap", "Digital Skills", "Future Readiness"],
      link: "/Sertifikat/Skill-Our-Future-2025.pdf",
      color: "from-blue-600 to-indigo-700",
      icon: "🌐",
    },   
    // INI ADALAH DATA SERTIFIKAT BARU YANG DITAMBAHKAN
    {
      id: 6,
      title: "Program Pemagangan: Pranata Komputer",
      provider: "KEMNAKER (BPVP Kendari)",
      date: "Desember 2025 - Juni 2026",
      credentialId: "MN.074.017872.03.2025",
      description:
        "Menyelesaikan Program Pemagangan Lulusan Perguruan Tinggi yang dilaksanakan oleh BPVP Kendari pada posisi Pranata Komputer dengan predikat SANGAT BAIK.",
      skills: ["Pranata Komputer", "IT Support", "Sistem Informasi", "IT Administration"],
      link: "/Sertifikat/Sertifikat_Magang_KEMNAKER.pdf", // Pastikan nama file PDF Anda sesuai dengan ini
      color: "from-cyan-500 to-blue-600", // Menggunakan warna cyan/biru menyesuaikan warna tema KEMNAKER
      icon: "💻",
    },
  ];

  return (
    <div name="training" className="relative w-full py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/95" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

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
            className="inline-block px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-purple text-sm font-semibold mb-4"
          >
            Continuous Learning
          </motion.span>
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-[var(--text-main)]">Training & </span>
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="text-secondary max-w-2xl mx-auto"
          >
            Pelatihan dan Sertifikasi Profesional
          </motion.p>
        </motion.div>

        {/* Training Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trainings.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${training.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
              />

              <div className="relative h-full p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm dark:shadow-none transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${training.color} flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}
                  >
                    {training.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-main)] mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-purple transition-all duration-300">
                      {training.title}
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      {training.provider}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-secondary mb-4">
                  <FaCalendar className="text-accent" />
                  <span>{training.date}</span>
                </div>

                {/* Description */}
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {training.description}
                </p>

                {/* Credential ID */}
                <div className="mb-6 p-3 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)]">
                  <p className="text-xs text-secondary mb-1">Credential ID:</p>
                  <p className="text-sm text-[var(--text-main)] font-mono truncate">
                    {training.credentialId}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {training.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${training.color} bg-opacity-10 text-[var(--text-main)] border border-[var(--border-color)]`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Link */}
                <a
                  href={training.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-accent text-sm hover:text-[var(--text-main)] transition-colors group/link"
                >
                  <FaCertificate />
                  <span>View Certificate</span>
                  <FaExternalLinkAlt
                    size={10}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm dark:shadow-none max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaAward className="text-amber-500 text-2xl" />
            <h3 className="text-xl font-bold text-[var(--text-main)]">Program Highlights</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text">130+</div>
              <div className="text-secondary text-sm">Training Hours</div>
            </div>
            <div>
              {/* Jumlah sertifikat diubah menjadi 6 */}
              <div className="text-3xl font-bold gradient-text">6</div>
              <div className="text-secondary text-sm">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-secondary text-sm">Skills Acquired</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <div className="mt-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default Training;