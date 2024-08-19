const prompt = require('prompt-sync')();
// import earthGravity Factors
const earthGravityFactors = require('./utils/earthGravityFactors.js');
// import alienGravityFactors
const alienGravityFactors = require('./utils/alienGravityFactors.js');

function showUserFactors(factorType, factorUnit, factorValue, factorPlanets) {
    // final results object {}
    // final calculations
    // final console log to user
    getUserFactors();
}
function getUserFactors() {
    let factorType;
    let factorValue;
    let factorPlanets;
    let factorSystem;
    while (true) {
        break;
    }
    while (true) {
        if (factorType !== "pushups") {
            // prompt
            factorSystem = prompt("enter 1 or 2");
        } else {
            factorSystem = "3"
        }
        if (!isNaN(factorSystem) && (1000 > factorSystem > 0)) {
            switch (factorSystem) {
                case "1":
                    factorSystem = "metric";
                    break;
                case "2":
                    factorSystem = "imperial";
                    break;
            }
            break;
        } else {
            console.error("you silly goose please enter a valid integer");

        }
    }
    let factorUnit = "repetitions";
    if (factorSystem === "metric") { } else if (factorSystem === "imperial") { }
    while (true) {
        break;
    }
    while (true) {
        break;
    }
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
}
global.getUserFactors = getUserFactors;
getUserFactors();