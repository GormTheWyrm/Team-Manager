const Employee = require("./Employee");
const fs = require("fs");
class Mascot extends Employee {
    constructor(name, id, email, species) {
        super(name, id, email);
        this.role = "Mascot";
        this.species = species;
    }
    getSchool(){
        return this.school
    }
}

module.exports = Mascot;