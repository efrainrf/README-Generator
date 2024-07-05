// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is your project about? Write a short summary'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How should you install dependecies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to now about this repo?',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.createPromptModule(questions).then((inquirerResponses) => {
    console.log('Creating README');
    writeToFile('README.md', generateMarkdown({...inquirerResponses}));
  });
}

// Function call to initialize app
init();