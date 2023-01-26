// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

const school = 1;
// Add a new property to constructor Employee, of 'officeNumber' for the Manager instance
Employee.prototype.school = school;

// Change the current constructor object method (getRole) display 'Manager' for the Manager instance
Employee.prototype.getSchool = function () {
    return this.school;
};

// Change the current constructor object method (getRole) display 'Manager' for the Manager instance
Employee.prototype.getRole = function () {
        return 'Intern';
};

module.exports = Employee;