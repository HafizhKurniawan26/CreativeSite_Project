/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Tambahkan Poppins
      },
    },
  },
  daisyui: {
    themes: ["light"], // Set default ke tema light
  },
  plugins: [require("daisyui")],
};
