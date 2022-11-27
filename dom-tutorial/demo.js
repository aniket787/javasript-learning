// function x(){
//     var num = 16;

//     function y(){
//         console.log(num);
//     }
//     return y;
    
// }


// const value = x();
// value();

function add(x){
    return function (y){
        return x + y;
    }
}

const add5 = add(5);
const add10 = add(10);

console.log(add5(4))
console.log(add10(4))