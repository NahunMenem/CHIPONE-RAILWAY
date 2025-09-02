// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./templates/**/*.html",  // 👈 busca en todas tus plantillas Flask
    "./static/**/*.js"        // 👈 busca también en tus scripts JS
  ],
  theme: {
    extend: {
      colors: {
        onyx: '#1C1C1B',
        walnut: '#6A5D52',
        ash: '#979086',
        greige: '#B7AC9B',
        stucco: '#E2E2DE',
      },
    },
  },
  plugins: [],
}
