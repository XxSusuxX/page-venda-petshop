import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#161d19",
        "surface-container": "#1a211d",
        "surface-container-high": "#242c27",
        "surface-container-highest": "#2f3632",
        "surface-container-lowest": "#09100c",
        "on-primary": "#003824",
        "on-surface": "#dde4dd",
        "on-surface-variant": "#bbcabf",
        "on-background": "#dde4dd",
        surface: "#0e1511",
        background: "#0e1511",
        "matte-canvas": "#0f1419",
        primary: "#4edea3",
        "primary-container": "#10b981",
        "elevated-card": "#1e293b",
        "hairline-border": "#334155",
        "warning-amber": "#f59e0b",
        "emerald-glow": "#064e3b",
        outline: "#86948a",
      },
      fontFamily: {
        body: ["Hanken Grotesk", "sans-serif"],
        headline: ["Hanken Grotesk", "sans-serif"],
      },
      animation: {
        /* ─── Entrance ─── */
        "fade-in-up": "fadeInUp 0.65s cubic-bezier(0.23, 1, 0.32, 1) both",
        "fade-in": "fadeIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) both",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) both",
        "slide-in-left": "slideInLeft 0.65s cubic-bezier(0.23, 1, 0.32, 1) both",
        "slide-in-right": "slideInRight 0.65s cubic-bezier(0.23, 1, 0.32, 1) both",
        /* ─── Looping ─── */
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        /* ─── Interaction ─── */
        "bounce-soft": "bounceSoft 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.65" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(78, 222, 163, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(78, 222, 163, 0.4), 0 0 80px rgba(78, 222, 163, 0.15)" },
        },
        bounceSoft: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "60%": { transform: "scale(1.03)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "strong-out": "cubic-bezier(0.23, 1, 0.32, 1)",
        "strong-in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
        "drawer": "cubic-bezier(0.32, 0.72, 0, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        "250": "250ms",
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};
export default config;
