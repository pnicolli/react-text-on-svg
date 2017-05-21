var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'react-text-to-svg.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'textOnSvg',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: 'PropTypes'
    },
    'svg-text-wrap': {
      commonjs: 'svg-text-wrap',
      commonjs2: 'svg-text-wrap',
      amd: 'svg-text-wrap',
      root: 'svgTextWrap'
    }
  }
};
