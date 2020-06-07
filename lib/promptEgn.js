// Require inquirer - used for CLI user interface and session flow
const inquirer = require("inquirer");

// List of question the user is promptes with at the CLI
function promptEgn() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your engineer's id?",
      name: "userName",
    },
    {
      type: "input",
      message: "What is your engineer's email?",
      name: "repo",
    },

    {
      type: "input",
      message: "What is your engineer's gitHub username?",
      name: "email",
    },
  ]);
}

// Export module
module.exports = promptEng;
