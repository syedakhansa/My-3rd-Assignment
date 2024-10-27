import { withRouter } from "next/router";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors:{
      bacckground:"var(--background)",
      foreground:"var(--foreground)",
      primary:"#ff3333",
      secondary:"gray",
      khansa:"pink",
    },
      },
    },
  plugins: [],
};
export default config;
