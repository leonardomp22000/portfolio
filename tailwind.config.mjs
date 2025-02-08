/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          main: "#fd6f00",
          hover: "#ff890a",
          active: "#cc5002",
        }, // Puedes definir el color como una variable
        secondary: "#FF4081",
        customGray: "#B0BEC5",
      },
      fontFamily: {
        poppins: "var(--font-poppins)", // Usa la variable de la fuente
      },
    },
  },
  plugins: [],
};
