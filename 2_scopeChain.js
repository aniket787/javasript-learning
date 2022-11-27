const lastName = "Gaikwad";

const printName = function () {
    const firstName = "Aniket";

    function myFunction() {
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();

    

}
printName()
// here when myFunction() gets executed at that time it does not
// contain firstName so this function search firstName in its
// lexical enviornment i.e in function printName