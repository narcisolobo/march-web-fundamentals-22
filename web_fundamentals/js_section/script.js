// the meaning of the this keyword changes due to context
// the caller is the this
console.dir(this);

/*
JavaScript Objects

Object IRL - Car

Characteristics:
Color
Number of doors
Make
Model

Things they can do:
Drive
Beep

Object in JS
Properties
Methods
*/


// key-value pairs separated by a comma
// Object literal notation
var myCar = {
  'color': 'red',
  'numDoors': 2,
  'make': "Jeep",
  'model': 'Wrangler',
  'drive': function () {
    console.log('Driving...')
  }
}

// Get and set values in an object
// Getting a value of a property using dot notation
console.log(myCar.color);

// Setting a value of a property using dot notation
myCar.color = "blue";
console.log(myCar.color);

// Calling a method of an object
myCar.drive();

// Primitive datatypes - strings, numbers, booleans, undefined, null
// References datatypes - arrays, objects

function changeBg(element1, element2){
  // console.log(element);
  element1.style.backgroundColor = 'blue';
  element2.style.backgroundColor = 'green';
}

// querySelector takes CSS-style selectors
var playground = document.querySelector('#playground');
console.log('THIS IS THE PLAYGROUND VAR', playground)

function changeBg2() {
  playground.style.backgroundColor = 'blue';
}