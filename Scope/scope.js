/* Scope determine the accessibility(visibility) of the varibles
3 Types of scope are
1) Globle scope   : Varible that can be accesible anywhere in the script
2)Functional scope: Varible declared inside  the Function can accessible only with in the function
3)Block scope     : Varible declared inside {} using let or const can accessible only with in the block*/

//Ex:

const gVar="i am a Global Scope";

const testScope=()=>{
  
  let fVar="I am a functional Scope";
  
  console.log(gVar)//Accessible 
  if(true){
    let bVar="I am a Block Scope";

    console.log(fVar)//Accessible
  }
  console.log(bVar)//Not Accessible
}

console.log(fVar)//Not Accessible 
