/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#756AB6",
        secindaryColor: "#AC87C5",
        textColor: "#FFE5E5",
      }
    },
  },
  plugins: [],
};
