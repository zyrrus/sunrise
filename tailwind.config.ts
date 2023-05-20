import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}
type CSSRuleObject = RecursiveKeyValuePair<string, null | string | string[]>;

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px 0.75rem
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
    // Responsive Typography
    plugin(function ({ addUtilities, theme }) {
      const fontSizes = Object.keys(theme("fontSize"));

      const buildCSS = (fontSize: string): CSSRuleObject => {
        const fsIndex = fontSizes.indexOf(fontSize);

        if (fsIndex > 1) {
          const desktop = fontSize;
          const tablet = fontSizes[fsIndex - 1] ?? fontSize;
          const mobile = fontSizes[fsIndex - 2] ?? fontSize;

          return {
            "font-size": theme(`fontSize.${mobile}`),
            "@screen md": {
              "font-size": theme(`fontSize.${tablet}`),
            },
            "@screen 2xl": {
              "font-size": theme(`fontSize.${desktop}`),
            },
          };
        }

        return { "font-size": theme(`fontSize.${fontSize}`) };
      };

      addUtilities({
        ".text-r-3xl": buildCSS("3xl"),
        ".text-r-2xl": buildCSS("2xl"),
        ".text-r-xl": buildCSS("xl"),
        ".text-r-lg": buildCSS("lg"),
        ".text-r-base": buildCSS("base"),
        ".text-r-sm": buildCSS("sm"),
      });
    }),
  ],
} satisfies Config;
