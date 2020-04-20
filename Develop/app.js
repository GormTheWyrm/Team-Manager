const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Employee = require("./lib/Employee"); 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Mascot = require("./lib/Mascot");

const render = require("./lib/htmlRenderer");



const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");



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
            choices: ["Manager", "Engineer", "Intern", "Employee", 
            "Mascot"
        ]
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
            
        },
        {
            type: "input",
            message: "What type of mascot?",
            name: "species",
            when: function(ans){if(ans.profession === "Mascot"){return true}}
            
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
        } 
        else if (res.profession === "Mascot"){
            // let xxx = new Employee (res.name, res.id, res.email);
            let xxx = new Mascot(res.name, res.id, res.email, res.species);
            //how to make var name = res.name?
            myEmployees.push(xxx);
            // console.log("adding employee");
        } 
        else {console.log("error...You somehow managed to select an option that does not exist")}
        if (res.morePeople === true){
            addEmployee();
        }else{
            const myHTML = render(myEmployees);    //returns html...
            //now write myHTML into a new file called ...team
            writeHTML(myHTML);
            // displayHTML() consider opening file if possible...
        }
    //
        // console.log(myEmployees);
        //this console log hinders usability... hides question when restarts

    }
    );
}


function writeHTML(inputVar){
    //writes to a file...
    fs.writeFile("./output/team.html", inputVar, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("File Created!");
      });     
}
function displayHTML(x){
    //opens file?
}

//  APP CALLS MAIN FUNCTIONS
addEmployee();  //may need to change this name to init() ... but first make it work!
//render is called within employee... returns








//BUGS and future features
// I've seen a single comma appear on the output file occasionally. Both times in front of an engineers div.
//1st it was in front of 2nd div, then in front of 3rd div. 
//more testing required to locate bug

//needs a gif
//needs validation
//mascot not yet implemented.