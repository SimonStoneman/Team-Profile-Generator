// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

const github = 1;

// Add a new property to constructor Employee, of 'officeNumber' for the Manager instance
Employee.prototype.github = github;

// Change the current constructor object method (getRole) display 'Manager' for the Manager instance
Employee.prototype.getGithub = function () {
    return this.github;
};

// Change the current constructor object method (getRole) display 'Manager' for the Manager instance
Employee.prototype.getRole = function () {
        return 'Engineer';
};

module.exports = Employee;