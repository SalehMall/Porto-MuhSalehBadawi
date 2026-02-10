import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";
import {
  SiPython,
  SiPhp,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiGit,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { HiDocumentText } from "react-icons/hi";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills", icon: FaCode },
    { id: "programming", label: "Programming", icon: FaCode },
    { id: "database", label: "Database", icon: FaDatabase },
    { id: "tools", label: "Tools", icon: FaTools },
    { id: "softskill", label: "Soft Skills", icon: FaBrain },
  ];

  const skills = [
    // Programming Languages (sesuai CV)
    {
      name: "Python",
      icon: SiPython,
      category: "programming",
      color: "from-yellow-500 to-blue-500",
    },
    {
      name: "PHP",
      icon: SiPhp,
      category: "programming",
      color: "from-indigo-500 to-purple",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      category: "programming",
      color: "from-yellow-400 to-yellow-600",
    },
    // Database (sesuai CV)
    {
      name: "MySQL",
      icon: SiMysql,
      category: "database",
      color: "from-blue-500 to-orange-500",
    },
    // Tools & Software (sesuai CV)
    {
      name: "VS Code",
      icon: VscCode,
      category: "tools",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Git",
      icon: SiGit,
      category: "tools",
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Postman",
      icon: SiPostman,
      category: "tools",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Microsoft Office",
      icon: HiDocumentText,
      category: "tools",
      color: "from-red-500 to-orange-500",
    },
    // Soft Skills (sesuai CV)
    {
      name: "Pemecahan Masalah",
      icon: FaBrain,
      category: "softskill",
      color: "from-purple to-pink",
    },
    {
      name: "Berfikir Analitis",
      icon: FaBrain,
      category: "softskill",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Kerja Sama Tim",
      icon: FaBrain,
      category: "softskill",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Manajemen Waktu",
      icon: FaBrain,
      category: "softskill",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div name="experience" className="relative w-full py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, staggerChildren: 0.08, delayChildren: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-4"
          >
            What I Do Best
          </motion.span>
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">Technical </span>
            <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="text-secondary max-w-2xl mx-auto"
          >
            Keahlian dan Teknologi yang Saya Kuasai
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => {
            const IconCat = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-accent to-purple text-dark"
                    : "glass text-secondary hover:text-white"
                }`}
              >
                <IconCat size={16} />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
                  />

                  <div className="relative p-6 rounded-2xl bg-dark/80 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <SkillIcon className="text-white text-3xl" />
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              icon: FaCode,
              value: "3",
              label: "Programming Languages",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: FaDatabase,
              value: "1",
              label: "Database System",
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: FaTools,
              value: "4",
              label: "Dev Tools",
              color: "from-purple to-pink",
            },
            {
              icon: FaBrain,
              value: "4",
              label: "Soft Skills",
              color: "from-amber-500 to-orange-500",
            },
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl glass group cursor-pointer"
              >
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <StatIcon className="text-white text-xl" />
                  </div>
                </div>
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-secondary text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Divider */}
        <div className="mt-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default Experience;
