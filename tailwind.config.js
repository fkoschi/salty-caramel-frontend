module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav': '#2D2D2D'
      },
      backgroundImage: {
        'hero': "url('/hero.jpg')",
        'cta-one': "url('/cta_one.jpg')",
        'cta-two': "url('/cta_two.jpg')",
        'cta-three': "url('/cta_three.jpg')",
        'cta-four': "url('/cta_four.jpg')",
        'category-one': "url('/category_one.jpg')",
        'category-two': "url('/category_two.jpg')"
      },
      transitionProperty: {
        "width": "width",
        "spacing": 'margin, padding',
      },
      height: {
        '50': '50vh'
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        "xsmall": "512px",
        "small": "1024px",
        "medium": "1280px",
        "large": "1440px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}
