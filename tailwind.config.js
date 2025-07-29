

// module.exports = {
//   ...defaultConfig,
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
//   theme: {
//     ...defaultConfig.theme,
//     extend: {
//       ...defaultConfig.theme.extend,
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//         serif: ["Georgia", "serif"],
//       },
//       animation: {
//         "bounce-slow": "bounce 2s infinite",
//         "pulse-slow": "pulse 3s infinite",
//       },
//     },
//   },
//   plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
