// this keyword inside event listner

const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", function(){
//     console.log("You Clicked Me !!");
//     console.log("value of this  ");
//     console.log(this);
// })

// here this is btn itself




btn.addEventListener("click",  () => {
    console.log("You Clicked Me !!");
    console.log("value of this  ");
    console.log(this);
})
// here in arrow function this will point to window object