function myFunction(){
    console.log("my name is sujit");
    console.log("live in delhi");
}
myFunction();

/* 
function myFumction(msg){
cosole.log(msg);
}
myFunction(" i am sujit ");

*/

// create a funtion to sum of two number

function sum(a,b){
    console.log(a+b);
}
sum(2,6);

function mult(x,y){                  // function ke parameter apne block tak hi run krte he 
    m = x*y;                         // isiliye inko block scope bolte he {
                                     //     curly bracket tak                }
    console.log("before return");
    return m;                        // return ke bad koi code execute nhi hota he
    console.log("after return");     // isiliye return ke bad koi bhi code bhi nhi likhte  he 
}
let val = mult(6,8);
console.log(val);

// arrowFunction

const printHello = () =>{
    console.log("helo");
};

// Ques: create fun take th string and return the vowels in the string

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char==="a" || char==="i" || char==="o" || char==="u" || char==="e"){
            count++;
        }
    }
console.log(count);
}
countVowels("hello namaste");

// forEach function

let arr = ["pune", "mumbai", "delhi"];

arr.forEach( function cityVal(val) {
    console.log(val.toUpperCase());           // ques: higher order function kya hota he
});                                           //  ans-> aisa fun jo kisi function ko hi as a parameter le lete he



// Ques: print the square of the element using forEach loop

let arr2 = [1,2,3,4,5,6];

arr2.forEach((arr2) =>{
    console.log(arr2*arr2);
});


// Ques: filter out the student marks that scored 90+.

let marks = [87, 91, 90, 86,98];

marks.filter((marks) =>{
if(marks>90){
    console.log(marks);
}else{}
});

// Ques: calculate the sum of all aaray number

let num = [2, 3, 5, 7, 10];

let sum = num.reduce((res, curr) =>{
    return res + curr;
});
console.log(sum);


// Ques: take input from user n create array 

let n = promt("Enter a number");

let arr3 = []
for(let i = 1; i <=n; i++){
    arr3[i - 1] = i;
}
console.log(arr3);
