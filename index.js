// Code your solution here
function findMatching(drivers, name) {
    if (!Array.isArray(drivers) || typeof name !== 'string') {
        throw new Error("Invalid input");
    }
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    if (!Array.isArray(drivers) || typeof letters !== 'string') {
        throw new Error("Invalid input");
    }
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    if (!Array.isArray(drivers) || typeof name !== 'string') {
        throw new Error("Invalid input");
    }
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

const drivers = [{
    name: 'Bobby',
    hometown: 'Pittsburgh'
  }, {
    name: 'Bobby',
    hometown: 'Tampa Bay'
  }, {
    name: 'Sammy ',
    hometown: 'NewYork'
  }, {
    name: 'Sally',
    hometown: 'Boston'
  }, {
    name: 'Annette',
    hometown: 'Los Angeles'
  }, {
    name: 'Sarah',
    hometown: 'Denver'
  }, {
    name: 'Bobby',
    hometown:'Pittsburgh'

}];
console.log(findMatching(drivers, 'Bobby')); // ['Bobby', 'Bobby']
console.log(findMatching(drivers, 'Bobby')); // ['Bobby', 'Bobby']
console.log(findMatching(drivers, 'Sammy')); // ['Sammy']
console.log(findMatching(drivers, 'NotFound')); // []

console.log(fuzzyMatch(drivers, 'Sa')); // ['Sammy', 'Sally', 'Sarah']
console.log(fuzzyMatch(drivers, 'B')); // ['Bobby', 'Bobby']
console.log(fuzzyMatch(drivers, 'Ann')); // ['Annette']

console.log('\nMatchName examples:');
console.log(matchName(drivers, 'Bobby')); // ['Bobby', 'Bobby']
console.log(matchName(drivers, 'Bobby')); // ['Bobby', 'Bobby']
console.log(matchName(drivers, 'Sarah')); // ['Sarah']

