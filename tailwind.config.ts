import { type Config } from "tailwindcss";

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
      },
      colors: {
        blue: "#264653",
        green: "#2A9D8F",
        yellow: "#E9C46A",
        orange: "#F4A261",
        red: "#E76F51",
        white: "#EAD9C2",
        black: "#2E251E",
      },
    },
  },
  plugins: [],
} satisfies Config;
