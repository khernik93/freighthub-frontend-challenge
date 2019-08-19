module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [],
  env: {
    production: {
      only: ['app'],
      plugins: [],
    },
    test: {
      plugins: [],
    },
  },
};
