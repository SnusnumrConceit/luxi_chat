const env = process.env.NODE_ENV;

const rules = {
  rules: [

    // css, postcss, sass loaders
    {
      test: /\.(scss|css|sass)$/,
      use: [{
        loader: 'vue-style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'sass-loader',
      }]
    },

    // vue loader
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },

    // babel loader
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },

    // html loader
    {
      test: /\.html$/,
      use: 'html-loader'
    },

    // file loader
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      loader: 'file-loader',
      options: {
        name (file) {
          if (env === 'development') {
            return '/[path][name].[ext]'
          }
          return '[hash].[ext]'
        }
      }
    },
  ],
};
module.exports = rules;
