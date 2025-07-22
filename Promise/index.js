// Promise js ke under ak object hoti he 
// Iske 3 state hote he (Pendding,  fulfill, rejected)

let promise = new Promise((resolve, reject) => {
console,log("I am  promise");
reject("some error occured");
resolve("success")
});

// resolve and reject 2 handler hote he or automatically 
// java ke sath create hote he 

function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console,log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
}

let value = getPromise();
value.then((res) =>{
    console.log("promoise success", res);
});

let value2 = getPromise();
value2.catch((err) =>{
    console.log("rejected", err);
});

// Prommise ke 2 function hote he ( then and catch)


// # Promise Chaining

function asyncFun1(){
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{ 
            console,log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFun2(){
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{ 
            console,log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fecthing data1...");
asyncFun1().then((res) =>{
    console.log("fectching data2...");
    asyncFun2().then(() =>{});
})


