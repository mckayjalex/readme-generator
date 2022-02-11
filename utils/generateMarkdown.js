// Handles the license badge
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU General Public License') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else {
    return '';
  }
}

// Handles the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GNU General Public License') {
    return 'https://opensource.org/licenses/gpl-license';
  }
}

// Handles license Section
function renderLicenseSection(license) {
  return `## Lisense

License Type: [${license}](${renderLicenseLink(license)})\n
${renderLicenseBadge(license)}`
}

// Handles feature section
function renderFeaturesSection(features) {
  let feature = features.split(" ");

  let finalFeatures = '';
  for (let i = 0; i < feature.length; i++) {
    finalFeatures += `- ${feature[i]}\n`
  }
  return finalFeatures;
}

// Handles the test section
function renderTestSection(tests) {
  let test = tests.split(" ");

  let finalTests = '';
  for (let i = 0; i < test.length; i++) {
    finalTests += `- ${test[i]}\n`
  }
  return finalTests;
}

// Generate markdown fucntion to supply readme with data
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of contents 
- [Installation](#installation) 
- [Usage](#usage) 
- [Credits](#credits) 
- [License](#license)
- [Features](#features)
- [How To Contribute](#contribute) 
- [Tests](#tests)

## Installation

${data.installation}

## Usage 

![Test Image](${data.usage})

## Credits

${data.credits}

${renderLicenseSection(data.license)}

## Features

${renderFeaturesSection(data.features)}
## Tests

${renderTestSection(data.tests)}
## Contact

GitHub: [GitHub](https://github.com/${data.username}) Email: [${data.email}](${data.email})`;
}

module.exports = generateMarkdown;
