/*
Chapter 3: Functions
*/

// Closure
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); // -> 1
console.log(wrap2()); // -> 2

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); // -> 10

// Recursion
function findSolution(target) {
    function find(current, history) {
        if(current == target) {
            return history;
        } else if(current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, '1');
}
console.log(findSolution(24));

// Writing Functions
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while(cowString.length < 3) {
        cowString = '0' + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);
    while(chickenString.length < 3) {
        chickenString = '0' + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
