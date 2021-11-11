module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif'],
    },
    fontSize: {
      normal: ['1.8rem', '2.7rem'],
    },
    borderRadius: {
      normal: '10px',
      large: '124px',
      full: '100%',
    },
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      primary: {
        cyan: 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
      },
      secondary: {
        red: 'hsl(0, 87%, 67%)',
      },
      neutral: {
        gray: 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 14%)',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
