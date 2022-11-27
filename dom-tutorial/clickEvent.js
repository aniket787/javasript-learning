// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons)

// firstButton.addEventListener("click", function(){
//     console.log("You clicked");
// })



// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log("You clicked")
//     })
// }
// it will print You clicked on clicking any button






// // if we want particular info from that particular button   (Use this)
// for (let button of allButtons) {
//     button.addEventListener("click", function () {
//         console.log(this.textContent);
//     })
// }
// we cannot use arrow function here


// using for loop
// for(let i = 0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this)
//     })
// }

// using for each
// allButtons.forEach(function(button){
//     button.addEventListener("click", function () {
//         console.log(this.textContent);
// })
// })




// in arrow functions

const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget);
    })
}