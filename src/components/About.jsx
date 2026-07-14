import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaDatabase, FaGraduationCap } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: FaGraduationCap, value: "3.65", label: "IPK / 4.0", color: "from-accent to-cyan-400" },
    { icon: FaCode, value: "6+", label: "Certifications", color: "from-purple to-violet-400" },
    { icon: FaPalette, value: "2+", label: "Bootcamp Programs", color: "from-pink to-rose-400" },
    { icon: FaDatabase, value: "2025", label: "Graduate Year", color: "from-amber-500 to-yellow-400" },
  ];

  const highlights = [
    "Pemahaman mendalam tentang pemrograman dan pengembangan web",
    "Kemampuan komunikasi yang baik dan kolaboratif dalam tim",
    "Terbiasa bekerja dengan target dan deadline",
    "Pengalaman magang di instansi pemerintah (BPPW Sultra)",
    "Lulusan program MSIB Kampus Merdeka & FGA Kominfo",
  ];

  return (
    <div name="about" className="relative w-full min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />

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
            Get to know me
          </motion.span>
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-[var(--text-main)]">About </span>
            <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-accent via-purple to-pink mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-xl text-secondary leading-relaxed">
                Saya adalah lulusan jurusan{" "}
                <span className="text-[var(--text-main)] font-semibold">Teknik Informatika</span> dari{" "}
                <span className="text-accent font-semibold">Universitas Halu Oleo</span> dengan
                pemahaman mendalam tentang pemrograman dan pengembangan web.
              </p>

              <p className="text-lg text-secondary leading-relaxed">
                Terbiasa bekerja dengan target dan memiliki pengalaman dalam
                pengembangan sistem informasi melalui magang di Balai Prasarana
                Permukiman Wilayah (BPPW) Sulawesi Tenggara.
              </p>

              <p className="text-lg text-secondary leading-relaxed">
                Telah menyelesaikan berbagai program pelatihan intensif termasuk
                MSIB Kampus Merdeka dan Fresh Graduate Academy Kominfo. Memiliki
                motivasi tinggi untuk terus belajar dan berkembang.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[var(--text-main)] mb-4">Highlights:</h3>
              <ul className="space-y-3">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-secondary"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-purple flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm dark:shadow-none overflow-hidden transition-all duration-300"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="text-white text-xl" />
                  </div>

                  {/* Value */}
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-secondary text-sm font-medium">
                    {stat.label}
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default About;
