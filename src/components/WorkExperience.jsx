import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Pranata Komputer Magang",
      company: "Balai Prasarana Permukiman Wilayah (BPPW) Sulawesi Tenggara",
      location: "Kendari, Sulawesi Tenggara",
      period: "1 Februari 2024 - 31 Agustus 2025",
      type: "Internship",
      description:
        "Magang di instansi pemerintah dengan fokus pengembangan sistem informasi dan dukungan IT.",
      responsibilities: [
        "Mengembangkan sistem informasi pemetaan proyek dari tahap perencanaan hingga implementasi sistem",
        "Melaksanakan tugas dukungan administratif dan pengolahan data untuk mendukung operasional divisi kepegawaian",
        "Mengasah kemampuan teknis dalam pengembangan sistem",
        "Beradaptasi dengan lingkungan kerja pemerintahan dan SOP yang berlaku",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    },
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case "Internship":
        return {
          bg: "bg-blue-500/10",
          text: "text-blue-400",
          border: "border-blue-500/30",
          gradient: "from-blue-500 to-cyan-500",
        };
      case "Full-time":
        return {
          bg: "bg-green-500/10",
          text: "text-green-400",
          border: "border-green-500/30",
          gradient: "from-green-500 to-emerald-500",
        };
      default:
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          border: "border-accent/30",
          gradient: "from-accent to-purple",
        };
    }
  };

  return (
    <div name="workexperience" className="relative w-full py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Work </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Pengalaman Kerja & Magang
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-purple to-pink transform -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => {
            const styles = getTypeStyles(exp.type);
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:w-[calc(50%-30px)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 w-4 h-4 rounded-full bg-gradient-to-r from-accent to-purple border-4 border-dark transform -translate-y-1/2 z-10 shadow-glow-sm"
                  style={{
                    left: index % 2 === 0 ? "calc(100% + 22px)" : "-30px",
                  }}
                />

                {/* Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple to-pink rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />

                  <div className="relative p-6 md:p-8 rounded-2xl bg-dark/80 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${styles.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <FaBriefcase className="text-white text-xl" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${styles.bg} ${styles.text} border ${styles.border}`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-secondary">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-accent" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary mb-6">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <FaCheckCircle className="text-accent" />
                        Tanggung Jawab
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-secondary text-sm"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs glass text-accent border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <div className="mt-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default WorkExperience;
