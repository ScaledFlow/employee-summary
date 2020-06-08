// Require inquirer - used for CLI user interface and session flow
const inquirer = require("inquirer");

// List of question the user is promptes with at the CLI
function promptEng() {
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
    {
      type: "list",
      message: "What type of team member would you like to add?",
      name: "empTypeEng",
      choices: ["Engineer", "Intern", "Finished"],
    },
  ]);
}

// Export module
module.exports = promptEng;
