// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require("./gravityFactors")
// Define a function to show user factors based on input type and value

function something(inputValue) {
    let results = {};
    for (let something in gravityFactors) {
        results = parseFloat((inputValue * gravityFactors[something]).toFixed(2))
    }
}
// Initialize an object to hold the results
// Declare a variable to hold the unit of measurement
// Iterate over each item in the gravityFactors object
// Calculate the factor multiplied by the input value and round it to two decimals
// Switch case to determine the measurement unit based on factor type
// Iterate over the results and log each one

// Define a function to get user inputs for factor type and value
// Prompt the user to enter the type of factor they want to calculate
// Prompt the user to enter the numerical value of the factor
// Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
function calculateUserInput() {
    console.log("Enter your values");
    const userPrompt = prompt(">")
    console.log("What do you want to calculate on different planets")
}
global.calculateUserInput = calculateUserInput