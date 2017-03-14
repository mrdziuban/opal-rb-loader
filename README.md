# Opal Webpack loader

### Usage

This is a simple Webpack loader that shells out to [Opal](https://github.com/opal/opal). It was built as an
alternative to [opal-webpack](https://github.com/cj/opal-webpack) because I felt that transpiling files using their
bootstrapped copy of the Opal compiler was too slow.

To use it, first install the package:

```bash
$ npm install --save opal-rb-loader
```

then configure the loader in your Webpack config:

```js
module.exports = {
  // ...
  module: {
    rules: [
      { test: /\.rb$/, loader: 'opal-rb-loader' },
      // ...
    ]
  }
}
```

Make sure you have the `opal` binary somewhere in your `PATH`. See below for more details on
[installing Opal](#installing-opal)

### Configuration

The only available option is `includeOpal`, which specifies whether or not the Opal compiler should automatically
include the Opal core libraries when compiling your code. If you set this to false, you should add `require 'opal'`
to the top of your Ruby files. This option defaults to true. To disable including Opal, specify it in the loader
query:

```js
{ test: /\.rb$/, loader: 'opal-rb-loader?includeOpal=false' },
```

### Installing Opal

You can install Opal by running

```bash
$ gem install opal
```

If you'd like to use a bundled version of Opal, setup your Gemfile:

```rb
source 'https://rubygems.org'

gem 'opal'
```

and run `bundle install`. Then when you run `webpack` you can run it with `bundle exec`, and the loader will use the
version of Opal that you installed via bundler.
