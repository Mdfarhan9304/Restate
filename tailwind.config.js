/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to all component files to ensure Tailwind's purging works correctly
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik-Regular', 'sans-serif'],
        "rubik-bold": ['Rubik-Bold', 'sans-serif'],
        "rubik-extrabold": ['Rubik-ExtraBold', 'sans-serif'],
        "rubik-semibold": ['Rubik-SemiBold', 'sans-serif'],
        "rubik-light": ['Rubik-Light', 'sans-serif'],
      },
      colors: {
        primary: {
          100: "#0061FF0A", // Primary color with low opacity
          200: "#0061FF1A", // Primary color with slightly higher opacity
          300: "#0061FF",   // Default primary color
        },
        accent: {
          100: "#FBFBFD",    // Light accent color
        },
        black: {
          DEFAULT: "#000000", // Default black
          100: "#8C8E98",     // Light black (grayish)
          200: "#666876",     // Medium black
          300: "#191D31",     // Dark black
        },
        danger: "#F75555", // Danger or error color
      },
    },
  },
  plugins: [],
};
  