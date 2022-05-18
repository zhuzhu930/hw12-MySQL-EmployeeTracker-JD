const Employee = require('./Employee');
//const Role = require('./Role');

class Department extends Employee {
    constructor(name) {
        super(first_name, last_name, role_id, manager_id);
        // this.id = id;
        this.name = name;
    }

    getDepartmentName() {
        return this.name;
    }
}

module.exports = Department; 