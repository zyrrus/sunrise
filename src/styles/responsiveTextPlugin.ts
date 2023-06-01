import plugin from "tailwindcss/plugin";

module.exports = plugin(function ({ addBase, theme }) {
  const colors = theme("colors");
  const newColors = {
    "custom-bg": "#f0f0f0",
  };

  const newUtilities = {
    ".custom-bg": {
      backgroundColor: newColors["custom-bg"],
    },
  };

  addBase(newUtilities);
});
