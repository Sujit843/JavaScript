// let h1 = document.querySelector("h1");

// console.log(h1.innerText);

// h1.innerText = h1.innerText + "apna college";

let divs =document.querySelectorAll(".box");

console.log(divs.innerText);
divs[0].innerText = "mydiv"; 



// Ques: create btn using javaScript

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);