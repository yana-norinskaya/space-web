module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "350px",
        md: "850px",
        lg: "1200px",
      },
      gridTemplateColumns: {
        custom: "repeat(2, minmax(500px, 1fr))",
        md: "repeat(2, minmax(350px, 500px))",
      },
      fontSize: {
        "12xl": "9.375rem",
      },
      colors: {
        whiteTransparent: "#ffffff9a",
        primary: "hsl(0 0% 100%)",
        light: "hsl(231 77% 90%)",
        nav: "hsl(0 0% 100%/0.05)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        outline: "0px 0px 0px 50px rgba(197, 193, 193, 0.256)",
      },
      keyframes: {
        underline: {
          from: {
            width: 0,
          },
          to: {
            width: "100%",
          },
        },
        openNavbar: {
          from: {
            right: "-300px",
          },
          to: {
            right: "0px",
          },
        },
        scalePlanet: {
          from: {
            transform: "rotate(0)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        onset: {
          from: {
            transform: "scale(2)",
            opacity: 0,
          },
          to: {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        toggleOpacity: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        toggleOpacity: "toggleOpacity 2s ease",
        onset: "onset 500ms ease",
        link: "underline 300ms ease",
        "navbar-open": "openNavbar 600ms ease",
        planet: "scalePlanet 120s infinite linear forwards",
      },
    },
  },
  plugins: [],
}
