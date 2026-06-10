/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08202b",
        navy: "#0b2a38",
        harbor: "#123847",
        panel: "#174456",
        line: "rgba(186, 225, 229, 0.16)",
        fog: "#f2fbfb",
        mist: "#c1d7dc",
        seafoam: "#35e0ca",
        aqua: "#7de7ee",
        gold: "#f3b85b",
        sunset: "#ff8d5b"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        display: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 40px rgba(53, 224, 202, 0.14)",
        lift: "0 24px 70px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "chart-lines":
          "linear-gradient(rgba(125, 231, 238, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 231, 238, 0.08) 1px, transparent 1px)",
        "soft-horizon":
          "linear-gradient(135deg, rgba(53, 224, 202, 0.16), transparent 34%), linear-gradient(0deg, rgba(255, 141, 91, 0.10), transparent 46%)"
      }
    }
  },
  plugins: []
};
