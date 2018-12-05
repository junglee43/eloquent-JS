/* Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
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
