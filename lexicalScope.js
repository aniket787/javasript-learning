// Lexical Scope

function app() {
    const myVar = "value-1";

    function myFunc() {
        const myVar = "69"
        console.log("Inside Function", myVar);
    }
    console.log(myVar);
    myFunc();

    

}
app()

// Now here we have two functions so function - myFunc() is inside of function - app so for myFunc() lexical enviornment is app() functio
// for value of myVar first js will look in inside function ie myFunc if dident get then js will look in lexical enviornment
