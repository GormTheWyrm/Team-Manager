const Employee = require("./lib/Employee");
//is above needed?

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Mascot = require("./lib/Mascot");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let myEmployees = [];
//employee ids?
let myIndex = 0;


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function addEmployee() {  //expect to change name
    inquirer.prompt([
        {
            type: "list",
            message: "Type of employee",
            name: "profession",
            choices: ["Manager", "Engineer", "Intern", "Employee", "Mascot"]
            //mascot not implemented yet
        },
        {
            type: "input",
            message: "Input name of employee",
            name: "name"
        },
        {
            type: "input",
            message: "Employee's email:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter an ID number",
            name: "id"
        },
        {
            type: "input",
            message: "Affiliated School:",
            name: "school",
            when: function(ans){if(ans.profession === "Intern"){return true}}
            //do a grad year too!
        },
        {
            type: "input",
            message: "GitHub Username:",
            name: "github",
            when: function(ans){if(ans.profession === "Engineer"){return true}}
            //do a grad year too!
        },
        {
            type: "input",
            message: "Office Number:",
            name: "OfficeNumber",
            when: function(ans){if(ans.profession === "Manager"){return true}}
            //do a grad year too!
        },
        {
            type: "confirm",
            message: "Add another Employee?",
            name: "morePeople",
            default: true
        }

    ]).then(function(res){
        //make function... if morePeople === true; call function that goes through prompt...
        
        
        //define a function to add employee to array?

        if (res.profession === "Employee"){
            let xxx = new Employee (res.name, res.id, res.email);
            //how to make var name = res.name?
            myEmployees.push(xxx);
            console.log("adding employee");

        } else if (res.profession === "Engineer"){
            let xxx = new Engineer (res.name, res.id, res.email, res.github);
            //how to make var name = res.name?
            myEmployees.push(xxx);
            console.log("adding employee");

        } else if (res.profession === "Manager"){
            let xxx = new Manager (res.name, res.id, res.email, res.OfficeNumber);
            //how to make var name = res.name?
            myEmployees.push(xxx);
            console.log("adding employee");
        } else if (res.profession === "Intern"){
            let xxx = new Intern (res.name, res.id, res.email, res.school);
            //how to make var name = res.name?
            myEmployees.push(xxx);
            console.log("adding employee");
        } else if (res.profession === "Mascot"){
            // let xxx = new Employee (res.name, res.id, res.email);
            let xxx = new Mascot(res.name, res.id, res.email, res.species);
            //how to make var name = res.name?
            myEmployees.push(xxx);
            // console.log("adding employee");
        } else {console.log("error...You somehow managed to select an option that does not exist")}
        if (res.morePeople === true){
            addEmployee();
        }
    //
        console.log(myEmployees);
        //this console log hinders usability... hides question when restarts

    }
    );
}


//  APP CALLS MAIN FUNCTIONS
addEmployee();
//render... if render needs to be within the then function... may need to fudge that function...





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
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//BUGS and future features
//if time, add a mascot option
//how to change array so that employees are added as their name...S
//what do they want from github, github user and etc? -engineer