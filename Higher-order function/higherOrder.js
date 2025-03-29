//  A higher-order function in JavaScript is a function that:

//  Takes another function as an argument, or

//  Returns a function as its result.

// Higher-order function: map()
const numbers = [1, 2, 3, 4, 5];

// map() takes a callback function as an argument
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
