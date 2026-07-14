import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "education", label: "Education" },
    { id: 4, link: "workexperience", label: "Experience" },
    { id: 5, link: "training", label: "Training" },
    { id: 6, link: "achievements", label: "Achievements" },
    { id: 7, link: "experience", label: "Skills" },
    { id: 8, link: "work", label: "Projects" },
    { id: 9, link: "contact", label: "Contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[var(--bg-card)]/80 backdrop-blur-xl border-b border-[var(--border-color)] shadow-lg shadow-black/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link to="home" smooth duration={500}>
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="gradient-text">MSB</span>
              <span className="text-[var(--text-main)]">.</span>
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection(link)}
                className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 rounded-full ${
                  activeSection === link
                    ? "text-[var(--text-main)]"
                    : "text-secondary hover:text-[var(--text-main)]"
                }`}
              >
                {activeSection === link && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-[var(--accent-primary)]/10 rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Nav Action: Theme Toggle & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:bg-[var(--accent-primary)]/10 transition-colors shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
          </motion.button>

          <Link to="contact" smooth duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-purple to-pink opacity-100 group-hover:opacity-90 transition-opacity" />
              <span className="relative text-white dark:text-dark font-semibold text-sm">
                Hire Me
              </span>
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Actions */}
        <div className="lg:hidden flex items-center gap-3 relative z-50">
          {/* Mobile Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] transition-colors shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setNav(!nav)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)]"
          >
            <AnimatePresence mode="wait">
              {nav ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 top-0 bg-[var(--bg-main)]/95 backdrop-blur-xl z-40"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {/* Mobile Links */}
              <motion.ul className="flex flex-col items-center gap-2">
                {links.map(({ id, link, label }) => (
                  <motion.li key={id} variants={mobileItemVariants}>
                    <Link
                      onClick={() => setNav(false)}
                      to={link}
                      smooth
                      duration={500}
                      className="relative px-8 py-4 text-2xl font-medium text-secondary hover:text-[var(--text-main)] transition-colors cursor-pointer group"
                    >
                      <span className="relative z-10">{label}</span>
                      <motion.span
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-purple group-hover:w-full transition-all duration-300"
                      />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Mobile CTA */}
              <motion.div variants={mobileItemVariants} className="mt-8">
                <Link to="contact" smooth duration={500} onClick={() => setNav(false)}>
                  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-accent via-purple to-pink text-white dark:text-dark font-semibold">
                    Hire Me
                  </button>
                </Link>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
