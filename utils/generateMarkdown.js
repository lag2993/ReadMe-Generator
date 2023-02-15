// Function to create license badge or return empty string if None is selected
// Doc for license badges links https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  if(license === 'None'){
    return '';
  }else{
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
}

// Create function to write license link  in README file, return empty if there None is chosen. 
function renderLicenseLink(license) {
  if(license === 'None'){
    return ''
  }else{
    return ` - [License](#license)`

  }
}

// Create function to write License section, return empty string is None is chosen. 
function renderLicenseSection(license) {
  if(license === 'None'){
    return ''}
    else{
    return `## License
    This application is using ${license} as a license`
  };
}

// Create function to write README file using responses from questions. 
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents:

  - [Installtion](#installation)

  - [Usage](#usage)

  ${renderLicenseLink(data.license)}

  - [Credits](#credits)

  - [Permissions](#permissions)

  - [Features](#features)

  - [Contributions](#contribute)

  - [Tests](#tests)

  - [Questions](#questions)

  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}
   link:https://choosealicense.com/licenses/${data.license} 

  ## Permissions
  
  ${data.permissions}

  ## Features
  
  ${data.features}

  ## Contributions

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions 

  Please email any questions about this application to ${data.email}.
  
  This application was created by ${data.name}. You can find more work at (https://github.com/${data.repo}?tab=repositories/).
`;
}
// Export method
module.exports = generateMarkdown;
