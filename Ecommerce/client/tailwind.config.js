/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    colors:{
      black:"black",
      white:"white",
      gray:"gray"
    },
    extend: {},
  },
  plugins: [ import('flowbite/plugin')],
}

