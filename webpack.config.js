const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (env, options) => {
  
  const { DEV } = env // From webpack environment variable
  if (DEV) { // Set env variable file by development state
    require('dotenv').config({path: './dev.env'}) // Development state
  } else {
    require('dotenv').config({path: './.env'}) // Production state
  }

  console.log('process.env.API_SERVER :>> ', process.env.API_SERVER); // Logging value from env variable file

  return {
    mode: 'development', // 'production', 'development'
    // entry: [
    //     './js/index.js',
    //     './js/index_2.js'
    // ], // Start point
    entry: './js/index.js', // Start point
    output: { // Set output path of bundled file
      path: path.resolve(__dirname, 'dist'), // Output path
      filename: 'bundle.js' // Output file name
    },
    devServer: { // Dev server option
      port: 3002, // Port
      writeToDisk: true
    },
    plugins: [ // Webpack plugins
      new HtmlWebpackPlugin({ // Apply html-webpack-plugin
        template: path.resolve(__dirname, 'index.html'), // From template path
        filename: path.resolve(__dirname, 'dist/index.html'), // Create template path
        inject: true // Inject bundled js file (default set: true)
      }),
      new webpack.DefinePlugin({
        DEVELOPMENT: env.DEV ? "true" : "false",
        API_SERVER_HOST: env.DEV ? process.env.API_SERVER : ""
        // API_SERVER_HOST: env.DEV ? JSON.stringify(process.env.API_SERVER) : ""
      }),
      // new webpack.EnvironmentPlugin(['DEBUG'])
    ],
    optimization: { // Optimization
      minimize: false // No minify
    }
  }
}