import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-move': 'gradient-move 5s infinite linear',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      colors: {
        'gray-700': '#374151', // or your preferred shade
      },
    },
  },
  plugins: [],
});

export default config;
