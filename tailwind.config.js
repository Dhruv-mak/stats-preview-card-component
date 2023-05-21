/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        very_dark_blue: "hsl(233, 47%, 7%)",
        dark_desaturated_blue: "hsl(244, 38%, 16%)",
        soft_violet: "hsl(277, 62%, 28%)",
        white_main: "hsl(0, 0%, 100%)",
        slightly_transparent_white_p: "hsla(0, 0%, 100%, 0.75)",
        slightly_transparent_white: "hsla(0, 0%, 100%, 0.6)",
      }
    },
  },
  plugins: [],
}

