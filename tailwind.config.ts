import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1rem" }], // 14px 0.875rem
        sm: ["1rem", { lineHeight: "1.25rem" }], // 16px 1rem
        base: ["1.25rem", { lineHeight: "1.5rem" }], // 20px 1.25rem
        lg: ["1.5rem", { lineHeight: "1.75rem" }], // 24px 1.5rem
        xl: ["2rem", { lineHeight: "1.75rem" }], // 32px 2rem
        "2xl": ["2.5rem", { lineHeight: "2rem" }], // 40px 2.5rem
        "3xl": ["3rem", { lineHeight: "2.25rem" }], // 48px 3rem
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
        roadster: ["var(--font-roadster)", ...fontFamily.sans],
      },
      colors: {
        blue: "#264653",
        green: "#2A9D8F",
        yellow: "#E9C46A",
        sunrise: "#EDAD63",
        orange: "#F4A261",
        red: "#E76F51",
        white: "#EAD9C2",
        black: "#2E251E",
      },
    },
  },
  plugins: [
    require("./src/styles/responsiveTextPlugin.ts"),
    require("./src/styles/pixelPerfectScalingPlugin.ts"),
  ],
} satisfies Config;
