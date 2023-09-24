/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        "dark-aui": "#181b1f",
        "dark-aui-bg": "#111217",
        "dark-aui-button": "#2b2b2b",
        "dark-aui-header": "#3e3e40",
        "dark-aui-minicard": "#FF5733",
        "white-aui": "#FF5733",
        "light-white": "rgba(255,255,255,0.17)",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '0.5px',
        '3': '1px',
        '4': '1.5px',
        '6': '2px',
        '8': '2.5px',
      },
      py: {
        DEFAULT: '0.5',
        '0': '0',
        '1': '0.01rem',
        '2': '0.02rem',
        '3': '0.04rem',
        '4': '0.08rem',
        '5': '0.10rem',
        '6': '0.12rem',
      },
      px: {
        DEFAULT: '0.5',
        '0': '0',
        '1': '0.01rem',
        '2': '0.02rem',
        '3': '0.04rem',
        '4': '0.08rem',
        '5': '0.10rem',
        '6': '0.12rem',
      }
    },
  },
  plugins: [],
}
