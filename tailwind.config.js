/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgprimary: "#ffffff",
        bgsecondary: "#7743DB",
        bgtertiary: "#f5f5f5",
        textprimary: "#FFD369",
        textsecondary: "#00000",
      },
      fontFamily: {
        header: "'Quicksand', 'sans-serif'",
        body: "'Raleway', sans-serif",
        secondaryheader: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [],
};
