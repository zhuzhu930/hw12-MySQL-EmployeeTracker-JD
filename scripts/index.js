//Write inquier: 
const inquirer = require("inquirer");
// const fs = require('fs');

const Employee = require('../lib/Employee');
const Role = require('../lib/Role');
const Department = require('../lib/Department');

//should I add employee names, roles and department names in here?
const employees = {
    employee: [], 
    role: [],
    department: [],
}

//const employeeIdArray = [];
//functions: 
//function start
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
function viewDepartments() {
    db.query('SELECT id AS "Department ID", name AS "Department Name" FROM department;', function (err, results) {
        if(err) {
            throw(err);
        } else {
           console.log(results); 
        }  
});
}

//function viewRoles
function viewRoles() {
    db.query('SELECT title AS "Job Title", role.id AS "Role ID", salary AS "Salary", department.name AS "Department Name" FROM role, department WHERE department.id = department_id;', function (err, results) {
        if(err) {
            throw(err);
        } else {
           console.log(results); 
        }  
});
}
//function viewEmployees
function viewEmployees() {
    //This query is not working properly
    db.query(`SELECT employee.id AS "Employee ID", first_name AS "First Name", last_name AS "Last Name", title AS "Job Title", name as "Department Name", salary AS "Salary", manager_id as "Manager ID" FROM department, employee, role;`, function (err, results) {
        if(err) {
            throw(err);
        } else {
           console.log(results); 
        }  
});
}


//function addDepartment
function addDepartment(){
    inquirer.prompt([
        {
            type: "list", 
            message: "What department would you like to add?",
            name: "addDept",
            choices: ["Public Relations", "Government affairs", "Global outreach", "Accounting", "Communications", "Language Services"],
        }, 
    ]).then((data) => {
        const newDept = data.addDept;
        // const newDept = new Department(id, data.addDept);
        // employees.department.push(department);
        //not so sure how to link this part with database:
        db.query(`INSERT INTO department
        VALUES (id, ${newDept});`, function (err, results) {
            if(err) {
                throw(err);
            } else {
               console.log(results); 
               console.log("A new department has bee added.") 
            }
    });
    });
}

//function addRole
function addRole() {
    inquirer.prompt([
        {
            type: "list", 
            message: "What role would you like to add?",
            name: "addRole",
            choices: ["Marketing assistant", "Finance assistant", "Operations assistant", "HR assistant", "IT assistant"],
        },
        {
            type: "list", 
            message: "What salary would you like to add for this role?",
            name: "addSalary",
            choices: ["50000", "55000", "60000", "65000", "70000"],
        }, 
        {
            type: "list", 
            message: "What department does this role belong to?",
            name: "belongTo",
            //the choice should be dynamic
            choices: ["Marketing", "Finance", "Operations", "Human Resource", "IT"],
        }
    ]).then((data) => {
        // const newRole = data.addRole;
        const role = new Role(id, data.addRole, data.addSalary, data.belongTo)
        //how to add this new role into database: 
        db.query(`INSERT INTO role VALUES (${role})`, function (err, results) {
            if(err) {
                throw(err);
            } else {
               console.log(results);
               console.log("A new role has bee added.");
            }  
    });
    })
}
//function addEmployee
