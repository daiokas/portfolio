const colors = require('tailwindcss/colors')

module.exports = {
  content: [ './src/**/*.{js,tsx}' ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        blue: {
          ...colors.blue,
          DEFAULT: '#00ddff',
        },
        gray: {
          ...colors.gray,
          DEFAULT: '#777777',
          light: '#C7C7C7',
          lighter: '#E4DFEA',
          dark: '#707070',
          border: '#E3E3E3',
          footer: '#D0D0D0',
          input: '#EFF1F9',
          label: '#4F4F4F',
        },
        black: {
          DEFAULT: '#222222',
          light: '#434343',
          darkest: '#000000',
        },
      },
    },
    fontFamily: {
      sans: [
        // --- fallback
        // Default Google Fonts
        '"M PLUS 1p"',
        // Safari for macOS and iOS (San Francisco)
        '-apple-system',
        // Chrome < 56 for macOS (San Francisco)
        'BlinkMacSystemFont',
        // Windows
        'Segoe UI',
        // Android
        'Roboto',
        // Basic web fallback
        'Helvetica Neue',
        // Basic Ja fallback
        'Hiragino Sans', 'Hiragino Kaku Gothic ProN',
        // Basic web fallback
        'Arial',
        // Windows Ja
        'Yu Gothic', 'Meiryo',
        // Linux
        'Noto Sans',
        'Liberation Sans',
        // Sans serif fallback
        'sans-serif',
        // Emoji fonts
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' ],
      serif: [
        'Times New Roman', 'YuMincho', 'Hiragino Mincho ProN',
        'Yu Mincho', 'MS PMincho',
        // Serif fallback
        'serif',
        // Emoji fonts
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji',
      ],
      ranget: [
        'Ranget Regular',
        // Basic web fallback
        'Helvetica Neue',
        // Basic Ja fallback
        'Hiragino Sans', 'Hiragino Kaku Gothic ProN',
        // Basic web fallback
        'Arial',
        // Sans serif fallback
        'sans-serif',
      ],
    },
  },
}
