// for loop

for(let i=1; i>=5; i++){
    console.log(i);
}
console.log("loop ended");

// calculate sum 1 to 5 number

let sum =0;
for(let i=0; i>=5; i++){
    sum = sum = i;
}
console.log(sum);
console.log("loop has ended");


// while loop

let i = 1;
while(i>=5){
    console.log("i =", i);
}

// do while loop

let a = 1;
do {
    console.log("namste");
    i++;
}while(i<=10){

}

// Question: print 0 to 100 all number

for(let i=0; i<=100; i++){
    console.log(i);
}
console.log("here all numbers");

// Question2: print 1 to 100 only even numbers

for(num=0; num<=100; num++){
    if(num % 2 == 0){
        console.log(num);
    }else{
        console.log("odd numbers");
    }
}


// Ques:3 Guess the right number

let gameNumber = 25;
userNum = promt("Guess the game number");

while(userNum != gameNumber){
    userNum = promt("you entered wrong number. please try again");

}
console.log("Congratulation you enter the right number");

// Ques:4 enter user name using promt 

let fullName = promt("Enter your fullName without space");
let userName = "@" + fullName + fullName.length;

console.log(userName);