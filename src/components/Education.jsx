import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaMedal } from "react-icons/fa";

const Education = () => {
  const educationData = {
    degree: "Sarjana Teknik (S.T)",
    major: "Teknik Informatika",
    institution: "Universitas Halu Oleo",
    location: "Kendari, Sulawesi Tenggara",
    period: "2021 - 2025",
    gpa: "3.65 / 4.00",
    achievements: [
      "Ketua Divisi Keagamaan Himpunan Mahasiswa Teknik Informatika (2023-2024)",
      "Aktif dalam program MSIB Kampus Merdeka",
      "Menyelesaikan magang di instansi pemerintah",
    ],
    relevantCourses: [
      "Web Development",
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Software Engineering",
      "UI/UX Design",
      "Big Data Analysis",
    ],
  };

  return (
    <div name="education" className="relative w-full py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
            className="inline-block px-4 py-2 rounded-full glass text-purple text-sm font-medium mb-4"
          >
            Academic Background
          </motion.span>
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">My </span>
            <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="text-secondary max-w-2xl mx-auto"
          >
            Riwayat Pendidikan Formal
          </motion.p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple to-pink rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500" />

            <div className="relative p-8 md:p-10 rounded-3xl bg-dark/80 backdrop-blur-xl border border-white/5">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple to-accent flex items-center justify-center shadow-glow-purple flex-shrink-0"
                >
                  <FaGraduationCap className="text-white text-3xl" />
                </motion.div>

                {/* Title & Info */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {educationData.degree}
                  </h3>
                  <p className="text-xl text-accent font-medium mb-4">
                    {educationData.major}
                  </p>
                  <p className="text-lg text-secondary">{educationData.institution}</p>
                </div>

                {/* GPA Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                >
                  <div className="px-6 py-4 rounded-2xl glass text-center">
                    <div className="text-sm text-secondary mb-1">IPK</div>
                    <div className="text-3xl font-bold gradient-text">
                      {educationData.gpa.split(" ")[0]}
                    </div>
                    <div className="text-xs text-secondary">/ 4.00</div>
                  </div>
                </motion.div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-white/5">
                <div className="flex items-center gap-2 text-secondary">
                  <FaCalendar className="text-accent" />
                  <span>{educationData.period}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <FaMapMarkerAlt className="text-accent" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <FaMedal className="text-amber-500" />
                  <h4 className="text-lg font-semibold text-white">Pencapaian</h4>
                </div>
                <ul className="space-y-3">
                  {educationData.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-secondary"
                  >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-purple flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Relevant Courses */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Mata Kuliah Relevan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {educationData.relevantCourses.map((course, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full glass text-sm text-accent border border-accent/20 hover:border-accent/50 transition-colors cursor-default"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <div className="mt-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default Education;
