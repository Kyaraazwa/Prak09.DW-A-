/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class', //menambhakan opsi dark mode
  theme: {
    extend: {
      colors: {
        primary:  '#f5abc9', // Warna pink khusus
      secondary: '#FBBF24', // Warna kuning khusus
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

