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
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
//const questions = [
  // Add your questions here
//];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Implement the logic to write data to a file (e.g., README.md)
  // Example:
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  // Prompt the user for input using inquirer
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README content based on user input
      const readmeContent = generateMarkdown(answers); // You can replace this with your own logic

      // Write the README file
      writeToFile('README.md', readmeContent);
      console.log('README.md created successfully!');
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

// Function call to initialize app
init();
