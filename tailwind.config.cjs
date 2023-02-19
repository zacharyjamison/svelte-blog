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
  },

  plugins: [
    require("daisyui")
  ],
};

module.exports = config;
