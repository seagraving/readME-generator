var inquirer = require("inquirer")
var axios = require("axios")
var fs = require("fs")
var generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user
const questions = [
 {
     type: "input",
     message: "What is the title?",
     name: "title"
 },

 {
     type: "input",
     message: "What is the description?",
     name: "description"
 },

 {
     type: "input",
     message: "How do you install it?",
     name: "installation"
 },

 {
     type: "input",
     message: "How do you use it?",
     name: "usage"
 },

 {
     type: "input",
     message: "Who worked on this project?",
     name: "credits"
 },

 {
     type: "list",
     message: "What is the license?",
     name: "license",
     choices: [
         "MIT",
         "GPL v3",
         "AGPL"
     ]

 },

 {
     type: "list",
     message: "Which badge would you like?",
     name: "badges",
     choices: [
         "GitHub",
         "Twitter"
     ]

 },

 {
     type: "input",
     message: "Who contributed to this project?",
     name: "contributing"
 },

 {
     type: "input",
     message: "What tests were run?",
     name: "tests"
 },

 {
     type: "input",
     message: "What is your GitHub username?",
     name: "githubusername"
 },

 {
     type: "input",
     message: "What is your email?",
     name: "email"
 }
];

// function to write README file
function writeToFile(fileName, data) {
   var content = generateMarkdown(data)
    fs.writeFile(fileName,content, function(error){
        if(error){
            console.log(error)
        }
         console.log("Success!")
    })
}

// function to initialize program
function init() {
 inquirer.prompt(questions).then(function(data){
     axios.get("https://api.github.com/users/" + data.githubusername).then(function(response){
         data.githubrepo=response.data.html_url
         writeToFile("./README.md", data);
     })
 })
}

// function call to initialize program
init();
