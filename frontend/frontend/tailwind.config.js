/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/.ts ",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1': "url('./src/assets/bg.jpg') "
      },
    }, 
  },
/**add custom sytles here */
  plugins: [],
}

