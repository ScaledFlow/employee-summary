const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
  constructor(name, id, email, gitUser) {
    super(name, id, email);
    this.gitUser = gitUser;
    this.role = "Engineer";
  }
  getGitHub() {
    return `${this.gitUser}`;
  }
  getRole() {
    return `${this.role}`;
  }
}

module.exports = Engineer;
