const chalk = require("chalk");

const User = require("../models/user");
const inquirer = require("./inquirer");

module.exports = {
  createAdmin: async () => {
    const questions = await inquirer.createAdminQs();
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
  }
};
