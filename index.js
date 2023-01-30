const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembersArr = [];

const dave = new Manager('Dave', 1, 'x@y.com', 1);
const bob = new Engineer('Bob', 2, 'bob@test.com', 'Bobby');
const daz = new Intern('Daz', 3, 'daz@test.com', 'Nextdoor');

// console.log('Manager');
// dave.getId();
// dave.getName();
// dave.getEmail();
// dave.getRole();
// dave.getOfficeNumber();

// console.log('Engineer');
// bob.getId();
// bob.getName();
// bob.getEmail();
// bob.getRole();
// bob.getGithub();

// console.log('Intern');
// daz.getId();
// daz.getName();
// daz.getEmail();
// daz.getRole();
// daz.getSchool();

function createManager() {
    inquirer.prompt([
        {
            name: 'name',
            message: 'Please enter your Name:'
        },
        {
            name: 'id',
            message: 'Please enter your ID:'
        },
        {
            name: 'email',
            message: 'Please enter your Email (e.g. x@y.com):'
        },
        {
            name: 'officenumber',
            message: 'Please enter your office number:'
        },

    ]).then(data => {
        teamMembersArr.push(data);
        console.log(`teamMembersArr has: ${teamMembersArr}`);
    });
}

function init() {
    createManager();
}

init();



// TODO: Write Code to gather information about the development team members, and render the HTML file.

