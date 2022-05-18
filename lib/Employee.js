class Employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    getFirstName() {
        return this.first_name;
    }

    getLastName() {
        return this.last_name;
    }

    getFullName() {
        return `${this.first_name} ${this.last_name}`;
    }

    getRole() {
        //need to define roles and ids.
        return 
    }

    getManager() {
        //need to link manager_id and manager fullname;
        return
    }
}

module.exports = Employee;