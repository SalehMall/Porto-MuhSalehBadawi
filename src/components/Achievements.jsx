import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar, FaAward, FaUsers } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Ketua Divisi Keagamaan HMTI",
      category: "Leadership",
      organizer: "Himpunan Mahasiswa Teknik Informatika UHO",
      date: "2023 - 2024",
      description:
        "Memimpin divisi keagamaan dalam mengorganisir berbagai kegiatan rohani dan sosial untuk anggota himpunan",
      icon: FaUsers,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 2,
      title: "MSIB Kampus Merdeka Batch 6",
      category: "Program",
      organizer: "Kemendikbudristek & Celerates",
      date: "Feb - Jul 2024",
      description:
        "Berhasil menyelesaikan program Studi Independen Bersertifikat dengan fokus Web Development & UI/UX Design",
      icon: FaAward,
      color: "from-purple to-violet-500",
    },
    {
      id: 3,
      title: "Fresh Graduate Academy Kominfo",
      category: "Program",
      organizer: "Kementerian Kominfo",
      date: "Jul - Sep 2023",
      description:
        "Menyelesaikan program Digital Talent Scholarship dengan spesialisasi Big Data Using Python selama 130 jam",
      icon: FaMedal,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "Magang di Instansi Pemerintah",
      category: "Experience",
      organizer: "BPPW Sulawesi Tenggara",
      date: "2024",
      description:
        "Berhasil menyelesaikan program magang dengan mengembangkan sistem informasi pemetaan proyek",
      icon: FaStar,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const getCategoryStyle = (category) => {
    switch (category) {
      case "Competition":
        return "bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/30";
      case "Program":
        return "bg-purple/10 text-purple border-purple/30";
      case "Leadership":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
      case "Experience":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30";
      default:
        return "bg-accent/10 text-accent border-accent/30";
    }
  };

  return (
    <div name="achievements" className="relative w-full py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-amber-500 text-sm font-semibold mb-4">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[var(--text-main)]">My </span>
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Pencapaian dan Penghargaan
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                />

                <div className="relative h-full p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm dark:shadow-none transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="text-white text-2xl" />
                    </motion.div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs border ${getCategoryStyle(
                        achievement.category
                      )}`}
                    >
                      {achievement.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[var(--text-main)] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--text-main)] group-hover:to-accent transition-all duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-accent text-sm font-medium mb-2">
                    {achievement.organizer}
                  </p>

                  <p className="text-secondary text-xs mb-4">{achievement.date}</p>

                  <p className="text-secondary text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative Element */}
                  <div
                    className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "2", label: "National Programs", color: "text-purple" },
            { value: "1", label: "Leadership Role", color: "text-blue-600 dark:text-blue-400" },
            { value: "1", label: "Internship", color: "text-green-600 dark:text-green-400" },
            { value: "4+", label: "Certifications", color: "text-amber-500 dark:text-amber-400" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm dark:shadow-none"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Divider */}
        <div className="mt-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default Achievements;
