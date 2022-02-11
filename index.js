// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// An array of questions for user input
function CreateReadmeFile() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter title of the project?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please enter a brief project description?',
                name: 'description'
            },
            {
                type: 'input',
                message: 'Please enter some installation instructions?',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'Please enter some usage information?',
                name: 'usage'
            },
            {
                type: 'input',
                message: 'Please enter contributors?',
                name: 'credits'
            },
            {
                type: 'input',
                message: `Please enter some features of the app? (Seperate each by a space)`,
                name: 'features'
            },
            {
                type: 'input',
                message: `Please enter some tests for this application? (Seperate each by a space)`,
                name: 'tests'
            },
            {
                type: 'list',
                message: 'Please select a license?',
                name: 'license',
                choices: ['MIT', 'Mozilla Public License 2.0', 'Apache License 2.0', 'GNU General Public License'],
            },
            {
                type: 'input',
                message: 'Please enter your GitHub username?',
                name: 'username'
            },
            {
                type: 'input',
                message: 'Please enter your email address?',
                name: 'email'
            }
        ])
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        })
}

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("There has been an error! Please try again.");
        }
        console.log('README.md created successfully')
    })
}

// A function to initialize app
function init() {
    CreateReadmeFile();
}

// Function call to initialize app
init();
