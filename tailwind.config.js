/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          base: "#0a0e17",
          card: "#111827",
          border: "#1f2937",
        },
        accent: {
          teal: "#2dd9a8",
          purple: "#8b7cf6",
        },
        ink: {
          DEFAULT: "#eef1f7",
          muted: "#8b96ad",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0, 0, 0, 0.45)",
        glow: "0 0 0 1px rgba(45, 217, 168, 0.25), 0 18px 40px -16px rgba(45, 217, 168, 0.35)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floatIn: "floatIn 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
