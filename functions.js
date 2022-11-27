///////////////////////  FUNCTIONS  //////
// function wo hote hai jo apna kaam kr de 
// functions ko aise banana hai ki wo apna kaam kr de
// functions can be multiple 


// function singsong(){
//     console.log("happy birthday ");
// }
// signsong();  // calling a function


// function twoplusfour(){
//     console.log(2 + 4);
// }
// twoplusfour();


// ************************************

// function twoplusfour(){
//     return 2 + 4;
// }
// console.log(twoplusfour());  // 6
// const returnedvalue = twoplusfour();
// console.log(returnedvalue)

// **********************************************


// ******************************************************************
// ******************************************************************
// ********************************************************************

// function sumtwonumbers(num1, num2){ // parameter
//     return num1 + num2;
// }
// const returnedvalue = sumtwonumbers(2,7);  // argument(actual values)
// console.log(returnedvalue)


// function sumthreenumbers(num1, num2, num3) { // parameter
//     return num1 + num2 + num3;
// }
// const returnedvalue = sumthreenumbers(2, 7, 2);  // argument(actual values)
// console.log(returnedvalue)








// odd even fun

// function isEven(num){
//     if(num % 2 == 0){
//         return "even"
//     }
//     return "not even";


//     // return num % 2 === 0;

// }

// const ans = isEven(6);
// console.log(ans)















// ***********************************

// function firstchar(str){
//     return str[0];
// }

// const ans = firstchar("zxcv");
// console.log(ans)

/////////////////////////////////////////////////////////
// function that take whole array as a input and one number as a 
// find target in array

const array = [1,2,3,4,5,6,7,8,9];

function find(array, target){
    for(let i = 0; i < array.length; i++){
        if(target == array[i]){
            return i;
        }
    }
    return -1;
}
const ans = find(array, 8);

const arr = [1,2,4,5,6,7,8];



console.log(ans);