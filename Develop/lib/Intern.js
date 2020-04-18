// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const fs = require("fs");
class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.role = "Intern";
    }
}

module.exports = Intern;