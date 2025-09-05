// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // tiny breakpoints for mobile so footer can become 3-columns earlier
        // xs: 360px is useful for many phones (OnePlus, small Pixel widths)
        // xsm: 420px is useful for slightly wider phones / emulator widths
        xs: "360px",
        xsm: "420px",
      },
    },
  },
  plugins: [],
};

export default config;
