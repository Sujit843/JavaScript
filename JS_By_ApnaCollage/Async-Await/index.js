//  2 keywords hote he  js ke under 
//  yeh asynchronous program ko simple banate he 
//  ham kisi  bhi normal function ko Async fun bana sakte he

async function hello(){
    console.log("hello world");
}

// Await ko ham agr kisi fun par apply kr rhe he 
// to wo sabhi ko waiting me dal dega jab tak wo fun execute na hojaye

function api(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData(){
    await api();
}

// ham kabhi bhi await ko async ke inside hi call kar sakte he


// # IIFE is fun.
// isko call karne ki need nhi he yeh jaha write hota he auomatic execute ho jata he

(fun)();  // IIFE fun().