/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#2BB881",
      },
      backgroundImage: {
        banner2: "url('/src/assets/banner/banner2.jpg')",
        findTutorsBanner: "url('/src/assets/banner/banner4.jpg')",
        detailsBanner: "url('/src/assets/banner/banner3.jpg')",
        bookedBanner: "url('/src/assets/banner/banner5.jpg')",
        loginBanner: "url('/src/assets/banner/login.avif')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
