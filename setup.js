#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const auth  = require('./lib/auth');

clear();

console.log(
  chalk.blue(
    figlet.textSync('SimpleBlog', { horizontalLayout: 'full' })
  )
);

files.example_envExists('.example_env');
files.envExists('.env');

const run = async () => {
  auth.createAdmin()
};

run();