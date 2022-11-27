// Arrays - odered collections of items
// array is object

// let fruits = ["mango", "apple", "grapes"];

// let numbers = [1, 2, 3, 4];

// let mixed = ["Aniket", 22, 50.60, null];

// console.log(fruits)
// console.log(numbers)
// console.log(mixed)

//******************************************************************************** */
// change array is mutable so it get changed from original array
// let fruits = ["mango", "apple", "grapes"];

// fruits[1] = "banana";
// console.log(fruits);







// let fruits = ["mango", "apple", "grapes"];

// console.log(typeof fruits )







// ********************************************************************

// array push pop && shift unshift  
// push and pop are faster than shift and unshift



// let fruits = ["mango", "apple", "grapes"];
// console.log(fruits)

// push - it changes original array because arrays are mutable
// fruits.push("banana");
// console.log(fruits);


// pop
// let popedfruit = fruits.pop();
// console.log(fruits)
// console.log(popedfruit)


// unshift - add in starting

// fruits.unshift("bananananan");
// console.log(fruits);

// shift -- remove from starting
// fruits.shift();
// console.log(fruits);




// ********************************************************
// clone of array(making copy of array)

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];  // method 1 (not used)



// let array2 = array1.slice(0);    // method 2 (better)
// let array2 = array1.slice(0).concat(["ani", " gai "]) // for adding more elements



// let array2 = [].concat(array1);    // method 3



// using spread operator  // method 4
// let array2 = [...array1]; // mostly used in react
// let array2 = [...array1, "item 4", "item 5"]; // adding more items in array2


// let oneMoreArray = ["cars", "bikes"];
// let array2 = [...array1, ...oneMoreArray];




// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// *****************************************************
// use const for creating array

// we are not changing adress of apple and mango
// const fruits = ["apple", "mango"]; // main array is store in heap memory
// fruits.push("banana");
// console.log(fruits);

// fruits = ["grapes"] // cannot do this because of const

// ************************************************************




// Array destructing  


// const myArray = ["value1", "value2", "value3"];

// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myVar1", myVar1)
// console.log("value of myVar2", myVar2)


// shortcut of doing this

// let [myVar1, myVar2] = myArray;
// myVar1 = "value changed"
// console.log("value of myVar1", myVar1)
// console.log("value of myVar2", myVar2)

//***** */ in case there is only one element in array so it gives undefined
// const myArray = ["value1"];
// let [myVar1, myVar2] = myArray;
// myVar1 = "value changed"
// console.log("value of myVar1", myVar1)
// console.log("value of myVar2", myVar2)
// Output - value of myVar1 value changed
//          value of myVar2 undefined
















