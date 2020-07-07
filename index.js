#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const initDB = require('./lib/db');

clear();

console.log(
  chalk.blue(
    figlet.textSync('CreateAdmin', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  initDB.dbSetup();
};

run();
