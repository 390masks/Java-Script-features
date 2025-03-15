/*Hoisting is the feature of java Script 
Hoisting moves function and varible declaration to the top of their
scope before code exwcution*/
// Example 1: Hoisting with var
console.log(a); // undefined (Hoisted but not initialized)
var a = 10;
console.log(a); // 10

// Example 2: Hoisting with let and const
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // 30

// Example 3: Hoisting with functions
hoistedFunction(); // Works! Outputs: "I am hoisted!"

function hoistedFunction() {
    console.log("I am hoisted!");
}

// Example 4: Hoisting with function expressions
// notHoistedFunction(); // TypeError: notHoistedFunction is not a function
var notHoistedFunction = function () {
    console.log("I am NOT hoisted!");
};
notHoistedFunction();
