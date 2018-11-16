/* We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.
007 Cows
011 Chickens
*/

function farmInventory (cows, chickens) {
    let inputCows = String(cows);
    let inputChickens = String(chickens);

    while (inputCows.length < 3) {
        inputCows = '0' + inputCows;
    }

    while (inputChickens.length < 3) {
        inputChickens = '0' + inputChickens;
    }
    console.log(inputCows + ' cows');
    console.log(inputChickens + ' chickens');
};

farmInventory (12, 333);
farmInventory (1, 2);
