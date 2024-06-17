// Importing necessary packages and files
const inquirer = require('inquirer');
const fs = require('fs');
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

// Questions to be prompted for the user's input
const questions = [
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
];

// A function to initialize the app
async function init() {
    try {
        const userData = await inquirer.prompt(questions);

        const qandaURL = `https://github.com/${userData.githubUsername}/`;
        const readmeContent = generateMarkdown(userData, qandaURL);

        const readmeFilePath = 'README.md';
        if (fs.existsSync(readmeFilePath)) {
            const overwrite = await inquirer.prompt({
                type: 'confirm',
                name: 'overwrite',
                message: 'README.md already exists. Do you want to overwrite it?',
                default: false
            });

            if (!overwrite.overwrite) {
                console.log('Aborting... No changes made.');
                return;
            }
        } else {
            console.log('Creating new README.md file...');
        }

        writeToFile(readmeFilePath, readmeContent);
        console.log('README.md file has been successfully generated.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
// A function to write to file that is created
function writeToFile(fileName, readmeContent) {
    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('README.md file has been successfully written.');
        }
    });
}

init(); // Function call to initialize app
