/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,ejs}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,ejs}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,ejs}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx,ejs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}