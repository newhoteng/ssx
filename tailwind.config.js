/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'lightgrey': 'hsl()',
        'lightgrey': '#ededed',
        // 'deepgrey': 'hsl()',
        'deepgrey': '#cbc9ca',
        // 'accentpink': 'hsl()',
        'accentpink': '#ff7fd1',
        // 'accentmagenta': 'hsl()',
        'accentmagenta': '#c427fc',
        'fontcolor': '#2d2d2d',
      },
    },
  },
  plugins: [],
}

