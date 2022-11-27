function hello(x){
    const a = "varA";
    const b = "varB";

    return function(){
        console.log(a, b, x);
    }
}
const ans = hello("arg");
ans();
// here in local memory of hello function we have actual value of 
// a and b 
// now when in function execution context of function return function
// it do namt have a b x so it will search in its lexical
// enviornment and while returning it will take all values ie.
// a, b, x this is called closures