// app.js is launched from CLI - 'node app.js'
// User is prompted to provide information for three types of team members
// which includes a Manager and one or more Engineers or Interns

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const promptMgr = require("./lib/promptMgr.js");
const promptEng = require("./lib/promptEng.js");
const promptInt = require("./lib/promptInt.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer.js");

// Setup up util.promisify
const writeFileAsync = util.promisify(fs.writeFile);

let employees = [];

// Inquirer used populateMgr to gather info from the CLI about the Manager.
function populateMgr(mgrAnswers) {
  const e = new Manager(
    mgrAnswers.name,
    mgrAnswers.id,
    mgrAnswers.email,
    mgrAnswers.officeNumber
  );
  return e;
}

// Inquirer used populateEng to gather info from the CLI about an Engineer.
function populateEng(engAnswers) {
  const e = new Engineer(
    engAnswers.name,
    engAnswers.id,
    engAnswers.email,
    engAnswers.github
  );
  return e;
}

// Inquirer used populateEng to gather info from the CLI about an Intern.
function populateInt(intAnswers) {
  const e = new Intern(
    intAnswers.name,
    intAnswers.id,
    intAnswers.email,
    intAnswers.school
  );
  return e;
}

// Gather employee info through the CLI and call render to create a team.html page
async function init() {
  try {
    console.log("Please build your team");
    const mgrAnswers = await promptMgr();
    let empErr = "Employee type not found";
    const manager = populateMgr(mgrAnswers);
    employees.push(manager);
    let procType = mgrAnswers.empTypeMng;
    while (procType != "Finished") {
      switch (procType) {
        case "Engineer":
          let engAnswers = await promptEng();
          procType = engAnswers.empTypeEng;
          const engineer = populateEng(engAnswers);
          employees.push(engineer);
          break;

        case "Intern":
          let intAnswers = await promptInt();
          procType = intAnswers.empTypeInt;
          const intern = populateInt(intAnswers);
          employees.push(intern);
          break;

        case "Finished":
          console.log("Finish selected");
          procType = "Finished";
          break;

        default:
          console.log(`Error: ${empErr}.`);
      }
    }

    // Create output folder if it does not exist
    if (fs.existsSync(OUTPUT_DIR)) {
      console.log("");
      console.log(
        "The 'output' folder exists, the team.html file can be found there."
      );
    } else {
      console.log("");
      console.log(
        "An 'output' folder has been created, the team.html file can be found there."
      );
      fs.mkdirSync(OUTPUT_DIR, 0744);
    }

    // Render the team.html page
    const htmlString = render(employees);
    await writeFileAsync(outputPath, htmlString);
  } catch (err) {
    console.log(err);
  }
}

// Launch program
init();
