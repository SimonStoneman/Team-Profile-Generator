// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");


class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }

    getSchool = function () {
        console.log(this.school) ;
    };

    getRole = function () {
        console.log('Intern');
    };

}

module.exports = Intern;

// Add a new property to constructor Employee, of 'officeNumber' for the Manager instance

// Change the current constructor object method (getRole) display 'Manager' for the Manager instance

// Change the current constructor object method (getRole) display 'Manager' for the Manager instance
