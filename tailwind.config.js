/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "var(--bg-main)",
        darker: "var(--bg-card)",
        light: "#f8fafc",
        accent: "var(--accent-primary)",
        "accent-light": "#22d3ee",
        "accent-dark": "#0891b2",
        secondary: "var(--text-muted)",
        purple: "var(--accent-secondary)",
        "purple-light": "#a78bfa",
        pink: "#ec4899",
        "pink-light": "#f472b6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        float: "float 6s ease-in-out infinite",
        "gradient": "gradient-shift 4s ease infinite",
        "glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(6, 182, 212, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "linear-gradient(135deg, var(--bg-main) 0%, var(--bg-card) 50%, var(--bg-main) 100%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px var(--glow-color)",
        "glow-md": "0 0 30px var(--glow-color)",
        "glow-lg": "0 0 50px var(--glow-color)",
        "glow-purple": "0 0 30px rgba(139, 92, 246, 0.4)",
        "glow-pink": "0 0 30px rgba(236, 72, 153, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
