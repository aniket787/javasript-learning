// spread operator ***************************************

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // const newArray = [...array1, ...array2];
// // console.log(newArray); // output - [1, 2, 3, 4, 5, 6]

// // And if 
// const newArray = [...array1, array2]
// console.log(newArray); //. output - [1, 2, 3, Array(3)]
// // here element of array1 will be seperated but array2 will be 4th elem in newArray



// 0: 1
// 1: 2
// 2: 3
// Array(3)
//    0: 4
//    1: 5
//    2: 6

// *********************************************************

// const newArray = [..."123456789"];

// console.log(newArray); // - ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// here only string can be spreaded not numbers eg - 12345

// **************************************************************
//  ************* spread operator on objects ****************

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
//     // key1 : "value34" // in output key1 - value34
// };

// const obj2 = {
//     key1: "value12346",
//     key3: "value3",
//     key4 : "value4"
// }


// // const newObj = {...obj1, ...obj2};
// // console.log(newObj)
// // obj2 wali key1 show karegi because wo baaad mai call hui hai
// // but if 

// const newObj = { ...obj2, ...obj1 };
// console.log(newObj)
// // here key1 will be value1 
// *************************************************************






// const newObj = {..."abc"};
// console.log(newObj); // {0: 'a', 1: 'b', 2: 'c'}