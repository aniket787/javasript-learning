'use strict';

// const solve = (input) => {
//     let res;
//     if (input < 100) {
//         res = 100;
//     }
//     else if (input > 100 && input < 500) {
//         res = input * 1.5;
//     }
//     else if (input >= 500) {
//         res = input * 2;
//     }

//     const diff = (res - input);
//     return [res, diff];
// }

// console.log(solve(50));
// console.log(solve(101));
// console.log(solve(501));


// *********************************

const values = [16, 7, 55];

const solve = function(array){
    let ans;
    const max = array.reduce((a, b) => {
        return Math.max(a, b);
    });

    if(max < 10){
        ans = 'poor';
    }
    else if(max < 100){
        ans = 'Fair';
    }
    else {
        ans = 'Good';
    }

    return ans;
}
console.log(solve(values));