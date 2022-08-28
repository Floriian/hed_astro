/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        akshar: ["Akshar", "sans-serif"],
        allison: ["Allison", "sans-serif"],
      },
    },
  },
  plugins: [],
};
