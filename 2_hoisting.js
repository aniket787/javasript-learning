// console.log(firstName);
// console.log(lastName);


// var firstName = "Aniket";
// var lastName = "Gaikwad";

// var fullName = console.log(firstName +" "+ lastName);

// here line 1 and 2 will give undefined error because code is not 
// executed , first Global Execution Context (GEC) is created 
// and in this creating phase this variable are created in memory
// and at that time they has undefined value.


// ********** What is hoisting -> Variables are stored in memory
// even before execution of code


// but function is executed without any error
// myFunc() // function is been called before actual declaration

// function myFunc(){
//     console.log("Inside the function");
// }






// /////////////////////For function expression
// console.log(myFunction); // undefined , because function is treated as variables

// var myFunction = function(){
//     console.log("Inside Function")
// }
// console.log(myFunction); // here we will get proper output








////////// Are let and const hoisted  ? //////////////
// Yes they are hoisted

// console.log(firstName); 
// // uninitialized - Uncaught ReferenceError:
// //  Cannot access 'firstName' before initialization


// let firstName = "Aniket";
// console.log(firstName); // Aniket


//////// in let
// console.log(firstName);
// const firstName = "Aniket";
// console.log(firstName);




/////////  **** TDZ - Temporal Dead Zone
// at first before inilization our variables are uninilisilazed
// so this uninitialized period is called TDZ