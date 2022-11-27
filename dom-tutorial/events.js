// Events

// click
// btn press
// mouse hover




// there are 3 ways to add event
//  1)  onclick="console.log('Clicked')"

//2)

// const btn = document.querySelector(".btn-headline");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("You clicked me");
// }





// 3))
// -- method - Add event listner

const btn = document.querySelector(".btn-headline");

// function clickMe(){
//     console.log("You clicked")
// }

// btn.addEventListener("click",clickMe );


// can be writted as

// btn.addEventListener("click", function(){
//     console.log("You clicked !!!!!!!!")
// })

// by arow function

btn.addEventListener("click", ()=>{
    console.log("Arrow Function")
})