// TODO: Include packages needed for this application
// inquirer for cli
// fs module to write file
// generateMarkdown to run external functions

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//sections: title, Description, Table of Contents, Installation, Usage, 
//License, Contributing, Tests, and Questions
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Please enter the title of your repo:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description for your repo:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter any install info:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter info about repo usage:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter contributors:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter test info:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select your repos license type',
      choices: ['Apache 2.0', 'MIT', 'None'],

    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:',
    },
]

// TODO: Create a function to write README file - fs docu format, need to fix 
function writeToFile(fileName, data) {
    var data = 
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        console.error(err);
        } else {
        console.log('');
        }
    });
}
    
       

// triggering inquirer to trigger questions
// capturing responses as 'data' 
// feeding data to generateMarkdown
function init() {
    inquirer.prompt(questions).then((data) => {
        const info = generateMarkdown(data);
        writeToFile('README.md', info)
        }
    )
}


// Function call to initialize app
init();
