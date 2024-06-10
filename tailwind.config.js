import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/view/**/*.{ts,tsx}", "./src/ui_components/**/*.{ts,tsx}"],
  daisyui: {
    themes: [
      {
        "light-olive-green": {
          primary: "#A4BCA4",
          secondary: "#E4F4E4",
          accent: "#eb9a78",
          neutral: "#fff",
          "base-100": "#fff",
          info: "#f2f2f2",
          success: "#cfeccc",
          warning: "#fef9c3",
          error: "#ffdad9",
        },
      },
    ],
  },
  plugins: [daisyui],
};
