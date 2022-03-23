/* 

Conditionals - what are they even?
Conditionals allow us to make choices and control the flow of our code.

We control this by using boolean expressions. They should evaluate to true or false.

*/

var age = 15;

if (age >= 18) {
  console.log("Go see Deadpool.");
}

else if (age >= 16) {
  console.log("Try to sneak in.")
}

else {
  console.log("You're too young.");
}

/*

Week 1 Day 3 - Always isSunny
Today, let's learn about conditionals! Remember to "T-diagram" to track our variables as we go so we can predict what the outcome will be.

Always isSunny

*/

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// string concatenation - adding two strings together

if (isSunny) {
  // whatToBring = whatToBring + "sunglasses, ";
  whatToBring += "sunglasses, ";
}
if (temperature < 50) {
  whatToBring += "a coat, ";
}
if (isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);
// I should bring: sunglasses, a coat, and a smile!

// What is node?
// It is a runtime environment.
// REPL - Run Evaluate Print Loop

// Prepare for downcount
for (var i = 10; i > 0; i--) {
  if (i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}

console.log("liftoff!");
// Prediction: 10, 9, 8, 7, 6, 5, 4, 3, ignition, 1, liftoff!

// boolean operators
// == is equal to
// != is not equal to
// > is greater than
// >= is greater than or equal to
// < is less than
// <= is less than or equal to


// Count positives
var countPositives = 0;
// an array!
var numbers = [3, 4, -2, 7, 16, -8, 0];

for(var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    countPositives++
  }
}

console.log("there are " + countPositives + " positive values");
