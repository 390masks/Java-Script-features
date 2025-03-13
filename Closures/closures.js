/* Closures :
 Closures are a powerfull feature of Java Script, Closures allows fuction to retain access to their 
parent scope's varibles
making the highly useful in data hiding,state management and asynchronous programming */

//EX

function outer(){
  let count=0;
  return function inner(){
    count ++
    console.log(count);
  }
}

const counter=outer();
function outer(){
    let count=0;
    return  function inner(){
      count ++
      console.log(count);
    }
    
  }
  
  const counter=outer();
  counter()
  counter()
  counter()
  counter()
