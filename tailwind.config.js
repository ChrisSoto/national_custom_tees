/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,md,js}"],
  theme: {
    extend: {
      colors: {
        flagred: "#CC3513",
        flagwhite: "#DEF2FF",
        flagblue: "#005EAB",
        flagblue2: "#004680",
        flagdark: "#363636",
        flagdarkblue: "#374a8f",
      },
      backgroundColor: {
        flagred: "#CC3513",
        flagwhite: "#DEF2FF",
        flagblue: "#005EAB",
        flagblue2: "#004680",
        flagdark: "#363636",
        flagdarkblue: "#374a8f",
      },
    },
  },
  plugins: [],
}
