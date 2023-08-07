// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  } else {
    return renderLicenseLink();
  }
}

renderLicenseBadge(); //this seems wrong bc it will be stuck in loop, need to init to run 


// TODO: Create a function that returns the license link - a couple options 
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}



// TODO: Create a function to generate markdown for README - based on README format 
function generateMarkdown(data) {
  return (
  `# ${data.title}
 
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Github](#github)
  - [Email](#email)
  
  ## Installation instructions <a name="installation"></a>
  ${data.installation}
  
  ## Usage info <a name="usage"></a>
  ${data.usage}
  
  ## GitHub Contibutors <a name="contributing"></a>
  ${data.contributing}
  
  ## Tests for this repo <a name="tests"></a>
  ${data.tests}

  ## License info <a name="license"></a>
  This repo uses the ${data.license} license.
  
  ## GitHub Username <a name="github"></a>
  ${data.username}

  ## Email <a name="email"></a>
  ${data.email}`
  
  );
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
  //return `# ${data.title}

//`;
//}

//module.exports = generateMarkdown;