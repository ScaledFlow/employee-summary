// Require inquirer - used for CLI user interface and session flow
const inquirer = require("inquirer");

// List of question the user is promptes with at the CLI
function promptInt() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your intern's id?",
      name: "userName",
    },
    {
      type: "input",
      message: "What is your manager's email?",
      name: "repo",
    },

    {
      type: "input",
      message: "What is your interns's school?",
      name: "email",
    },
    {
      type: "list",
      message: "What type of team member would you like to add?",
      name: "empTypeInt",
      choices: ["Engineer", "Intern", "Finished"],
    },
  ]);
}

// Export module
module.exports = promptInt;
