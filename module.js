const env = process.env.NODE_ENV;

const rules = {
  rules: [
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
      // use: [
      //   {
      //     loader: 'style-loader',
      //   },
      //   {
      //     loader: 'css-loader',
      //   },
      //   {
      //     loader: 'sass-loader'
      //   }
      // ]
    },
    {
      test: /\.html$/,
      use: 'html-loader'
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'file-loader',
      options: {
        name (file) {
          if (env === 'development') {
            return '[path][name].[ext]'
          }
          return '[hash].[ext]'
        }
      }
    }
  ],
};
module.exports = rules;
