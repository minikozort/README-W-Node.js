

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT License':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'GNU GPLv3':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache License 2.0':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'BSD 2-Clause "Simplified" License':
          return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      case 'BSD 3-Clause "New" or "Revised" License':
          return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      case 'Creative Commons Zero v1.0 Universal':
          return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)';
      case 'Eclipse Public License 2.0':
          return '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
      case 'Mozilla Public License 2.0':
          return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      default:
          return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT License':
          return 'https://opensource.org/licenses/MIT';
      case 'GNU GPLv3':
          return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'Apache License 2.0':
          return 'https://opensource.org/licenses/Apache-2.0';
      case 'BSD 2-Clause "Simplified" License':
          return 'https://opensource.org/licenses/BSD-2-Clause';
      case 'BSD 3-Clause "New" or "Revised" License':
          return 'https://opensource.org/licenses/BSD-3-Clause';
      case 'Creative Commons Zero v1.0 Universal':
          return 'https://creativecommons.org/publicdomain/zero/1.0/';
      case 'Eclipse Public License 2.0':
          return 'https://opensource.org/licenses/EPL-2.0';
      case 'Mozilla Public License 2.0':
          return 'https://opensource.org/licenses/MPL-2.0';
      default:
          return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
      case 'MIT License':
          return `


This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
      case 'GNU GPLv3':
          return `


This project is licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0).`;
      case 'Apache License 2.0':
          return `


This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).`;
      case 'BSD 2-Clause "Simplified" License':
          return `


This project is licensed under the [BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause).`;
      case 'BSD 3-Clause "New" or "Revised" License':
          return `


This project is licensed under the [BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause).`;
      case 'Creative Commons Zero v1.0 Universal':
          return `


This project is licensed under the [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).`;
      case 'Eclipse Public License 2.0':
          return `


This project is licensed under the [Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0).`;
      case 'Mozilla Public License 2.0':
          return `


This project is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).`;
      default:
          return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data, qandaURL) {
  return `
  # ${data.projectTitle}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License  
  "For more details, see the [license](#license) section."
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please feel free to contact me at [${data.email}](mailto:${data.email}) or visit my GitHub profile at (https://github.com/${data.githubUsername}).
  `;

}
  
module.exports = generateMarkdown;
