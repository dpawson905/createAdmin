require("dotenv").config();

const chalk = require("chalk");
const passport = require("passport");
const mongoose = require("mongoose");

const User = require("../models/user");
const inquirer = require("./inquirer");

// Connect to db
mongoose
  .connect(process.env.DB_URL, {
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

module.exports = {
  createAdmin: async () => {
    console.log(chalk.green("Connected to MongoDB"));
    const questions = await inquirer.createAdmin();
    const newAdmin = new User({
      firstName: questions.firstName,
      lastName: questions.lastName,
      email: questions.email,
      username: questions.username,
      isVerified: true,
      "roles.admin": true,
      "roles.basic": false,
    });
    await User.register(newAdmin, questions.password);
    console.log(chalk.green("User created"));
    process.exit();
  },
};
