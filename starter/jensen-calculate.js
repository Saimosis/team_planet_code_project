// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const earth = require("./utils/earthGravityFactors.js");
const alien = require("./utils/alienGravityFactors.js");
const alienGravityFactors = require("./utils/alienGravityFactors.js")
// Define a function to show user factors based on input type and value

function showUserFactors(factorType, factorSystem, factorUnit, factorPlanet) {
    // console.log(gravityFactors);
    const factors = {};
    let measurement;
    let userPlanet;
    let system
    switch (factorType) {
        case 'jump':
            measurement = factorSystem;
            break;
        case 'weight':
            measurement = factorSystem;
            break;
        case 'pushups':
            measurement = 'reps';
        default:
            measurment = 'units'
    }
    switch (factorPlanet) {
        case 'alien':
            userPlanet = alien;
            break;
            case 'earth':
            userPlanet = earth;
            break;
        default:
            userPlanet = 'planets'
    }
    switch (factorSystem) {
        case 'metric':
            system = something;
            break;
        case 'imperial':
            system = something;
            break;
        default:
            something = something;    
    }
    for (let planet in userPlanet) {
        factors[planet] = parseFloat((factorUnit * userPlanet[planet]).toFixed(2));
    }
    // console.log(factors)
    for (let planet in factors) {
        console.log(`Your ${factorType} on ${planet} is ${factors[planet]}${measurement}`);
     }
}
function getUserInput() {
    console.log("what would you like to measure (jump, weight, pushups)");
    const factorType = prompt(">");
    console.log("How would you like to measure it? (metric, imperial)")
    const factorSystem = prompt(">");
    console.log("how much");
    const factorUnit = prompt('>');
    console.log("on what planet (earth, alien)");
    const factorPlanet = prompt('>');


    showUserFactors(factorType, factorSystem, factorUnit, factorPlanet);
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
