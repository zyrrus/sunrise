import plugin from "tailwindcss/plugin";

module.exports = plugin(function ({ addUtilities }) {
  const utilities = {
    ".scale-pixelated": {
      imageRendering: "pixelated",
    },
  };

  addUtilities(utilities);
});
