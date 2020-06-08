// Require inquirer - used for CLI user interface and session flow
const inquirer = require("inquirer");

// CLI prompts for managers
function promptMgr() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your manager's id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your manager's email?",
      name: "email",
    },

    {
      type: "input",
      message: "What is your manager's office number?",
      name: "officeNumber",
    },
    {
      type: "list",
      message: "What type of team member would you like to add?",
      name: "empTypeMng",
      choices: ["Engineer", "Intern", "Finished"],
    },
  ]);
}

// Export module
module.exports = promptMgr;
