/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/pages/*.html",
    "./build/pages/about/*.html",
    "./build/pages/news/*.html",
    "./build/pages/investor-relation/*.html",
    "./build/pages/career/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "dry-rose": "#F1E4DB"
      },
    },
    // screens: {
    //   'mobile': '320px',
    //   // => @media (min-width: 320px) { ... }
      
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [],
}

