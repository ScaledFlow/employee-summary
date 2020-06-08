// Require inquirer - used for CLI user interface and session flow
const inquirer = require("inquirer");

// CLI prompts for interns
function promptInt() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your intern's id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your manager's email?",
      name: "email",
    },

    {
      type: "input",
      message: "What is your interns's school?",
      name: "school",
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
