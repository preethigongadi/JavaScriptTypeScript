readme.md
install node.js

open node cmd

npm install -g webpack 
npm install -g webpack-cli

OR

npm install -g webpack webpack-cli

//Create a webpack.config.js file
const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  mode : "development"
};

// run in node cmd (console)
webpack