module.exports = {
  parser: false,
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {},
    'autoprefixer': {
      browsers: [
        'cover 99.5%'
      ]
    }
  }
};