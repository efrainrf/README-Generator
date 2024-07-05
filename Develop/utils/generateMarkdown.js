// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '!License: MIT';
  } else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License\n\nThis project is licensed under the ${renderLicenseLink(license)}.`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Example: Return a badge for the MIT license
  if (license === 'MIT') {
    return '!License: MIT';
  }
  // Add other license badges as needed
  // ...
  else {
    return ''; // Return an empty string if no license specified
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Example: Return the link for the MIT license
  if (license === 'MIT') {
    return 'MIT License';
  }
  // Add other license links as needed
  // ...
  else {
    return ''; // Return an empty string if no license specified
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Example: Return the license section with a link to the MIT license
  if (license) {
    return `## License

This project is licensed under the ${renderLicenseLink(license)}.`;
  } else {
    return ''; // Return an empty string if no license specified
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- Installation
- Usage
- Contributing
- Tests
- Questions
${renderLicenseSection(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, feel free to reach out via GitHub or email:
- GitHub: ${data.github}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
