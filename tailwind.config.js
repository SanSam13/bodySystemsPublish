/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#E10A0A',
        'accent-color': '#3C1053',
        'footer-color': '#2C0B3E',
        'text-black': '#333333',
        'text-gray': '#999999'
      },
      fontFamily: {
        'DMSans': ['DM Sans', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans-serif'],
      },
      height:{
        '128': '32rem',
      },
      spacing: {
        '5px': '5px',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    backgroundImage: {
      'bg-blog': "url('assets/images/home/bg-blog.png')",
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

