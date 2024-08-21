// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         hoverColor: "#FFC000",
//         brightColor: "#dd8036",
//         backgroundColor: "#36ae9a",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        brightColor: "#dd8036",
        // backgroundColor: "#F5F7F8",
        backgroundColor: "#36ae9a",
        textH1: "#FFF5E4",
      },
      backgroundImage: {
        "gradient-image":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('assets/img/home-1.jpeg')",
      },
    },
  },
  plugins: [],
};
