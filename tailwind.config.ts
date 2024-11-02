import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primaryBg)",
        headerColor: "var(--headerColor)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        whiteFont: "var(--whiteFont)",
        darkgrey: "var(--darkgrey)",
        shortDesc: "var(--shortDesc)",
        longDesc: "var(--longDesc)",
        shortHeading:"var(--shortHeading)",
      },
      fontFamily: {
        montserrat: [
          'var(--font-montserrat-regular)',
          'var(--font-montserrat-medium)',
          'var(--font-montserrat-semibold)',
          'var(--font-montserrat-bold)',
          'var(--font-montserrat-extrabold)',
          'var(--font-montserrat-light)',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
