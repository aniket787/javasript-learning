

// *****/
// Function can return function
// eg
// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }
// const ans = outerFunction(); // here in ans variable there is whole 
// // function so now we can treat ans as a function
// console.log(ans);
// ans(); // when we call ans as a function it will print
// // hello world






function printFullName(firstName, lastName) {
    function printname() {
        console.log(firstName, lastName);
    }
    return printname;
}
const ans = printFullName("Aniket", "Gaikwad"); 
// console.log(ans);
ans(); 

// here in function printFullName 's memery we have firstName;"Aniket"
// and lastName : "Gaikwad" 
// but in fnction printName 's local memory we don' have exact
// value of firstname and lastName
// so at time of returning of function printName it will
// take firstName and lastName with it becuase it know there will
// be need of that parameters, this is called closures