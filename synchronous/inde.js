// asynchronous

console.log("one");
console.log("two");
console.log("three");

/*  synchronous means program execute line by line 

output: one 
        two
        three
        
        like this */

// Asynchronous

console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
},4000);  // timeout

console.log("three");
console.log("four");


// CallBack

function sum(a ,b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum);


function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

// Callback Hell 
getData(1, () => {
    console.log("getting data2....");
    getData(2, () => {
        console.log("getting data3....");
        getData(3, () =>{

        });
    });
});


// jab Callback ko deepar nested me use karte he to Callback Hell ka issue aata he 
// callback Hell is the problem ye code samjhna difficult he
// isko solve krne ke liya ata he #Promises