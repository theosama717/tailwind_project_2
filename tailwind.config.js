/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      boxShadow: {
        'tag': '5px 5px 10px #ccc'
      }, 
      gridTemplateColumns: {
        'menu': 'repeat(auto-fit, minmax(auto, 200px))', 
        'footer': 'repeat(auto-fit, minmax(auto, 200px))'
      }
    },
  },
  plugins: [],
}

