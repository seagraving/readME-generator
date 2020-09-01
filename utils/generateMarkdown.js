// function to generate markdown for README
function generateMarkdown(data) {
  return `#  ${data.title}

  ## Description 
  
${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
 ${data.installation}
  
  ## Usage 
  
 ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  
  
  ## License
  
 ${data.license==="MIT"? "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)": data.license==="GPL v3"? "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)" : "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)"}
  
  ---
  
  🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
 ${data.badges==="GitHub" ? "[![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Stars&style=plastic)]()" : "[![Tweet](https://img.shields.io/twitter/url/https/github.com/tterb/hyde.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20Hyde!%20%E2%9C%A8%20An%20accessible,%20open-source%20markdown%20editor%20for%20any%20user%20E2%9C%A8%20https://github.com/tterb/hyde%20%F0%9F%A4%97)"  }
  
  ## Contributing
  
 ${data.contributing}
  
  ## Tests
  
 ${data.tests}
  
  ## Questions

 

  [![GitHub followers](https://img.shields.io/github/followers/tterb.svg?style=social&label=Follow)](${data.githubrepo})

  email: ${data.email}
  
  ---
  © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
  
  `;
}

module.exports = generateMarkdown;
