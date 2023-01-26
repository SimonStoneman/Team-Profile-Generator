// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Manager = require("./Employee");


// var Manager = '';

// Manager = new Employee();

const officeNumber = 1;
// Add a new property to constructor Employee, of 'officeNumber' for the Manager instance
// Manager.officeNumber = officeNumber;
Manager.officeNumber = officeNumber;


// Change the current constructor object method (getRole) display 'Manager' for the Manager instance
// Manager.getRole = function () {
//     console.log('Manager');
// };
Manager.getRole = function () {
        console.log('Manager');
};

// module.exports = Manager;
module.exports = Manager;
