let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let counter = 0;
let result = 1;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

for (let number = 0; number <= 12; number += 2){
    console.log(number);
}

let resultFor = 1;
for (counter = 0; counter < 10; counter += 1){
    resultFor = resultFor * 2;
}
console.log(resultFor);
