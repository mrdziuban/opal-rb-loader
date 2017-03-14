require('../index');

module.exports = {
  entry: './src/hello_world.rb',
  output: { filename: 'bundle.js' },
  module: {
    rules: [
      { test: /\.rb$/, loader: 'opal-rb-loader?includeOpal=false' }
    ]
  }
}
