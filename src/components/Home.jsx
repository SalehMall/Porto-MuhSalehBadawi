import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaDownload, FaPlay } from "react-icons/fa";

const PARTICLES = [
  { id: 0, initialX: 100, initialY: 50, animateY: -80, duration: 15, delay: 0 },
  { id: 1, initialX: 200, initialY: 150, animateY: -120, duration: 18, delay: 1 },
  { id: 2, initialX: 350, initialY: 80, animateY: -90, duration: 12, delay: 2 },
  { id: 3, initialX: 500, initialY: 200, animateY: -110, duration: 16, delay: 0.5 },
  { id: 4, initialX: 650, initialY: 100, animateY: -70, duration: 14, delay: 1.5 },
  { id: 5, initialX: 800, initialY: 180, animateY: -130, duration: 19, delay: 2.5 },
  { id: 6, initialX: 150, initialY: 300, animateY: -100, duration: 17, delay: 3 },
  { id: 7, initialX: 400, initialY: 350, animateY: -85, duration: 13, delay: 0.8 },
  { id: 8, initialX: 600, initialY: 400, animateY: -95, duration: 15, delay: 1.2 },
  { id: 9, initialX: 750, initialY: 280, animateY: -115, duration: 11, delay: 2.8 },
  { id: 10, initialX: 50, initialY: 450, animateY: -75, duration: 20, delay: 3.5 },
  { id: 11, initialX: 300, initialY: 500, animateY: -105, duration: 16, delay: 4 },
  { id: 12, initialX: 550, initialY: 520, animateY: -88, duration: 14, delay: 1.8 },
  { id: 13, initialX: 700, initialY: 480, animateY: -125, duration: 18, delay: 2.2 },
  { id: 14, initialX: 850, initialY: 380, animateY: -92, duration: 12, delay: 0.3 },
];

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div
      name="home"
      className="relative min-h-screen w-full overflow-hidden bg-dark"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-60"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-purple/20 rounded-full blur-[120px] opacity-50"
        />
        <motion.div
          animate={{
            x: mousePosition.x * 1.5,
            y: mousePosition.y * -1.5,
          }}
          transition={{ type: "spring", damping: 30 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink/10 rounded-full blur-[100px] opacity-40"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Floating Particles */}
        {PARTICLES.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              y: [null, particle.animateY],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="absolute w-1 h-1 bg-accent/50 rounded-full"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-6 py-20 gap-12">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl sm:text-2xl font-medium text-secondary mb-2">
              Hi, I'm
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">Muh Saleh</span>
              <br />
              <span className="text-white">Badawi</span>
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            variants={itemVariants}
            className="h-16 flex items-center justify-center lg:justify-start mb-6"
          >
            <TypeAnimation
              sequence={[
                "Fresh Graduate Teknik Informatika",
                2000,
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Front-end developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple to-pink"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-secondary text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Lulusan Teknik Informatika dengan passion dalam pengembangan web
            dan desain UI/UX. Siap berkontribusi dan terus berkembang sebagai
            profesional IT.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="work"
              smooth
              duration={500}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-dark font-semibold rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-purple to-pink animate-gradient bg-[length:200%_200%]" />
              <span className="relative flex items-center gap-2">
                <FaPlay size={12} />
                Lihat Portfolio
                <MdOutlineKeyboardArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>

            <a
              href="/CV MUH SALEH BADAWI.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <FaDownload size={14} />
              Download CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 mt-12 justify-center lg:justify-start"
          >
            {[
              { value: "3.65", label: "IPK" },
              { value: "4+", label: "Certifications" },
              { value: "2+", label: "Bootcamps" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-secondary text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image / 3D Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative">
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-dashed border-accent/30"
            />

            {/* Glowing Background */}
            <div className="absolute inset-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] m-auto rounded-full bg-gradient-to-br from-accent/30 via-purple/20 to-pink/30 blur-2xl" />

            {/* Profile Container */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-purple to-pink p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-dark" />
              </div>

              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src="/dawi.jpg"
                  alt="Muh Saleh Badawi"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Tech Icons */}
            {[
              { icon: "⚛️", delay: 0, position: "top-0 left-0" },
              { icon: "🎨", delay: 1, position: "top-0 right-0" },
              { icon: "💻", delay: 2, position: "bottom-0 left-0" },
              { icon: "📊", delay: 3, position: "bottom-0 right-0" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: [0, -10, 0] }}
                transition={{
                  scale: { delay: 1 + item.delay * 0.2 },
                  y: { duration: 3, repeat: Infinity, delay: item.delay * 0.5 },
                }}
                className={`absolute ${item.position} w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl shadow-glow-sm`}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth duration={500} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-secondary hover:text-accent transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-current"
              />
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
