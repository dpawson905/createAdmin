const inquirer = require('inquirer');

module.exports = {
  dbInit: () => {
    const dbInitQ = {
      type: 'list',
      name: 'db_type',
      message: 'Are you using mongo locally or on atlas?',
      choices: ['local', 'atlas'],
      default: 'local'
    }
    return inquirer.prompt(dbInitQ);
  },

  dbNameAtlas: () => {
    const dbAtlasQ = {
      type: 'input',
      name: 'db_uri',
      message: 'Enter your full database uri (including username and password):',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your database uri (including username and password):';
        }
      }
    }
    return inquirer.prompt(dbAtlasQ);
  },

  dbNameLocal: () => {
    const dbLocalQ = {
      type: 'input',
      name: 'db_name',
      message: 'Enter your database name:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your database name:';
        }
      }
    }
    return inquirer.prompt(dbLocalQ);
  },

  createAdminQs: async () => {
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