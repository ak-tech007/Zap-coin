import type { Config } from "tailwindcss";
const textShadow = require('tailwindcss-textshadow')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        '3xl': '1px 3px 2px 0px rgba(0, 0, 0, 0.3)',
      }     
    },
  },
  plugins: [textShadow],
};
export default config;
