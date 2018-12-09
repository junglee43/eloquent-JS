/*********
CH 4: Date Structures
**********/
// JOURNAL
var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

// This makes sure the data is exported in node.js —
// `require('./path/to/journal.js')` will get you the array.
// if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
//   module.exports = JOURNAL;
// if (typeof global != "undefined" && !global.JOURNAL)
//   global.JOURNAL = JOURNAL;

// Weresquirrel PHI table calculation function
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) *
                  (table[1] + table[3]) *
                  (table[0] + table[2]));
}
// Create and format table from JOURNAL
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for(let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if(entry.events.includes(event)) index += 1;
        if(entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor('pizza', JOURNAL));

// Alternate modern for looping over arrays
for(let entry of JOURNAL) {
    console.log(`${entry.events.length} events.`);
}

// Function to find every type of event in JOURNAL
function journalEvents(journal) {
    let events = [];
    for(let entry of journal) {
        for(let event of entry.events) {
            if(!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(JOURNAL));

// Calculate and output
for(let event of journalEvents(JOURNAL)) {
    console.log(event + ':', phi(tableFor(event, JOURNAL)));
}
// Filter for > 0.1 and < -0.1
for(let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if(correlation > 0.1 || correlation < -0.1) {
        console.log(event + ':', correlation);
    }
}

// Destructuring
// Alternate method to have bindings for the elements of array rather than whole array or table
function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
                  (n01 + n11) * (n00 + n10));
}

//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function myRange(start, end) {
    let array = [], num = start;
    for(num; num <= end; num++) {
        array.push(num);
    }
    return array;
}

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function mySum(array) {
    let sum = 0;
    for(let num of array){
        sum += num;
    }
    return sum;
}

/* The sum of a range
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function myStepRange(start, end, step = 1) {
    let array = [];
    if(start < end) {
        for(start; start <= end; start += step) {
            array.push(start);
        }
    } else if(start > end && step < 0) {
        for(start; start >= end; start += step ) {
            array.push(start);
        }
    } else {
        console.log('ERROR');
    }
    return array;
}

// Solution
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/*  Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(array) {
    newArray = [];
    for(i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

// Solution
function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

// function reverseArrayInPlace(array) {
//     for(let element of array) {
//         array.push(array.shift());
//     }
//     return array;
// }

// function reverseArrayInPlace(array) {
//     for(i = array.length - 1; i < array.length; i--) {
//         array.push(array.shift());
//         console.log(array);
//     }
//     return array;
// }

// function reverseArrayInPlace(array) {
//     let stop = array.length;
//     for(i = 0; i < stop; i++) {
//         array.push(array.shift());
//         console.log(array);
//     }
//     return array;
// }

// function reverseArrayInPlace(array) {
//     let stop = array.length;
//     for(i = 0; i < stop; i++) {
//         array.unshift(array.pop());
//         console.log(array);
//     }
//     return array;
// }

// Final
function reverseArrayInPlace(array) {
    let median = Math.floor(array.length / 2);
    for(let i = 0; i < median; i++) {
        let old = array[(array.length - 1) - i];
        // console.log(old, array.length);
        array.splice((array.length - 1) - i, 1, array[i]);
        // Grabs the value of 'array[i]', need just the index numeral
        // array.splice(array[i], 1, old);
        array.splice(i, 1, old);
        // console.log(array);
    }
    return array;
}

// Solution
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}
/*
  Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/
// 1. I'm not sure I understand the question at all, they both return a new value. The 1st returns a new array and the 2nd returns a reordered array. Where is the side effect in these functions? I guess one side effect I can see is that your generating a new value that's somehow related to the old array in the 1st version, and depending on why your reversing the array you'll have to carry or remember the connection between them or have the original somewhere in memory space.

// 2. I have no idea which would be faster, the 1st creates a new array and just pushes the values in whereas the 2nd performs some calculations... I'm thinking the 1st will be faster.

/* Lists
1. Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

2. Also write a listToArray function that produces an array from a list.

3. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,

4. and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
   If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(array) {
    let list = {value: '',
                rest: ''};
    for(let element of array) {
        list.value = array.shift();
        list.rest = arrayToList(array);
    }
    return list;
}

// Final
function arrayToList(array) {
    let list = {value: '',
                rest: ''};
    for(let i = 0; i < array.length; i++) {
        list.value = array.shift();
        if(i == array.length) {
            list.rest = null;
        } else {
            list.rest = arrayToList(array);
        }
    }
    return list;
}

// Uncaught TypeError: list is not iterable
function listToArray(list) {
    let array = [];
    for(let item of list) {
        array.push[item];
    }
    return array;
}

function listToArray(list) {
    let array = [], a = keys(list);
    while(list[a[0]] !== null || list[a[0]] !== '') {
        anItem = list[a[0]];
        console.log(anItem);
    }
    return anItem;
}

function listToArray(list) {
    let array = []; names = keys(list);
    let anItem = names[0];
    //console.log(anItem);
    let value = list[anItem];
    //console.log(value);
}
