/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inset-xl": "inset 0 0 5px 1px #0003",
        "inset-3xl": "inset 0 0 5px 3px #0003",
        "inset-2xl": "inset 0 0 10px 8px #0002",
      },
    },
  },
  plugins: [],
};
