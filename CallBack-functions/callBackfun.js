/* Call back fuctions is a function that is passed as an argument to another function and exicuted later,
call back functions are commonly used in JavaScript for handling asynchronous opreations,event handling,
and higher-order functions*/

//Ex
function greet(name,callback){
  console.log("hello, "+ name);
  callback();
}
function sayGoodbye(){
  console.log("Goodbye!");
}

greet("Abhinav",sayGoodbye);
