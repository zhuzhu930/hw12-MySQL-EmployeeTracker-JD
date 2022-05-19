//Write inquier: 
const inquirer = require("inquirer");
// const fs = require('fs');

const Employee = require('../lib/Employee');
const Role = require('../lib/Role');
const Department = require('../lib/Department');

const employees = {
    employee: null, 
    roles: [],
    departments: [],
}

//const employeeIdArray = [];
//functions: 
function start() {
    console.log("Employee Tracker & Management");
    inquirer.prompt([
        {
            type: "list", 
            message: "What would you like to do?",
            name: "nextStep",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "I'm finished"],
        }, 
    ]).then((data) => {
        console.log(data);
        if(data.nextStep === "View all departments") {
            viewDepartments()
        }
        else if(data.nextStep === "View all roles") {
            viewRoles()
        }
        else if(data.nextStep === "View all employees") {
            viewEmployees()
        }
        else if(data.nextStep === "Add a department") {
            addDepartment()
        }
        else if(data.nextStep === "Add a role") {
            addRole()
        }
        else if(data.nextStep === "Add an employee") {
            addEmployee()
        }
        else if(data.nextStep === "I'm finished") {
            console.log("Thank you for using this application!")
        }
    })
}

//function viewDepartments
//function viewRoles
//function viewEmployees
//function addDepartment
//function addRole
//function addEmployee