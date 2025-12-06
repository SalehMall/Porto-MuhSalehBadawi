import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "kemalbadawi@gmail.com",
      href: "mailto:kemalbadawi@gmail.com",
      color: "from-accent to-blue-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+62 822 3041 5952",
      href: "tel:+62",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Kendari, Sulawesi Tenggara",
      href: "#",
      color: "from-purple to-pink",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muh-saleh-badawi-4366632a4",
      color: "hover:text-blue-500",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/SalehMall",
      color: "hover:text-white",
    },
  ];

  return (
    <div name="contact" className="relative w-full py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-secondary text-sm">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary ${social.color} transition-all duration-300`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl glass"
            >
              <p className="text-secondary text-sm leading-relaxed">
                Saya selalu terbuka untuk peluang baru dan kolaborasi menarik.
                Jika Anda memiliki proyek atau ide yang ingin didiskusikan,
                jangan ragu untuk menghubungi saya!
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple to-pink rounded-2xl blur opacity-20" />

              <form
                onSubmit={handleSubmit}
                className="relative p-8 rounded-2xl bg-dark/80 backdrop-blur-xl border border-white/5"
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Send Message
                </h3>

                {/* Name Input */}
                <div className="mb-6">
                  <label className="block text-secondary text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-6">
                  <label className="block text-secondary text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Input */}
                <div className="mb-8">
                  <label className="block text-secondary text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-dark flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500"
                      : "bg-gradient-to-r from-accent via-purple to-pink hover:opacity-90"
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full"
                    />
                  ) : isSubmitted ? (
                    <>
                      <FaCheckCircle />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          <p className="text-secondary text-sm">
            Designed & Built by{" "}
            <span className="text-accent font-medium">Muh Saleh Badawi</span>
          </p>
          <p className="text-secondary/50 text-xs mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
