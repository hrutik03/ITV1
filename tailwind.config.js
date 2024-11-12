/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        // poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#6F73EB",
        secondary: "#49D5C3",
        subtitle: "#615C5C",
        backGroundColor: "#f8fbff",
        white: "#ffffff",
        borderColor: "#4285f4",
        textColor: "#3b3940",
        textGreen: "#3ab67a",
        textFade: "#718096",
        textColor2: "#56565a",
        destructive: "#FF0000",
        textMuted: "#3D3E55",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(88deg, #fff 5%, #6890f7 197%)",
      },
      borderColor: {
        "border-right":
          "linear-gradient(to right, #dbe2f3, #3a61c6 50%, #dbe2f3)",
      },
      boxShadow: {
        "custom-boxShadow":
          "0 91px 37px 0 rgba(201, 182, 182, 0.01), 0 143px 40px 0 rgba(201, 182, 182, 0), 0 4px 15.1px 0 rgba(0, 0, 0, 0.05)",
        sidebar:
          "2px 0 3px 0 rgba(0, 0, 0, 0.04), 6px 0 6px 0 rgba(0, 0, 0, 0.03), 14px 0 8px 0 rgba(0, 0, 0, 0.02), 25px 0 10px 0 rgba(0, 0, 0, 0.01), 39px 0 11px 0 rgba(0, 0, 0, 0)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
