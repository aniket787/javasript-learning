// Rest Parameters

// function myFunc(a, b, c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myFunc(3, 4, 5, 6, 7, 8, 9)
// here we will get output for only first 3 numbers 



// but if we want to put all remaining numbers in a singlle c then
// put ...c

function myFunc(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc(3, 4, 5, 6, 7, 8, 9)
