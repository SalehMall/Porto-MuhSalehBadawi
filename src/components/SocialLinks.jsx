import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muh-saleh-badawi-4366632a4",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-400",
      hoverColor: "hover:shadow-blue-500/50",
    },
    {
      id: 2,
      icon: FaGithub,
      href: "https://github.com/SalehMall",
      label: "GitHub",
      color: "from-gray-700 to-gray-500",
      hoverColor: "hover:shadow-gray-500/50",
    },
    {
      id: 3,
      icon: HiOutlineMail,
      href: "mailto:kemalbadawi@gmail.com",
      label: "Email",
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:shadow-red-500/50",
    },
    {
      id: 4,
      icon: BsFillPersonLinesFill,
      href: "/CV-MUH SALEH BADAWI.pdf",
      label: "Resume",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:shadow-green-500/50",
      download: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex flex-col fixed top-[35%] left-0 z-40"
    >
      <ul className="flex flex-col gap-2">
        {links.map((link) => {
          const IconComp = link.icon;
          return (
            <motion.li
              key={link.id}
              variants={itemVariants}
              whileHover={{ x: 0 }}
              initial={{ x: -70 }}
              className="relative"
            >
              <motion.a
                href={link.href}
                download={link.download}
                target={link.download ? undefined : "_blank"}
                rel="noreferrer"
                whileHover={{ x: 70 }}
                className={`flex items-center w-36 h-12 pl-4 rounded-r-full bg-gradient-to-r ${link.color} text-white shadow-lg ${link.hoverColor} hover:shadow-xl transition-all duration-300`}
              >
                <span className="font-medium text-sm">{link.label}</span>
                <IconComp size={24} className="absolute right-3" />
              </motion.a>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
