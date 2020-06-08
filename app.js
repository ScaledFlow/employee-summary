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

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

// Write code to use inquirer to gather information about the development team members,

function populateMgr(mgrAnswers) {
  console.log(mgrAnswers.name);
  const e = new Manager(
    mgrAnswers.name,
    mgrAnswers.id,
    mgrAnswers.email,
    mgrAnswers.officeNumber
  );
  return e;
}

function populateEng(engAnswers) {
  console.log(engAnswers.name);
  const e = new Engineer(
    engAnswers.name,
    engAnswers.id,
    engAnswers.email,
    engAnswers.github
  );
  return e;
}

function populateInt(intAnswers) {
  console.log(intAnswers.name);
  const e = new Intern(
    intAnswers.name,
    intAnswers.id,
    intAnswers.email,
    intAnswers.school
  );
  return e;
}

// console.log(employees);

async function init() {
  try {
    console.log("Please build your team");
    const mgrAnswers = await promptMgr();
    let complete = false;
    const manager = populateMgr(mgrAnswers);
    employees.push(manager);
    // console.log("value of employees: " + employees[0].name);
    // console.log("value of employees: " + employees[0].getRole());
    // console.log("returned e value: " + Managers.getRole());
    let procType = mgrAnswers.empTypeMng;
    while (procType != "Finished") {
      switch (procType) {
        case "Engineer":
          let engAnswers = await promptEng();
          procType = engAnswers.empTypeEng;
          const engineer = populateEng(engAnswers);
          employees.push(engineer);
          console.log("returned engineer role value: " + engineer.getRole());
          console.log("Eng selected, procType = " + procType);
          break;

        case "Intern":
          console.log("Intern selected");
          let intAnswers = await promptInt();
          procType = intAnswers.empTypeInt;
          const intern = populateInt(intAnswers);
          employees.push(intern);
          console.log("returned interns role value: " + intern.getRole());
          break;

        case "Finished":
          console.log("Finish selected");
          procType = "Finished";

          // kick of render here

          break;

        default:
          console.log(`Error: ${complete}.`);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

init();

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to Emp out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
