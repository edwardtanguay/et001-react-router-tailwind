export default {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        'Poppins':'Poppins',
        'Shadows': 'Shadows Into Light'
      }
    },
  },
  plugins: [],
}