//set up all the required packages.
const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer");
//require('dotenv').config();

const Employee = require('./lib/Employee');
const Role = require('./lib/Role');
const Department = require('./lib/Department');

//Start the server port and open an express instance.
const PORT = process.env.PORT || 3001;
const app = express();

//Use express app.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to the database, .env file is used.
const db = mysql.createConnection(
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    user: 'root',
    password: 'rootroot',
    database: 'employees_db',
    port: 3306
  },
  console.log(`Connected to the employees_db database.`)
);


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
  start();
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
  start();
}
//function viewEmployees
function viewEmployees() {
  //? This query is not working properly
  db.query(`SELECT employee.id AS "Employee ID", first_name AS "First Name", last_name AS "Last Name", title AS "Job Title", name as "Department Name", salary AS "Salary", manager_id as "Manager ID" FROM department, employee, role;`, function (err, results) {
      if(err) {
          throw(err);
      } else {
         console.log(results); 
      }  
});
  start();
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
      const department = new Department(id, data.addDept);
      //not so sure how to link this part with database:
      db.query(`INSERT INTO department
      VALUES (${department});`, function (err, results) {
          if(err) {
              throw(err);
          } else {
             console.log(results); 
             console.log("A new department has been added.") 
          }
  });
  });
  start();
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
      // ? id is not defined, need to figure out
      const role = new Role(id, data.addRole, data.addSalary, data.belongTo)
      //how to add this new role into database: 
      db.query(`INSERT INTO role VALUES (${role})`, function (err, results) {
          if(err) {
              throw(err);
          } else {
             console.log(results);
             console.log("A new role has been added.");
          }  
  });
  })
  start();
}
//function addEmployee
function addEmployee() {
  inquirer.prompt([
      {
          type: "input",
          message: "Please enter the first name",
          name: "firstName"
      },
      {
          type: "input",
          message: "Please enter the last name",
          name: "lastName"
      },
      {
          type: "input",
          message: "Please enter the role Id",
          name: "roleId"
      },
      {
          type: "input",
          message: "Please enter the manager Id",
          name: "managerId"
      },
  ]).then((data) => {
    //? id is not defined.
      const employee = new Employee(id, data.firstName, data.lastName, data.roleId, data.managerId);
// ? Not so sure if this is correct to link db and the table. Do I need to destructure the ${employee}?
      db.query(`INSERT INTO employee VALUES (${employee})`, function (err, results) {
          if(err) {
              throw(err);
          } else {
             console.log(results);
             console.log("A new employee has been added.");
          }  
  });
  })
  start();
}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

start();