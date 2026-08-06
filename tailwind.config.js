/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cute: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // warm Delhi-evening palette
      colors: {
        night: "#1b1033",
        dusk: "#2a1547",
        plum: "#5b2a72",
        rose: "#ff6f91",
        marigold: "#ffb454",
        cream: "#fff4e6",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(255, 111, 145, 0.45)",
      },
      keyframes: {
        "chapter-in": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        confetti: {
          "0%": { opacity: "0", transform: "translateY(-10px) rotate(0deg)" },
          "15%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(110px) rotate(320deg)" },
        },
        pop: {
          "0%": { transform: "scale(0.4)", opacity: "0" },
          "60%": { transform: "scale(1.15)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "chapter-in": "chapter-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        confetti: "confetti 2.4s ease-in infinite",
        pop: "pop 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
