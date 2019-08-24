'use strict';

const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    background: path.join(__dirname, 'src', 'background.js')
  },
  plugins: [
    new CopyPlugin([{
      from: "src/manifest.json",
      transform: function (content) {
        // generates the manifest file using the package.json informations
        return Buffer.from(JSON.stringify({
          description: process.env.npm_package_description,
          version: process.env.npm_package_version,
          ...JSON.parse(content.toString())
        }))
      }
    }]),
    new WriteFilePlugin(),
  ]
}
