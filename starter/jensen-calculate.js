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
    switch (factorType) {
        case 'jump':
            measurement = system;
            break;
        case 'weight':
            measurement = system2;
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
            system = meters
            system2 = kg;
            break;
        case 'imperial':
            system = inches;
            system2 = lbs
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
    getUserFactors();
}

let validWords1 = ['jump', 'weight', 'pushups']
let isMatch = false;

function getUserInput() {
    console.log("what would you like to measure (jump, weight, pushups)");
    let factorType = prompt(">");
    factorType = factorType.toLowerCase().trim()
    for (let i = 0; i < validWords1.length; i++) {
        if (validWords1[i] === factorType) {
            isMatch = true;
            break;
        }
    }
    while (true) {
        console.log("How would you like to measure it? (metric, imperial)")
        let factorSystem = prompt(">").toLowerCase().trim();
        factorSystem = factorSystem.toLowerCase().trim()
        break;
     }
    // console.log(factorType)
    console.log("How would you like to measure it? (metric, imperial)")
    let factorSystem = prompt(">").toLowerCase().trim();
    factorSystem = factorSystem.toLowerCase().trim()
    console.log("how much");
    let factorUnit = prompt('>').toLowerCase();
    factorUnit = factorType.toLowerCase().trim()
    console.log("on what planet (earth, alien)");
    let factorPlanet = prompt('>').toLowerCase();
    factorPlanet = factorPlanet.toLowerCase().trim()


    showUserFactors(factorType, factorSystem, factorUnit, factorPlanet);
    
}
global.getUserInput = getUserInput;
getUserInput();