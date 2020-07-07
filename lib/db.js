require("dotenv").config();

const chalk = require("chalk");
const passport = require("passport");
const mongoose = require("mongoose");

const admin = require('./admin');
const inquirer = require("./inquirer");

const User = require("../models/user");

module.exports = {
  dbLocal: function() {
    inquirer.dbNameLocal().then((db) => {
      db_url = `mongodb://localhost:27017/${db.db_name}`;
      return this.initDatabase(db_url)
    })
  },

  dbAtlas: function() {
    inquirer.dbNameAtlas().then((db) =>{
      db_uri = db.db_uri;
      return this.initDatabase(db_uri)
    })
  },

  dbSetup: function() {
    inquirer.dbInit().then((answers) => {
      if(answers.db_type === 'local') {
        return this.dbLocal();
      } else {
        return this.dbAtlas();
      }
    });
  },

  initDatabase: async function(db_url) {
    // Connect to db
    mongoose
      .connect(`${db_url}`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(async () => {})
      .catch((err) => {
        console.log(chalk.red(err.message));
      });

    passport.initialize();
    passport.use(User.createStrategy());
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    console.log(chalk.green("Connected to MongoDB"));
    admin.createAdmin();
  },
}
