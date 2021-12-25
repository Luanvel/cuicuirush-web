module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'start': "url('/src/assets/bg_start.png')",
        'woodbar': "url('/src/assets/wood-bar.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'wood': '#A98173',
        'grass': '#93DC6B'
      }
    },
  },
  plugins: [],
}
