module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-steel": {
          DEFAULT: "#4d7099",
        },
        "dark-steel": {
          DEFAULT: "#75869e",
        },
        "steel": {
          DEFAULT: "#bac9e2",
        },
        mustard: {
          DEFAULT: "#ffd644",
        },
        purple: {
          DEFAULT: "#974db5",
        },
        violet: {
          DEFAULT: "#6e26d8",
        },
        indigo: {
          DEFAULT: "#420a7d",
        },
        gold: {
          DEFAULT: "#cc9931",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
