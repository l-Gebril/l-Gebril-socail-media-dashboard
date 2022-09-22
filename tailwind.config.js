/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        bg: {
          default: "#FFFFFF",
          header: "#F5F7FF",
          card: "#F0F2FA",
          card_hover: "#DADDE7",
        },
        dark_bg: {
          default: "#1E202A",
          header: "#1F212E",
          card: "#252A41",
          card_hover: "#333D54",
        },
        text: {
          l_f_grayish_blue: "#63687E",
          l_s_dark_blue: "#1E202A",
          d_f_desaturated_blue: "#8B97C6",
          d_s_white: "#FFFFFF",
        },
        lime_green: "#1DB489",
        light_red: "#DC414C",
        facebook: "#4AA6F7",
        twitter: "#1CA0F2",
        instagram_from: "#FDC468",
        instagram_to: "#DF4996",
        youtube: "#C4032A",
      },
    },
  },
  plugins: [],
};
