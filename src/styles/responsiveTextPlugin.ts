import plugin from "tailwindcss/plugin";

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}
type CSSRuleObject = RecursiveKeyValuePair<string, null | string | string[]>;

module.exports = plugin(function ({ addUtilities, theme }) {
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
});
