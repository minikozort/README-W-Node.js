const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

const licenseOptions = [
    'MIT License',
    'GNU GPLv3',
    'Apache License 2.0',
    'BSD 2-Clause "Simplified" License',
    'BSD 3-Clause "New" or "Revised" License',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'Mozilla Public License 2.0'
  ];

// TODO: Create an arr ay of questions for user input
const questions = [
    'projectTitle',
    'description',
    'tableOfContents',
    'installation',
    'usage',
    'license',
    'contributing',
    'tests',
    'githubUsername',
    'email'
];

// // TODO: Create a function to write README file
// const readmeContent = "" ;
// fs.writeFile('README.md', readmeContent, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         // console.log('Content has been written to README.md successfully.');
//     }
// });





// TODO: Create a function to initialize app
async function init() {
    try {
        const userData = await inquirer.prompt([
            {
                type: 'input',
                name: 'projectTitle',
                message: 'What is the title of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of your project:'
            },
            {
                type: 'input',
                name: 'tableOfContents',
                message: 'Provide a table of contents:'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Explain how to install your project:'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for use:'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Indicate the project license:',
                choices: licenseOptions
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Explain how others can contribute to your project:'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Provide examples on how to run tests:'
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'What is your GitHub username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            }
        ]);

        const qandaURL = `https://github.com/${userData.githubUsername}/`;
        const readmeContent = generateMarkdown(userData, qandaURL);

        writeToFile('README.md', readmeContent);
        console.log('README.md file has been successfully generated.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function writeToFile(fileName, readmeContent) {
   fs.writeFile(fileName, readmeContent, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        // console.log('Content has been written to README.md successfully.');
    }
});
}

// Function call to initialize app
init();