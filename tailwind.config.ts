import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-content': 'calc(100vh - 65px)', 
        'screen-content-md-footer': 'calc(100vh - 165px)', 
        'screen-content-footer': 'calc(100vh - 129px)', 
      },
      colors: {
        customColor1: "rgb(123,120,163)",
        customColor2: "rgb(233,240,239)",
      },
      backgroundImage: (theme) => ({
        "hero-gradient":
          "linear-gradient(274deg, rgba(123,120,163,1) 6%, rgba(233,240,239,1) 92%)",
        "custom-bg": "url('/assets/patterns.svg')",
        "peak-background": "url('/assets/peak_background.svg')",
        "crosspattern": "linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.4)), url('/assets/patterns2.svg')",

      }),
      boxShadow: { "custom-teal": "6px -5px teal" },
    },
  },
  plugins: [],
};
export default config;
