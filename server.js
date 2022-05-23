//set up all the required packages.
const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer");
const cTable = require('console.table');

//Start the server port and open an express instance.
const PORT = process.env.PORT || 3001;
const app = express();

//Use express middleware: 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to the database:
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employees_db',
    port: 3306
  },
  console.log(`Connected to the employees_db database.`)
);

function start() {
  // adding style to title message: 
  console.log("\x1b[34m Employee Tracker & Management");
  console.log('\n-----------------');
  inquirer.prompt([
      {
          type: "list", 
          message: "What would you like to do?",
          name: "nextStep",
          choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "I'm finished"],
      }, 
  ]).then((data) => {
      switch (data.nextStep) {
        case data.nextStep = "View all departments":
          viewDepartments();
          break;
        case data.nextStep = "View all roles":
          viewRoles();
          break;
        case data.nextStep = "View all employees":
          viewEmployees();
          break;
        case data.nextStep = "Add a department":
          addDepartment();
          break;
        case data.nextStep = "Add a role":
          addRole();
          break;
        case data.nextStep = "Add an employee":
          addEmployee();
          break;
        case data.nextStep = "I'm finished":
          console.log("Thank you for using this application! Please press ctrl + c to exit.");
          break;
        default: 
          console.log("Please choose an option!")
      }
  })      
}

//function viewDepartments
function viewDepartments() {
  db.query('SELECT id AS "Department ID", name AS "Department Name" FROM department;', function (err, results) {
      if(err) {
          throw(err);
      } else {
        console.log('\n-----------------');
        console.table('\n', results, '\n----------------');
        start();
      }  
});
}

//function viewRoles
function viewRoles() {
  db.query('SELECT title AS "Job Title", role.id AS "Role ID", salary AS "Salary", department.name AS "Department Name" FROM role, department WHERE department.id = department_id;', function (err, results) {
      if(err) {
          throw(err);
      } else {
        console.log('\n-----------------');
        console.table('\n', results, '\n----------------');
        start();
      }  
})
}

//function viewEmployees
function viewEmployees() {
  //selecting different columns from 3 tables.
  db.query(`
  SELECT employee.id AS "Employee ID", first_name AS "First Name", last_name AS "Last Name", role.title AS "Job Title", department.name as "Department Name", role.salary AS "Salary", manager_id as "Manager ID" 
  FROM employee, role, department
  WHERE employee.role_id = role.id AND role.department_id = department.id
  ORDER BY 1,2;`, function (err, results) {
      if(err) {
          throw(err);
      } else {
        console.log('\n-----------------');
        console.table('\n', results, '\n----------------');
        start();
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
      const departmentName = data.addDept;
      db.query(`INSERT INTO department(name)
      VALUES ("${departmentName}");`, function (err, results) {
          if(err) {
              throw(err);
          } else {
            console.log('\n-----------------');
             console.log("A new department has been added.");
             console.table('\n', results, '\n----------------');
          }
      });
      //Display added department: 
      db.query(`SELECT id AS "Department Id", name AS "Department Name" FROM department;`, function (err, results) {
        if(err) {
          throw(err);
        } else {
          console.log('\n-----------------');
          console.table('\n', results, '\n----------------');
          start();
        }
      })
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
      console.log(data);
      const title = data.addRole;
      const salary = data.addSalary;
      //convert depatment information into department Id so I can use it later in the SQL query. 
      let department = data.belongTo;
      let departmentId;
      switch(department) {
        case department = "Marketing": 
          departmentId = 1;
          break;
        case department = "Finance":
          departmentId = 2;
          break;
        case department = "Operations":
          departmentId = 3;
          break;
        case department = "Human Resource":
          departmentId = 4;
          break;
        case department = "IT":
          departmentId = 5;
          break;
      }
      console.log(departmentId);
      //Add this new role into database: 
      db.query(`INSERT INTO role(title, salary, department_id) 
      VALUES ("${title}", "${salary}", "${departmentId}");`, function (err, results) {
          if(err) {
              throw(err);
          } else {
            console.log('\n-----------------');
             console.log("A new role has been added.");
             console.table('\n', results, '\n----------------');
          }  
      });
      //showing the added role. 
      db.query(`SELECT role.id AS "Id", role.title AS "Title", role.salary AS "Salary", department.name AS "Department Name" FROM role, department WHERE role.department_id = department.id;`, function (err, results) {
        if(err) {
          throw(err);
        } else {
          console.log('\n-----------------');
          console.table('\n', results, '\n----------------');
          start();
        }
      })
  })
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
      const firstName = data.firstName;
      const lastName = data.lastName;
      const roleId = data.roleId;
      const managerId = data.managerId;
      //adding the employee to the database: 
      db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) 
      VALUES ("${firstName}", "${lastName}", "${roleId}", "${managerId}")`, function (err, results) {
          if(err) {
              throw(err);
          } else {
            console.log('\n-----------------');
             console.log("A new employee has been added.");
             console.table('\n', results, '\n----------------');
          }  
      });
      //display added information: 
      db.query(`SELECT id AS "Employee Id", first_name AS "First Name", last_name AS "Last Name", role_id AS "Role Id", manager_id as "Manager Id" FROM employee;`, function (err, results) {
        if(err) {
          throw(err);
        } else {
          console.log('\n-----------------');
          console.table('\n', results, '\n----------------');
          start();
        }
      })
  })
}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log('\n', `Server running on port ${PORT}`);
});

start();