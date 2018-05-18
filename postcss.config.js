module.exports = {
  parser: false,
  plugins: {
    'postcss-import': {},
    'cssnano': {},
    'autoprefixer': {
      browsers: [
        'cover 99.5%'
      ]
    }
  }
};