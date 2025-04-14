/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        dx: {
          primary: {
            100: "#18B1EB",
            80: "#46C0EF",
            60: "#74D0F3",
            40: "#A2DFF7",
            20: "#D0EFFB",
          },
          secondary: {
            100: "#FFB300",
            80: "#FFC233",
            60: "#FFD166",
            40: "#FFE099",
            20: "#FFEFCC",
          },
          gray: {
            100: "#344952",
            80: "#5C6D74",
            60: "#859197",
            40: "#ADB6B9",
            20: "#D6DADC",
          },
        },
      },
    },
  },
  plugins: [],
};
