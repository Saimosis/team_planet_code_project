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
    let system2
    switch (factorSystem) {
        case '1':
            system = ' meters'
            system2 = ' kg';
            break;
        case '2':
            system = ' inches';
            system2 = ' lbs';
            break;
        default:
            measurement = " reps";
    }
    switch (factorType) {
        case 'jump':
            measurement = system;
            break;
        case 'weight':
            measurement = system2;
            break;
        case 'pushups':
            measurement = ' reps';
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

    for (let planet in userPlanet) {
        factors[planet] = parseFloat((factorUnit * userPlanet[planet]).toFixed(2));
    }
    // console.log(factors)
    for (let planet in factors) {
        console.log(`Your ${factorType} on ${planet} is ${factors[planet]}${measurement}`);
    }
    getUserInput();
}

let validWords1 = ['jump', 'weight', 'pushups']
let isMatch = false;

function getUserInput() {
    let factorSystem;
    console.log("what would you like to measure (jump, weight, pushups)");
    let factorType = prompt(">");
    factorType = factorType.toLowerCase().trim();
    for (let i = 0; i < validWords1.length; i++) {
        if (validWords1[i] === factorType) {
            isMatch = true;
            break;
        }
    }
    if (isMatch) {
        
    } else {
        console.error("please enter a proper response")
        getUserInput()
    }
    if (factorType !== "pushups") {
        console.log("Type '1' to measure in imperial Units or '2' for Metric Units");
        factorSystem = prompt(">").trim().toLowerCase();
        if (!isNaN(factorSystem)) {

        } else {
            console.error("Value invalid, try again")
        }
    } else {
        factorSystems = prompt(">").trim().toLowerCase();
    }
    console.log("how much");
    let factorUnit = prompt('>');
    factorUnit = factorUnit.toLowerCase().trim();
    console.log("on what planet (earth, alien)");
    let factorPlanet = prompt('>').toLowerCase();
    factorPlanet = factorPlanet.toLowerCase().trim();


    showUserFactors(factorType, factorSystem, factorUnit, factorPlanet);

}
global.getUserInput = getUserInput;
getUserInput();