/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      colors: {
        // VS Code Dark Theme
        "vs": "#191919",
        "vs-light": "#2d2d2d",
        "vs-med": "#252525",
        "vs-footer": "#007acc",
        "vs-code": "#858585",
        // HTML
        "html-logo": "#c5662",
        // JS
        "js-logo": "#cbcb3f",
        "jsx-logo": "#00d8ff",
        "const": "#4d9ad6",
        "constant": "#4fc1ff",
        "const-brackets": "#1a79de",
        "let": "#5faceb",
        "param": "#7cdcfe",
        "func": "#dedba4",
        "funct-brackets": "#d8b709",
        "conditional": "#c686be",
        "conditional-brackets": "#b05c9a",
        "str": "#ce7f48",
        "num": "#8ab590",
        "comment": "#56874e",
      },
    },
  },
  plugins: [],
}
