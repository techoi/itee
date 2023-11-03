import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        bannerLoop: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-2880px,0)" },
        },
        rolling: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(0,-360px)" },
        },
      },
    },
    tokens: {
      fonts: {
        helvetica: { value: "var(--font-helvetica), sans-serif" },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
