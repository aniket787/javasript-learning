// default parameters

// function addTwo(a, b){
//     return a + b;
// }

// const ans = addTwo(4);
// console.log(ans)
// here if we do not pass value of b we get NaN error
// so ovecome that we have

// function addTwo(a, b){
//     if(typeof b === "undefined"){
//         b = 0;
//     }
//     return a + b;
// }
// const ans = addTwo(4);
// console.log(ans);  // 4

// In simple words we can write it as

function addTwo(a, b=0) {
    return a + b;
}
const ans = addTwo(4);
console.log(ans);  // 4