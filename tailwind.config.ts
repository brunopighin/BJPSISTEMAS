import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "#7C3AED",
          light:   "#B78BFA",
          soft:    "#9C66F0",
          dark:    "#5B21B6",
          neon:    "#C084FC",
          glow:    "#8B5CF6",
        },
        accent: {
          DEFAULT: "#3B82F6",
          soft:    "#60A5FA",
          muted:   "#2563EB",
        },
        electric: {
          blue: "#2563EB",
          cyan: "#06B6D4",
        },
        text: {
          DEFAULT: "#F0F0F5",
          muted:   "#8B8BA7",
          subtle:  "#5A5A72",
        },
        bg: {
          DEFAULT:   "#0E0E12",
          secondary: "#13131A",
          card:      "#17171F",
        },
      },
      animation: {
        "spin-slow":      "spin 10s linear infinite",
        "pulse-glow":     "pulseGlow 3s ease-in-out infinite",
        float:            "float 6s ease-in-out infinite",
        "float-delay":    "float 6s ease-in-out 2s infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":       { opacity: "1",   transform: "scale(1.04)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":       { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
