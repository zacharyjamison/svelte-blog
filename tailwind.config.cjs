const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
    fontFamily:{
      dosvga:["DOSVGA"]
    }
  },

  plugins: [
    require("daisyui")
  ],
};

module.exports = config;
