## Plan for the app

1. Write schema to structure the tables.
2. Seed tables with data.
3. Write inquirer:

- List of all options: View all departments; View all roles; View all employees, Add a department, Add a role, Add an employee, Update an employee role.
- View all department: SELECT id AS "Department ID", name AS "Department Name" FROM department;
- View all roles: SELECT title AS "Job Title", id AS "Role ID", salary AS "Salary", name FROM role, department WHERE id = department_id;

- View all employees: SELECT id AS "Employee ID", first_name AS "First Name", last_name AS "Last Name", title AS "Job Title", name as "Department name", manager_id as "Manager ID" FROM department, employee, role WHERE role_id = role.id;
<!-- Here need to figure out how to generate the manger name -->

- Add a department: INSERT INTO department(name)
  VALUES ("#")

- Add a role: INSERT INTO role(title, salary, department_id)
  VALUES ("#")

- Add an employee:
INSERT INTO employee(frist_name, last_name, role_id, manager_id)
<!-- not sure whether I should add role_id and manager_id here. maybe inquire the role and manager name -->
- Update an employee role: Inquire with a list of employee names, then inquire what's the new role for this employee, then replace the old role with new role in the database.
