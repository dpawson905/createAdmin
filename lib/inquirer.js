const inquirer = require('inquirer');

const auth = require('./auth');

module.exports = {
  createAdmin: async () => {
    const questions = [
      {
        name: 'email',
        type: 'email',
        message: 'Enter email address:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your email address';
          }
        }
      },
      {
        name: 'username',
        type: 'input',
        message: 'Enter username:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username';
          }
        }
      },
      {
        name: 'firstName',
        type: 'input',
        message: 'Enter your first name:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your first name.';
          }
        }
      },
      {
        name: 'lastName',
        type: 'input',
        message: 'Enter your last name:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your last name.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      },
    ];
    
    return inquirer.prompt(questions);
  },
};