import type { Config } from "tailwindcss";

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
      // カスタムアニメーション
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(-15px)",
            marginBottom: "0",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            marginBottom: "15px",
          },
        },
        disappear: {
          // "0%": { opacity: "1", transform: "translateY(0)" },
          // "100%": { opacity: "0", transform: "translateY(-15px)" },
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
            height: "88px",
            marginBottom: "15px",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-15px)",
            height: "0",
            marginBottom: "0",
          },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out 0s 1 normal forwards",
        disappear: "disappear 1s ease-in-out 0s 1 normal forwards",
      },
      boxShadow: {
        custom: "6px 6px 10px 0px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
