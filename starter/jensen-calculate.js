// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const earth = require("./utils/earthGravityFactors.js");
const alien = require("./utils/alienGravityFactors.js");
const alienGravityFactors = require("./utils/alienGravityFactors.js")
// Define a function to show user factors based on input type and value

function showUserFactors(factorType, factorUnit, factorPlanet) {
    // console.log(gravityFactors);
    const factors = {};
    let measurement;
    let planet;
    for (let planet in factorPlanet) {
        factors[planet] = parseFloat((factorUnit * factorPlanet[planet]).toFixed(2));
    }
    switch (factorType) {
        case 'jump':
            measurement = 'cm';
            break;
        case 'weight':
            measurement = 'kg';
            break;
        default:
            measurment = 'units'
    }
    switch (factorPlanet) {
        case 'alien':
            planet = alien;
            break;
        case 'earth':
            planet = earth;
            break;
        default:
            planet = 'planets'
    }
    // console.log(factors)
    for (let planet in factors) {
        console.log(`Your ${factorType} on ${planet} is ${factors[planet]}${measurement}`);
     }
}
function getUserInput() {
    console.log("what would you like to measure (jump, weight)");
    const factorType = prompt(">");
    console.log("on what planet (earth, alien)");
    const factorPlanet = prompt('>');
    console.log("how much");
    const factorValue = prompt('>');


    showUserFactors(factorType, factorValue, factorPlanet);
}
global.getUserInput = getUserInput;
// console.log(showUserFactors('jump', 5));
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
global.showUserFactors = showUserFactors;