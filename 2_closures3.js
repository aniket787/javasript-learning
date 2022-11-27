// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// const square = myFunction(2)
// const ans = square(3);
// console.log(ans)



// above code can be return in arrow function as -
const myFunction = (power) =>   (number) => number ** power;

const square = myFunction(2)
const ans = square(3);
console.log(ans)