const Employee = require('./Employee');

class Role extends Employee {
    constructor(title, salary, department_id) {
        super(id, first_name, last_name, role_id, manager_id);
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }
    //maybe change this to getRole()?
    getTitle() {
        return this.title;
    }

    getSalary() {
        return this.salary;
    }

    getDepartment() {
        //need to connect Department to department ID;
        return 
    }
}

module.exports = Role; 