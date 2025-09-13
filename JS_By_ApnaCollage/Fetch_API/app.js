const URL = "https://cat-fact.herokuapp.com/facts";
const paraFact = document.querySelector("#fact");

let promise = fetch(URL);
console.log(promise);

const getFacts = async () => {
    console.log("getting data...");
    let response = fetch(URL);
    console.log(response);     // JSON formate me data 


// jab api pas koi response bhejte he to wo JSON formate me data ata he 

// Ab hame JSON formate ko js object me convert krna padta he 
// is ke liye ham JSON() {JSON method} ka use karte he

// JSON method ak asynchronous method hota he

let data = (await response).json();
console.log(data);

}