// Require inquirer - used for CLI user interface and session flow
const inquirer = require("inquirer");

// List of question the user is promptes with at the CLI
function promptTeamType() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What type of team meber would you like to add?",
      name: "title",
    },
  ]);
}

// Options
// Manager
// Engineer
// Intern
// I don't want to add any more team members

// Export module
module.exports = promptTeamType;
