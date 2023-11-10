/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "drop-custom": "2px 4px 10px rgba(168, 193, 222, 0.2)",
        "inner-custom": "inset 1px 1px rgba(152, 162, 178, 0.25)",
      },
    },
  },
  plugins: [],
};
