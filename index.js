const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const createFile = require("./lib/createFile");

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
            type: 'input',
            name: 'name',
            message: 'Please enter your Name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your Employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email (e.g. x@y.com):'
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'Please enter your office number:'
        }

    ]).then(data => {

        // teamMembersArr.push(data);
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const officenumber = data.officenumber;

        console.log(data.name)
        console.log(data.id)
        console.log(data.email)
        console.log(data.officenumber)

        const manager = new Manager(name, id, email, officenumber);

        teamMembersArr.push(manager);
        // console.log(`teamMembersArr has: ${teamMembersArr[0].name}`);

    }).then(data => {

        chooseAdditionalMembers();

    }); 
}

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your Name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your Employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email (e.g. x@y.com):'
        },
        {
            type: 'input',
            name: 'githubname',
            message: 'Please enter your Github Name:'
        },

    ]).then(data => {
            // teamMembersArr.push(data);
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const githubname = data.githubname;

            console.log(data.name)
            console.log(data.id)
            console.log(data.email)
            console.log(data.githubname)

            const engineer = new Engineer(name, id, email, githubname);

            teamMembersArr.push(engineer);
            // console.log(`teamMembersArr has: ${teamMembersArr[0].name}`);

        }).then(function () {

            console.log(`#########createEngineer-func: Recalling chooseAdditionalMembers()#########`)

            chooseAdditionalMembers();

        });
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your Name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your Employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email (e.g. x@y.com):'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter your School Name:'
        },

    ]).then(data => {
            
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const school = data.school;

            console.log(data.name)
            console.log(data.id)
            console.log(data.email)
            console.log(data.school)

            const intern = new Intern(name, id, email, school);

            teamMembersArr.push(intern);

            // console.log(`teamMembersArr has: ${teamMembersArr[0].name}`);

        }).then(function () {

            console.log(`#########createIntern-func: Recalling chooseAdditionalMembers()#########`)
            chooseAdditionalMembers();

        });
};

function finaliseForHtml() {
    
    const team = render(teamMembersArr);

    createFile(OUTPUT_DIR, outputPath, team)

    // console.log('---------EXITING---------');
};

function chooseAdditionalMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'members',
            message: 'Add additional team members:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        }
    ]).then(answer => {

        // console.log(`answer.members is: ${answer.members}`);

        switch(answer.members) {
            case 'Add an engineer':
                createEngineer();
                break;
            case 'Add an intern':
                createIntern();
                break;
            case 'Finish building the team':
                finaliseForHtml();
                break;
        };
    });
};


function init() {
    createManager();
};

init();



// TODO: Write Code to gather information about the development team members, and render the HTML file.

