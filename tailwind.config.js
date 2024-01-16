/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor:'#010a5e',
        primaryColorLight:'#010d78',
        secondaryColor:'#ffcc00',
        paragraphColor:'#c0c0c0',
        whiteColor:'#fff',
        blackColor:'#000',
        greenColor:'#007936',
        redColor:'#cc3433',
        darkColor:'#000',
        darkColorLight:'#171717',
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    },
    fontFamily:{
      oswald:['Oswald','sans-serif'],
      poppins:['Poppins','sans-serif'],
      nunito:['Nunito Sans', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}