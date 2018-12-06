/********
Chapter 3: Functions
https://eloquentjavascript.net/code/
*********/

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

/* Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a
function min that takes two arguments and returns their minimum.
*/

function getMin(a, b) {
    if(a < b) {
        return a;
    } else if(b < a) {
        return b;
    } else {
        console.log(`${a} and ${b} are equal.`);
    }
}

// Solution
function min(a, b) {
    if (a < b) return a;
    else return b;
}

/* Recursion
We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even or odd:

• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number)
and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?
​*/

function isEven(num) {
    if(num == 0) {
        return true;
    } else if(num == 1) {
        return false;
    } else {
//        num -= 2;
        return isEven(num - 2);
    }
}

function isEven(num) {
    if(num == 0) {
        return true;
    } else if(num == 1 || num < 0) {
        return false;
    } else {
        //        num -= 2;
        return isEven(num - 2);
    }
}

// Solution
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

/* Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example, "b").
The first character has position 0, which causes the last one to be found at
position string.length - 1. In other words, a two-character string has length 2,
and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a
number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to make
use of this new function.
*/

function countB(str) {
    let counter = 0;
    for(i = 0; i < str.length; i++) {
        if(str[i] == 'B'){
            counter += 1;
        }
    }  return counter;
}

function countChar(str, char) {
    let counter = 0;
    for(i = 0; i < str.length; i++) {
        if(str[i] == char){
            counter += 1;
        }
    }  return counter;
}

function countB(str) {
    return countChar(str, 'B');
}

// Solution
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}
