// Required Packages 
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('node:path');
const generateMarkdown = require('./utils/generateMarkdown');
// Array of  questions to ask user. 
const questions = [

    {
        type: 'input',
        name:'title',
        message:'What is the name of your project?',
    },
    {
        type: 'input',
        name:'description',
        message:'Please describe what problem you are trying to solve?',
    },
    {
        type: 'input',
        name:'installation',
        message:'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name:'usage',
        message:'Provide instructions and examples of use?',
    },
    {
        type: 'list',
        name:'license',
        message:'What license does your project use?',
        choices:['mit','bsl-1.0','apache-2.0','gpl-3.0','None'],
    },
    {
        type: 'input',
        name:'credits',
        message:'List collaborators, third-party assets and followed tutorials?',
    },
    {
        type: 'input',
        name:'permissions',
        message:'What can developers do and not do with your project?',
    },
    {
        type: 'input',
        name:'features',
        message:'List features of your project if you have a lot.',
    },
    {
        type: 'input',
        name:'contribute',
        message:'Guidelines for contribution if you would like.',
    },
    {
        type: 'input',
        name:'tests',
        message:'Examples of tests users can run:',
    },
    {
        type: 'input',
        name:'email',
        message:'What is your email?',
    },
    {
        type: 'input',
        name:'name',
        message:'What is your name?',
    },
    {
        type: 'input',
        name:'repo',
        message:'What is your github username?',
    },
]

// Write Read me File to assets folder
// Documentation Referenced: https://nodejs.dev/en/learn/writing-files-with-nodejs/#:~:text=Examples-,Writing%20a%20file,writeFile()%20API.
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(),'/assets/',(fileName)), data, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}

// Initialize function 
function init() {
    inquirer.prompt(questions).then((response)=>{
        console.log('Creating README!');
        writeToFile('README.md',generateMarkdown({ ...response}));

    });
}

// Function call 
init();
