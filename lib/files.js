const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  envExists: (filePath) => {
    if(!fs.existsSync(filePath)) {
      console.log(chalk.green(`${filePath} created`))
      return fs.writeFileSync(filePath)
    } else {
      return console.log(chalk.red(`${filePath} exists`))
    }
  },

  example_envExists: (filePath) => {
    if(!fs.existsSync(filePath)) {
      console.log(chalk.green(`${filePath} created`))
      return fs.writeFileSync(filePath)
    } else {
      return console.log(chalk.red(`${filePath} exists`))
    }
  }
};