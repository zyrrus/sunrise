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
