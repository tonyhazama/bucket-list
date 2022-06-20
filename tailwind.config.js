module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "main": "#191746"
      },
      height: {
        "header": "70px",
        "book-detail":  "calc(100% - 70px)"
      },
      minHeight: {
        "book-detail":  "calc(100% - 70px)"
      },
      borderWidth: {
        "thin": "1px"
      },
      backgroundColor: {
        "backdrop": "rgba(0, 0, 0, 0.3)",
        "main-accent": "#1c1a4f"
      },
    },
    fontFamily: {
      sans: 'Open Sans'
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },],
}
