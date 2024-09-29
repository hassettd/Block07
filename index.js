

// Created string for user using const and assigned it the name "text"
const text= "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "
console.log(text)
// First variable of combination, assigned name of numOne:
const numOne = 9 + 1;
console.log(numOne);
// Second variable of combination, assigned name of numTwo:
const numTwo = 49 - 9;
console.log(numTwo);
// Third variable of combination, assigned name of numThree:
const numThree = 13 * 3;
console.log(numThree);

// Created combo statement to tell user what the three numbers are of the combination using the results of the three equations above.
const combo = `The combination is ${numOne},${numTwo},${numThree}`;

// Created pop-up alert that combines the message and the combination numbers.
alert(text + combo);
