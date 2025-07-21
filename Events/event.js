/* let btn1 = document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("btn1 was cliked ");
    let a = 25;
    a++;
    console.log(a);
}


//Event listener

btn1.addEventListener("click", () => {
    console.log("buttno was clicked");
}); 

let handler2 = btn1.addEventListener("click", () => {
    console.log("buttno was clicked-handler2");
}); 

btn1.removeEventListener("click", handler2)   */

// Ques: create toggle button

let modeBtn = document.querySelector("#mode");
let currMode = "light";

mode.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        alert("welcome to dark mode");
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        
    }
    console.log(currMode);
});

