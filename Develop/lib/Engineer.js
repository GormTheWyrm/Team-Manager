// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        this.role = "Engineer"
        //figure out super...
    }
}
module.exports = Engineer